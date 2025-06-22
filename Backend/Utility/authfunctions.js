const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connect_db = require('../db_connection/db_con');

const JWT_SECRET = 'your_secret_key'; 

let db;
connect_db().then(database => {
    db = database;
    console.log('Database instance is ready');
}).catch(err => {
    console.error('Error connecting to DB:', err);
});

const hashPassword = async (plainPassword) => {
    return await bcrypt.hash(plainPassword, 10);
};


const verifyPassword = async (plainPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (err) {
        console.error('Error comparing passwords:', err);
        return false;
    }
};


const generateToken = (user) => {
    return jwt.sign(
        { userid: user.userid, username: user.username },
        JWT_SECRET,
        { expiresIn: '1h' }
    );
};


const insertalldata = () => {
    return async function (req, res) {
        try {
            const { userid, username, password, email } = req.body;

            const existingUser = await db.get('SELECT * FROM users WHERE userid = ?', [userid]);
            if (existingUser) {
                return res.status(409).json({ message: "User ID already exists" });
            }

            const hashedPassword = await hashPassword(password);

            await db.run(
                `INSERT INTO users (userid, username, password, email) VALUES (?, ?, ?, ?)`,
                [userid, username, hashedPassword, email]
            );

            const token = generateToken({ userid, username });

            res.status(201).json({
                message: 'User registered successfully',
                token,
                user: { userid, username, email }
            });

        } catch (err) {
            console.error('Error in insertalldata:', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };
};


const postalldata = () => {
    return async function (req, res) {
        try {
            const { userid, password } = req.body;

            const user = await db.get('SELECT * FROM users WHERE userid = ?', [userid]);

            if (!user) {
                return res.status(401).json({ message: "Invalid credentials!" });
            }

            const isMatch = await verifyPassword(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Invalid credentials!" });
            }

            const token = generateToken(user);

            res.status(200).json({
                message: 'Login successful',
                token,
                user: {
                    userid: user.userid,
                    username: user.username,
                    email: user.email
                }
            });

        } catch (err) {
            console.error('Error in postalldata:', err);
            res.status(500).json({ message: 'Server error' });
        }
    };
};


const patchalldata = () => {
    return async function (req, res) {
        try {
            const { userid, password } = req.body;

            const user = await db.get(`SELECT * FROM users WHERE userid = ?`, [userid]);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const hashedPassword = await hashPassword(password);
            await db.run(`UPDATE users SET password = ? WHERE userid = ?`, [hashedPassword, userid]);

            const token = generateToken(user);

            res.status(200).json({
                message: 'Password updated successfully',
                token
            });

        } catch (err) {
            console.error('Error in patchalldata:', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };
};

module.exports = {
    insertalldata,
    postalldata,
    patchalldata
};
