import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


await mongoose.connect(
  process.env.MONGO_URI
);


const collections =
  await mongoose.connection.db.listCollections().toArray();



const contentCollection = collections.find(
  (item) => item.name === "contents"
);



if (!contentCollection) {

  console.log(
    "Content collection not found. Nothing to fix."
  );

  process.exit();

}



const indexes =
  await mongoose.connection.db
    .collection("contents")
    .indexes();



const slugIndex = indexes.find(
  (index) => index.name === "slug_1"
);



if (slugIndex) {

  await mongoose.connection.db
    .collection("contents")
    .dropIndex("slug_1");


  console.log(
    "✅ Removed old slug unique index"
  );

} else {


  console.log(
    "✅ No slug index found"
  );


}



await mongoose.disconnect();

process.exit();

