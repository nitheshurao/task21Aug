import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/Users.js'; 
import { jwtSecret } from '../config/config.js'; 
export const register = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).send('Username and password required');

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
};

// Login user
export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('Cannot find user');

    try {
        if (await bcrypt.compare(password, user.password)) {
            const accessToken = jwt.sign({ username: user.username }, jwtSecret, { expiresIn: '15m' });
            res.json({ accessToken });
        } else {
            res.send('Not Allowed');
        }
    } catch {
        res.status(500).send('Internal Server Error');
    }
};
