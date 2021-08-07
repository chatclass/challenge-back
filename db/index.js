const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(`mongodb://${process.env.DB_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log("Successfully connected to the database");
  } catch (err) {
    console.log("Could not connect to the database. Exiting now...", err);
  }
};

module.exports = {
  connectDatabase,
};
