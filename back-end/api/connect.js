import { MongoClient } from 'mongodb';
// const { MongoClient } = require('mongodb');

const URI = "mongodb+srv://leandroikehara:FpFRtY2VM4j0sWfR@cluster0.8o8lcl3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);;

export const db = client.db("replicaSpotify");
//  const songCollection = await db.collection("songs").find({}).toArray();
// console.log(songCollection);
