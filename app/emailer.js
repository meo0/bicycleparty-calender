const nodemailer = require('nodemailer');
const { Resend } = require('resend');
const fsp = require('fs').promises;
const path = require('node:path');
const config = require("./config");
const dt = require("./util/dateTime");

// Choose transport: Resend HTTP API (production) or nodemailer (local dev)
const useResend = !!config.resendApiKey;
const resend = useResend ? new Resend(config.resendApiKey) : null;

// magically, config.smtp matches what nodemailer needs;
// i wonder how that happened....
// note: it uses a fake json if a proper SMTP_HOST variable isnt set.
const transporter = useResend ? null :
  nodemailer.createTransport(config.smtp || { jsonTransport: true });

// Convert a nodemailer-style address (string or {name, address}) to a plain email string
function toEmailString(addr) {
  if (!addr) return undefined;
  if (typeof addr === 'string') return addr;
  return addr.address;
}

module.exports = {
  // promise the hostname after trying to verify the smtp configuration;
  // or reject if smtp isnt in use
  initMail() {
    if (useResend) {
      return Promise.resolve("Resend API");
    }
    return !config.smtp ? // annoyingly, verify returns a promise for smtp and a boolean otherwise
          Promise.reject("smtp not configured.") :
          transporter.verify().then(_ => config.smtp.host || "???");
  },
  // returns a promise after sending the email and logging the trailing arguments
  // see https://nodemailer.com/message/
  sendMail(email, ...logArgs) {
    const sendPromise = useResend
      ? resend.emails.send({
          from: toEmailString(email.from),
          to: [toEmailString(email.to)],
          bcc: email.bcc ? [toEmailString(email.bcc)] : undefined,
          reply_to: toEmailString(email.replyTo),
          subject: email.subject,
          text: email.text,
          html: email.html,
        })
      : transporter.sendMail(email);

    return sendPromise.then(info => {
      const date = dt.getNow().toString();
      const logMessage = `Sent email ${date}:\n` + JSON.stringify(logArgs, null, " ");
      console.log(logMessage);
      return Promise.resolve(true);
    });
  }
};
