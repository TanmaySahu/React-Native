import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, Alert, Button } from 'react-native';

function AlertScreen(props){
  return(
    <View style={styles.container}>
    <View style={styles.container1}>
        </View>
        <View style={styles.container2}>
        <Button
          title={"alert"} 
          onPress ={() =>Alert.alert(
            "Wash your hand",
            "You just came back from market YOU SHOULD WASH YOUR HANDS",
            [
              {
                text:"I dont't have any hands!!",
                onPress:()=> ToastAndroid.show("अफ़सोस हुआ जान के :(", ToastAndroid.SHORT)
              },
              {
                text:"Ask me later",
                onPress:()=>ToastAndroid.show("काल करे सो आज कर, आज करे सो अब", ToastAndroid.SHORT)
              },
              {
                text:"ok boomer",
                onPress:()=>ToastAndroid.show("mar ja bsdk", ToastAndroid.SHORT)
              },
            ],
            {cancelable:true}
          )}
        />
        </View>
 </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: "wrap"

  },
  container1: {
    width:"100%",
    height:"100%",
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container2: {
    flex:1,
    position:"absolute",
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default AlertScreen;
