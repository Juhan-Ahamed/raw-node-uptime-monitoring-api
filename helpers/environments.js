/*
* Title: Environments
* Description: Handle all environment related things
* Author: Juhan Ahamed
* Date: 03/05/2021
*/

// module scaffolding
const environments = {}

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'lskjdflkdsjlsdkf',
    maxChecks: 5,
    twilio : {
        fromPhone: '+16319836014',
        accountSid: 'ACc51d0f93ad1d09839bf13de6294dcf58',
        authToken: 'fe6adf26274f763bb180356192aedcf2'
    }
}

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'lskdsdjdflkdsjdkf',
    maxChecks: 5,
    twilio : {
        fromPhone: '+16319836014',
        accountSid: 'ACc51d0f93ad1d09839bf13de6294dcf58',
        authToken: 'fe6adf26274f763bb180356192aedcf2'
    }
}

// determine which environment was passed
const currentEnvironment = typeof (process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging'

// export corresponding environment object
const environmentToExport = typeof (environments[currentEnvironment]) === 'object' ? environments[currentEnvironment] : environments.staging

// export module
module.exports = environmentToExport