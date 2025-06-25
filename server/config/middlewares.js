module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'https://god-sage.vercel.app',
        'https://garyodandthedsh.com',
        'https://www.garyodandthedsh.com'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true,
    },
  },
};
