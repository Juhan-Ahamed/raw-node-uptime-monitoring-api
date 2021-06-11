/*
* Title: Utilities
* Description: Important utility functions
* Author: Juhan Ahamed
* Date: 03/05/2021
*/

// dependencies
const crypto = require('crypto')
const environments = require('./environments')

// module scaffolding
const utilities = {}

// parse JSON string to object
utilities.parseJSON = (jsonString) => {
    let output

    try {
        output = JSON.parse(jsonString)
    } catch {
        output = {}
    }

    return output
}

// hash the string
utilities.hash = (str) => {
    if (typeof(str) === 'string' && str.length > 0) {
        let hash = crypto.createHmac("sha256", environments.secretKey)
        .update(str)
        .digest("hex")
        return hash
    } else {
        return false
    }
}

// create random string
utilities.createRandomString = (strlength) => {
    let length = strlength
    length = typeof(strlength) === 'number' && strlength > 0 ? strlength : false

    if(length) {
        let possiblecharacters = 'abcdefghijklmnopqrstuvwxyz1234567890'
        let output = ''
        for(let i = 1; i <= length; i+=1) {
            let randomChracter = possiblecharacters.charAt(Math.floor(Math.random() * possiblecharacters.length))
            output += randomChracter
        }
        return output
    } else {
        return false
    }
    
}

// export module
module.exports = utilities