import {StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import styles from '../../Styles_holder';

const { width, height } = Dimensions.get("window");

const Postdetail = ({navigation}) => {

  return (
<View style={styles.PostDetailPage}>
    <View id={'imagecontainer'} style={styles.PostDetailPage_image_container}>
      <Image  source={require('../../../src/assets/img/recyclerview/post-image.jpg')} style={{
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

      <Text style={styles.PostDetailPage_title_text}>{'Tree Plantation In Patan'}</Text>

      <View style={{
        display:'flex',
        flexDirection: 'row',
        marginTop: 10,
      }}>

      <Text style={styles.PostDetailPage_location_text}>{'Patan Municipality'}</Text>

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

              <Text style={styles.PostDetailPage_date_value}>July 23</Text>
          </View>
    
          <View style={{
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            marginLeft: 150,
          }}>

            <Text style={styles.PostDetailPage_number_label}>Number of Volunteers</Text>

            <Text style={styles.PostDetailPage_number_value}>34</Text>
      </View>
      </View>

      <Text style={styles.PostDetailPage_description_label}>{'Description:'}</Text>

      <ScrollView style={styles.PostDetailPage_scrollview}>
        <Text style={{ 
          fontWeight: '600',
          fontSize: 16,
          color: '#fff',
         }}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.  auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. '}</Text>
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
  </View>
  );
}
export default Postdetail
