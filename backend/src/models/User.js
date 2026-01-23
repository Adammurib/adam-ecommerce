/**
 * User Model
 * Defines the schema for the 'users' table in XAMPP MySQL
 */
const User = {
    tableName: 'users',
    fields: {
        id: 'INT AUTO_INCREMENT PRIMARY KEY',
        email: 'VARCHAR(255) NOT NULL UNIQUE',
        password: 'VARCHAR(255) NOT NULL',
        created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
    }
};

module.exports = User;