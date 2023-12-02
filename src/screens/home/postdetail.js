import {StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Image} from 'react-native-elements';
import styles from '../../Styles_holder';
import { getPaidJob, getCommunityJob } from '../../apiCalls';

const { width, height } = Dimensions.get("window");

const Postdetail = ({route, navigation}) => {
  const [jobDetail, setjobDetail] = useState(undefined);

  useEffect(async () => {
    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2]; 
    let tempJobDetail; 
    if (prevRoute.name === "Paid") {
      tempJobDetail = (await getPaidJob(route.params.id));
      setjobDetail(tempJobDetail);
  }
  else if (prevRoute.name === "Volunteer"){
    tempJobDetail = (await getCommunityJob(route.params.id));
    setjobDetail(tempJobDetail);
  };
  }, []);

  useEffect(()=>console.log(jobDetail), [jobDetail]);

  return (
<View style={styles.PostDetailPage}>
    {jobDetail && <View>
     <View id={'imagecontainer'} style={styles.PostDetailPage_image_container}>
      <Image  source={jobDetail.images[0] || require('../../../src/assets/img/recyclerview/post-image.jpg')} style={{
              height: 0.7589*width,
              objectFit: 'cover',
          }}/>
    </View> 
        
    <View style={styles.PostDetailPage_back_container}>
      <Image source ={require('../../assets/icons/back.png')}
              style = {styles.PostDetailPage_back} onPress={() => navigation.goBack()}/>
    </View>

    <View style={styles.PostDetailPage_curved_container}>
    </View>        
    
    <View style={{
        marginTop: -0.1*width,
        flexDirection: 'column',
        zIndex: 10,
      }}>

      <Text style={styles.PostDetailPage_title_text}>{jobDetail.title|| "Default"}</Text>

      <View style={{
        display:'flex',
        flexDirection: 'row',
        marginTop: 10,
      }}>

      <Text style={styles.PostDetailPage_location_text}>{jobDetail.location || "Default Location"}</Text>

      <Image 
        source ={require('../../assets/icons/location.png')}
        resizeMode = 'contain'
        style = {styles.PostDetailPage_location_icon}/>
      </View>
      
      <View style={{
      flexDirection: 'row', alignSelf: 'center',
      }}>
       
          <View style={{
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            }}>
              <Text style={styles.PostDetailPage_date_label}>Date</Text>

              <Text style={styles.PostDetailPage_date_value}>{jobDetail.date || 'Default Date'}</Text>
          </View>
    
          <View style={{
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            marginLeft: 150,
          }}>

            <Text style={styles.PostDetailPage_number_label}>Number of Volunteers</Text>

            <Text style={styles.PostDetailPage_number_value}>{jobDetail.volunteerNo || 1}</Text>
      </View>
      </View>

      <Text style={styles.PostDetailPage_description_label}>{'Description:'}</Text>

      <ScrollView style={styles.PostDetailPage_scrollview}>
        <Text style={{ 
          fontWeight: '600',
          fontSize: 16,
          color: '#fff',
         }}>{jobDetail.desc|| "BLah blah"}</Text>
      </ScrollView>

      <View styles={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <TouchableOpacity style={styles.PostDetailPage_confirm_button} >
                <Text style={styles.PostDetailPage_confirm_button_text}>I would like to Volunteer!</Text>
            </TouchableOpacity>
      </View>
    </View>     
    </View>}
  </View>
  );
}
export default Postdetail
