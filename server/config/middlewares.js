module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: "strapi::cors",
    config: {
      /**
       * Dynamically allow requests from specific origins
       */
      origin: (origin, ctx) => {
        const allowedOrigins = [
          "http://localhost:3000",
          "https://garyodandthedsh.com",
          "https://www.garyodandthedsh.com"
        ];

        const vercelPattern = /^https:\/\/.*\.vercel\.app$/;

        return (
          allowedOrigins.includes(origin) || vercelPattern.test(origin)
        );
      },
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
