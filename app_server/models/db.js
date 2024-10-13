const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://rahul:12345@cluster0.zo4qg.mongodb.net/ecommerce';
//const dbURI = 'mongodb+srv://nanibabunalli:123456au@cluster0.yzl5k.mongodb.net/Loc8r';

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect("mongodb://127.0.0.1:27017/startup", { useNewUrlParser: true, useUnifiedTopology: true });
//const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};
require('./locations');

// // For nodemon restarts
// process.once('SIGUSR2', () => {
//   gracefulShutdown('nodemon restart', () => {
//     process.kill(process.pid, 'SIGUSR2');
//   });
// });

// // For app termination
// process.on('SIGINT', () => {
//   gracefulShutdown('app termination', () => {
//     process.exit(0);
//   });
// });
