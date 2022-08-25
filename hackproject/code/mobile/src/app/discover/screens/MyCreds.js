import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as EvernymSdk from "@evernym/react-native-white-label-app";

const MyCreds = (props) => {
  const issuerDomain =
    "https://1b56-2600-1700-4910-7e00-4d1f-fbc6-4e33-582.ngrok.io";
  const verifierDomain = "";
  const processCredentials = (inviteUrl) => {
    console.log("EvernymSdk", JSON.stringify(EvernymSdk));
    EvernymSdk.processCustomerCredentials(inviteUrl, props.handleInvitation);
  };

  const onPress = () => {
    console.log("Calling openProofRequest");
    fetch(issuerDomain + "/openProofRequest/123", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((rawResponse) => {
        console.log("Processing Credentials");
        rawResponse.text().then((inviteUrl) => {
          processCredentials(inviteUrl);
        });
      })
      .catch((e) => {
        console.log("******* error!!", e);
      });
  };
  return (
    <View style={{ marginVertical: "10%" }}>
      <TouchableOpacity style={styles.notification} onPress={onPress}>
        <Text>✅ Verify with Customer Support</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyCreds;

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
