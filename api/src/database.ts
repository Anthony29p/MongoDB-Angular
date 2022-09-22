require('dotenv').config(); 
import {connect} from "mongoose";

const {MONGO_USER, MONGO_PASSWORD, MONGO_HOST, DB_NAME} = process.env;


connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${DB_NAME}`,(error) => {
  error?console.log("********Connection Error********"):console.log("***Connected to MongoDB***")
})

