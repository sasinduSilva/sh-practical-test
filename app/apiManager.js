import {EXPO_PUBLIC_API_URL} from '@env';

export const post = async ({ path, requestBody }) => {
    console.log("JSON.stringify(requestBody.email, requestBody.password)");
    console.log("pw " + requestBody);
    
    console.log("path");
    console.log(EXPO_PUBLIC_API_URL+path);
  
    return fetch(`${EXPO_PUBLIC_API_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: requestBody,
    });
    
  
};

export const get = ({ path }) => {
  return fetch(`${EXPO_PUBLIC_API_URL}${path}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const getUSer = ({ token,path }) => {
  return fetch(`${EXPO_PUBLIC_API_URL}${path}`, {
    method: "GET",
    headers: {
      "Authorization": "Bearer "+token,
    },
  });
};

// export const getById = ({id,path}) =>{
//   return fetch(`${EXPO_PUBLIC_API_URL}${path}`, {
//     method: "GET",
//     headers: {
//       "Authorization": "Bearer "+token,
//     },
//   });
// }
