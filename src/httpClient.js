//This file will act as the client to communicate with the backend API
//All calls to the backend should come from this file. 
//create account function 
export const createAccount = async (Name, username, email, password) => {
    try {
      const response = await fetch('http://10.47.229.204:4000/users/createAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name, username, email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(`Account created: ${data.username}`);
        return true;
      } else {
        console.error('Failed to create account');
        return false;
      }
    } catch (error) {
      console.error('Error occurred when communicating with API:', error);
    }
  };
  
  export const testGet = async () => {
    try {
      const response = await fetch('http://10.47.229.204:4000/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('GET /users response:', await response.json());
    } catch (error) {
      console.error('Error occurred when communicating with API:', error.message);
    }
  };
  
  export const auth = async (username, password) => {
    try {
      const response = await fetch('http://10.47.229.204:4000/auth/', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.status === 401) {
        console.warn('Authentication Failed: 401 Unauthorized');
        return false;
      }
  
      if (!response.ok) {
        console.warn(`Authentication Failed: ${response.status}`);
        return false;
      }
  
      const data = await response.json();
      console.log('Authentication Successful:', data);
      return true;
    } catch (error) {
      console.error('Error during authentication:', error.message);
      return false;
    }
  };
  
  export const educationalMaterials = async (pdfName, infoRequested) => {
    try {
      const response = await fetch('http://10.47.229.204:4000/materials/educational', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pdfName, infoRequested }),
      });
  
      const { pdfBase64 } = await response.json();
  
      if (!response.ok) {
        console.warn(`Something Failed: ${response.status}`);
        return false;
      }
  
      return true;
    } catch (error) {
      console.error('Error occurred when communicating with API:', error.message);
    }
  };
  
  export const getProfileInfo = async () => {
    const pdfName = 'Taking Care of Your Flushable Drain Tubes';
    const infoRequested = 'post-surgery';
    try {
      const response = await fetch('http://10.47.229.204:4000/profile/retrieve', {
        method: 'POST',
        credentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const { pdfBase64 } = await response.json();
  
      if (!response.ok) {
        console.warn(`Something Failed: ${response.status}`);
        return false;
      }
  
      return pdfBase64;
    } catch (error) {
      console.error('Error occurred when communicating with API:', error.message);
    }
  };
  