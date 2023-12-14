import axios from "axios";
import { saveUser, saveToken, getToken, getUser } from "./hooks/asyncStorage";
const baseUrl = "http://10.0.2.2:5000";

const returnConfig = async () => {
  const token = await getToken();
  console.log(token);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return { headers };
};

const getPaidJobs = async () => {
  const config = await returnConfig();
  const res = await axios.get(`${baseUrl}/paid`, config);
  return res.data;
};

const getPaidJob = async (id) => {
  const config = await returnConfig();
  const res = await axios.get(`${baseUrl}/paid/${id}`, config);
  console.log(res.data);
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
    console.log("Pressed log in")
    const res = await axios.post(`${baseUrl}/auth/login`, { email, password });
    console.log(res.data);
    await saveToken(res.data.token);
    await saveUser(res.data);
    const temp = await getUser();
    console.log(temp);
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
    console.log(res.data);
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
  console.log(`${baseUrl}/${user.isOrg ? `community` : `paid`}`);
  const res = await axios.post(
    `${baseUrl}/${user.isOrg ? `community` : `paid`}`,
    { title, desc: description, user, image, pay , location}, config
  );
  console.log(res.location)
  // console.log(res);
};

export {
  getPaidJobs,
  getPaidJob,
  getCommunityJobs,
  getCommunityJob,
  login,
  register,
  createPost,
};
