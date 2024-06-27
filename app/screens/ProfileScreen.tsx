import React, { Children, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Theme } from "../styles/Theme";
import { ScreenLayout } from "../components/screenLayout";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import BottomTab from "../navigation/bottomTabNavigation";
import { CustomText } from "../components/text";
import { useNavigation } from "@react-navigation/native";

const favouriteItems = [
  {
    image: require("../assets/tie.jpg"),
  },
  {
    image: require("../assets/jeans.jpg"),
  },
];

const recentItems = [
  {
    image: require("../assets/saleBackground.jpg"),
  },
  {
    image: require("../assets/shoes.jpg"),
  },
];

const { width } = Dimensions.get("window");

export default function ProfileScreen({ navigation }) {
  // const navigation = useNavigation();
  const scrollViewRef1 = useRef<ScrollView>(null);
  const scrollViewRef2 = useRef<ScrollView>(null);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (scrollViewRef1.current) {
        const newIndex1 = (currentIndex1 + 1) % favouriteItems.length;
        scrollViewRef1.current.scrollTo({
          x: newIndex1 * width,
          animated: true,
        });
        setCurrentIndex1(newIndex1);
      }
    }, 3000);

    const interval2 = setInterval(() => {
      if (scrollViewRef2.current) {
        const newIndex2 = (currentIndex2 + 1) % recentItems.length;
        scrollViewRef2.current.scrollTo({
          x: newIndex2 * width,
          animated: true,
        });
        setCurrentIndex2(newIndex2);
      }
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [currentIndex1, currentIndex2, favouriteItems.length]);

  return (
    <ScreenLayout>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}>
        <MaterialIcons name="settings" color={Theme.primaryColor} size={35} />
        <View
          style={{
            // borderWidth: 2,
            borderRadius: 50,
            padding: 6,
            backgroundColor: Theme.primaryColor,
          }}>
          <MaterialCommunityIcons
            name="comment"
            color="white"
            size={24}
            onPress={() =>
              navigation.navigate("HomePageNavigation", {
                screen: "MessagesScreen",
              })
            }></MaterialCommunityIcons>
        </View>
      </View>
      <CustomText
        fontFamily="topic"
        style={{
          color: Theme.primaryColor,
          fontSize: 24,
          marginTop: 10,
        }}>
        Hi Mary,
      </CustomText>
      <View style={styles.mainView}>
        <CustomText fontFamily="topic" style={styles.introText}>
          Your Favourites...
        </CustomText>
        <View style={styles.slideView}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            ref={scrollViewRef1}
            snapToAlignment="center"
            decelerationRate="fast">
            {favouriteItems.map((item, index) => (
              <Image
                key={index}
                source={item.image}
                resizeMode="stretch"
                style={styles.slideImage}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.mainView}>
        <CustomText fontFamily="topic" style={styles.introText}>
          Recently viewed...
        </CustomText>
        <View style={styles.slideView}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            ref={scrollViewRef2}
            snapToAlignment="center"
            decelerationRate="fast">
            {recentItems.map((item, index) => (
              <Image
                key={index}
                source={item.image}
                resizeMode="stretch"
                style={styles.slideImage}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  mainView: { height: 200, marginBottom: 50, marginTop: 20 },
  introText: {
    textAlign: "right",
    fontSize: 18,
    marginBottom: 14,
    color: Theme.primaryColor2,
    fontWeight: "500",
  },
  slideView: { borderRadius: 20, overflow: "hidden" },
  slideImage: {
    width: width,
    borderRadius: 20,
    height: 200,
  },
});
