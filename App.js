
import React, {Component,useRef} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button} from 'react-native';
import { captureRef, captureScreen ,ViewShot} from "react-native-view-shot";
import NewVd from './NewVd';
import Newved from './Newved';

export default class App extends Component {
constructor(){
  super();
  this.state={
    item:null,
    captureProcessisReady:false,
    myView:false
  };
  this.func=this.func.bind(this);
}
componentDidMount(){

}
     result1=()=>{
                    console.log("i am here ");
                    this.setState({captureProcessisReady:true});
                 }

     func = (uri) => {
                        console.log('ADD item quantity with id: ', uri);
                        this.setState({item:uri,myView:true});
                     };
 
render() {
    return (
      <View style={styles.container}>
        {/* <NewVd  
         func={this.func}/> */}
         <Newved />
          <Text>...Something to rasterize...</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Button onPress={()=>this.result1()} title="press Me"/>
                <View>
                {this.state.captureProcessisReady?( <NewVd func={this.func}/>):null}
                </View>
                <View>
                {this.state.myView?( <Image source={{uri:this.state.item !== null?`${this.state.item}`:'https://picsum.photos/200'}} style={{width:100,height:100}} />):null}
                </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});