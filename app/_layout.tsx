import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import Onboarding from "@/components/onboarding";
import { AppContextProvider } from "@/context/appContext";
import { AuthProvider } from "@/context/authProvider";
import FlashcardOptionsMenu from "@/components/ui/FlashcardOptionsMenu";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [onboarded, setOnborded] = useState(true);
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AppContextProvider>
        <AuthProvider>
          {onboarded ? (
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="notificationsScreen"
                options={{ headerShown: true, title: "Notifications" }}
              />
              <Stack.Screen
                name="search"
                options={{
                  headerShown: true,
                  title: "Discover",
                  presentation: "modal",
                }}
              />
              <Stack.Screen
                name="course/[id]/lesson/[lessonId]/flashcards"
                options={{
                  headerShown: true,
                  title: "Flashcards",
                  headerRight: () => FlashcardOptionsMenu(),
                  animation: "slide_from_right",
                }}
              />
              <Stack.Screen
                name="course/[id]/lesson/[lessonId]/index"
                options={{
                  headerShown: true,
                  title: "Lesson",
                  headerRight: () => FlashcardOptionsMenu(),
                  animation: "slide_from_right",
                }}
              />

              <Stack.Screen
                name="course/[id]/index"
                options={{
                  headerShown: true,
                  title: "Course",
                  presentation: "modal",
                  animation: "slide_from_right",
                }}
              />
              <Stack.Screen name="+not-found" />
            </Stack>
          ) : (
            <Onboarding deboard={() => setOnborded(true)} />
          )}
          <StatusBar style="auto" />
        </AuthProvider>
      </AppContextProvider>
    </ThemeProvider>
  );
}
