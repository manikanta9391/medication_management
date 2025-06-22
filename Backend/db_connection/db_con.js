const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

// Use __dirname directly in CommonJS
const db_path = path.join(__dirname, 'databasetables.db');

async function connect_db() {
    try {
        const db = await open({
            filename: db_path,
            driver: sqlite3.Database
        });
        console.log('Connected to SQLite DB');
        return db;
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

module.exports = connect_db;
