const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => ({
  if(env('NODE_EN') == 'production') {
  const config = parse(process.env.DATABASE_URL);
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: config.host,
          port: config.port,
          database: config.database,
          username: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: false,
          },
        },
        options: {
          ssl: true,
        },
      },
    },

  }
}


});
