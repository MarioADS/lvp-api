const dotenv = require('dotenv');
const app = require('./src/app');

dotenv.config();

const APP_PORT  = process.env.APP_PORT || 3030;
app.listen( APP_PORT, () => console.info(`SERVER STARTED ON PORT: ${ APP_PORT }`) );
