import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { Header, Icon } from 'react-native-elements';
import { Searchbar, Button as ButtonPaper } from 'react-native-paper';
import images from '../assets/images';
import imagees from '../assets/data';

const Restaurants = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

  return (
      
    <View style={styles.container}>
        <Header
            backgroundColor="#669999"
            leftComponent={{
                icon: 'menu',
                color: '#fff',
            }}
            rightComponent={
                <View style={styles.headerRight}>
                    <TouchableOpacity>
                        <Icon name="map" color="white" />
                    </TouchableOpacity>
                </View>
            }
            centerComponent={
                <View>
                    <Searchbar
                        style={{
                            height:30
                        }}
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>
            }
        />
        <Text style={styles.title}>Catégories</Text>
        
        <View style={{padding:12, alignItems:"center", justifyContent:"center"}}>
            <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", padding:15}}>
                <View style={{margin:10}}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={images.food1}
                            style={{
                                width:100,
                                height:100,
                                marginBottom:"1%"
                            }}
                        />
                        <Text style={{textAlign:"center", fontWeight:'bold'}}>Libanais</Text>
                    </TouchableOpacity>
                </View>
                <View style={{margin:10}}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={images.food1}
                            style={{
                                width:100,
                                height:100,
                                marginBottom:"1%"
                            }}
                        />
                        <Text style={{textAlign:"center", fontWeight:'bold'}}>Poulet</Text>
                    </TouchableOpacity>
                </View>
                <View style={{margin:10}}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={images.food1}
                            style={{
                                width:100,
                                height:100,
                                marginBottom:"1%"
                            }}
                        />
                        <Text style={{textAlign:"center", fontWeight:'bold'}}>Poisson</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", padding:15}}>
                <View style={{margin:10}}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={images.food1}
                            style={{
                                width:100,
                                height:100,
                                marginBottom:"1%"
                            }}
                        />
                        <Text style={{textAlign:"center", fontWeight:'bold'}}>Libanais</Text>
                    </TouchableOpacity>
                </View>
                <View style={{margin:10}}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={images.food1}
                            style={{
                                width:100,
                                height:100,
                                marginBottom:"1%"
                            }}
                        />
                        <Text style={{textAlign:"center", fontWeight:'bold'}}>Poulet</Text>
                    </TouchableOpacity>
                </View>
                <View style={{margin:10}}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={images.food1}
                            style={{
                                width:100,
                                height:100,
                                marginBottom:"1%"
                            }}
                        />
                        <Text style={{textAlign:"center", fontWeight:'bold'}}>Poisson</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Restaurants

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    title:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:"5%",
        marginTop:"5%",
        textDecorationLine:"underline"
    },
})