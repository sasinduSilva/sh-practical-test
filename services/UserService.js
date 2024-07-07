import { post,get,getUSer } from "../app/apiManager";

class UserService{
    static async login({username,password}){
        const data = JSON.stringify({username,password});
        const loginResult = await post({
            path:"/auth/login",
            requestBody:data
        });

        const result = await loginResult.json();
        return result;
    }

    static async getUserByToken({token}){
        const user = await getUSer({
            path:"/auth/me",
            token:token
        });

        const resultUser = await user.json();
        return resultUser;
    }
}

export default UserService;

