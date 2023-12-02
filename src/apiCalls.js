import axios from "axios";
import { saveUser, saveToken, getToken } from "./hooks/asyncStorage";
const baseUrl = 'http://10.0.2.2:5000';

const returnConfig=async()=>{
    const token= await getToken();
    console.log(token)
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    } 
    return {headers}
}

const getPaidJobs = async () => {
    const config = returnConfig
  const res = await axios.get(`${baseUrl}/paid`, config());
  console.log(res.data)
  return res.data;
};

const getPaidJob = async (id) => {
  const res = await axios.get(`${baseUrl}/paid/${id}`);
  return res.data;
};

const getCommunityJobs = async () => {
  const res = await axios.get(`${baseUrl}/community`);
  return res.data;
};
const getCommunityJob = async (id) => {
  const res = await axios.get(`${baseUrl}/community/${id}`);
  return res.data;
};
const login = async (email, password) => {
    try{
        const res =await axios.post(`${baseUrl}/auth/login`, {email, password} )
        console.log(res.data)
       await saveToken(res.data.token)
       await saveUser(res.data)
       return true
    }catch(err){console.log(err)}
};
const register = async ({email,password, name,  isOrg}) => {
        try{

            const res =await axios.post(`${baseUrl}/auth/register`, {email, name, password, isOrg} )
            console.log(res.data)
            await saveUser(res.data)
            await saveToken(res.data.token)
            return true
        }catch(err){console.log(err)}

}

const createPost = async (title, description, user) => {
  console.log(user);
  const res = await axios.post(`${baseUrl}/${user.isOrg ? `community` : `paid`}`, {title, description, user});
  console.log(res);
};

export {
  getPaidJobs,
  getPaidJob,
  getCommunityJobs,
  getCommunityJob,
  login,
  register,
  createPost
};