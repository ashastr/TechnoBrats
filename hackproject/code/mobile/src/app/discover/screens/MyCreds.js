import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as EvernymSdk from "@evernym/react-native-white-label-app";

const MyCreds = (props) => {
  const verifierDomain = "https://780a-2600-1700-4910-7e00-4d1f-fbc6-4e33-582.ngrok.io";
  const processCredentials = (inviteUrl) => {
    EvernymSdk.processCustomerCredentials(inviteUrl, props.handleInvitation);
  };

  useEffect(() => {
    const intervalId = setInterval(callApi, 10000);

    function callApi() {
      try {
        fetch(verifierDomain + "/openProofRequest/123", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((rawResponse) => {
            console.log("Processing Credentials for verify");
            rawResponse.text().then((inviteUrl) => {
              processCredentials(inviteUrl);
              console.log("intervalId", intervalId);
              clearInterval(intervalId);
            });
          })
          .catch((e) => {
            console.log("******* error!!", e);
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  }, []);

  return (
    <View style={{ marginVertical: "40%" }}>
      {}
    </View>
  );
};

export default MyCreds;

const styles = StyleSheet.create({
  notification: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    padding: 70,
    borderRadius: 10,
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
