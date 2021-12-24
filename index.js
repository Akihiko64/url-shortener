const app = require('./src/api/server');
const connectDB = require('./db/db');
require('dotenv/config');

connectDB();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server start, listen PORT ${PORT}`));