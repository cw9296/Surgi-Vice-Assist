const { getConnection } = require('./database');
const path = require('path');
const fs = require('fs');

// Will insert data into the users table
const getEducationalMaterials = async (req, res) => {
    let connection;
    try {
        connection = await getConnection();

        const { name, infoRequested } = req.body;
        console.log(name, infoRequested);
        console.log(req.body);

        const query = 'SELECT file_path FROM educational_materials WHERE title = ? AND category = ?;';

        // Execute the query and check the result
        const [result] = await connection.execute(query, [name, infoRequested]);

        console.log(result);

        if (result) {  // Corrected this part to match your original intent
            const filePath = path.join('/backend', result.file_path);
            
            // Read PDF as Base64
            fs.readFile(filePath, { encoding: 'base64' }, (err, data) => {
                if (err) {
                    console.error("Error reading PDF:", err);
                    return res.status(500).json({ message: "Error reading PDF" });
                }

                // Send Base64 string as JSON
                res.json({
                    pdfBase64: data,  // Base64 encoded PDF
                });
            });
        } else {
            res.status(500).json({ message: "Error while querying database" });
        }
    } catch (error) {
        console.error("Error occured while querying database", error);
        res.status(500).json({ message: "Server Error" });
    }
    finally{
        if(connection){
            connection.release();
        }
    }
};

// Exports
module.exports = { getEducationalMaterials };
