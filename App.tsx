import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Image } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import LoginScreen from './src/screens/LoginScreen';
import { ThemeProvider, useAppTheme } from './src/ThemeContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// External asset URIs utilized to maintain high visual fidelity for the navigation bar.
// Asset Credits: Uicons by Flaticon (https://www.flaticon.com/uicons)
const TAB_ICONS = {
  Home: 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png',
  Scan: 'https://cdn-icons-png.flaticon.com/512/3024/3024300.png',
  Discover: 'https://cdn-icons-png.flaticon.com/512/118/118669.png'
};

function TabNavigator() {
  const { colors } = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: colors.card, 
          height: 85, 
          paddingBottom: 25, 
          paddingTop: 10, 
          borderTopWidth: 0, 
          elevation: 10 
        },
        tabBarActiveTintColor: colors.primaryRed,
        tabBarInactiveTintColor: colors.darkBrown,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '700', marginTop: 5 },
        tabBarIcon: ({ focused }) => {
          const iconUri = TAB_ICONS[route.name as keyof typeof TAB_ICONS];
          const iconColor = focused ? colors.primaryRed : colors.darkBrown;

          return (
            <View style={[styles.tabIconContainer, focused && { backgroundColor: colors.activeTabBg }]}>
              <Image 
                source={{ uri: iconUri }} 
                style={[styles.navIcon, { tintColor: iconColor }]} 
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Main" component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: { paddingHorizontal: 16, paddingVertical: 4, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  navIcon: { width: 22, height: 22, resizeMode: 'contain' }
});