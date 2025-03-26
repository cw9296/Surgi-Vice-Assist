import { auth } from './src/httpClient.js';

import assert from 'assert';


//Function to check authentication return from server. 
async function checkAuth (Username, Password){
    const authenticated = await auth(Username, Password);

    if (authenticated){
        return true;
    }
    else{
        return false; 
    }
}

//Username and Password correct
assert.strictEqual(await checkAuth("pickle_feet", "Pickle98"), true);

//Username incorrect, Password correct
assert.strictEqual(await checkAuth("pickleHead", "Pickle98"), false);

//Username correct, Password incorrect
assert.strictEqual(await checkAuth("pickle_feet", "Turtle897"), false);

//Both Username and Password are incorrect
assert.strictEqual(await checkAuth("pickleHead", "Turtle897"), false);