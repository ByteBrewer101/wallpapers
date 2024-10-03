import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";


export default function Account() {
  return (
    <SafeAreaView>
      <Link href={"/accountinfo"}>
      account info
      </Link>
      <Text>Account</Text>
      
    
    </SafeAreaView>
  );
}
