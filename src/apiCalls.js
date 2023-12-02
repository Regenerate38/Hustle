import axios from "axios";
const baseUrl = 'http://192.168.1.71:5000';

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
  const res = await axios.post(`${baseUrl}/auth/login`, {email});
  if(res.data.msg==="User found"){
    return res.data.user
  }
  return undefined;
};
const register = async ({email, name, phone, isOrg}) => {
  try{

    const res = await axios.post(`${baseUrl}/auth/register`, {email, name, phone, isOrg});
    console.log(res)
    if(res.msg==="new user created"){
      return res.user
    }
    return undefined;
  }catch(err){console.log(err)}
}

export {
  getPaidJobs,
  getPaidJob,
  getCommunityJobs,
  getCommunityJob,
  login,
  register
};