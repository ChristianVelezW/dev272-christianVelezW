import { Stack } from "expo-router";
import { InProgressProvider } from "../context/InProgressContext";

export default function RootLayout() {
  return (
    <InProgressProvider>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack>
    </InProgressProvider>
  );
}
