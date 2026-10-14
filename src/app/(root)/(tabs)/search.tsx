import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const products = [
  { id: "1", name: "Wireless Headphones", category: "Electronics", price: 7500 },
  { id: "2", name: "Running Shoes", category: "Footwear", price: 9800 },
  { id: "3", name: "Backpack", category: "Accessories", price: 3200 },
  { id: "4", name: "Smart Watch", category: "Electronics", price: 15000 },
  { id: "5", name: "Water Bottle", category: "Lifestyle", price: 1200 },
  { id: "6", name: "Desk Lamp", category: "Home", price: 2800 },
  { id: "7", name: "Yoga Mat", category: "Fitness", price: 2500 },
  { id: "8", name: "Bluetooth Speaker", category: "Electronics", price: 6400 },
];

export default function SearchScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 px-4">
      <Text className="text-2xl font-bold text-gray-900 mt-2">Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 24 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => Alert.alert(item.name, `Price: Rs ${item.price}`)}
            className="bg-white rounded-xl p-4 mb-3 border border-gray-200"
          >
            <Text className="text-base font-bold text-gray-900">{item.name}</Text>
            <Text className="text-gray-500 mt-1">{item.category}</Text>
            <Text className="text-primary font-bold mt-2">Rs {item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}