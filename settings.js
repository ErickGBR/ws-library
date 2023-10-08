require('dotenv').config();
module.exports = {
    port_server: process.env.PORT || 80,
    port_ws: process.env.WS_PORT || 8085,
    base_url: process.env.CLIENT_BASE_URL || 'localhost',
}