const { getConnection } = require('./database');
const path = require('path');
const fs = require('fs');

const PickUpWhereLeftOff = async (req, res) => {
    const username   = req.session.username;
    console.log("IN PICK UP");
    console.log(username);
    try {
        const connection = await getConnection();

        const query = `
                    SELECT file_path 
            FROM educational_materials 
            WHERE id = (
            SELECT material_id 
            FROM user_material_views 
            WHERE user_id = (
                SELECT id FROM users WHERE username = ?
            )
            ORDER BY viewed_at DESC
            LIMIT 1
            );

            `;


        // Execute the query and check the result
        const [result] = await connection.execute(query, [username]);

        console.log(result);

        if (result) { 
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
                    console.log('in else');
                    res.status(500).json({ message: "Error while querying database" });
                }


    } catch (error) {
        console.error("Error occured while querying database", error);
        res.status(500).json({ message: "Server Error" });
    }
};

//Exports
module.exports = { PickUpWhereLeftOff };
