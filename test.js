import { auth } from './src/httpClient.js';
import { createAccount } from './src/httpClient.js';
// import { getConnection } from './backend/controllers/database.js';
import { educationalMaterials } from './src/httpClient.js';


import assert from 'assert';


//Function to check authentication return from server. 
async function checkAuth (Username, Password){
    //Will create account if not already created. 
    await createAccount("Hunter", "pickle", "pickle@icloud.com", "Pickle7757");
    const authenticated = await auth(Username, Password);

    if (authenticated){
        return true;
    }
    else{
        return false; 
    }
}

//Function to call the createAccount function of the API
async function checkCreateAccount(name, username, email, password){

    const created = await createAccount(name, username, email, password);

    return created;

}

//Function calls the eductionalMaterials function of the API
async function checkPDF(pdfName, infoRequested){
    const received = await educationalMaterials(pdfName, infoRequested);

    console.log(received);

    return received;
}

//Drops the Lena Torres User from database
// async function dropUser(){

//     connection = await getConnection();

//     const query = "DELETE FROM users WHERE username = 'lena_t01';";

//     await connection.execute(query);
// }

//Username and Password correct
assert.strictEqual(await checkAuth("pickle", "Pickle7757"), true);

//Username incorrect, Password correct
assert.strictEqual(await checkAuth("pickleHead", "Pickle7757"), false);

//Username correct, Password incorrect
assert.strictEqual(await checkAuth("pickle", "Turtle897"), false);

//Both Username and Password are incorrect
assert.strictEqual(await checkAuth("pickleHead", "Turtle897"), false);

//PDF Test

//Flushable drains PDF
assert.strictEqual(await checkPDF("Taking Care of Your Flushable Drain Tubes", "post-surgery"), true);

//Gravity Drains
assert.strictEqual(await checkPDF("Gravity Drain", "post-surgery"), true);

//CREATE ACCOUNT TEST

// await dropUser();

//All credentials unique. This will only work the first time this script is executed
//as this information is inserted into the database. 
assert.strictEqual(await checkCreateAccount("Lena Torres", "lena_t01", "lena.torres01@example.com", "LeafySky99"), true);

//Name unique, all others are the same. This should be false every time after the previous statement was executed. 
assert.strictEqual(await checkCreateAccount("Hunter Sims", "lena_t01", "lena.torres01@example.com", "LeafySky99"), false);

//Username unique all others same. Again, should fail after the initial Lena Torres was entered into the system. 
assert.strictEqual(await checkCreateAccount("Lena Torres", "pickles8798", "lena.torres01@example.com", "LeafySky99"), false);

//Email Unique all others same. 
assert.strictEqual(await checkCreateAccount("Lena Torres", "lena_t01", "pickles75@yahoo.com", "LeafySky99"), false);

//Password unique, all others same. 
assert.strictEqual(await checkCreateAccount("Lena Torres", "lena_t01", "lena.torres01@example.com", "pickleJar98"), false);






