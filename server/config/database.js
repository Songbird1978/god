const path = require("path");

module.exports = ({ env }) => {
    const client = env("DATABASE_CLIENT", "sqlite");

    const connections = {
        sqlite: {
            connection: {
                filename: "/data/data.db",
            },
            useNullAsDefault: true,
        },
    };

    return {
        connection: {
            client,
            ...connections[client],
            acquireConnectionTimeout: 60000,
        },
    };
};
