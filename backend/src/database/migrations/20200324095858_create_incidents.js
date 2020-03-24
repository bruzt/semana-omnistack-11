
exports.up = function(knex) {
  
    return knex.schema.createTable('incidents', (table) => {

        table.increments('id').primary();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');

        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('incidents');
};

