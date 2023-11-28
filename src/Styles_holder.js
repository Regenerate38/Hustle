import { StyleSheet, Dimensions } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles= StyleSheet.create({
       Logo: { height: 80,
     width: 80,
     position: 'absolute',
    left: 100, 
    top: 10
}, 
    Message : {
 //flex: 1,
  //justifyContent: 'flex-end',
 top:screenHeight/4,
  backgroundColor: "#181815ED",
  width: "100%",
  height: "100%",
  //opacity: 0.95,
  borderTopRightRadius: 37,
  borderTopLeftRadius: 37,
  alignItems: 'center',
  

},
Title: {
    
     fontSize: 60, 
     //fontWeight: '800',
     color: "#2fad97",
    // alignItems: 'center',
     position: 'absolute',
     left: 204,
     top: 10,
},
Title_text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign:'center',
    lineHeight: 24,
    //padding: 40,
    color: "white",
    top: 53,
    
},
Title_subtext: {
    fontSize: 18,
    fontWeight: '600',
   // textAlign:'center',
   lineHeight: 24,
   //top: 250,
    //padding: 20,
    color: "#ADA82F",
   // justifyContent: "flex-end",
},
 Login_button: {
    width: screenWidth/1.73,
    backgroundColor: "#BBB049",
    height: 50,
    alignSelf:'center',
   alignItems: 'center',
   borderRadius: 20,
   position: 'absolute',
   top: 100
   //top: screenHeight/2

    
 },
Signup_button: {
    width: screenWidth/1.73,
    backgroundColor: "#7dad2f",
    height: 50,
    alignSelf:'center',
    position: 'absolute',
    top:180,
    alignItems: 'center',
    borderRadius: 20,
},
Button_text: {
    //fontSize: 15,
    color: "white",
    padding: 12,
   //alignSelf: "center", 
   fontSize: 18,
    // padding: 20,

     //color: "",
     fontWeight: '500',
     lineHeight: 24,
},
Bg_img: {
   height: screenHeight/3,
    width: screenWidth,
    flex: 1,
   
    justifyContent: 'flex-end',
   // alignItems: 'center',
   // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

},
   Back_button :{
   top: 40,
 position: 'absolute',
 width: 38,
 height: 38,
 
 left: 20,
    zIndex: 10,
  //  padding: 10,
},
Logo1: { height: screenHeight/16,
     width: screenWidth/10,
     position: 'absolute',
     alignSelf: 'flex-start',
    right: 50, 
    top: 100
    
},
Logo2: { height: screenHeight/16,
     width: screenWidth/10,
     position: 'absolute',
    left: 50, 
    top: 100
    
},
     Login_display : {
 top:screenHeight/4,
  backgroundColor: "#191916",
  width: "100%",
  height: "100%",
  opacity: 0.95,
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
  alignItems: 'center',
  

},

Align_boxes_signup: {
    alignItems: 'center',
    position: 'absolute',
    top: 98
},
Email: {
    width: screenWidth/1.2037,
    height: 60,
    backgroundColor: "#34363AFA",
    borderRadius: 15,

},
Username_signup: {
    width: screenWidth/1.2037,
    height: 60,
    backgroundColor: "#34363AFA",
    borderRadius: 15,
    top: 22,

},
Password_signup: {
    width: screenWidth/1.2037,
    height: 60,
    backgroundColor: "#34363AFA",
    borderRadius: 15,
    top: 44,

},
Placeholder: {
    //left: 10,
    fontSize: 18,
     padding: 20,

     color: "#fff",
     fontWeight: '500',
     lineHeight: 24,
},
Signup_with: {
    alignItems: 'center',
    top: 450,

},
Logo1_signup: { height: screenHeight/16,
     width: screenWidth/10,
     position: 'absolute',
    right: 50, 
    top: 50
    
},
Logo2_signup: { height: screenHeight/16,
     width: screenWidth/10,
     position: 'absolute',
    left: 50, 
    top: 50
    
},
Signup_button_signup: {
    width: screenWidth/2,
    backgroundColor: "#7dad2f",
    height: 50,
    alignSelf:'center',
    position: 'absolute',
    top:362,
    alignItems: 'center',
    borderRadius: 15,
},
Login_screen_text1: {
    fontSize: 28,
    color: "white",
    fontWeight: '700',
    position: 'absolute',
   // lineHeight: 24,
    left: 32,
    top: 27,
},
Signup_screen_text2: {
    fontSize:18,
    color: "white",
    fontWeight: '300', 
    lineHeight:24,
    position: 'absolute',
    top: 0,
 //   left: 12,
},
Login_screen_text2: {
    fontSize:18,
    color: "white",
    fontWeight: '300', 
    lineHeight:24,
    position: 'absolute',
    top: 80,
    left: 32,
},
Login_screen_text3: {
    fontSize:17,
    color: "white",
    fontWeight: '100', 
},
Login_screen_text4: {
    fontSize:18,
    color: "white",
    fontWeight: '300', 
    lineHeight:24,
    position: 'absolute',
    top: 15,
    //left: 32,
},
Continue_with: {
    alignItems: 'center',
    alignSelf: "center",
    //position: "absolute",
    top: screenHeight/2,

},
Username: {
    width: screenWidth/1.2037,
    height: 60,
    backgroundColor: "#34363AFA",
    borderRadius: 15,

},
Password: {
    width: screenWidth/1.2037,
    height: 60,
    backgroundColor: "#34363AFA",
    borderRadius: 15,
    top: 22,

},
Align_boxes: {
    alignItems: 'center',
    position: 'absolute',
    top: 160
},

Forgot_password: {
    fontSize: 15,
    color: "white",
    fontWeight: '300', 
    position: 'absolute',
    top: screenHeight/2.25,
    right: 35
},
Login_Button: {
    width: screenWidth/2,
    backgroundColor: "#BBB049",
    height: 50,
    alignSelf:'center',
   alignItems: 'center',
   borderRadius: 20,
   top: screenHeight/2,

    
},
Map_View :{
    //flex: 1,
   // top: 30,
    height: screenHeight, 
    width: screenWidth
},
Map_container: {
    flex : 1,
   // padding: 10,
    //alignItems: "center",
    backgroundColor: "grey"
},
Whole_page: {
    flex: 1,
    //top:40
}


});

export default styles;