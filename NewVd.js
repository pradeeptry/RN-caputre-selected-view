import ViewShot from "react-native-view-shot";
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class NewVd extends Component {
    constructor(props){
        super(props);

  
}
onCapture = uri => {
    console.log("do something with ", uri);
    this.props.func(uri);                   //for the parent using callback
  }
    render() {
      return (
        <ViewShot onCapture={this.onCapture} captureMode="mount">
          <Text>...Something to rasterize...</Text>
        </ViewShot>
      );
    }
  }

export default NewVd;
