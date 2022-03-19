import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import images from '../assets/images'
import { Button as ButtonPaper } from 'react-native-paper';

const HowItWork = ({navigation}) => {
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
        <Text style={styles.title}>Comment ça marche</Text>
        <Text style={styles.subtitle}>C'est très simple</Text>
        <View style={{flex:1}}>
            <View style={{flex:1, flexDirection:"row",  alignItems:'center'}}>
                <View>
                    <Image
                        source={images.vector3}
                        style={{
                            width:130,
                            height:130,
                            marginRight:"5%"
                        }}
                    />
                </View>
                <View style={{flex:1, flexDirection:"column"}}>
                    <Text style={{fontWeight:"bold", fontSize:18}}>Decouvrez</Text>
                    <Text style={{color:'gray', fontSize:15}}>Les restaurants partenaires proches de vous</Text>
                </View>

            </View>
            <View style={{flex:1, flexDirection:"row", alignItems:'center'}}>
                <View>
                    <Image
                        source={images.vector2}
                        style={{
                            width:130,
                            height:130,
                            marginRight:"5%"
                        }}
                    />
                </View>
                <View style={{flex:1, flexDirection:"column"}}>
                    <Text style={{fontWeight:"bold", fontSize:18}}>Parcourez</Text>
                    <Text style={{color:'gray', fontSize:15}}>Les différentes offres des restaurants partenaires et les avis clients pour faire votre voix. Voir les conditions abonnement sur chaque page de restaurant.</Text>
                </View>

            </View>
            <View style={{flex:1, flexDirection:"row",  alignItems:'center'}}>
                <View>
                    <Image
                        source={images.vector1}
                        style={{
                            width:130,
                            height:130,
                            marginRight:"5%"
                        }}
                    />
                </View>
                <View style={{flex:1, flexDirection:"column"}}>
                    <Text style={{fontWeight:"bold", fontSize:18}}>Abonnement</Text>
                    <Text style={{color:'gray', fontSize:15}}>Réglez votre abonnement en espères ou en ligne avec votre carte de crédit, PayPal et allez savourez votre expérience gastronomique !</Text>
                </View>

            </View>
        </View>
        <ButtonPaper style={{backgroundColor:"#cc0066"}} mode='contained' icon="arrow-right" onPress={() => navigation.navigate('Experience')}>SUIVANT</ButtonPaper>
      </View>
    </View>
  )
}

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
    },
    subtitle:{
        fontSize:23,
        fontWeight:"bold",
        color:"#cc0066"
    }
})

export default HowItWork