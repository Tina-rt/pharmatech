import type { User } from "~/types/user.models";
import apiConstants from "../constants/apiConstants";
import axios from "axios";

export const login = async (email: string, password: string) => {
    const apiURL = apiConstants().apiURL;
    console.log(apiURL);
};

export const logout = async () => {};

export const register = async (user: User) => {
    const apiURL = apiConstants().apiURL;
    console.log("user", user);

    try{
        const response = await axios.post(`${apiURL}/api/auth/inscription`, {
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            motdepasse: user.password,
            phone: user.phone,
            role: 'client',
        });
        return response
    } catch (error : any){ 
        if (error.status === 400){
            return error.response.data;
        }
        return error
    }
};