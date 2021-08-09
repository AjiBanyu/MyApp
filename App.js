import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Nav from './src/Component/Nav'

// export default class App extends Component{
//   render(){
//     return(
//       <View style = {{flex:1}}>
//         <View style = {{flex: 1, backgroundColor: 'blue'}}></View>
//         <View style = {{height: 54, backgroundColor: 'yellow'}}></View>
//       </View>
//     )
//   }
// }

const App = () => {
  return (
    <View style = {styles.wrapper}>
        <View style = {styles.content}></View>
        <Nav/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  wrapper : {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: "blue"
  }
})

