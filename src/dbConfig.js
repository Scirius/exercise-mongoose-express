const mongoose = require("mongoose");
//might be required to determine whether running on codesandbox.io or locally
//const os = require("os");
//const hostname = os.hostname();

// assemble mongoDB atlas connection string from .env 
// (or from server secrets on codesandbox.io)

const mongoUser = process.env.DB_USER;
if (mongoUser===undefined){
    console.log("You need to define .env on local or server secrets on codesandbox");
    console.log("DB_USER, DB_PASS, DB_URL and DB_COLLECTION have to be set!");
    process.exit();
}
const mongoPassword = process.env.DB_PASS;
const mongoCollection = process.env.DB_COLLECTION;
const mongoURL = `${process.env.DB_URL
    .replace("<username>", mongoUser)
    .replace("<password>", mongoPassword)}/${mongoCollection}`;

// to use newer implementation of mongoose parser 
// and to avoid deprecation warnings
// (settings are set globally on mongoose here)
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// connect to mongo db atlas 
// (https://www.mongodb.com/cloud/atlas/)
mongoose.connect(mongoURL);

// store connection in export variable
const db = mongoose.connection;

// bind error handling
db.on("error", console.error.bind(console, "MongoDB connection error: "));

module.exports = db;
