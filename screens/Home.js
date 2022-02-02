import { View, Text, SafeAreaView, ScrollView } from "react-native";
import GlobalStyles from "../conf/GlobalStyles";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestorantItem, { localRestaurants } from "../components/RestorantItem";
import React, { useEffect, useState } from "react";

const YELP_API_KEY =
  "MXlioeeqDlW4wkb9n3vBVyNb0Y2R9l5i3LlXv3YP-oOU2wm-5nSHd4Z0Vy4zRdSUXegCdpQ7hW0Uo9nPV0STZRXE7LAz260EDDcs6v7x7KuvSgelV4XoX_keENj5YXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestorantAPI = () => {
    const yelpURL =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestorantAPI();
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestorantItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
