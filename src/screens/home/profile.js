import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { COLORS } from '../../constants';
import { Image } from 'react-native-elements';
import ProgressBar from 'react-native-progress/Bar';
import styles from '../../Styles_holder';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../hooks/context';

import { ScrollView } from 'react-native';


const { width, height } = Dimensions.get("window");

const Profile = () => {
  const navigation = useNavigation();
  const auth = useContext(AuthContext);
  const logOut = () => {
    auth.logOut();
    auth.user = undefined;
    navigation.navigate('Landing');
  };
  return (
    <View style={styles.PostDetailPage}>
      <View id={'imagecontainer'} style={styles.ProfilePage_coverimage_container}>
        <Image source={require('../../../src/assets/coverpic.jpg')} style={styles.ProfilePage_image} />
        <View style={styles.ProfilePage_image_cover} />
      </View>

      <View style={styles.PostDetailPage_back_container}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} >
          <Image source={require('../../assets/icons/settings.png')}
            style={styles.ProfilePage_settings_icon} />

        </TouchableOpacity>
      </View>


      <View style={styles.ProfilePage_info_container}>

        <View style={styles.ProfilePage_info_container_layer1}>

          <Image source={require('../../../src/assets/fakeoda.png')} style={styles.ProfilePage_pfp} />

          <Text style={styles.ProfilePage_Username}>John Doe</Text>
          <Text style={styles.ProfilePage_location}>Sanepa</Text>
        </View>

        <View style={styles.ProfilePage_targetcp_container}>
          <Text style={styles.ProfilePage_targetcp_label}>Target Community Point:  </Text>
          <Text style={styles.ProfilePage_targetcp_value}>100 </Text>
        </View>
        <ProgressBar progress={0.5} width={0.76 * width} height={0.016 * width} color="#75B457" style={styles.ProfilePage_progressbar} />

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

      <ScrollView style={styles.ProfilePage_info_rectangle}>
        <View style={{ marginBottom: 70 }}>
          <View style={styles.ProfilePage_milestone_rectangle}>

            <View style={styles.ProfilePage_milestone_container}>
              <Text style={styles.ProfilePage_milestone_heading}>Participating tasks </Text>

              <View style={styles.ProfilePage_milestone_item}>
                <Text style={styles.ProfilePage_milestone_item_label}>
                  Participate in Bagmati Cleaning Campaign </Text>
                <View style={{ flexDirection: 'row', display: 'inline', }}>
                  <Text style={styles.ProfilePage_location_value}>Sanepa</Text>
                  <Image source={require('../../assets/icons/location.png')}
                    resizeMode='contain'
                    style={styles.OrgProfilePage_location_icon} />
                </View>
              </View>

              <View style={styles.ProfilePage_milestone_item}>
                <Text style={styles.ProfilePage_milestone_item_label}>
                  Participate in Patan Forestation </Text>
                <Text style={styles.ProfilePage_location_value}>Patan</Text>
              </View>

              <View style={styles.ProfilePage_milestone_item}>
                <Text style={styles.ProfilePage_milestone_item_label}>
                  Staying in Line for Mr Sharma </Text>
                <Text style={styles.ProfilePage_location_value}>Kupondole</Text>
              </View>

            </View>

          </View>
          <View style={styles.ProfilePage_milestone_rectangle}>

            <View style={styles.ProfilePage_milestone_container}>
              <Text style={styles.ProfilePage_milestone_heading}>Milestones </Text>

              <View style={styles.ProfilePage_milestone_item}>
                <Text style={styles.ProfilePage_milestone_item_label}>
                  Volunteer in 10 Community Works </Text>
                <Text style={styles.ProfilePage_milestone_item_value}>  5/10 </Text>
              </View>

              <View style={styles.ProfilePage_milestone_item}>
                <Text style={styles.ProfilePage_milestone_item_label}>
                  Participate in 15 Personal Works </Text>
                <Text style={styles.ProfilePage_milestone_item_value}>  3/15 </Text>
              </View>

              <View style={styles.ProfilePage_milestone_item}>
                <Text style={styles.ProfilePage_milestone_item_label}>
                  Volunteer in 5 Environmental Projects </Text>
                <Text style={styles.ProfilePage_milestone_item_value}>  2/5 </Text>
              </View>

            </View>

            <View style={{ alignSelf: 'stretch' }}>
              <TouchableOpacity onPress={logOut}>
                <View style={{ ...styles.Login_button }}>
                  <Text style={styles.Button_text}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

