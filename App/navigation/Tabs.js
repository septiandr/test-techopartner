import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import { Image, Text, View } from 'react-native';
import { HeaderTitle } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const logo = require('../assets/logo.png');
const homeActive = require('../assets/home1.png');
const homeInactive = require('../assets/home2.png');
const menuActive = require('../assets/menu1.png');
const menuInactive = require('../assets/menu2.png');

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? homeActive : homeInactive}
              style={{ width: 20, height: 20 }}
            />
          ),
          headerTitle: () => <Image source={logo} style={{ width: 100, height: 30 }} />,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? menuActive : menuInactive}
              style={{ width: 20, height: 20 }}
            />
          ),
          headerTitle: () => (
            <View style={{width:'100%', display: 'flex', justifyContent:'center', alignItems: 'center',}}>
              <Text style={{ textAlign: 'center', width:500, fontWeight:'semibold', fontSize:24 }}>Menu</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
