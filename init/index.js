const mongoose=require("mongoose");
const initdata=require("../init/data.js");
const Listing=require("../models/listing.js");


const MONGO_URL="mongodb://127.0.0.1:27017/waderlust";

main().then(()=>{
    console.log("connect to DB");
})
.catch((err)=>{
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB =async()=>{

    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({
        ...obj,
        owner: "68ee5a85dca4e91bd9706620"
    }));
    await Listing.insertMany(initdata.data);
    console.log("data was initialize");
}

initDB();
