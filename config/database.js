  // strapi-api/config/database.js
  module.exports = ({ env }) => ({
    connection: {
      client: env('DATABASE_CLIENT','postgres'),
      connection: {
        host: env('DATABASE_HOST', 'strapiDB'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi-project'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD',"test123")
      },
      debug: false,
    },
  });

