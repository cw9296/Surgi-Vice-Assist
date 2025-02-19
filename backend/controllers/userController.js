
//Pulling in the database connection
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

const createAccount = async (req, res) => {
    const{ username, password } = req.body;
    try{
        // const connection = await getConnection();

        res.status(200).json({ message: "Response successful!" });

        console.log(username, password);
    }
    catch(error){
        console.error("Error occured while querying database", error);
        res.status(500).json({ message: "Server Error" });
    }
};

//Exports
module.exports = { sendResponse, createAccount };



