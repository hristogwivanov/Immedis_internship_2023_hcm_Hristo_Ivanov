const mongoose = require('mongoose');
const { registerAdmin } = require("./services/authService");

mongoose.set('strictQuery', false);

async function execute() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/HCM');
        await registerAdmin("admin@hcm.com", "admin");
        console.log("Operation successful!");
    } catch (error) {
        console.log(error);
        process.exit(1); 
    }
}

execute()
    .then(() => {
        console.log("Script finished!");
        process.exit(0); 
    })
    .catch((error) => {
        console.error("Script error:", error);
        process.exit(1); 
    });
