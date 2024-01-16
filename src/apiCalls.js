import axios from "axios";
import { saveUser, saveToken, getToken, getUser } from "./hooks/asyncStorage";
//ip = your laptop's ip address here https://10.0.2.2 if running in expo go
//port = the port in which server is running or 
// const baseUrl = "http://192.168.1.25:5000";
const ip = "http://192.168.1.25";
const port = "5000"

const baseUrl = ip + ":"+ port

const returnConfig = async () => {
  const token = await getToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return { headers };
};

const getPaidJobs = async () => {
  const config = await returnConfig();
  console.log("paid called");
  const res = await axios.get(`${baseUrl}/paid`, config);
  return res.data;
};

const getPaidJob = async (id) => {
  const config = await returnConfig();
  const res = await axios.get(`${baseUrl}/paid/${id}`, config);
  // console.log(res.data);
  return res.data;
};

const getCommunityJobs = async () => {
  const config = await returnConfig();
  const res = await axios.get(`${baseUrl}/community`, config);
  return res.data;
};
const getCommunityJob = async (id) => {
  const res = await axios.get(`${baseUrl}/community/${id}`);
  return res.data;
};
const login = async (email, password) => {
  try {
    console.log("Pressed log in");
    const res = await axios.post(`${baseUrl}/auth/login`, { email, password });
    // console.log(res.data);
    await saveToken(res.data.token);
    await saveUser(res.data);
    const temp = await getUser();
    // console.log(temp);
    if (res.data.token) return true;
    else return false;
  } catch (err) {
    console.log(err);
  }
};
const register = async ({ email, password, name, isOrg }) => {
  try {
    const res = await axios.post(`${baseUrl}/auth/register`, {
      email,
      name,
      password,
      isOrg,
    });
    // console.log(res.data);
    await saveUser(res.data);
    await saveToken(res.data.token);
    if (res.data.token) return true;
    else return false;
  } catch (err) {
    console.log(err);
  }
};

const createPost = async (title, description, user, image, pay, location) => {
  const config = await returnConfig();
  // console.log(`${baseUrl}/${user.isOrg ? `community` : `paid`}`);
  const res = await axios.post(
    `${baseUrl}/${user.isOrg ? `community` : `paid`}`,
    { title, desc: description, user, image, pay, location },
    config
  );
  // console.log(res.location)
};

const getImageSignature = async () => {
  const config = await returnConfig();
  const res = await axios.get(`${baseUrl}/pictureSignatureResponse`, config);
  return res.data;
};

export {
  getPaidJobs,
  getPaidJob,
  getCommunityJobs,
  getCommunityJob,
  login,
  register,
  createPost,
  getImageSignature,
};
