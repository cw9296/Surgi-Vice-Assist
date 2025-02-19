
//Pulling in the database connection
const { getConnection } = require('./database');

const authUser = async (req, res) => {
    const{ username, password } = req.body;
    try{
        const connection = await getConnection();
        console.log("Succesfully Connected to Database");

        // const query = 'SELECT '
    }
    catch(error){
        console.error("Error occured while querying database", error);
    }
};

//Exports
module.exports = { authUser };

