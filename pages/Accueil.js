import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import images from '../assets/images'
import { Button as ButtonPaper, TextInput } from 'react-native-paper';

const Accueil = () => {
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
      <Text style={styles.title}>Les meilleurs restaurants proche de vous</Text>
      <Image
          source={images.search}
          style={{
              height:220,
              width:200,
              alignSelf:"center",
              marginBottom:"3%"
          }}
      />
      <Text style={styles.subtitle}>Laissez-nous accéder à votre position pour vous proposer les meilleurs restaurants autour de vous.</Text>
      
      <ButtonPaper style={{backgroundColor:"#cc0066", marginTop:"8%"}} mode='contained' icon="arrow-right" onPress={() => navigation.navigate('Restaurants')}>VOIR LES RESTAURANTS</ButtonPaper>
      </View>
    </View>
  )
}

export default Accueil

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
    textAlign:"center",
    fontWeight:"bold",
    marginBottom:"7%"
},
subtitle:{
    fontSize:17,
    textAlign:"center"
}
})