// or as an es module:
import { MongoClient } from "mongodb";

// Connection URL
const url =
  "mongodb+srv://admin:123@clusterfs21.jmz3zez.mongodb.net/?appName=ClusterFS21";
const client = new MongoClient(url);

// Database Name
const dbName = "todolist2";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");
  const query = await collection.find().toArray();
  console.log(query);
  // the following code examples can be pasted here...

  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
