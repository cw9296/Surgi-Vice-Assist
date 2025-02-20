
//Pulling in the database connection
const { hashPassword } = require('../hashing');
const { compareHash } = require('../hashing');
const { getConnection } = require('./database');

const sendResponse = async (req, res) => {
    try {
        // Sending a response with a simple message
        res.status(200).json({ message: "Response successful!" });
    } catch (error) {
        console.error("Error occurred while sending response:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

//Will insert data into the users table
const createAccount = async (req, res) => {
    try{
        const connection = await getConnection();

        const {Name, username, email, password} = req.body;

        //Hashing the password to store in the database
        const hashedPassword = await hashPassword(password);

        const query = 'INSERT INTO users (name, username, email, password) VALUES (?,?,?,?);';

        // Execute the query and check the result
        const result = await connection.execute(query, [Name, username, email, hashedPassword]);

        console.log(result)

        

        // if(result.affectedRows > 0){
        //     res.status(200).json({ message: "Account Successfully Created!" });
        // }
        // else{
        //     res.status(500).json({ message: "Error while inserting into database" });
        // }


    }
    catch(error){
        console.error("Error occured while querying database", error);
        res.status(500).json({ message: "Server Error" });
    }
};

//Exports
module.exports = { sendResponse, createAccount };



