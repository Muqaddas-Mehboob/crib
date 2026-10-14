import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SavedScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold text-primary">Saved Screen</Text>
    </SafeAreaView>
  );
}