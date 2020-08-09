import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import db from './localdb';
import * as Speech from 'expo-speech'
 export default class App extends React.Component {
   constructor(){
     super();
     this.state={
       text:'',
       word:'',
       
     }
   }
  render() {
    return (
      <View style={styles.container}>
      <Header 
      centerComponent={{text:"Pocket Dictionary", style:{color:"white", fontSize:20}}}
      backgroundColor={"blue"}
      />
      <TextInput
       onChangeText={(text)=>{this.setState({
         text:text
       })}}
       value={this.state.text}
       style={styles.inputBox}
      />
      <TouchableOpacity style={styles.goButton} onPress={()=>{this.setState({
        word:this.state.text,
        
      })}}>
      <Text style={styles.buttonText}>
      Go
      </Text>
      </TouchableOpacity>
      <Text style={styles.displayText}>{
        this.state.word
      }
      </Text>
      
      <TouchableOpacity style={styles.goButton} onPress={()=>{
        Speech.speak(this.state.word)
      }}>
      <Text style={styles.buttonText} >
      {this.state.word}
      </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#5cf927',
  },
inputBox:{marginTop:200, width:200, alignSelf:"center", height:40, textAlign:"center", borderWidth:4, outline:"none",backgroundColor:"white"},
goButton:{width:100, height:55, alignSelf:"center", padding:10, margin:10, backgroundColor:"yellow", borderRadius:10},
buttonText:{textAlign:"center", fontSize:20, fontWeight:"bold"},
displayText:{textAlign:"center", fontSize:30},

});
