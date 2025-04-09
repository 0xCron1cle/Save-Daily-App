import * as React from "react";
import Octicons from '@expo/vector-icons/Octicons';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer, useNavigationContainerRef, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text,Button } from "react-native";
import { CartProvider } from '../components/CartContext';
import { useTheme } from '../components/ThemeContext'
import Toast from 'react-native-toast-message';
import toastConfig from "../components/toastConfig";
import HomeScreen from "./screens/HomeScreen";
import CashbackScreen from "./screens/CashbackScreen";
import FriendsScreen from "./screens/FriendsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AttractionScreen from './screens/AttractionScreen';
import QrCodeScreen from './screens/QrCodeScreen';
import GroupOrderScreen from './screens/GroupOrderScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import PictureScreen from './screens/PictureScreen'
import DealScreen from './screens/DealScreen'
import CheckoutScreen from './screens/CheckoutScreen.js'




const Tab = createBottomTabNavigator();
const HomeNavigator = createStackNavigator();

export default function MainContainer({ }) {
  const navigationRef = useNavigationContainerRef();
  const { colorScheme } = useTheme();
  const isDarkMode = colorScheme === 'dark'




  return (

    <CartProvider>
      <NavigationContainer ref={navigationRef}>
        



        <Tab.Navigator
          initialRouteName="HomeScreen"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              borderTopWidth: 0,
              backgroundColor: isDarkMode ? '#1c1d21' : 'white',
            },
            tabBarActiveTintColor: isDarkMode ? 'white' : 'black',
            tabBarInactiveTintColor: isDarkMode ? 'gray' : 'hsl(0,0%,50%)',
            tabBarShowLabel: true,
            tabBarLabel: () => (
              <Text style={{ color: isDarkMode ? 'white' : 'black' }}>
                {route.name.replace('Screen', '')}
              </Text>
            ),
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'HomeScreen') {
                iconName = 'home';
              } else if (route.name === 'ProfileScreen') {
                iconName = 'person';
              } else if (route.name === 'CashbackScreen') {
                iconName = 'gift';
              } else if (route.name === 'FriendsScreen') {
                iconName = 'people';
              }

              return <Octicons name={iconName} size={size} color={focused ? (isDarkMode ? 'white' : 'black') : isDarkMode ? 'hsl(0,0%,70%)' : 'hsl(0,0%,50%)'} />;
            },
          })}
        >


          <Tab.Screen
            name="HomeScreen"

            screenOptions={{ navigationBarColor: '#1C1D21' }}


          >



            {() => (
              <HomeNavigator.Navigator initialRouteName="Home">
                <HomeNavigator.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <HomeNavigator.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
                <HomeNavigator.Screen name="AttractionScreen" component={AttractionScreen} options={{ headerShown: false }} />
                <HomeNavigator.Screen name="QrCodeScreen" component={QrCodeScreen} options={{ headerShown: false }} />
                <HomeNavigator.Screen name="GroupOrderScreen" component={GroupOrderScreen} options={{ headerShown: false }} />
                <HomeNavigator.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false, presentation: 'modal' }} />
                <HomeNavigator.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
                <HomeNavigator.Screen name="PictureScreen" component={PictureScreen} options={{ headerShown: false, presentation: 'modal' }} />
                <HomeNavigator.Screen name="DealScreen" component={DealScreen} options={{ headerShown: false, presentation: 'modal' }} />
                <HomeNavigator.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: false, presentation: 'modal' }} />

              </HomeNavigator.Navigator>
            )}
          </Tab.Screen>

          <Tab.Screen
            name="CashbackScreen"
            component={CashbackScreen}
            screenOptions={{ navigationBarColor: '#1C1D21' }}
          />

          <Tab.Screen
            name="FriendsScreen"
            component={FriendsScreen}
            screenOptions={{ navigationBarColor: '#1C1D21' }}
          />

          <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            screenOptions={{ navigationBarColor: '#1C1D21' }}
          />

        </Tab.Navigator>
        <Toast config={toastConfig} />
        

      </NavigationContainer>
    </CartProvider>



  )
};


