import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    ToastAndroid,
    Image
} from 'react-native'

function HomeScreen (props){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.head}>APNA BAZAR</Text>
                <Image source={require("../assets/search_bar.png")} style={{width: 200, height: 30}} />
            </View>
            <View style={styles.productbox}>
                <View style={styles.category}>
                    <View style={{
                        flex:1,
                        width:"97%",
                        top:5, 
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                        backgroundColor:"#f3a683"
                    }}>
                        <View style={{justifyContent:"space-evenly"}}>
                        <Button title="Men's" color="#636e72" onPress={()=>ToastAndroid.show("Heading to Men's Section", ToastAndroid.SHORT)} />
                        <Button title="Mobile" color="#636e72"/>
                        <Button title="PC" color="#636e72"/>
                        </View>
                        <View style={{justifyContent:"space-evenly"}}>
                        <Button title="Women's" color="#636e72" />
                        <Button title="Toys" color="#636e72"/>
                        <Button title="Laptops" color="#636e72"/>
                        </View>
                        <View style={{justifyContent:"space-evenly"}}>
                        <Button title="Camera" color="#636e72" />
                        <Button title="Shoes" color="#636e72"/>
                        <Button title="Watch" color="#636e72"/>
                        </View>
                    </View >
                </View>
                <View style={styles.products}>
                    <View style={{
                        flex:1,
                        width:"97%",
                        top:5,
                        backgroundColor:"#f3a683",
                        alignItems:"center"
                    }}>
                        <Text style={{marginTop:5, color:"white", fontSize:16, backgroundColor:"#636e72"}}>  PRODUCT  </Text>
                        <View style={{flex:1, flexDirection:"row",}}>
                                <View style={styles.product}>

                                </View>
                                <View style={[styles.product, {marginLeft:0}]}>

                                </View>
                        </View>
                        <View style={{flex:1, flexDirection:"row", marginTop:-10}}>
                                <View style={styles.product}>

                                </View>
                                <View style={[styles.product, {marginLeft:0}]}>

                                </View>
                        </View>
                    </View >
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        paddingTop:20,
        backgroundColor:"#fff"
    },
    header:
    {
        backgroundColor:"#636e72",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderBottomWidth:4,
    },
    head:
    {
        color:"white",
        fontWeight:"bold",
        fontSize:30
    },
    productbox:
    {
        backgroundColor:"#fff", 
        flex:8
    },
    category:{
        flex:2,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    },
    products:{
        flex:6,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    },
    cat:
    {
        flexDirection:"column"
    },
    button:
    {
        backgroundColor:"#636e72"
    },
    product:
    {
        flex:1,
        margin:"3%",
        width:"50%",
        backgroundColor:"#fff"
    }
});

export default HomeScreen;