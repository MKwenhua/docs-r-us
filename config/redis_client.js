const redis = require('redis');
const {
  REDIS_PORT,
  REDIS_ENDPOINT,
  LOCAL_DEV
} = process.env;
const client = LOCAL_DEV ? redis.createClient() : redis.createClient(REDIS_PORT, REDIS_ENDPOINT);

client.on('connect', () => console.log('Connected to Redis'));

module.exports = client;
