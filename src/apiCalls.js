import axios from "axios";
const baseUrl = 'http://192.168.1.69:5000';

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

export {
  getPaidJobs,
  getPaidJob,
  getCommunityJobs
};