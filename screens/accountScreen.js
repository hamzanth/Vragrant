import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Image } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.account}>My Account</Text>
            <Text style={{ color: "white", fontSize: 12 }}>Irekpita Anthony</Text>
          </View>
          <Image source={require("./assets/mark.jpg")} style={styles.avatar} />
        </View>
        <View style={styles.body}>
          <View style={styles.section}>
            <Text style={styles.secIcon}>icon</Text>
            <View style={styles.right}>
              <Text style={{ color: "white" }}>Irekpita Anthony</Text>
              <Text style={{ color: "white", fontSize: 10 }}>View Profile</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.secIcon}>icon</Text>
            <View style={styles.right}>
              <Text style={{ color: "white" }}>Account Verification</Text>
              <Text style={{ color: "white", fontSize: 10 }}>Complete verification</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.secIcon}>icon</Text>
            <View style={styles.right}>
              <Text style={{ color: "white" }}>Help</Text>
              <Text style={{ color: "white", fontSize: 10 }}>Get Help</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.secIcon}>icon</Text>
            <View style={styles.right}>
              <Text style={{ color: "white" }}>Customer Service</Text>
              <Text style={{ color: "white", fontSize: 10 }}>Have an issue? Speak to our team</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.secIcon}>icon</Text>
            <View style={styles.right}>
              <Text style={{ color: "white" }}>Withdraw to Bank</Text>
              <Text style={{ color: "white", fontSize: 10 }}>Add a bank account for withdrawals</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.logout}>Log out</Text>
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
    justifyContent: 'space-around',
    paddingLeft: 50,
    paddingRight: 50,
    color: "white",
    backgroundColor: "black" 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 50
  },
  account: {
    color: "white", 
    fontSize: 20, 
    fontWeight: "bold"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  body: {
    
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#282828",
    borderRadius: 5,
    padding: 7,
    marginBottom: 20
  },
  secIcon: {
    color: "white",
    borderRadius: 100,
    color: "blue",
    backgroundColor: "white",
    height: 44,
    width: 44,
    textAlign: "center",
    paddingTop: 12
  },
  right: {
    marginLeft: 20
  },
  logout: {
    color: "white",
    borderWidth: 0.5,
    borderColor: "red",
    textAlign: "center",
    padding: 12,
    borderRadius: 5,
    fontWeight: "bold"
  }
});
