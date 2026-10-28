import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from "expo-router";
import { InProgressProvider } from "../context/InProgressContext";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <InProgressProvider>
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="add" options={{ title: "Add Activity", presentation: "modal" }} />
        </Stack>
      </InProgressProvider>
    </QueryClientProvider>
  );
}
