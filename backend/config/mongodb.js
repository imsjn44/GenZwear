import mongoose from "mongoose";
import dns from "node:dns/promises";

// Set DNS servers
dns.setServers(["1.1.1.1"]); //problem occurs for node version above 19.6.0 so need to add this

//connect mongoose with mongodb atlas
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/mern`);
};

export default connectDB;
