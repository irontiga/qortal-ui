const user = require('./default.config.js').user
module.exports = {
    node: 0,
    server: {
        primary: {
            port: '12388',
           /* address: '0.0.0.0' */
        },
        plugin: {
            port: '12389', // meh, why not keep it, who knows what kind of stuf$
            /* address: '0.0.0.0' */
        }
    }
}
