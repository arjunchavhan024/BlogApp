import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@blogweb-shard-00-00.ch1hk.mongodb.net,blogweb-shard-00-01.ch1hk.mongodb.net,blogweb-shard-00-02.ch1hk.mongodb.net/BLOG?retryWrites=true&w=majority`;

  try {
    // No need to include useNewUrlParser or useUnifiedTopology anymore
    await mongoose.connect(URL, { bufferCommands: false });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
