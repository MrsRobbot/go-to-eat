import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import images from '../assets/images'
import { Button as ButtonPaper, TextInput } from 'react-native-paper';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.View}>
        <Text style={styles.title}>ENREGISTREZ-VOUS</Text>
        <Image
            source={images.signup}
            style={{
                height:200,
                width:200,
                marginTop:"3%"
            }}
        />
        <View style={{marginTop:"5%"}}>
            <TextInput
                label="Nom"
                keyboardAppearance="default"
                style={{
                    marginBottom:"2%",
                    width: 350,
                    height:50
                }}
            />
            <TextInput
                label="Prénoms"
                keyboardAppearance="default"
                style={{
                    marginBottom:"2%",
                    width: 350,
                    height:50
                }}
            />
            <TextInput
                label="Email"
                keyboardAppearance="default"
                keyboardType="email-address"
                style={{
                    marginBottom:"2%",
                    width: 350,
                    height:50
                }}
            />
            <TextInput
                label="Mot de passe"
                keyboardAppearance="default"
                secureTextEntry
                style={{
                    marginBottom:"2%",
                    width: 350,
                    height:50
                }}
            />
            
        </View>
            <ButtonPaper style={{backgroundColor:"#cc0066", marginTop:"2%"}} icon="login" mode='contained' onPress={() => navigation.navigate('Accueil')}>S'INSCRIRE</ButtonPaper>
            <Text onPress={()=>navigation.navigate('Login')} style={{fontWeight:'bold', textAlign:'center', marginTop:"2%", textDecorationLine:"underline"}}>Vous n'avez pas compte ? Connectez-vous !</Text>
      </View>
    </View>
  )
}

export default Signup

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
})