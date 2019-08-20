import ViewShot from "react-native-view-shot";
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Newved extends Component {
    constructor(){
        super();
    }
  componentDidMount () {
    this.refs.viewShot.capture().then(uri => {
      // return uri;
      console.log("do something with ", uri);
    });
  }
  render() {
    return (
      <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
        <Text>...Something to rasterize...</Text>
      </ViewShot>
    );
  }
}

export default Newved;