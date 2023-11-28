import { StyleSheet, Text, View, ScrollView, Image, useWindowDimensions, } from 'react-native'
import React, {useState} from 'react'

import Animated, {useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, interpolate} from 'react-native-reanimated'



const CustomImageCarausel = ({data}) => {
    const [NewData] = useState([{key: 'spacer-left'}, ...data, {key: 'spacer-right'}])
    const {width}  = useWindowDimensions();
    const SIZE = width * 0.75;
    const SPACER = (width - SIZE) /2;
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        },
    })
  return (
    <Animated.ScrollView horizontal
        // style={{
        // width: width,
        // height: 0.8*width,
        // }}
     showsHorizontalScrollIndicator = {false} 
     scrollEventThrottle={16}
     snapToInterval={SIZE}
     decelerationRate={'fast'}
     onScroll={onScroll}>
      { NewData.map((item, index ) => {
        const style = useAnimatedStyle(() => {
            const scale = interpolate(
                x.value,
                [(index-2) + SIZE, (index - 1) * SIZE, index*SIZE],
                [0.8, 1, 0.8]
            )
            return {
                transform: [{scale}]
            }
        })

        if(!item.image){
            return  <View style={{width: SPACER}} key={index}/>;
        }
        return(
        <View style = {{
            width: SIZE,
        }} key={index}>
        <Animated.View style = {[styles.imageContainer, style]}>
            <Image source={item.image} style = {styles.image} />


        </Animated.View>
        </View>
        )


      })}
    </Animated.ScrollView>
  )
}

export default CustomImageCarausel

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 28,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 277/193,
    }
})