import {
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../constants";
import CustomImageCarausel from "../../components/CustomImageCarausel";
import { Image, SearchBar } from "react-native-elements";
import styles from "../../Styles_holder";
import { getCommunityJobs } from "../../apiCalls";
const { width } = Dimensions.get("window");

const Volunteers = ({ navigation }) => {
  const [communityJobs, setCommunityJobs] = useState(undefined);

  useEffect(() => {
    async function getJobs() {
      const communityJobs = await getCommunityJobs();
      setCommunityJobs(communityJobs.jobs);
    }
    getJobs();
  }, []);

  useEffect(() => console.log(communityJobs), [communityJobs]);

  const Item = ({ title, image, location, id }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("VPostDetail", { id: id });
      }}
    >
      <View style={styles.Volunteer_PostDetail_main}>
        <View style={{ height: 0.57 * 0.628 * width }}>
          <Image source={image} style={styles.Volunteer_PostDetail_image} />
        </View>

        <View style={styles.Volunteer_PostDetail_content}>
          <Text style={styles.PostDetail_title_text}>{title}</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={styles.PostDetail_location_text}>{location}</Text>
            <Image
              source={require("../../assets/icons/location.png")}
              resizeMode="contain"
              style={styles.PostDetail_location_icon}
            />
          </View>

          {/* <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={styles.Volunteer_PostDetail_tags}
              onPress={() => navigation.navigate("VPostdetail")}
            >
              <Text style={styles.Volunteer_PostDetail_tags_text}>Social</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Volunteer_PostDetail_tags}>
              <Text style={styles.Volunteer_PostDetail_tags_text}>
                Environment
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Volunteer_PostDetail_tags}>
              <Text style={styles.Volunteer_PostDetail_tags_text}>
                Certificates
              </Text>
            </TouchableOpacity>
          </View> */}
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

      <View style={styles.featured_container}>
        <Text style={styles.featured_title}>Featured</Text>
        <View style={styles.featured_carausel_container}>
          {communityJobs && (
            <CustomImageCarausel data={communityJobs} navigation={navigation} />
          )}
        </View>
      </View>

      <SafeAreaView style={styles.Volunteer_flatlist_container}>
        <Text style={styles.flatlist_heading}>Posts</Text>
        {communityJobs && (
          <FlatList
            data={communityJobs}
            renderItem={({ item }) => (
              <Item
                title={item.title}
                image={
                  item.image || require("../../assets/img/carausel/image1.png")
                }
                location={item.location || "Default Location"}
                id={item._id}
              />
            )}
            keyExtractor={(item) => item._id}
            ListEmptyComponent={
              <Text>
                This is where post regarding various volunteering opportunities
                are kept
              </Text>
            }
            ItemSeperatorComponent={postgaps}
            style={{ zIndex: 5 }}
          />
        )}
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Volunteers;
