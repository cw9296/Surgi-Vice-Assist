const { getConnection } = require('./database');
const path = require('path');
const fs = require('fs');

//grabbing the path for the PDF file 
const getEducationalMaterials = async (req, res) => {
    let connection;
    try {
         connection = await getConnection();

        const { pdfName, infoRequested} = req.body;

        //pulling in username from session variables
        const username = req.session.username;

        //Grabbing the PDF for the user and also gathering their credentials to input into profile table. 
        const query1 = `SELECT file_path, id AS materials_id FROM educational_materials WHERE title = ? AND category = ?; `;

        // Execute the query and check the result
        const [result] = await connection.execute(query1, [pdfName, infoRequested]);

        // //Grabbing the users id given they provided username
        // const query2 = ' SELECT id AS user_id FROM users WHERE username = ?;'
        // console.log("here is username");
        // console.log(username);

        // const [userNameResult] = await connection.execute(query2, [username]);

        // console.log(result);

        // //educational materials ID
        // const eduId = result.materials_id;
        // const userId = userNameResult.user_id;
        // console.log(eduId);
        // console.log(userId);

        // //Inserting into profile table
        // const query3 = 'INSERT INTO user_material_views (user_id, material_id) VALUES(?,?);'

        // const profileResult = await connection.execute(query3, [userId, eduId]);

        // if (profileResult.affectedRows > 0){
        //     console.log("Succesfully saved users state")
        // }
        // else{
        //     console.log("Something Happened! Check database!")
        // }


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
    finally{
        if(connection){
            connection.release();
        }
    }
};

// Exports
module.exports = { getEducationalMaterials };
