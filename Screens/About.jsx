import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const About = () => {

    const navigation = useNavigation()

    const handle_navigation_back = ()=>{
        navigation.goBack()
    }


  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:50}}>About</Text>
      <TouchableOpacity onPress={handle_navigation_back}>
        <Text>
            Back To Home
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default About