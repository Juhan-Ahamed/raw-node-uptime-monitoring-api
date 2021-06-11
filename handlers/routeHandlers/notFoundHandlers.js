/*
* Title: Not found Handler
* Description: 404 Not found Handler
* Author: Juhan Ahamed
* Date: 03/05/2021
*/

// module scaffolding
const handler = {}

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested url was not found!'
    })
}

module.exports = handler