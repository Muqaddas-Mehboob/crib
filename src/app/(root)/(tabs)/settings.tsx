import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold text-primary mb-4">Settings</Text>
      <TouchableOpacity
        onPress={() => router.push("/about")}
        className="bg-white border border-gray-200 rounded-xl p-4"
      >
        <Text className="text-base text-gray-900">About this app</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}