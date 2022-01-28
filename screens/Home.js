import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../conf/GlobalStyles";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}
