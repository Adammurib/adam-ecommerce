const db = require('../config/db');

/**
 * Auth Service
 * Handles the direct database interactions
 */
class AuthService {
    async findUserByEmail(email) {
        const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
        return rows[0];
    }

    async validateUser(email, password) {
        const [rows] = await db.execute(
            "SELECT * FROM users WHERE email = ? AND password = ?", 
            [email, password]
        );
        return rows.length > 0;
    }
}

module.exports = new AuthService();