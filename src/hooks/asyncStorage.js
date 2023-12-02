import AsyncStorage from "@react-native-async-storage/async-storage";


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

export {saveToken, getToken, getUser, saveUser};