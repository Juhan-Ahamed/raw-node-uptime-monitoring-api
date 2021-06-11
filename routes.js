/*
* Title: Routes
* Description: Application Routes
* Author: Juhan Ahamed
* Date: 03/05/2021
*/

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandlers')
const { userHandler } = require('./handlers/routeHandlers/userHandler')
const { tokenHandler } = require('./handlers/routeHandlers/tokenHandler')
const { checkHandler } = require('./handlers/routeHandlers/checkHandler')

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
    check: checkHandler
}

module.exports = routes