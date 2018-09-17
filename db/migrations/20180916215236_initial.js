
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.uuid('id').defaultTo(knex.raw("uuid_generate_v4()")).notNullable().primary();
      table.string('username').unique();
      table.string('password');
      table.timestamps(true, true)
    }),

    knex.schema.createTable('files', table => {
      table.increments('id').primary();
      table.string('title');
      table.string('markdown');
      table.uuid('user_id').unsigned()
      table.foreign('user_id')
        .references('users.id')
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('files'),
    knex.schema.dropTable('users')
  ])
};
