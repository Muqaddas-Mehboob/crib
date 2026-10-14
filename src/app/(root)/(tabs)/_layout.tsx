// import { NativeTabs, Icon, Label } from "expo-router/unstable-native-tabs";

// export default function TabsLayout() {
//   return (
//     <NativeTabs>
//       <NativeTabs.Trigger name="index">
//         <Icon sf="house.fill" />
//         <Label>Home</Label>
//       </NativeTabs.Trigger>
//       <NativeTabs.Trigger name="search">
//         <Icon sf="magnifyingglass" />
//         <Label>Search</Label>
//       </NativeTabs.Trigger>
//       <NativeTabs.Trigger name="saved">
//         <Icon sf="heart.fill" />
//         <Label>Saved</Label>
//       </NativeTabs.Trigger>
//       <NativeTabs.Trigger name="profile">
//         <Icon sf="person.fill" />
//         <Label>Profile</Label>
//       </NativeTabs.Trigger>
//       <NativeTabs.Trigger name="settings">
//         <Icon sf="gearshape.fill" />
//         <Label>Settings</Label>
//       </NativeTabs.Trigger>
//     </NativeTabs>
//   );
// }

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import type { ColorValue } from "react-native";

const icon = (name: keyof typeof Ionicons.glyphMap) =>
  ({ color, size, focused }: { color: ColorValue; size: number; focused: boolean }) =>
    <Ionicons name={name} color={color} size={size} />;

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#0E4D92" }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon:icon("home") }} />
      <Tabs.Screen name="search" options={{ title: "Search", tabBarIcon: icon("search") }} />
      <Tabs.Screen name="saved" options={{ title: "Saved", tabBarIcon: icon("heart") }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: icon("person") }} />
      <Tabs.Screen name="settings" options={{ title: "Settings", tabBarIcon: icon("settings") }} />
    </Tabs>
  );
}