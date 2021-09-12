const SECTION = {
  HOME: 'home',
  ABOUT: 'about',
  CONTACT: 'contact',
};

const FIELD_CONTACT = {
  NAME: 'name',
  EMAIL: 'email',
  PHONE: 'phone',
  COMPANY: 'company'
}

const STATUS = {
  OK: 200,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
  CONFLICT: 409
};

module.exports = {
  SECTION,
  FIELD_CONTACT,
  STATUS
};
