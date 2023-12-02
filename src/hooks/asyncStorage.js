import AsyncStorage from "@react-native-async-storage/async-storage";


const saveUserInfo=async(user)=>{
    try{
        await AsyncStorage.setItem("userInfo", user)
    }catch(err){
        console.log(err)
    }
}
const getUserInfo=async()=>{
    try{
      const userInfo=  await AsyncStorage.getItem("userInfo")
      return userInfo
    }catch(err){
        console.log(err)
        return undefined
    }
}

const saveUser=async(user)=>{
    try{
        await AsyncStorage.setItem("user", user)
    }catch(err){
        console.log(err)
    }
}
const getUser=async()=>{
    try{
      const user=  await AsyncStorage.getItem("user")
      return user
    }catch(err){
        console.log(err)
        return null
    }
}

export {saveUserInfo, getUserInfo, getUser, saveUser};