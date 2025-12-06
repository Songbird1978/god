module.exports = [
    "strapi::errors",
    "strapi::security",
    {
        name: "strapi::cors",
        config: {
            enabled: true,
            origin: [
                "http://localhost:3000",
                "https://god-6usq.onrender.com",
                "https://god-sage.vercel.app",
                "https://garyodandthedsh.com",
                "https://www.garyodandthedsh.com",
            ],
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            headers: ["Content-Type", "Authorization", "Origin", "Accept"],
            credentials: true,
        },
    },
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
