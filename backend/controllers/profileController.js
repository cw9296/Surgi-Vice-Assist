const { getConnection } = require('./database');

const PickUpWhereLeftOff = async (req, res) => {
    try {
        const connection = await getConnection();

        const query = 'SELECT file_path FROM educational_materials WHERE title = ? AND category = ?;';

        // Execute the query and check the result
        const [result] = await connection.execute(query, [pdfName, infoRequested]);

        console.log(result);

    } catch (error) {
        console.error("Error occured while querying database", error);
        res.status(500).json({ message: "Server Error" });
    }
};