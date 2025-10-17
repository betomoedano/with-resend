import { isLiquidGlassAvailable } from "expo-glass-effect";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

export default function FormScreen() {
  const [email, setEmail] = useState("");
  const inputRef = useRef<TextInput>(null);

  async function handleSubmit() {
    if (!email) {
      alert("⚠️ Email is required");
      return;
    }

    if (inputRef.current) {
      // dismiss keyboard :)
      inputRef.current.blur();
    }

    try {
      const urlPath = `${process.env.EXPO_BASE_URL!}/api/audience`;
      const response = await fetch(urlPath, {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        console.log("somethign went wrong");
      }

      const data = await response.json();

      console.log("client", data);

      Alert.alert("Success", "You've been added to our contacts list", [
        {
          text: "Continue",
          onPress: router.back,
        },
      ]);
    } catch (e) {
      alert("something went wrong");
      console.log(e);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isLiquidGlassAvailable() ? "transparent" : "#1e1e1eff",
        paddingHorizontal: 16,
        paddingVertical: 32,
        gap: 16,
      }}
    >
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Powered by Expo
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "gray",
            fontSize: 18,
          }}
        >
          Ship full-stack apps fast! 🏎️
        </Text>
      </View>

      <TextInput
        ref={inputRef}
        onChangeText={setEmail}
        onSubmitEditing={handleSubmit}
        placeholder="Email"
        cursorColor={"orange"}
        placeholderTextColor={"gray"}
        selectionColor={"orange"}
        keyboardAppearance="dark"
        keyboardType="email-address"
        autoCapitalize="none"
        autoFocus={Platform.select({ default: true, ios: false })}
        style={{
          height: 60,
          padding: 16,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: "#FFFFFF20",
          fontSize: 16,
          color: "white",
        }}
      />

      <Pressable
        onPress={handleSubmit}
        style={{
          backgroundColor: "white",
          borderRadius: 30,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Continue
        </Text>
      </Pressable>
    </View>
  );
}
