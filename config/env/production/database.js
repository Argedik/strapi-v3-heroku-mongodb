module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env("DATABASE_URL"),
        database: env("DATABASE_NAME"),
      },
      options: {
        ssl: true,
      },
    },
  },
});
