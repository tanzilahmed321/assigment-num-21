import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import Icon from 'react-native-vector-icons/AntDesign'

const Home = () => {

    const navigation = useNavigation()

    const handle_navigation = ()=>{
        navigation.navigate('About')
    }


  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        
      <Text style={{fontSize:50}}>Home</Text>
      <TouchableOpacity onPress={handle_navigation}>
        <Text>
            Go to About
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home