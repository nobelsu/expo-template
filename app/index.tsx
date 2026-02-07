import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexPage() {
    return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 16}}>This is a starter template!</Text>
    </SafeAreaView>
    )
}