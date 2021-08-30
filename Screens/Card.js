import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Card (props) {

    var bookYear;
    var bookAuthor;
    var bookTitle;

    if(props.bookTitle === undefined)
        bookTitle="Data unavailable"
    else if(props.bookTitle.length>20)
        bookTitle=props.bookTitle.substring(0, 20) + '...';
    else
        bookTitle=props.bookTitle;

    if(props.bookAuthor === undefined)
        bookAuthor="Data unavailable"
    else {
        if(props.bookAuthor[0].length>20)
            bookAuthor=props.bookAuthor[0].substring(0, 20) + '...';
        else
            bookAuthor=props.bookAuthor;
    }

    if(props.bookYear === undefined)
        bookYear="Date unavailable"
    else
        bookYear=props.bookYear

    return (
        <View style={styles.container}>

            <Image source={props.bookImg} style={styles.bookImg}/>

            <Text style={styles.bookTitle}> {bookTitle} </Text>

            <Text style={styles.bookAuthor}> {bookAuthor} </Text>

            <Text style={styles.bookYear}> ({bookYear}) </Text>

        </View>
    )
}

const styles=StyleSheet.create ({
    container: {
        height: 365,
        width: '90%',
        borderWidth: 5,
        borderTopWidth: 8,
        // borderColor: '#9cc3d5ff',
        borderColor: 'transparent',
        // elevation: 1,
        borderRadius: 10,
        marginBottom: 25,
        backgroundColor: 'white',
    },
    bookImg: {
        height: 210,
        width: '100%',
        marginBottom: 20,
    },
    bookTitle: {
        textAlign: 'center',
        width: '90%',
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'quicksand',
        fontSize: 16,
    },
    bookAuthor: {
        marginTop: 5,
        textAlign: 'center',
        width: '90%',
        height: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'playfair-display',
        fontSize: 10
    },
    bookYear: {
        position: 'absolute',
        textAlign: 'center',
        width: '80%',
        left: 15,
        bottom: 5,
        fontFamily: 'poppins-light',
        fontSize: 9,
    }
})