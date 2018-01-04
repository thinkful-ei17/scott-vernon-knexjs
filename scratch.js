'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console before each run
process.stdout.write('\x1Bc');

knex
    .select()
    // .select('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id as gradeId', 'grade', 'score')
    .from('restaurants')
    .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
    .orderBy('date', 'desc')
    .limit(10)
    .then(function(results){
        console.log(results);
        const hydrated = {};
        results.forEach(result => {
            console.log('the result.grade =', result.grade);
            console.log('the result.id =', result.id);
            console.log('the gradeId was =', result.gradeId);
            console.log('the score =', result.score);
            if( !(result.id in hydrated)) {
                hydrated[result.id] = {            
                    name: result.name,
                    id: result.id,
                    cuisine: result.cuisine,
                    borough: result.borough,
                    grades: []
                };
            }
            hydrated[result.id].grades.push({1: 'a'});
            // gradeID: 1,
            // grade: result.grade,
            // score: result.score
            
        });
        console.log(hydrated);
    });

// knex.select('id', 'name', 'age', 'pets.name as petName', 'pets.type as petType')
// .from('people')
// .innerJoin('pets', 'people.id', 'pets.people_id')    
// // .then(results => res.json(results));
// const hydrated = {};
// restaurants.forEach(row => {
//     if ( !(row.id in hydrated) ) {
//         hydrated[row.id] = {
//             id: row.id,
//             name: row.name,
//             age: row.age,
//             pets: []
//         }
//     }
//     hydrated[row.id].pets.push({
//         name: row.petName,
//         type: row.petType,
//     });
// });
// console.log(hydrated);


knex.destroy().then(() => {
    console.log('database connection closed');
});