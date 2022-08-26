import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as EvernymSdk from "@evernym/react-native-white-label-app";
import LottieView from "lottie-react-native";

export default function DiscoverId(props) {
  const issuerDomain = "https://02f4-217-180-232-50.ngrok.io";
  const verifierDomain = "";
  const processCredentials = (inviteUrl) => {
    EvernymSdk.processCustomerCredentials(inviteUrl, props.handleInvitation);
  };

  useEffect(() => {
    fetch(issuerDomain + "/invite", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 123,
        first_name: "Alice",
        last_name: "Smith",
      }),
    })
      .then((rawResponse) => {
        console.log("Processing Credentials for issuer");
        rawResponse.text().then((inviteUrl) => {
          processCredentials(inviteUrl);
        });
      })
      .catch((e) => {
        console.log("******* error!!", e);
      });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          color: "white",
          fontSize: 30,
          textAlign: "center",
          marginTop: "50%",
        }}
      >
        Creating Credentials
      </Text>
      <LottieView
        source={require("../img/lottie.json")}
        autoPlay
        style={{ flex: 1 }}
      />
    </View>
  );
}
