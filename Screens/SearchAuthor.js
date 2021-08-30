import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, ActivityIndicator, TouchableOpacity, Modal, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// import screens
import Card from './Card';
import ModalScreen from './ModalScreen'

export default function SearchAuthor () {

    const [bookName, setName] = useState("");
    const [load, setLoad] = useState(false);
    const [itemArray, setArray] = useState([]);
    const [modalVisible, setModalVisible] = useState(false)
    
    const [bookData, setData] = useState({});

    useEffect(() => {
        loadData();
    }, [bookName])

    async function loadData() {
        setLoad(true);
        await fetch("https://www.googleapis.com/books/v1/volumes?q=inauthor:"+bookName+'&maxResults=40')
            .then(response => response.json())
            .then(data => setArray(data.items))
        setLoad(false)
    }

    try{

    return (
        <View style={styles.container}>

            <Modal 
              visible = {modalVisible}
              animationType= "fade"
            >

              <View style={styles.modalContainer}>

              <View style={{top: 15, left: 15}}>
                <MaterialIcons name="cancel" size={35} color="#153B84" onPress = {() => setModalVisible(false)} style={{zIndex: 3}}/>
              </View>
              
                <ModalScreen
                  data = {bookData}
                />

              </View>

            </Modal>

            <View style={styles.inputTextContainer}>
                <TextInput 
                    placeholder="&#x1F50E; Search for an author" 
                    style={styles.inputText} keyboardType="default"
                    onChangeText={(text) => setName(text)}
                    value={bookName}
                    />
            </View>

            <View style={styles.loadContainer}>
                {load && <ActivityIndicator color={'#153B84'} size={25} />}
            </View>

            <View style={styles.dataContainer}>
                <FlatList 
                
                    data={itemArray}
                    renderItem={({item: book}) => {
                        try{

                            return (

                                <TouchableOpacity style={styles.touchableContainer} onPress = {() => 
                                {setModalVisible(true)
                                  setData(book)
                                } }>

                                  <Card
                                      bookTitle={book.volumeInfo.title}
                                      bookAuthor={book.volumeInfo.authors}
                                      bookImg={{uri: book.volumeInfo.imageLinks.smallThumbnail}}
                                      bookYear={book.volumeInfo.publishedDate}
                                  />

                                </TouchableOpacity>
                            )
                        }
                        catch(err) {

                            return (

                                <TouchableOpacity style={styles.touchableContainer} onPress = {() =>              
                                {setModalVisible(true)
                                  setData(book)
                                } }>

                                  <Card
                                      bookTitle={book.volumeInfo.title}
                                      bookAuthor={book.volumeInfo.authors}
                                      bookImg={require('../Assets/noImage.png')}
                                      bookYear={book.volumeInfo.publishedDate}
                                  />

                                </TouchableOpacity>
                            )
                        }
                    }}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent: 'space-around'}}
                    style={styles.list}
                />

            </View>


        </View>
    )
    }


    catch(err) {
        return (
            <View styles={{marginTop: 150}}>
                <Text>Book not found!!</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create ({
    container: {
        flex: 1,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',

    },
    inputTextContainer: {
        backgroundColor: 'white',
        marginTop: 25,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 8,

    },
    inputText: {
        fontSize: 20,
        padding: 10,

    },
    loadContainer: {
        padding: 15,
    },
    dataContainer: {
        flex: 1,
        marginTop: -15,
        
    },
    touchableContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
    },
    list: {
        paddingBottom: 45,
    }
}) 