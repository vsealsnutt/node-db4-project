const recipes = [
    { recipe_name: 'Spaghetti Bolognese' },
    { recipe_name: `Bucatini all'Amatriciana` }
]

const ingredients = [
    { ingredient_name: 'spaghetti', ingredient_unit: 'lbs' },
    { ingredient_name: 'beef', ingredient_unit: 'lbs' },
    { ingredient_name: 'tomatoes', ingredient_unit: 'oz' },
    { ingredient_name: 'bucatini', ingredient_unit: 'lbs' }
]

const steps = [
    //Spaghetti Bolognese
    { step_text: 'Boil spaghetti noodles', step_number: 1, recipe_id: 1 },
    { step_text: 'Cook ground beef', step_number: 2, recipe_id: 1 },
    { step_text: 'Cook tomatoes in pan with beef', step_number: 3, recipe_id: 1 },
    { step_text: 'Add cooked pasta and mix', step_number: 4, recipe_id: 1 },
    //Bucatini all'Amatriciana
    { step_text: 'Boil bucatini', step_number: 1, recipe_id: 2 },
    { step_text: 'Cook meat', step_number: 2, recipe_id: 2 },
    { step_text: 'Mix in tomatoes and pasta', step_number: 3, recipe_id: 2 }
]

const step_ingredients = [
    //Spaghetti Bolognese
    { step_id: 1, ingredient_id: 1, quantity: 1 },
    { step_id: 2, ingredient_id: 2, quantity: 1.5 },
    { step_id: 3, ingredient_id: 3, quantity: 8 },
    //Bucatini all'Amatriciana
    { step_id: 1, ingredient_id: 4, quantity: 1 },
    { step_id: 2, ingredient_id: 2, quantity: 1.5 },
    { step_id: 3, ingredient_id: 3, quantity: 8 }
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('setp_ingredients').insert(step_ingredients)
}