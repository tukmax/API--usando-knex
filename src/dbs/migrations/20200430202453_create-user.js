exports.up = knex =>  knex.schema.createTable('users', table => {  
    table.increments('id'),
    table.text('username').unique().notNullable(),
    table.text('password').notNullable(),
    table.text('email').unique().notNullable(),
    table.timestamps(true, true)
    })


exports.down = knex => knex.schema.dropTable('users');

