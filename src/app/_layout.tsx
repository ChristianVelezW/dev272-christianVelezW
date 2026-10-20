import { Stack } from "expo-router";
import { InProgressProvider } from "../context/InProgressContext";
import { ActivityProvider } from "../context/ActivityContext";

export default function RootLayout() {
  return (
    <ActivityProvider>
      <InProgressProvider>
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
      </InProgressProvider>
    </ActivityProvider>
  );
}
