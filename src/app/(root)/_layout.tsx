import { Stack } from "expo-router";

export default function RootGroupLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
  );
}