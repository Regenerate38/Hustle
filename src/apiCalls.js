import axios from "axios";
import { saveUser, saveToken } from "./hooks/asyncStorage";
const baseUrl = 'http://http://10.0.2.2:5000';


const getPaidJobs = async () => {
  const res = await axios.get(`${baseUrl}/paid`);
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
const login = async (email) => {
    try{
        const res =await axios.post(`${baseUrl}/auth/login`, {email, password} )
        console.log(res.data)
       await saveToken(res.data.token)
       await saveUser(res.data)
       return "successful"
    }catch(err){console.log(err)}
};
const register = async ({email, name, phone, isOrg}) => {
        try{

            const res =await axios.post(`${baseUrl}/auth/register`, {email, name:username, password, isOrg:false} )
            console.log(res.data)
            await setUser(res.data)
            await saveToken(res.data.token)
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