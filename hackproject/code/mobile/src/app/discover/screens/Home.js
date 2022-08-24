import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as EvernymSdk from '@evernym/react-native-white-label-app';

const Home = (props) => {

  const processCredentials = (inviteUrl) => {
    EvernymSdk.processCustomerCredentials(inviteUrl,props.handleInvitation);
  };

  return (
    <View>
       <TouchableOpacity
          style={styles.notification}
          onPress={processCredentials}>
              <Text>Get Credentials</Text>
      </TouchableOpacity>
      <TouchableOpacity
         style={styles.notification}
         onPress={processCredentials}>
             <Text>Verify Credentials</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() => setShowNotification(!showNotification)}
        underlayColor="#EC6B29"
      >
        <Text style={styles.loginText}>Simulate getting a notification</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#fff",
    borderLeftWidth: 4,
    borderColor: "green",
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: "80%",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#EC6B29",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Home;