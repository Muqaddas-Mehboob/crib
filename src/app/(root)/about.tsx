import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function AboutScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold text-primary">Crib</Text>
      <Text className="text-gray-700 mt-2">
        Crib is a property listing app built with React Native and Expo Router
        for the Mobile Application Development course.
      </Text>
      <Text className="text-gray-900 font-bold mt-4">Developer: Muqaddas Mehboob</Text>
      <TouchableOpacity onPress={() => router.back()} className="bg-primary py-4 rounded-xl items-center mt-6">
        <Text className="text-white font-bold">Back to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}