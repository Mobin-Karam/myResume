

//...instrument
import mongoose from "mongoose";


// const uri = 'mongodb://root:EizsmIrcswlooJ69V40JFGQr@billy.iran.liara.ir:30918/my-app?authSource=admin'

mongoose.connect("mongodb://root:EizsmIrcswlooJ69V40JFGQr@billy.iran.liara.ir:30918/my-app?authSource=admin");

const contactSchema = {
    email: String,
    query: String,
};
 const Contact = mongoose.model("Contact", contactSchema);
