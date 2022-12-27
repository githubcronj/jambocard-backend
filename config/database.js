  // strapi-api/config/database.js
  module.exports = ({ env }) => ({
    connection: {
      client: env('DATABASE_CLIENT','postgres'),
      connection: {
        host: env('DATABASE_HOST', 'strapiDB'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_DATABASE', 'strapi-project'),
        user: env('DATABASE_USER', 'postgres'),
        password: env('DATABASE_PASSWORD',"test123")
      },
      debug: false,
    },
  });

