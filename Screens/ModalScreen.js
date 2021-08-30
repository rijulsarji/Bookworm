import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Button, Linking} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ModalScreen({data}) {

    var bookYear;
    var bookTitle;
    var bookImg;
    var bookRating;
    var bookDesc;
    var bookMaturity;
    var bookPages;

    var bookLink = 'https://books.google.com/ebooks?id='+data.id+'&dq=holmes&as_brr=4&source=webstore_bookcard'

    if(data.volumeInfo.pageCount === undefined)
      bookPages="N/A";
    else
      bookPages=data.volumeInfo.pageCount;

    if(data.volumeInfo.maturityRating === undefined)
      bookMaturity = ""
    else if(data.volumeInfo.maturityRating == 'NOT_MATURE')
      bookMaturity = ""
    else
      bookMaturity = "18+ Rated"

    if(data.volumeInfo.averageRating === undefined)
      bookRating = "N/A";
    else
      bookRating = data.volumeInfo.averageRating + "/5";

    if(data.volumeInfo.title === undefined)
        bookTitle="Data unavailable"
    else
        bookTitle=data.volumeInfo.title;

    if(data.volumeInfo.publishedDate === undefined)
        bookYear="Date unavailable"
    else
        bookYear=data.volumeInfo.publishedDate

    if(data.volumeInfo.imageLinks === undefined)
      bookImg = require('../Assets/noImageSmall.png')
    else
      bookImg = {uri: data.volumeInfo.imageLinks.thumbnail}

    if(data.volumeInfo.description === undefined)
      bookDesc = 'Data Unavailable';
    else
      bookDesc = data.volumeInfo.description;

  try {
    return (

      <ScrollView style={styles.container}>
      
        <View style={styles.contentContainer}>

          <Text style={styles.bookTitle}>{ bookTitle }</Text> 
          
          <Image source={bookImg} style={styles.bookImg}/>

          <View style={{marginTop: 20}}>

            {data.volumeInfo.authors.map((author) => {
              return (
                <Text style={styles.bookAuthor}> {author} </Text>
              )
            })}

          </View>

          <Text style={styles.bookYear}> Pages: {bookPages} </Text>
          <Text style={styles.bookYear}> ({bookYear}) </Text>

          <Text style={styles.heading}> Description </Text>
          <Text style={styles.bookDesc}>{ bookDesc }</Text>

          <View style={styles.linkContainer}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rating: {bookRating}</Text>
          </View>

          <View style={styles.linkContainer}>

            <MaterialIcons name="link" size={16} color="black"/>

            <TouchableOpacity onPress = {() => Linking.openURL(data.volumeInfo.infoLink)}>
              <Text style={{fontSize: 13,color: 'darkblue', fontWeight: 'bold'}}> Open Link for Book </Text>
            </TouchableOpacity>

          </View>

          <Text style={styles.bookMaturity}>{bookMaturity}</Text>

          <View style={styles.buttonContainer}>
            <Button title="More Details" color='#153B84' onPress={() => Linking.openURL(bookLink)} />
          </View>

        </View>
      </ScrollView>
    )
  }

  catch(err) {
    return (

      <ScrollView style={styles.container}>
      
        <View style={styles.contentContainer}>

          <Text style={styles.bookTitle}>{ bookTitle }</Text> 
          
          <Image source={bookImg} style={styles.bookImg}/>

          <View style={{marginTop: 20}}>

          <Text style={styles.bookAuthor}> Data Unavailable </Text>

          </View>

          <Text style={styles.bookYear}> Pages: {bookPages} </Text>
          <Text style={styles.bookYear}> ({bookYear}) </Text>

          <Text style={styles.heading}> Description </Text>
          <Text style={styles.bookDesc}>{ bookDesc }</Text>

          <View style={styles.linkContainer}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rating: {bookRating}</Text>
          </View>

          <View style={styles.linkContainer}>

            <MaterialIcons name="link" size={16} color="black"/>

            <TouchableOpacity onPress = {() => Linking.openURL(data.volumeInfo.infoLink)}>
              <Text style={{fontSize: 13,color: 'darkblue', fontWeight: 'bold'}}> Open Link for Book </Text>
            </TouchableOpacity>

          </View>

          <Text style={styles.bookMaturity}>{bookMaturity}</Text>

          <View style={styles.buttonContainer}>
            <Button title="More Details" color='#153B84' onPress={() => Linking.openURL(bookLink)} />
          </View>

        </View>
      </ScrollView>
    )
  }


}

const styles=StyleSheet.create({
  container: {
  },
  contentContainer: {
    paddingBottom: 30,
  },
  bookTitle: {
    fontFamily: 'playfair-display',
    fontSize: 25,
    textAlign: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  bookImg: {
    height: 370,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 8,
    marginTop: 45,
    resizeMode: "contain"
  },
  bookAuthor: {
    fontSize: 18,
    fontFamily: 'poppins-light',
    textAlign: 'center',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
  },
  bookYear: {
    fontSize: 15,
    fontFamily: 'quicksand',
    textAlign: 'center',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'playfair-display',
    textAlign: 'center',
    marginTop: 20,
  },
  bookDesc: {
    fontSize: 15,
    fontFamily: 'poppins-light',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // textAlign: 'center',
    marginTop: 15,
    lineHeight: 25
  },
  linkContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 25
  },
  bookMaturity: {
    color: 'darkred',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 25,
  },
  buttonContainer: {
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})