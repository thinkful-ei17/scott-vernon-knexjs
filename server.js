'use strict';

const express = require('express');

const { DATABASE, PORT } = require('./config');
const knex = require('knex')(DATABASE);

const app = express();

app.get('/restaurants', (req, res) => {
    knex.first('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id', 'grade', 'date as inspectionDate', 'score')
        .select(knex.raw('CONCAT(address_building_number, \' \', address_street, \' \', address_zipcode ) as address'))
        .from('restaurants')
        .where('restaurants.id', 1)
        .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')    
        .orderBy('date', 'desc')
        .then(results => res.json(results));
});

app.listen(PORT);