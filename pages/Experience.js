import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import images from '../assets/images'
import { Button as ButtonPaper } from 'react-native-paper';

const Experience = () => {
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
            <Text style={styles.title}>Pour une expérience unique</Text>
            <Image 
                source={images.experience}
                style={{
                    width:300,
                    height:180
                }}
            />
            <Text style={styles.paragraph}>Nos partenaires de confiance et nous utilisons des technologies de traking pour collecter des données sur la manière dont vous utilisez Go To Eat, en vue d’améliorer et de personnaliser votre expérience, de renforcer la sécurité.</Text>
            <Text style={{fontWeight:'bold', textAlign:'center', marginTop:"2%", textDecorationLine:"underline"}}>Politique de confidentialité</Text>

            <ButtonPaper style={{backgroundColor:"#cc0066", marginTop:"5%"}} mode='contained' icon="arrow-right">ACCEPTER ET CONTINUER</ButtonPaper>

        </View>
    </View>
  )
}

export default Experience

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
        fontSize:15,
        textAlign:"center",
        marginBottom:"1%",
        marginTop:"5%"
    }
})