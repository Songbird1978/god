module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000", "https://god-sage.vercel.app", "https://garyodandthedsh.com", "https://www.garyodandthedsh.com"], // Allow both local dev and Vercel  "https://god-sage.vercel.app"
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization"],
      credentials: true, // Allow cookies and authentication headers
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
