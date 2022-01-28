import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../conf/GlobalStyles";
import HeaderTabs from "../components/HeaderTabs";

export default function Home() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <HeaderTabs />
    </SafeAreaView>
  );
}
