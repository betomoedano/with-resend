import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
// import Animated, { FadeIn } from "react-native-reanimated";
import { Link } from "expo-router";

// const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        padding: 16,
      }}
    >
      <View style={{ flex: 2 }} />

      <Image
        source={require("../assets/resend-wordmark-white.png")}
        style={{ width: "100%", height: 60 }}
        // entering={FadeIn.duration(2000)}
        contentFit="contain"
      />

      <View style={{ flex: 2 }} />

      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Email for developers
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "gray",
          fontSize: 18,
        }}
      >
        The best way to reach humans instead of spam folders. Deliver
        transactional and marketing emails at scale.
      </Text>

      <Link href={"/form"} asChild>
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 30,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 60,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Get started
          </Text>
        </Pressable>
      </Link>

      <View style={{ flex: 1 }} />
    </View>
  );
}
