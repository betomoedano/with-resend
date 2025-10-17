import { Stack } from "expo-router";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="form"
        options={{
          headerShown: false,
          presentation: "formSheet",
          sheetAllowedDetents: Platform.select({
            default: [0.32],
            android: [0.7],
          }),
          sheetGrabberVisible: true,
          contentStyle: {
            backgroundColor: isLiquidGlassAvailable() ? "transparent" : "black",
          },
        }}
      />
    </Stack>
  );
}
