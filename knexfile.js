// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const pg = require("pg");

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};

module.exports = {
  development: {
    client: "pg",
    connection: devConfig,
    migrations: {
      directory: "./data/migrations",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations",
    },
    pool: {
      min: 0,
      max: 10,
    },
  },
};
