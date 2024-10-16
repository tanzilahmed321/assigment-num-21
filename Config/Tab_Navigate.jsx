import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screens/Home'
import About from '../Screens/About'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/AntDesign'
import Products from '../Screens/Products'


const Tab_Navigate = () => {
    const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator
    //   initialRouteName='About'
       screenOptions={{
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor:"black",
        tabBarActiveBackgroundColor:"black"
      }}>
        <Tab.Screen options={{tabBarIcon:({color})=>{
            return <Icon name="home" size={30} color={color}/>
        }}} name="Home" component={Home} />

        <Tab.Screen
        options={{tabBarIcon:({color})=>{
            return <Icon name="info" size={30} color={color}/>
        }}} 
         name="About" component={About} />

<Tab.Screen
        options={{tabBarIcon:({color})=>{
            return <Icon name="shoppingcart" size={30} color={color}/>
        }}} 
         name="Products" component={Products} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tab_Navigate