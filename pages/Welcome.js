import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import images from '../assets/images'
import { Button as ButtonPaper } from 'react-native-paper';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.View}>
        <Image
            source={images.logo2}
            style={{
                height:150,
                width:150
            }}
        />
        <Text style={styles.title}>Bienvenue sur Go To Eat</Text>
        <Text style={styles.paragraph}>La première plateforme Suisse de Restauration par Abonnement.</Text>

        <Image
            source={images.eat}
            style={{
                width:200,
                height:200,
                marginBottom:"12%"
            }}
        />
        <ButtonPaper style={{backgroundColor:"#cc0066"}} mode='contained' icon="arrow-right">GO</ButtonPaper>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        padding:10
    },
    View:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:23,
        fontWeight:"bold",
        marginBottom:"10%"
    },
    paragraph:{
        fontSize:19,
        textAlign:"center",
        color:"gray",
        marginBottom:"15%"
    }
})