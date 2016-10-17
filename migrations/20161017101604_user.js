
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('email');
      table.string('password');
      table.text('token');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
