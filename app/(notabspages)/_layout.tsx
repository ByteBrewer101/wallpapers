import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native"
import { Slot } from "expo-router";
import { View } from "react-native";
export default function (){
    return (
      <View>
        <SafeAreaView>
          <Text>Back</Text>
          <Slot />
        </SafeAreaView>
      </View>
    );
}