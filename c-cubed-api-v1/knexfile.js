module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'c-cubed',
      // user: process.env.DATABASE_USER,
      // password: 'password'
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
//   production: {
//     client: 'pg',
//     connection: {
//       database: 'c-cubed',
//     },
//     migrations: {
//       tableName: 'migrations',
//       directory: './db/migrations'
//     }
//   }
};


  //   staging: {
  //     client: 'postgresql',
  //     connection: {
  //       database: 'my_db',
  //       user:     'username',
  //       password: 'password'
  //     },
  //     pool: {
  //       min: 2,
  //       max: 10
  //     },
  //     migrations: {
  //       tableName: 'knex_migrations'
  //     }
  //   },
