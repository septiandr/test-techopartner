import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { separateDigitsWithDot } from "./Home";

const menu1 = require("../assets/1.png");
const menu2 = require("../assets/2.png");
const menu3 = require("../assets/3.png");
const menu4 = require("../assets/4.png");
const menu5 = require("../assets/5.png");

const data = {
  status: "success",
  result: {
    categories: [
      {
        category_name: "Seasonal Product",
        menu: [
          {
            name: "Es Cincau",
            description: "Minuman segar dengan cincau dan es batu.",
            photo: menu1,
            price: 10000,
          },
          {
            name: "Es Buah",
            description: "Campuran buah segar dengan es batu.",
            photo: menu2,
            price: 12000,
          },
        ],
      },
      {
        category_name: "Best Seller",
        menu: [
          {
            name: "Kopi Susu",
            description: "Kopi susu dengan cita rasa khas.",
            photo: menu3,
            price: 15000,
          },
          {
            name: "Teh Tarik",
            description: "Teh tarik yang harum dengan busa lembut.",
            photo: menu4,
            price: 12000,
          },
        ],
      },
      {
        category_name: "Coffee",
        menu: [
          {
            name: "Cappuccino",
            description: "Cappuccino klasik dengan busa susu dan kopi.",
            photo: menu5,
            price: 18000,
          },
          {
            name: "Espresso",
            description: "Espresso kental dengan rasa kopi yang pekat.",
            photo: menu1,
            price: 10000,
          },
        ],
      },
      {
        category_name: "Minuman",
        menu: [
          {
            name: "Es Teh",
            description: "Es teh manis segar.",
            photo: menu2,
            price: 5000,
          },
          {
            name: "Jus Jeruk",
            description: "Jus jeruk segar tanpa tambahan gula.",
            photo: menu3,
            price: 8000,
          },
        ],
      },
    ],
  },
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(
    data.result.categories[0].category_name
  );
  const scrollViewRef = useRef(null);
  const tabWidth = 120; // Lebar tab

  const renderTab = (category, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => {
        setSelectedCategory(category.category_name);
        const selectedTabIndex = data.result.categories.findIndex(
          (item) => item.category_name === category.category_name
        );
        scrollViewRef.current.scrollTo({
          x: selectedTabIndex * tabWidth,
          y: 0,
          animated: true,
        });
      }}
      style={{
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomWidth: selectedCategory === category.category_name ? 2 : 0,
        borderBottomColor:
          selectedCategory === category.category_name ? "#000" : "transparent",
        backgroundColor: "#fff",
      }}
    >
      <Text>{category.category_name}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    const selectedTabIndex = data.result.categories.findIndex(
      (item) => item.category_name === selectedCategory
    );
    scrollViewRef.current.scrollTo({
      x: selectedTabIndex * tabWidth,
      y: 0,
      animated: true,
    });
  }, [selectedCategory]);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        {data.result.categories.map((category, index) =>
          renderTab(category, index)
        )}
      </ScrollView>

      <ScrollView ref={scrollViewRef}>
        {data.result.categories.map((category, index) => (
          <View key={index}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                marginVertical: 10,
                marginLeft: 10,
              }}
            >
              {category.category_name}
            </Text>
            <FlatList
              data={category.menu}
              renderItem={({ item }) => (
                <View
                  style={{
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 30,
                    gap: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#dddddd",
                  }}
                >
                  <View>
                    <Image
                      source={item.photo}
                      style={{ width: 60, height: 60 }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
                      {item.name}
                    </Text>
                    <Text style={{ width: 200 }}>{item.description}</Text>
                  </View>
                  <Text style={{ fontWeight: "bold" }}>
                    {separateDigitsWithDot(item.price)}
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
