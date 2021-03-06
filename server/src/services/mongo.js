const mongoose = require('mongoose');

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_NAME,
  MONGODB_PORT,
  MONGODB_HOST,
} = process.env;

const MONGO_URL = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}?authSource=admin`;
mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(
    process.env.NODE_ENV === 'test' ? global.__DB_URL__ : MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
