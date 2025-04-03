import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import Onboarding from '@/components/onboarding';
// import * as Sentry from "@sentry/react-native";

// Sentry.init({
//   dsn: "https://5f8063918260f19dc2afca0dff97ba58@o4509027272884224.ingest.de.sentry.io/4509027295232080",
//   // Adds more context data to events (IP address, cookies, user, etc.)
//   // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
//   sendDefaultPii: true,
// });

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
const [onboarded, setOnborded] = useState(false)
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }



  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      { onboarded? <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="flashcards/[id]" options={{ headerShown: true, title: "Flashcards" }} />
        <Stack.Screen name="course/[id]" options={{ headerShown: true, title: "Courses" }} />
        <Stack.Screen name="quizes/[id]" options={{ headerShown: true, title: "Quiz" }} />
        <Stack.Screen name="lesson/[id]" options={{ headerShown: true, title: "Lesson" }} />
        <Stack.Screen name="+not-found" />
        </Stack>
      :
      <Onboarding deboard={() => setOnborded(true)}/>}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
