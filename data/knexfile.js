// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, // heroku postrgeSQL
};

module.exports = {
  development: {
    client: "pg",
    connection: devConfig,
    migrations: {
      directory: "./migrations",
    },
  },

  production: {
    client: "pg",
    connection: proConfig,
    migrations: {
      directory: "./migrations",
    },
  },
};
