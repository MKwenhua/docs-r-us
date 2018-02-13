const redis = require('redis');
const {
  REDIS_PORT,
  REDIS_ENDPOINT,
  LOCAL_DEV
} = process.env;
const client = LOCAL_DEV ? redis.createClient() : redis.createClient(REDIS_PORT, REDIS_ENDPOINT);

client.on('connect', () => console.log('Connected to Redis'));

if (process.env.HEROKU) {
  client.flushdb((err, succeeded) => console.log(succeeded));
}

module.exports = client;
