
//Pulling in the database connection
const { getConnection } = require('./database');
const { compareHash } = require('../hashing');

const authUser = async (req, res) => {
    let {username, password}  = req.body;
    try{
            const connection = await getConnection();
            console.log("Succesfully Connected to Database");

            
            //Pulling the password out of database
            const query = 'SELECT password FROM users WHERE username = ?';

            // Execute the query 
            const [result] = await connection.execute(query, [username]);

            

            if(result.length === 0)
            {
                return res.status(401).json({ message: "User not Found" });
            }

            const hashedPassword = result.password

            //comparing password to hashed password in database
            const isMatch = await compareHash(password, hashedPassword);
            

            if(isMatch){
                return res.status(200).json({ message: "Authenticated" });
            }
            else{
                return res.status(401).json({ message: "Incorrect Password" });
            }
        }

    
    catch(error){
        console.error("Error occured while querying database", error);
        return res.status(500).json({ message: "Internal Server Error" }); 
    }
};

//Exports
module.exports = { authUser };

