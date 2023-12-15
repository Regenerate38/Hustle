import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native-ui-lib";
import { ImageBackground } from "react-native";
import styles from "../Styles_holder";

const CustomImageCarausel = ({ data, navigation }) => {
  const tempData = [...data];
  tempData.reverse();
  const newData = [{ item: "spacer-right" }, ...tempData, { item: "spacer-left" }];
  const { width } = useWindowDimensions();

  const POST_WIDTH = width * 0.825;
  const POST_HEIGHT = 0.5 * width;
  const SIZE = width * 0.75;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });
  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToInterval={SIZE}
      decelerationRate={"fast"}
      onScroll={onScroll}
    >
      {newData.map((item, index) => {
        const style = useAnimatedStyle(() => {
          const scale = interpolate(
            x.value,
            [index - 2 + SIZE, (index - 1) * SIZE, index * SIZE],
            [0.9, 1, 0.9]
          );
          return {
            transform: [{ scale }],
          };
        });

        if (!item.title) {
          return <View style={{ width: SPACER }} key={index} />;
        }
        return (
          <View
            style={{
              width: SIZE,
            }}
            key={index}
          >
            <Animated.View style={[styles.imageContainer, style]}>
              <TouchableOpacity
                onPress={() => navigation.navigate("VPostDetail")}
              >
                <ImageBackground
                  source={
                    item.image ? { uri: item.image } : require("../assets/img/carausel/image4.png")
                  }
                  style={styles.image}
                >
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 2,
                      width: "100%",
                      backgroundColor: "rgba(0,0,0,0.8)",
                      bottom: 0,
                      paddingBottom: 15,
                    }}
                  >
                    <View
                      style={{
                        marginTop: 0.082 * POST_HEIGHT,
                        flexDirection: "column",
                      }}
                    >
                      <Text style={styles.PostDetail_title_text}>
                        {item.title}
                      </Text>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Text style={styles.PostDetail_location_text}>
                          Jawalakhel
                        </Text>

                        <Image
                          source={require("../assets/icons/location.png")}
                          resizeMode="contain"
                          style={styles.PostDetail_location_icon}
                        />
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </Animated.View>
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};

export default CustomImageCarausel;
