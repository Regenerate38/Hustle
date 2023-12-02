import { StyleSheet, Dimensions } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import { horizontalScale, moderateScale, verticalScale } from '../src/constants/metrics'
import {COLORS} from '../src/constants';
const {height, width} = Dimensions.get("window");

const POST_WIDTH = width * 0.825;
const POST_HEIGHT = 0.5*width; 

const styles= StyleSheet.create({


/**General Styles start */
Logo: { 
    height: verticalScale(70),
    width: '100%',
    resizeMode: "center",
    position: 'absolute',
    alignSelf: "center",
    top: verticalScale(50)
}, 

Message : {
    //flex: 1,  
    //justifyContent: 'flex-end',
    top: screenHeight/4,
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
/**General Style End */



/** Login Selection Screen start*/
Title_text: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    textAlign:'center',
    position: 'relative',
    lineHeight: 24,
    paddingTop: verticalScale(50),
    paddingHorizontal: horizontalScale(20),
    color: "white",
},

Title_subtext: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    lineHeight: 24,
    
    color: "#ADA82F",
},

Login_button: {
    width: screenWidth/1.73,
    backgroundColor: "#BBB049",
    height: verticalScale(55),
    alignSelf:'center',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: moderateScale(50),
    position: 'relative',
    top: verticalScale(40),
 },

Signup_button: {
    width: screenWidth/1.73,
    backgroundColor: "#7dad2f",
    height: verticalScale(55),
    top: verticalScale(55),
    borderRadius: moderateScale(50),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
},

Button_text: {
    //fontSize: 15,
    color: "white",
    padding: 12,
    //alignSelf: "center", 
    fontSize: moderateScale(18),
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
    //alignItems: 'center',
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
},

Back_button :{
    top: verticalScale(25),
    position: 'absolute',
    width: horizontalScale(40),
    height: verticalScale(40),
    left: horizontalScale(10),
    zIndex: 10,
    tintColor: '#808080',
    //padding: 10,
},
/** Login Selection Screen end */



/** Login Screen start */
Logo1: { 
    height: screenHeight/16,
    width: screenWidth/10,
    position: 'absolute',
    alignSelf: 'flex-start',
    right: horizontalScale(50), 
    top: verticalScale(60),
    
},
Logo2: { 
    height: screenHeight/16,
    width: screenWidth/10,
    position: 'absolute',
    left: horizontalScale(50), 
    top: verticalScale(60),
    
},

Login_screen_text1: {
    fontSize: moderateScale(28),
    color: "white",
    fontWeight: '700',
    position: 'absolute',
    // lineHeight: 24,
    left: 32,
    top: 27,
},
Login_screen_text2: {
    fontSize: moderateScale(18),
    color: "white",
    fontWeight: '300', 
    lineHeight:24,
    position: 'absolute',
    top: 80,
    left: 32,
},

Login_screen_text3: {
    fontSize: moderateScale(17),
    color: "white",
    fontWeight: '100', 
},

Login_screen_text4: {
    fontSize:moderateScale(18),
    color: "white",
    fontWeight: '300', 
    lineHeight: moderateScale(18),
    position: 'absolute',
    top: 0,
    //left: 32,
},

Continue_with: {
    alignItems: 'center',
    alignSelf: "center",
    position: "absolute",
    top: verticalScale(450),

},

Username: {
    width: horizontalScale(310),
    height: verticalScale(60),
    justifyContent: 'center',
    backgroundColor: "#34363AFA",
    borderRadius: moderateScale(15),

},
Password: {
    width: horizontalScale(310),
    height: verticalScale(60),
    justifyContent: 'center',
    backgroundColor: "#34363AFA",
    borderRadius: moderateScale(15),
    top: 22,

},
Align_boxes: {
    alignItems: 'center',
    position: 'absolute',
    top: 160
},

Forgot_password: {
    fontSize: moderateScale(15),
    color: "white",
    fontWeight: '300', 
    position: 'absolute',
    top: verticalScale(315),
    right: 35
},

Login_Button: {
    width: horizontalScale(310),
    backgroundColor: "#BBB049",
    alignContent: 'center',
    height: verticalScale(55),
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(15),
    top: verticalScale(360),
},
/** Login Screen start */



/** Signup Screen Start */
Align_boxes_signup: {
    alignItems: 'flex-start',
    position: 'absolute',
    top: verticalScale(198)
},

SignupPage_stats_container:{
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    marginLeft: horizontalScale(35),
    borderRadius: moderateScale(24),
},

SignupPage_psp_label:{
    color:'#ffffff',
    textAlign: 'left',
    marginLeft: horizontalScale(20),
    top: verticalScale(60),
    fontSize: moderateScale(12),
},

SignupPage_pfp:{
    height: 0.295*width,
    width: 0.297*width,
    borderRadius: moderateScale(2000),
   
    
    top: verticalScale(68)
},

Email: {
    width: horizontalScale(310),
    height: verticalScale(60),
    backgroundColor: "#34363AFA",
    borderRadius: moderateScale(15),
    justifyContent: 'center',
},

Username_signup: {
    width: horizontalScale(310),
    height: verticalScale(60),
    backgroundColor: "#34363AFA",
    borderRadius: moderateScale(15),
    top: verticalScale(22),
    justifyContent: 'center',

},

Password_signup: {
    width: horizontalScale(310),
    height: verticalScale(60),
    justifyContent: 'center',
    backgroundColor: "#34363AFA",
    borderRadius: moderateScale(15),
    top: verticalScale(44),
},

Placeholder: {
    //left: 10,
    fontSize: moderateScale(18),
     padding: 20,
     color: "#ffffff",
     fontWeight: '500',
     
     lineHeight: 24,
},

Signup_with: {
    alignItems: 'center',
    top: verticalScale(450),

},
Logo1_signup: { 
    height: horizontalScale(screenHeight/32),
    width: horizontalScale(screenWidth/16),   
    padding: 15,
    backgroundColor: "white",   
    borderRadius: horizontalScale(screenWidth/32)
},
Logo2_signup: { 
    height: horizontalScale(screenHeight/16),
    width: horizontalScale(screenWidth/10),
    position: 'absolute',
    left: horizontalScale(30), 
    top: verticalScale(50)
    
},
Signup_button_signup: {
    width: horizontalScale(310),
    backgroundColor: "#7dad2f",
    height: verticalScale(55),
    alignSelf:'center',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(15),
    top: verticalScale(360),
},


Signup_screen_text2: {
    fontSize: moderateScale(18),
    color: "white",
    fontWeight: '300', 
    lineHeight:24,
    position: 'absolute',
    top: 0,
 //   left: 12,
},
/** Signup Screen Start */


/** Map Page Start */
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
/** Map Page Start */


Whole_page: {
    flex: 1,
    //top:40
},

inner_page_parent_container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.bgColor,
},

search_bar_container: {
    marginTop: verticalScale(20),
    width: horizontalScale(330),
    height: verticalScale(55),
    top: verticalScale(30),
    position: 'relative',
    left: horizontalScale(3),
},

search_bar:{
    backgroundColor: '#34363A' ,
    borderRadius: moderateScale(25),
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
},

/**Paid Page Start */

paidpage_button_text:{
    color:'#fff',
    fontSize: moderateScale(17),
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: horizontalScale(13),
    paddingRight: horizontalScale(13),

},

paidpage_button:{
    position: "relative",
    width: horizontalScale(145),
    height: verticalScale(48),
    // marginVertical: 10,
    marginHorizontal: horizontalScale(10),
    backgroundColor: '#BBB049',
    borderRadius: moderateScale(23),
    marginTop: verticalScale(45),
    justifyContent:'center',
    alignItems: 'center',
},

flatlist_heading:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(30),
    marginBottom: verticalScale(2),
},

scrollview_heading:{
    marginTop: verticalScale(45),
    color: '#fff',
    marginLeft: -0.56* width,
    fontSize: moderateScale(15),
    fontWeight: '900',
},


PostDetail_main_view:{
    position: "relative",
    width: POST_WIDTH,
    height: 0.95*POST_HEIGHT,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(1),
    marginHorizontal: width * 0.05,
    backgroundColor: '#333333',
    borderRadius: moderateScale(25),
},

PostDetail_image:{
    height: 0.58*POST_HEIGHT,
    borderRadius: moderateScale(25),
    margin: moderateScale(12),
    aspectRatio: 'auto',
},  

PostDetail_title_text:{
    fontWeight: '600',
    fontSize: moderateScale(19),
    fontWeight: 'bold',
    marginLeft: horizontalScale(13),
    color: '#fff',
},  

PostDetail_location_text:{
    fontWeight: '600',
    fontSize: moderateScale(12),
    fontWeight: '100',
    marginLeft: horizontalScale(13),
    color: '#fff'
},

PostDetail_price_text:{
    fontWeight: '600',
    fontSize: moderateScale(12),
    alignSelf: 'flex-end',
    color: '#7DEF2F',
    fontWeight: '100',
    marginLeft: horizontalScale(15),
   
},
PostDetail_location_icon:{
    width: horizontalScale(12),
    height: verticalScale(12),
    marginTop: verticalScale(3), 
    marginLeft: horizontalScale(1.5),
},

/**Paid Page End */


/**PostDetail Page Start */

PostDetailPage:{
    flex: 1,
    width: width,
    backgroundColor: COLORS.bgColor,
},

PostDetailPage_image_container:{
    width: 1.16*width,
    height: 0.7589*width,
    backgroundColor: '#34363A', 
},

PostDetailPage_back_container:{
    flex: 1,
    flexDirection: 'row',
    width: width,
    zIndex: 5,
    position: 'absolute',
  
},

PostDetailPage_back:{
    width: moderateScale(38),
    height: moderateScale(38),  
    marginTop: verticalScale(38),
    marginLeft: horizontalScale(20),
    // position: 'absolute',
    tintColor: '#fff'    
},

PostDetailPage_curved_container:{
    backgroundColor:'#181815',
    opacity: 0.96,
    zIndex:4,
    alignSelf: 'center',
    width: width,
    position: 'absolute',
    height: 0.72*width,
    marginTop: verticalScale(230),
    borderRadius: moderateScale(38),
},

PostDetailPage_title_text:{
    fontWeight: '600',
    fontSize: moderateScale(22.5),
    marginLeft: horizontalScale(22),
    color: '#fff'
},

PostDetailPage_location_text:{
    fontWeight: '600',
    fontSize: moderateScale(15.5),
    fontWeight: '100',
    marginLeft: horizontalScale(25),
    color: '#75B457',
},

PostDetailPage_location_icon:{
    width: moderateScale(22),
    height: moderateScale(22),
    tintColor:'#75B457',
    marginLeft: 3,
},

PostDetailPage_date_label:{
    color:'#ffffff',
    textAlign: 'center',
    marginLeft: horizontalScale(20),
    paddingTop: verticalScale(25),
    fontSize: moderateScale(14),
},

PostDetailPage_date_value:{
    color:'#75B457',
    textAlign: 'center',
    marginLeft: horizontalScale(20),
    paddingTop: verticalScale(15),
    fontSize: moderateScale(18),
},

PostDetailPage_number_label:{
    color:'#ffffff',
    textAlign: 'center',
    width: horizontalScale(110),
    paddingTop: verticalScale(25),
    fontSize: moderateScale(13),
},

PostDetailPage_number_value:{
    color:'#75B457',
    textAlign: 'center',  
    paddingTop: verticalScale(15),
    fontSize: moderateScale(18),    
},

PostDetailPage_description_label: {
    fontWeight: '600',
    fontSize: moderateScale(16),
    fontWeight: '800',
    marginTop: verticalScale(15),
    marginLeft: horizontalScale(25),
    color: '#fff',
},

PostDetailPage_scrollview:{
    width: 0.925*width,
    height: 0.58*width,
    // height: 0.35*width,
    marginTop: verticalScale(10),
    marginLeft: horizontalScale(25),
},

PostDetailPage_confirm_button: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(33),
    backgroundColor: '#75B457',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: horizontalScale(6),
    justifyContent: 'center',
    marginLeft: horizontalScale(14), 
    marginTop: verticalScale(15),
    height: 0.14*width,
    width: 0.7435*width,
    textAlign: 'center',
},

PostDetailPage_confirm_button_text: {
    alignSelf: 'center',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    fontWeight: '500',
    color: '#fff',
},

/**PostDetail Page End */


/**Volunteer Page Start */
featured_container:{
    marginTop: verticalScale(50),
},

featured_title:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    marginBottom: verticalScale(12),
    marginLeft: horizontalScale(45),
},

featured_carausel_container:{
    width: width,
    height: 0.6* width,
},

Volunteer_flatlist_container:{
    marginTop: verticalScale(-12),
    height: 0.45*height,  
  

},

Volunteer_PostDetail_main:{
    position: "relative",
    width: width * 0.825,
    height: 0.650*width,
    marginVertical: verticalScale(10),
    marginBottom: verticalScale(2),
    marginHorizontal: width * 0.05,
    backgroundColor: '#333333',
    borderRadius: moderateScale(25)
  },

Volunteer_PostDetail_image:{
    height: 0.58*0.628*width,
    borderRadius: moderateScale(25),
    margin: moderateScale(12),
    aspectRatio: 'auto',
},

Volunteer_PostDetail_content:{
    marginTop: 0.082*0.628*width,
    flexDirection: 'column',
},

Volunteer_PostDetail_tags:{
    paddingHorizontal: horizontalScale(12),
   
    justifyContent: 'center',
    borderRadius: moderateScale(24),
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
    marginHorizontal: "auto",
    marginBottom: verticalScale(6),
    marginLeft: horizontalScale(14), 
    marginTop: verticalScale(10),
    height: verticalScale(0.1*0.628*width),
    textAlign: 'center',
},

Volunteer_PostDetail_tags_text:{
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#575151',
},
/**Volunteer Page End */


/**Profile Page Start */
ProfilePage_image_container:{
    width: width,
    height: 0.46*width,
    backgroundColor: '#34363A', 
},

ProfilePage_image:{
    height: 0.48*width,
    objectFit: 'cover',
},

ProfilePage_coverimage_cover:{
    width: width,
    position: 'absolute',
    height: 0.48*width,
    backgroundColor: '#000000', 
    opacity:0.2,
},

ProfilePage_settings_icon:{
    width: moderateScale(38),
    height: moderateScale(38),
    marginTop: verticalScale(45),
    marginLeft: 0.85*width,
    tintColor: '#fff'
},

ProfilePage_info_container:{
    backgroundColor:'#34363A',
    opacity: 0.96,
    zIndex:4,
    alignSelf: 'center',
    width: 0.84*width,
    position: 'absolute',
   paddingBottom: verticalScale(15),
    marginTop: 0.415*width,
    borderRadius: moderateScale(24),
},

ProfilePage_info_container_layer1:{ 
    backgroundColor:'#34363A',
    opacity: 0.96,
    alignSelf: 'center',
    alignItems: 'center',
    height: 0.295*width,
    width: 0.297*width,
    marginTop: -0.325*0.415*width,
    borderRadius: moderateScale(24),
},

ProfilePage_pfp:{
    height: 0.295*width,
    width: 0.297*width,
    borderRadius: moderateScale(24),
    alignSelf: 'center',
},

ProfilePage_Username:{
    color:'#ffffff',
    fontWeight: 'bold',
    paddingTop: verticalScale(12),
    fontSize: moderateScale(18),
},

ProfilePage_location:{
    color:'#ffffff',
    paddingTop: verticalScale(5),
    fontSize: moderateScale(14),
},

ProfilePage_targetcp_container: {
    flexDirection: 'row',
    alignSelf: 'left',
    alignItems: 'left',
    marginTop: 0.05*0.415*width,
    borderRadius: moderateScale(24),
},

ProfilePage_targetcp_label:{
    color:'#ffffff',
    textAlign: 'left',
    marginTop: verticalScale(50),
    marginLeft: horizontalScale(20),
    paddingTop: verticalScale(25),
    fontSize: moderateScale(13),
    fontWeight: '900',
},

ProfilePage_targetcp_value:{
    color:'#2FAD97',
    textAlign: 'left',
    marginTop: verticalScale(50),
    paddingTop: verticalScale(25),
    fontSize: moderateScale(13),
    fontWeight: '900',
},

ProfilePage_progressbar:{
    marginTop: verticalScale(15),
    alignSelf: 'center',
    backgroundColor: '#fff',
},

ProfilePage_stats_container:{
    flexDirection: 'row',
    alignSelf: 'left',
    alignItems: 'left',
    borderRadius: moderateScale(24),
},

ProfilePage_csp_container:{
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(24),
},

ProfilePage_csp_label:{
    color:'#ffffff',
    textAlign: 'left',
    marginLeft: horizontalScale(20),
    paddingTop: verticalScale(25),
    fontSize: moderateScale(12),
},

ProfilePage_csp_value:{
    color:'#2FAD97',
    textAlign: 'center', 
    paddingTop: verticalScale(15),
    fontSize: moderateScale(18),
},

ProfilePage_psp_container:{
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(24),
},

ProfilePage_psp_label:{
    color:'#ffffff',
    textAlign: 'left',
    marginLeft: horizontalScale(20),
    paddingTop: verticalScale(25),
    fontSize: moderateScale(12),
},

ProfilePage_psp_value:{
    color:'#2FAD97',
    textAlign: 'center', 
    paddingTop: verticalScale(15),
    fontSize: moderateScale(18),
},

ProfilePage_milestone_rectangle:{
    backgroundColor:'#34363A',
    flexDirection: 'column',
    opacity: 0.96,
    zIndex:4,
    alignSelf: 'center',
    width: 0.84*width,
    // position: 'absolute',
    paddingBottom: 50,
    marginBottom: 20,
    borderRadius: 24,
},

ProfilePage_info_rectangle: {
    flexDirection: 'column',
    opacity: 0.96,
    zIndex:4,
    alignSelf: 'center',
    width: 0.84*width,
    // position: 'absolute',
    paddingBottom: 40,
    marginTop: 0.715*width,
    borderRadius: 24,
},

ProfilePage_milestone_container:{
    flexDirection: 'column',
    marginTop: -0.135*width,
    borderRadius: moderateScale(24),
},

ProfilePage_milestone_heading:{
    color:'#ffffff',
    textAlign: 'left',
    marginTop: verticalScale(50),
    marginLeft: horizontalScale(20),
    paddingTop: verticalScale(25),
    fontSize: moderateScale(14),
    fontWeight: '900',
},

ProfilePage_milestone_item:{
    flexDirection: 'row',
    alignSelf: 'left',
    marginTop: -0.15*width,
    borderRadius: moderateScale(24),
},

ProfilePage_milestone_item_label:{
    color:'#ffffff',
    textAlign: 'left',
    width: 0.5*width,
    marginTop: verticalScale(50),
    marginLeft: horizontalScale(20),
    paddingTop: verticalScale(25),
    fontSize: moderateScale(15),
},

ProfilePage_milestone_item_value:{
    color:'#7DAD2F',
    textAlign: 'right',
    marginTop: verticalScale(52),
    paddingTop: verticalScale(25),
    fontSize: moderateScale(18),
    marginLeft: horizontalScale(45),
},

ProfilePage_location_value:{
    color:'#7DAD2F',
    textAlign: 'right',
    marginTop: verticalScale(52),
    paddingTop: verticalScale(25),
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(10),
},

/**Profile Page End */


/**Bottom Tab Navigator Start */

BottomTabBar:{
    position: 'absolute',
    bottom: verticalScale(20),
    left: horizontalScale(25),
    right: horizontalScale(25),
    backgroundColor: '#34363A',
    borderRadius: moderateScale(64),
    borderTopWidth: 0,
    height: verticalScale(55),
},


/**Bottom Tab Navigator End */


/**Organization Posts Page Start */

Organization__flatlist_container:{
    marginTop: verticalScale(40),
    height: 0.90*height - moderateScale(60),  

},

flatlist_heading:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(24),
    marginLeft: horizontalScale(30),
    marginBottom: verticalScale(2),
},

OrgProfilePage_milestone_rectangle:{
    backgroundColor:'#34363A',
    flexDirection: 'column',
    alignItems:'flex-start',
    opacity: 0.96,
    zIndex:4,
    alignSelf: 'center',
    width: 0.84*width,
    // position: 'absolute',
    paddingBottom: 50,
    marginTop: 0.75*width,
    borderRadius: 24,
},

OrgProfilePage_history_item_label:{
    color:'#ffffff',
    textAlign: 'left',
    width: 0.5*width,
    marginTop: verticalScale(50),
    marginLeft: horizontalScale(20),
    paddingTop: verticalScale(25),
    fontSize: moderateScale(15),
},

OrgProfilePage_history_item_value:{
    color:'#7DAD2F',
    textAlign: 'right',
    
    marginTop: verticalScale(52),
    paddingTop: verticalScale(20),
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(15),
},

OrgProfilePage_location_icon:{
    width: horizontalScale(12),
    height: verticalScale(12),
    
    position: 'absolute',
    tintColor: '#fff',
},
imageContainer: {
    borderRadius: 28,
    overflow: 'hidden',
},
image: {
    width: '100%',
    height: undefined,
    aspectRatio: 277/193,
},
/**Organization Posts Page End */

});

export default styles;