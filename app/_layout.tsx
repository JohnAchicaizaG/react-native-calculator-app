import { StatusBar } from "expo-status-bar";
import { Slot, SplashScreen } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { Colors, Fonts } from "@/constants/theme";
import {
  useFonts,
  SpaceMono_400Regular,
  SpaceMono_700Bold,
} from "@expo-google-fonts/space-mono";
import { globalStyles } from "@/styles/gloabalStyles";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Text style={styles.headerText}>Header</Text>
      <Slot />
      <StatusBar style="light" />
      <Text style={styles.footerText}>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  headerText: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    padding: 10,
    color: Colors.textPrimary,
  },
  footerText: {
    color: Colors.textPrimary,
    fontFamily: Fonts.regular,
    fontSize: 14,
    padding: 10,
  },
});

export default RootLayout;
