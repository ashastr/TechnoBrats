import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as EvernymSdk from "@evernym/react-native-white-label-app";

const Home = (props) => {
  // const issuerDomain =
  //   "https://ecd7-2600-1700-4910-7e00-2c9d-4d90-cff5-5035.ngrok.io";
  // const verifierDomain = "";
  // const processCredentials = (inviteUrl) => {
  //   EvernymSdk.processCustomerCredentials(inviteUrl, props.handleInvitation);
  // };

  // useEffect(() => {
  //   fetch(issuerDomain + "/invite", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id: 123, first_name: "John", last_name: "Cena" }),
  //   })
  //     .then((rawResponse) => {
  //       rawResponse.text().then((inviteUrl) => {
  //         processCredentials(inviteUrl);
  //       });
  //     })
  //     .catch((e) => {
  //       console.log("******* error!!", e);
  //     });
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.image}
        source={require("../img/achome.jpeg")}
      >
        {/* <Text> Fake account center screen</Text> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
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
