import {ApiRequest} from '../shared/ApiRequest';
class AuthService{
    constructor(){

    }

    static register(registerModel){
     return ApiRequest({url:"user/register",method:"POST", data:JSON.stringify(registerModel)}).then((r)=> {
         console.log("hello");
         return r;
     });
    }

    login(loginModel){

    }
    
    static isUserLoggedIn(){
        return false;
    }


}

export default AuthService;