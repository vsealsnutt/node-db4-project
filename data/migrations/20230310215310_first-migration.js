/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name').notNullable().unique()
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id')
            table.string('ingredient_name').notNullable().unique()
            table.string('ingredient_unit')
        })
        .createTable('steps', table => {
            table.increments()
        })
        .createTable('step_ingredients', table => {
            table.increments()
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')  
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')  
};
