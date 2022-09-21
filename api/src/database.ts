require('dotenv').config(); 
import {connect} from "mongoose";

const {MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT} = process.env;


connect(`mongodb://${ MONGO_USER }:${ MONGO_PASSWORD }@${ MONGO_HOST }:${ MONGO_PORT }`,(error) => {
  error?console.log("********Connection Error********"):console.log("***Connected to MongoDB***")
})

