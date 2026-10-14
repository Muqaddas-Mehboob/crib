import { useState } from "react";
import { Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert("Missing info", "Please fill in all fields.");
      return;
    }
    Alert.alert("Thank you", `Thank you, ${name}! We received your message.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
        <Text className="text-2xl font-bold text-primary mb-4">Contact Us</Text>

        <Text className="text-gray-700 mb-1">Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Your name"
          placeholderTextColor="#9CA3AF"
          className="bg-white border border-gray-200 rounded-lg p-3 mb-3"
        />

        <Text className="text-gray-700 mb-1">Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          autoCapitalize="none"
          className="bg-white border border-gray-200 rounded-lg p-3 mb-3"
        />

        <Text className="text-gray-700 mb-1">Message</Text>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Write your message"
          placeholderTextColor="#9CA3AF"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          className="bg-white border border-gray-200 rounded-lg p-3 h-28 mb-4"
        />

        <TouchableOpacity onPress={handleSend} className="bg-primary py-4 rounded-xl items-center">
          <Text className="text-white font-bold">Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}