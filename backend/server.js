const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/auth.routes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Professional Server running on port ${PORT}`));