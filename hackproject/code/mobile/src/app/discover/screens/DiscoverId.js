import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as EvernymSdk from "@evernym/react-native-white-label-app";

export default function DiscoverId(props) {
  const issuerDomain = "https://02f4-217-180-232-50.ngrok.io";
  const verifierDomain = "";
  const processCredentials = (inviteUrl) => {
    console.log("EvernymSdk", JSON.stringify(EvernymSdk));
    EvernymSdk.processCustomerCredentials(inviteUrl, props.handleInvitation);
  };

  useEffect(() => {
    fetch(issuerDomain + "/invite", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 123, first_name: "John", last_name: "Cena" }),
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
  }, []);
  return (
    <View>
      <Text>Creating Credentials</Text>
    </View>
  );
}
