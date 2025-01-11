const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5020;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
