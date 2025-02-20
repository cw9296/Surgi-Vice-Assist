const bcrypt = require('bcrypt');
const saltRounds = 10; //Salt rounds for creating the salt

//function for hashing passwords
async function hashPassword(password) {
        try{
            const salt = await bcrypt.genSalt(saltRounds);
            //hashing password
            const hashedPassword = await bcrypt.hash(password, saltRounds);    
            
            return hashedPassword;
        }
        catch(error){
            console.error("Error occured while hashing password", error);
        }
        
    }

async function compareHash(userPassword, databasePassword) {
    try{
        //compare user password with that retrieved from database
        const result = bcrypt.compare(userPassword, databasePassword);

        if(result){
            return true;

        }
        else{
            return false;
        }
    }
    catch(error){
        console.error("Error occured while authenticating", error);
    }

}

module.exports = {hashPassword, compareHash};