const mongoose = require('mongoose');
const { registerAdmin } = require("./services/authService");

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1/HCM');

async function execute(){

    
    try {
        const token = await registerAdmin("admin@hcm.com", "admin");
    }catch(error){
        console.log(error);
    }
}

execute();