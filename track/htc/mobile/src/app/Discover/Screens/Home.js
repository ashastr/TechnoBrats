import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const Home = () => {
  const [showNotification, setShowNotification] = useState(false);

  const onNotificationPress = () => console.log("calling verifier");

  return (
    <View>
      {showNotification && (
        <TouchableOpacity
          style={styles.notification}
          onPress={onNotificationPress}
        >
          <Text>✅ Verify with Customer Support</Text>
        </TouchableOpacity>
      )}
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
