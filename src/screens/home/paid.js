import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../constants";
import { Image, SearchBar, FAB } from "react-native-elements";
import { SafeAreaView } from "react-native";
import styles from "../../Styles_holder";
import { getPaidJobs } from "../../apiCalls";
import { useIsFocused } from "@react-navigation/native";
// import AnimatedLoader from "react-native-animated-loader";
// import {createShimmerPlaceholder} from "react-native-shimmer-placeholder";
// import LinearGradient from "react-native-linear-gradient";

const { width } = Dimensions.get("window");
const POST_WIDTH = width * 0.825;
const POST_HEIGHT = 0.5 * width;

const Paid = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    async function myFunc() {
      if (isFocused) {
        let foundJobs = await getPaidJobs();
        setPostData(foundJobs.jobs);
      };
    }
    myFunc();
  }, [isFocused]);

  postgaps = () => {
    return (
      <View
        style={{
          height: 8,
          width: "100%",
        }}
      />
    );
  };
  const POST_HEIGHT = 0.5 * width;

  // const postData = [
  //     {
  //       id: 1,
  //       title: 'Tree Plantation in Sanepa',
  //       image:require('../../assets/img/recyclerview/post-image.jpg'),
  //       location: 'Patan Municipality',
  //      },
  //      {
  //        id: 2,
  //        title: 'Bagmati Cleaning Program',
  //        image:require('../../assets/img/recyclerview/post-image.jpg'),
  //        location: 'Patan Municipality',
  //       },
  //       {
  //        id: 3,
  //        title: 'Taking care of the Zoo',
  //        image:require('../../assets/img/recyclerview/post-image.jpg'),
  //        location: 'Patan Municipality',
  //       },
  //       {
  //        id: 4,
  //        title: 'Cleaning Program in Pulchowk',
  //        image:require('../../assets/img/recyclerview/post-image.jpg'),
  //        location: 'Patan Municipality',
  //       },
  //       {
  //        id: 5,
  //        title: 'Tree Plantation in Sanepa',
  //        image:require('../../assets/img/recyclerview/post-image.jpg'),
  //        location: 'Patan Municipality',
  //       },
  //       {
  //         id: 6,
  //         title: 'Bagmati Cleaning Program',
  //         image:require('../../assets/img/recyclerview/post-image.jpg'),
  //         location: 'Patan Municipality',
  //        },
  //        {
  //         id: 7,
  //         title: 'Bagmati Cleaning Program',
  //         image:require('../../assets/img/recyclerview/post-image.jpg'),
  //         location: 'Patan Municipality',
  //        },
  //        {
  //         id: 8,
  //         title: 'Bagmati Cleaning Program',
  //         image:require('../../assets/img/recyclerview/post-image.jpg'),
  //         location: 'Patan Municipality',
  //        },
  //        {
  //         id: 9,
  //         title: 'Bagmati Cleaning Program',
  //         image:require('../../assets/img/recyclerview/post-image.jpg'),
  //         location: 'Patan Municipality',
  //        }
  //   ];

  const PostItem = ({ title, image, location, id, pay }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PostDetail", { id: id });
      }}
    >
      <View style={styles.PostDetail_main_view}>
        <View
          style={{
            height: 0.57 * POST_HEIGHT,
          }}
        >
          <Image
            source={image ? {uri: image} : require("../../assets/img/carausel/image4.png")}
            style={styles.PostDetail_image}
          />
        </View>
        <View
          style={{
            marginTop: 0.082 * POST_HEIGHT,
            flexDirection: "column",
          }}
        >
          <Text style={styles.PostDetail_title_text}>{title}</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={styles.PostDetail_location_text}>{location || 'Jawlakhel'}</Text>

            <Image
              source={require("../../assets/icons/location.png")}
              resizeMode="contain"
              style={styles.PostDetail_location_icon}
            />

            <Text style={styles.PostDetail_price_text}>{`Rs ${pay}` || "Rs 100"}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  postgaps = () => {
    return (
      <View
        style={{
          height: 8,
          width: "100%",
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.inner_page_parent_container}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={COLORS.bgColor}
      />

      <View style={styles.search_bar_container}>
        <SearchBar
          placeholder="Search..  "
          inputStyle={{ backgroundColor: "#34363A" }}
          inputContainerStyle={{ height: 38 }}
          bgColor={"#34363A"}
          containerStyle={styles.search_bar}
          searchIcon={null}
          round
        />
      </View>

      <FAB
        placement="right"
        size="large"
        icon={{ name: "add", color: "white" }}
        color="green"
        style={{
          marginBottom: 90,
          zIndex: 20,
        }}
        onPress={() => navigation.navigate("CreatePost")}
        buttonStyle={{ borderRadius: 1000 }}
      />

      <Text style={styles.scrollview_heading}>Type of Tasks</Text>

      <View
        style={{
          flexDirection: "row",
          marginBottom: 8,
        }}
      >
        <ScrollView
          horizontal={true}
          alwaysBounceHorizontal={true}
          style={{
            marginHorizontal: 20,
            flex: 1,
          }}
        >
          <View
            style={{
              position: "relative",
              width: 105,
              height: 105,
              marginVertical: 10,
              marginBottom: 2,
              marginHorizontal: 10,
              backgroundColor: "#7DAD2F",
              borderRadius: 18,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/icons/delivery.png")}
              style={{
                height: 50,
                width: 50,
                marginTop: 18,
                tintColor: '#ffffff',
                marginBottom: 5
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 12,
                justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
                paddingLeft: 13,
                paddingRight: 13,
              }}
            >
              {"Delivery"}
            </Text>
          </View>

          <View
            style={{
              position: "relative",
              width: 105,
              height: 105,
              marginVertical: 10,
              marginBottom: 2,
              marginHorizontal: 10,
              backgroundColor: "#2FAD97",
              borderRadius: 18,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/icons/queuing.png")}
              style={{
                height: 50,
                width: 50,
                marginTop: 18,
                marginBottom: 5,
                tintColor: "#ffffff"
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 12,
                justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
                paddingLeft: 13,
                paddingRight: 13,
              }}
            >
              {"Queuing"}
            </Text>
          </View>

          <View
            style={{
              position: "relative",
              width: 105,
              height: 105,
              marginVertical: 10,
              marginBottom: 2,
              marginHorizontal: 10,
              backgroundColor: "#ADA82F",
              borderRadius: 18,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/icons/digital.png")}
              style={{
                height: 50,
                width: 50,
                marginTop: 18,
                marginBottom: 5,
                tintColor: "#ffffff"
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 12,
                justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
                paddingLeft: 13,
                paddingRight: 13,
              }}
            >
              {"Digital"}
            </Text>
          </View>

          <View
            style={{
              position: "relative",
              width: 105,
              height: 105,
              marginVertical: 10,
              marginBottom: 2,
              marginHorizontal: 10,
              backgroundColor: "#2F52AD",
              borderRadius: 18,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/icons/walk.png")}
              style={{
                height: 50,
                width: 50,
                marginTop: 18,
                marginBottom: 5
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 12,
                justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
                paddingLeft: 13,
                paddingRight: 13,
              }}
            >
              {"Service"}
            </Text>
          </View>

          
        </ScrollView>
      </View>

      <View
        style={{
          marginTop: 5,
          height: width * 1.18,
        }}
      >
        <Text style={styles.flatlist_heading}>Posts</Text>

        <FlatList
          data={postData}
          renderItem={({ item }) => (
            <PostItem
              title={item.title}
              image={item.image}
              // location={item.location || 'Jawlakhel'}
              id={item._id}
              pay={item.pay}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View>
              <ActivityIndicator style={{ height: width }} color="white" size={70} />
            </View>
          }
          ItemSeperatorComponent={postgaps}
        />
      </View>
    </SafeAreaView>
  );
};
export default Paid;
