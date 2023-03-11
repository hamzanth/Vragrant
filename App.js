import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Image } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: "white" }}>icon</Text>
          <View style={{ flexDirection: "row"}}>
            <View style={styles.whiteCircle}></View>
            <View style={styles.blueCircle}></View>
          </View>
        </View>
        <View style={styles.welc}>
          <Text style={{ color: "white", fontSize: 16 }}>Welcome Username</Text>
          <Text style={{ color: "white" }}>Hope you had a great day?</Text>
        </View>
        <View style={styles.mone}>
          <Text style={{ color: "white" }}>John Doe</Text>
          <Text style={{ color: "white", fontSize: 38, fontWeight: "bold", letterSpacing: 4 }}>N20,000</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: "white" }}>6456 6465 **** **** 6789</Text>
            <View style={styles.moneCircle}></View>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.secItem}>
            <View style={styles.secCircle}></View>
            <Text style={{ color: "white", fontWeight: "bold", marginVertical: 8 }}>Send</Text>
            <Text style={{ color: "white", fontSize: 12 }}>Send money to other account from your account</Text>
          </View>
          <View style={styles.secItem}>
            <View style={styles.secCircle}></View>
            <Text style={{ color: "white", fontWeight: "bold", marginVertical: 8 }}>Receive</Text>
            <Text style={{ color: "white", fontSize: 12 }}>Receive money from other account to your account</Text>
          </View>
          <View style={styles.secItem}>
            <View style={styles.secCircle}></View>
            <Text style={{ color: "white", fontWeight: "bold", marginVertical: 8 }}>Pay Bills</Text>
            <Text style={{ color: "white", fontSize: 12 }}>Pay for your subscriptions</Text>
          </View>
          <View style={styles.secItem}>
            <View style={styles.secCircle}></View>
            <Text style={{ color: "white", fontWeight: "bold", marginVertical: 8 }}>Buy Data</Text>
            <Text style={{ color: "white", fontSize: 12 }}>Buy airtime or data for</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View>
            <View style={{backgroundColor: "blue"}, styles.footSquare}></View>
            <Text style={{ color: "#282828" }}>Home</Text>
          </View>
          <View>
            <View style={styles.footSquare}></View>
            <Text style={{ color: "#282828" }}>Card</Text>
          </View>
          <View>
            <View style={styles.footSquare}></View>
            <Text style={{ color: "#282828" }}>History</Text>
          </View>
          <View>
            <View style={styles.footSquare}></View>
            <Text style={{ color: "#282828" }}>Account</Text>
          </View>
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
    // paddingLeft: 30,
    // paddingRight: 30,
    paddingHorizontal: 20,
    color: "white",
    backgroundColor: "black" 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30
  },
  whiteCircle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "white",
    marginRight: 10
  },
  moneCircle: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: "white",
    marginRight: 10
  },
  blueCircle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderColor: "blue",
    borderWidth: 1
  },
  mone: {
    backgroundColor: "cornflowerblue",
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  section: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  secItem: {
    width: "47%",
    backgroundColor: "#282828",
    paddingVertical: 18,
    paddingHorizontal: 6,
    borderRadius: 6,
    marginBottom: 14
  },
  secCircle: {
    height: 30,
    width: 30,
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 1
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  footSquare: {
    height: 20,
    width: 20,
    backgroundColor: "#282828",
  }
});
