import 'dotenv/config';

export const jwtSecret = process.env.ACCESS_TOKEN_SECRET || 'your-secret-key';
