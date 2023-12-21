import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { apiPost } from '../api';

export default function Login({navigation}) {
  const logo = require('../assets/logo.png');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Tabs')
    // postDataToAPI()
  };


  async function postDataToAPI() {
    const url = 'https://soal.staging.id/oauth/token'; // Ganti dengan URL endpoint yang sesuai
    const postData = { 
      username:'support@technopartner.id',
      password:'1234567',
      client_secret:'0a40f69db4e5fd2f4ac65a090f31b823',
      grant_type:'password',
      client_id:'e78869f77986684a',
    };

    const formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('client_secret', '0a40f69db4e5fd2f4ac65a090f31b823');
    formData.append('client_id', 'e78869f77986684a');
    formData.append('username', 'support@technopartner.id');
    formData.append('password', '123456');

    const headers ={
      "Accept": "*/*",
      'Content-Type': 'multipart/form-data',
      }
  
    try {
      const response = await apiPost(url, formData);
      console.log('Respon dari API POST:', response);
      // Lakukan sesuatu dengan respon yang didapat setelah mengirim data
    } catch (error) {
      console.log('Gagal melakukan posting data:', error.message);
      // Tindakan jika gagal mengirim data
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={handlePasswordChange}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fb',
  },
  logoContainer: {
    justifyContent: 'center',
    marginBottom: 100,
  },
  logo: {
    width: 300,
    height: 100,
  },
  formContainer: {},
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    color: '#d3d4d6',
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    paddingHorizontal: 10,
    width: 230,
    height: 35,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonContainer: {
    marginTop: 50,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
