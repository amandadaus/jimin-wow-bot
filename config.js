const {TwitterApi} = require('twitter-api-v2');

const clientConfig = new TwitterApi({
    appKey: process.env.appKey,
    appSecret: process.env.appSecret,
    accessToken: process.env.accessToken,
    accessSecret: process.env.accessSecret,
});

module.exports = { clientConfig };