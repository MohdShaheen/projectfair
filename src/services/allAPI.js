import { BASE_URL } from "./baseurl"
import { commonApi } from "./commonApi"




// register url
export const registerAPI = async(user)=>{
   return await commonApi("POST",`${BASE_URL}/users/register`,user,"")
}

// login api
export const loginAPI = async(user)=>{
   return await commonApi("POST",`${BASE_URL}/users/login`,user,"")
}

// add project
export const addProjectAPI = async(reqBody,reqHeader)=>{
   return await commonApi("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}
