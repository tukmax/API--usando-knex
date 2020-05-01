// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '192.168.99.100',
      database: 'knex',
      user:     'postgres',
      password: 'docker'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/dbs/migrations'
    },
    seeds:{
      directory: './src/dbs/seeds'
    }
  },
    
  

};
