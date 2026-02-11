const SITE_TITLE = "Bicycle Party";

const API_VERSION = '3';

const API_BASE_URL = window.location.origin;
const API_EVENTS_URL = new URL('/api/events.php', API_BASE_URL);
const API_ICS_URL = new URL('/api/ics.php', API_BASE_URL);
const API_MANAGE_URL = new URL('/api/manage_event.php', API_BASE_URL);
const API_RETRIEVE_URL = new URL('/api/retrieve_event.php', API_BASE_URL);
const API_DELETE_URL = new URL('/api/delete_event.php', API_BASE_URL);

const API_HEADERS = {
  'Accept': 'application/json',
  'Api-Version': API_VERSION
};

const AREA = Object.freeze({
    'P' : 'つくば中心部',
    'V' : '筑波北部',
    'W' : '筑波西部',
    'E' : '筑波東部',
    'C' : '筑波南部',
});

const AUDIENCE = Object.freeze({
    'G' : '一般',
    'F' : '家族向け',
    'A' : '大人限定 (20歳以上)',
});

const AUDIENCE_DESCRIPTION = Object.freeze({
    'G' : '一般 — 大人向けですが子供も歓迎',
    'F' : '家族向け — 大人は子供を連れて参加',
    'A' : '大人限定 (20歳以上) — 大人のみ',
});

const RIDE_LENGTH = Object.freeze({
    '--'   : '--',
    '0-3'  : '0-5 km',
    '3-8'  : '5-13 km',
    '8-15' : '13-25 km',
    '15+'  : '25 km以上',
});

const DEFAULT_TIME = '17:00:00';
const DEFAULT_AREA = 'P';
const DEFAULT_AUDIENCE = 'G';
const DEFAULT_RIDE_LENGTH = '--';

// total number of days to fetch, inclusive of start and end dates;
// minimum of 1, maximum set by server
const DEFAULT_DAYS_TO_FETCH = 10;

