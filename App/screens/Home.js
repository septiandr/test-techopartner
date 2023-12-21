import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { ImageSlider } from "@pembajak/react-native-image-slider-banner";

const motif = require("../assets/motif.png");
const qr = require("../assets/qr.png");
const banner1 = require("../assets/banner1.jpeg");
const banner2 = require("../assets/banner2.jpeg");
const banner3 = require("../assets/banner3.jpeg");

const dummyData = {
  status: "success",
  result: {
    greeting: "Hello, User!",
    name: "John Doe",
    saldo: 50000,
    point: 1000,
    qrcode: qr,
    banner: [{img:'../assets/banner1.jpeg'},{img:'../assets/banner2.jpeg'}, {img:'../assets/banner3.jpeg'}],
  },
};

export function separateDigitsWithDot(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function Home({navigation}) {
  return (
    <View>
      <ImageBackground source={motif} style={{ padding: 30 }}>
        <View
          style={{ backgroundColor: "#fff", borderRadius: 15, padding: 20 }}
        >
          <Text style={{ fontSize: 18 }}>{dummyData.result.greeting}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {dummyData.result.name}
          </Text>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <TouchableOpacity
              onPress ={()=>navigation.navigate('Scan')}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 5, // Untuk Android
                }}
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  source={dummyData.result.qrcode}
                />
              </TouchableOpacity>
              <View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text>Saldo</Text>
                  <Text style={{ fontWeight: "bold" }}>
                    Rp {separateDigitsWithDot(dummyData.result.saldo)}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    marginTop: 5,
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text>Points</Text>
                  <Text
                    style={{
                      marginLeft: 100,
                      fontWeight: "bold",
                      color: "#9ed2c1",
                    }}
                  >
                    {separateDigitsWithDot(dummyData.result.point)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={{marginTop:-40}}>
        <ImageSlider 
        timer={3000}
        data={[
            {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
            {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
            {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
        ]}        
        autoPlay={true}
        showIndicator
      />

      </View>
    </View>
  );
}
