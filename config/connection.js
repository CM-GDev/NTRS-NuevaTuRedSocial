//unpacking "connect" and "connection" from mongoose
const { connect, connection } = require('mongoose');

// Using environment variable when it exists. Otherwise use locally stored DB
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/ntrsDB';

connect(connectionString, {//Mongoose 6 always behaves as if useNewUrl... and useUnified... are true
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// exporting connection
module.exports = connection;
