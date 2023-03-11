import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Form, Button } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconView}>
          <Text style={styles.iconText}>Icon</Text>
        </View>
        <View>
          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={{ color: "white"}}>Login to your Vridge Africa account</Text>
          <View style={styles.form}>
            <TextInput 
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            />
            <TextInput 
            style={styles.input}
            placeholder="password"
            placeholderTextColor="white"
            />
            <Text style={styles.forpass}>Forgot password?</Text>
            <Text style={styles.loginBtn}>Login</Text>
            {/* <Button color="blue" title="Login" style={styles.login} /> */}
            <View style={styles.dontHave}>
              <Text style={{ color: "white" }}>Don't have an account?</Text>
              <Text style={styles.signup}>Sign up</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.copyright}>Copyright 2023 Vridge</Text>
        </View>
        
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 50,
    color: "white",
    backgroundColor: "black" 
  },
  copyright: {
    marginBottom: 20,
    color: "white"
  },
  iconText:{
    color: "dodgerblue",
    // borderWidth: 1,
    // borderColor: "blue",
    // borderStyle: "solid",
    fontWeight: "bold",
    borderRadius: 4,
    fontSize: 16
    // textAlign: "center"
  },
  iconView: {
    marginTop: 50,
    // alignSelf: "flex-start",
    // marginLeft: 10,
    borderStyle: "solid",
    width: "100%"
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white"
  },
  form: {
    marginTop: 40
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
    backgroundColor: "darkgrey"
  },
  forpass: {
    color: "dodgerblue",
    textAlign: "right",
    marginBottom: 40
  },
  loginBtn: {
    backgroundColor: "dodgerblue",
    color: "white",
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    fontWeight: "bold",
    // borderWidth: 2
  },
  dontHave: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15
  },
  signup: {
    color: "dodgerblue"
  }
});
