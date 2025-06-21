module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('MY_APP_URL', 'https://god-6usq.onrender.com'), //  'http://localhost:1337' or'https://god-6usq.onrender.com'
});
