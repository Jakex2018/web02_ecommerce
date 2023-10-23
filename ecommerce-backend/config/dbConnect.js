const { default: mongoose } = require('mongoose');
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DATABASE CONNECTED")
    } catch (error) {
        console.log("DATABASE ERROR")
    }
}

module.exports = dbConnect

