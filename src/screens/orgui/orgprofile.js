import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Image} from 'react-native-elements';
import ProgressBar from 'react-native-progress/Bar';
import styles from '../../Styles_holder';
import { TouchableOpacity } from 'react-native-ui-lib';


const { width, height } = Dimensions.get("window");

const Orgprofile = ({navigation}) => {
  return (
    <View style={styles.PostDetailPage}>
      <View id={'imagecontainer'} style={styles.ProfilePage_coverimage_container}>
          <Image source={require('../../../src/assets/coverpic.jpg')} style={styles.ProfilePage_image}/>
          <View style={styles.ProfilePage_image_cover}/>
      </View> 
        
    
    <View style={styles.PostDetailPage_back_container}>     
    <TouchableOpacity onPress={() => navigation.navigate('Settings')} >    
        <Image  source ={require('../../assets/icons/settings.png')}
                style = {styles.ProfilePage_settings_icon}/>
    </TouchableOpacity>
    </View>
  

    <View style={styles.ProfilePage_info_container}>

      <View style={ styles.ProfilePage_info_container_layer1}>

          <Image source={require('../../../src/assets/fakeoda.png')} style={styles.ProfilePage_pfp}/>

          <Text style={styles.ProfilePage_Username}>Desh Bachau</Text>
          <Text style={styles.ProfilePage_location}>Patan</Text>  
    </View>

    <View style={{
        height: 65,
    }}/>

    <View style={styles.ProfilePage_stats_container}>
       
      <View style={styles.ProfilePage_csp_container}>
          <Text style={styles.ProfilePage_csp_label}>Total No. of Tasks posted</Text>
          <Text style={styles.ProfilePage_csp_value}>15 </Text>
      </View>
    
      <View style={styles.ProfilePage_psp_container}>
          <Text style={styles.ProfilePage_psp_label}>Total Ongoing Tasks</Text>
          <Text style={styles.ProfilePage_psp_value}>18 </Text>
      </View>
    </View>

    <View style={styles.ProfilePage_stats_container}>
       
       <View style={styles.ProfilePage_csp_container}>
           <Text style={styles.ProfilePage_csp_label}>Ongoing and Accepted Tasks</Text>
           <Text style={styles.ProfilePage_csp_value}>15 </Text>
       </View>
     
       <View style={styles.ProfilePage_psp_container}>
           <Text style={styles.ProfilePage_psp_label}>Completed Tasks</Text>
           <Text style={styles.ProfilePage_psp_value}>18 </Text>
       </View>
    </View>

    </View>        
    

    <View style={styles.OrgProfilePage_milestone_rectangle}>

<View style={styles.ProfilePage_milestone_container}>
<Text style={styles.ProfilePage_milestone_heading}>History of Tasks </Text>
    
<View style={styles.ProfilePage_milestone_item}>
    <Text style={styles.OrgProfilePage_history_item_label}>
      Tree Plantation in Bhaktapur</Text>
    <Text style={styles.OrgProfilePage_history_item_value}> 15th July</Text>
</View>

<View style={styles.ProfilePage_milestone_item}>
    <Text style={styles.OrgProfilePage_history_item_label}>
   Bagmati Cleaning Campaign</Text>
    <Text style={styles.OrgProfilePage_history_item_value}>20th August</Text>
</View>

<View style={styles.ProfilePage_milestone_item}>
    <Text style={styles.OrgProfilePage_history_item_label}>
   Environmen Awareness Campaign, Patan</Text>
    <Text style={styles.OrgProfilePage_history_item_value}>15th May</Text>
</View>

</View> 

</View>   

 
</View>
  );
};

export default Orgprofile;

