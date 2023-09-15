// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const DB = process.env.DB;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: DB,
      user: DB_USER,
      password: DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
