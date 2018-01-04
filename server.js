'use strict';

const express = require('express');
const bodyParser = require('body-parser');
// ... other stuff

const { DATABASE, PORT } = require('./config');
const knex = require('knex')(DATABASE);

const app = express();
const jsonParser = bodyParser.json();

app.get('/restaurants', (req, res) => {
    knex.select('id', 'name', 'cuisine', 'borough')
        .from('restaurants')
        .limit(10)
        .then(results => res.json(results));
});

app.get('/restaurants/:id', (req, res) => {
    // Add query and response here...
    knex.first('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id', 'grade', 'date as inspectionDate', 'score')
        .select(knex.raw('CONCAT(address_building_number, \' \', address_street, \' \', address_zipcode ) as address'))
        .from('restaurants')
        .where('restaurants.id', req.params.id)
        .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
        .orderBy('date', 'desc')
        .then(results => res.json(results));
});
// ADD ANSWERS HERE
app.post('/restaurant', jsonParser, (req, res) => {
    res.status(200);
    res.location('https://google.com');
});


app.listen(PORT, function () {
    console.log('Im listening!');
});
