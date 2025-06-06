import { HeaderButtons } from "@/components/headerButtons";
import { Tabs } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabBar } from "@/components/TabBar";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerRight: () => <HeaderButtons />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          animation: "shift",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          animation: "shift",
          title: "Courses",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="square.grid.2x2" color={color} />
          ),
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: "Progress",
          animation: "shift",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="chart.bar" color={color} />
          ),
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          animation: "shift",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gear" color={color} />
          ),
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      />
    </Tabs>
  );
}
