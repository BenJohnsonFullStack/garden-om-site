const knex = require("knex");
const configs = require("./knexfile.js");
const environment = process.env.NODE_ENV || "development";

console.log(environment);

module.exports = knex(configs[environment]);
