module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", "cluster0.ujxsunp.mongodb.net"),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "historydb"),
        username: env("DATABASE_USERNAME", "argedikas"),
        password: env("DATABASE_PASSWORD", "m4nPqEsfluRnGq7I"),
      },
      options: {},
    },
  },
});
