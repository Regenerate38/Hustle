import AsyncStorage from "@react-native-async-storage/async-storage";

const saveToken =async (token)=>{
    try{
        await AsyncStorage.setItem("jwt", token)
    }catch(err){
        console.log(err)
    }
}
const getToken =async ()=>{
    try{
        const token=await AsyncStorage.getItem("jwt")
        return token;
    }catch(err){
        console.log(err)
        return null
    }
}
const saveUser=async(user)=>{
    try{
        await AsyncStorage.setItem("user", user)
    }catch(err){
        console.log(err)
    }
}
const getUser=async(user)=>{
    try{
      const user=  await AsyncStorage.getItem("user")
      return user
    }catch(err){
        console.log(err)
        return null
    }
}

export {saveToken, getToken, getUser, saveUser}