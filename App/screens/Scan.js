import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const qr = require("../assets/qr.png");


export default function Scan({navigation}) {
  return (
    <View>
        <TouchableOpacity style={{position:'absolute', top:20, right:20}} onPress={()=>navigation.navigate('Home')}>
          <Text style={{fontWeight:'bold', fontSize:18}}>X</Text>
        </TouchableOpacity>
    <View style={{display:'flex', alignItems: 'center',marginTop:150, height: '100%',}}>
        <Text>Show the QR Code below to the cashier</Text>
        <Image source ={qr} style={{marginTop:50}}/>
    </View>

    </View>
  )
}
