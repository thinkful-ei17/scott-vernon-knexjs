const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

var Treeize   = require('treeize');
var hydrator = new Treeize();

knex.select('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id as gradeId', 'grade', 'score')
    .from('restaurants')
    .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
    .orderBy('date', 'desc')
    .limit(10)
    .then((results) => {

        console.log(results);
        hydrator.grow(results);
        console.log('-------------------');
        console.log(hydrator.getData());
    });
knex.destroy().then(() => {
    console.log('database connection closed!');
});
