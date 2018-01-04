'use strict';

const DATABASE = process.env.DATABASE_URL || 'postgres://dev:dev@localhost:5432/dev-restaurants-app';

exports.DATABASE = {
    client: 'pg',
    connection: DATABASE,
    pool: {min: 0, max: 3},
    debug: true
};

exports.PORT = process.env.PORT || 8080;
