const SECTION = {
  HOME: 'home',
  ABOUT: 'about',
  CONTACTS: 'contacts',
};

const COLORS = {
  GOLDEN_FUNDING: '#ffd934',
  WHITE: '#ffffff',
  BLACK: '#1b1b1b'
};

const FIELD_CONTACT = {
  NAME: 'name',
  EMAIL: 'email',
  PHONE: 'phone',
  COMPANY: 'company'
};

const STATUS = {
  OK: 200,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
  CONFLICT: 409
};

const MEDIA_QUERY = {
  VIEWPORT_MEDIUM: '@media only screen and (max-width: 960px)'
};

module.exports = {
  SECTION,
  FIELD_CONTACT,
  STATUS,
  COLORS,
  MEDIA_QUERY,
};
