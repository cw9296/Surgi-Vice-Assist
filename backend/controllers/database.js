const mariadb = require('mariadb');

//Creating the connection pool
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'surgivice_dev',
    port: 3308
})

//function to connect to surgivice_dev
async function getConnection() {
    try{
        const connection = await pool.getConnection();
        console.log("Connected to Database");
        return connection;
    }
    catch(err){
        console.error("Error occured while connecting to database", err);
        throw err;

    }
}

//Export the function for controllers use
module.exports = { getConnection };