'use strict';

require('dotenv').config();

module.exports = {
    mongo: {
        url: process.env.MONGO_URL,
        db: 'tema2',
        collections: {
            'users': 'users',
            'devices': 'devices'
        }
    }
};