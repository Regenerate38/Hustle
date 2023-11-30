import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Icon, Image} from 'react-native-elements';
import ProgressBar from 'react-native-progress/Bar';
import styles from '../../Styles_holder';
import { TouchableOpacity } from 'react-native-ui-lib';
import { TextInput } from 'react-native';


const { width, height } = Dimensions.get("window");

const Settings =({navigation}) => {
  return (
    <View style={styles.PostDetailPage}>
      <View id={'imagecontainer'} style={styles.ProfilePage_coverimage_container}>
          <Image source={require('../../../src/assets/coverpic.jpg')} style={styles.ProfilePage_image}/>
          <View style={styles.ProfilePage_image_cover}/>
      </View> 
        
    <View style={styles.PostDetailPage_back_container}>     
        <TouchableOpacity>
            <Image  source ={require('../../assets/edit.png')}
                style = {styles.ProfilePage_settings_icon}/>
        </TouchableOpacity>
    </View>

    <View style={styles.PostDetailPage_back_container}>
      <Image source ={require('../../assets/icons/back.png')}
              style = {styles.PostDetailPage_back} onPress={() => navigation.goBack()}/>
    </View>

    <View style={styles.ProfilePage_info_container}>

      <View style={ styles.ProfilePage_info_container_layer1}>
            <View>
                <Image source={require('../../../src/assets/fakeoda.png')} style={styles.ProfilePage_pfp}/>
                <Icon name="md-edit" 
                    style={{position: 'absolute', right: 5,top: 5, zIndex:20,}} />
            </View>

          <TextInput editable multiline={false} style={styles.ProfilePage_Username}>John Doe</TextInput>
          <TextInput editable multiline={false} style={styles.ProfilePage_location}>Sanepa</TextInput>  
    </View>

    <View style={styles.ProfilePage_targetcp_container}>
      <Text style={styles.ProfilePage_targetcp_label}>Target Community Point:  </Text>
      <Text style={styles.ProfilePage_targetcp_value}>100 </Text>
    </View>
    <ProgressBar progress={0.5} width={0.76*width} height={0.016*width} color="#75B457" style={styles.ProfilePage_progressbar} />

    <View style={styles.ProfilePage_stats_container}>
       
      <View style={styles.ProfilePage_csp_container}>
          <Text style={styles.ProfilePage_csp_label}>Community Service Point</Text>
          <Text style={styles.ProfilePage_csp_value}>18 </Text>
      </View>
    
      <View style={styles.ProfilePage_psp_container}>
          <Text style={styles.ProfilePage_psp_label}>Paid Service Point</Text>
          <Text style={styles.ProfilePage_psp_value}>18 </Text>
      </View>
      </View>
    </View>        
    

 </View>
  );
};

export default Settings;

