module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000",
        "https://garyodandthedsh.com",
        "https://www.garyodandthedsh.com",
        "https://god-sage.vercel.app"
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
        "X-Requested-With"
      ],
      credentials: true,
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
