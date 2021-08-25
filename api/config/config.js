require("dotenv").config();

module.exports = {
  development: {
    database: "url-shortener",
    use_env_variable: "DATABASE_URL_DEV",
    dialect: "postgres",
  },
  test: {
    database: "shortUrl_test",
    use_env_variable: "DATABASE_URL_TEST",
    dialect: "postgres",
    logging: false,
  },
  production: {
    database: "url-shortener",
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl:true,
    },
  },
};