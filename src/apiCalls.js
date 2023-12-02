import axios from "axios";
const baseUrl = 'http://192.168.1.87:5000';

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
  const res = await axios.post(`${baseUrl}/login0`, {email});
  if(res.msg==="User found"){
    return res.user
  }
  return undefined;
};

export {
  getPaidJobs,
  getPaidJob,
  getCommunityJobs,
  getCommunityJob,
  login
};