/*
* Title: Sample Handler
* Description: Sample Handler
* Author: Juhan Ahamed
* Date: 03/05/2021
*/

// module scaffolding
const handler = {}

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties)
    
    callback(200, {
        message: 'This is a sample url'
    })
}

module.exports = handler