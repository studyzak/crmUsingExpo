import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ImageBackground, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/EvilIcons';
import CompanyItem from './CompanyItem';
//stylesheets
const styles = StyleSheet.create({
    text: {
        //flexDirection: 'column',
        fontFamily: "Cochin",
        letterSpacing: "4",
        color: "white",
        fontSize: 18,
        lineHeight: 20,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#941a1d"
      },
      textBody: {
        //flexDirection: 'column',
        fontFamily: "Cochin",
        letterSpacing: "1",
        color: "white",
        fontSize: 16,
        lineHeight: 20,
        color: "white",
        textAlign: "center",
        //backgroundColor: "#941a1d"
        paddingTop: 5,
        paddingBottom: 0,
      },
      header: {
        backgroundColor: "#941a1d",
        lineHeight: 50,
        fontFamily: "Cochin",
        fontSize: 25,
        color: "white",
        textAlign: "center",
      },
      form: {
        //paddingBottom: 450,
      },
      logo:{
        //flex: 1,
        //flexDirection: 'column',
        resizeMode: "contain",
        paddingTop: 0,
        height: 100,
        width: 200,
        justifyContent: "flex-start",
      },
      actionButtonContainerRoot: {
        //display: 'flex',
        //flexDirection: 'column',
        //justifyContent: 'space-between',
        //flex: 0.25,
        paddingTop: 20,
        paddingBottom: 200,
        //margin: 2,
        paddingLeft: 20,
        paddingRight: 20,
    },
    button: {
        //paddingVertical: 5,
        paddingHorizontal: 10,
        //width: 200,
        //flex: 1,
        alignItems: "center",
        backgroundColor: '#941a1d',
        padding: 100,
        borderRadius: 10,
        justifyContent: "center",
        display: "flex",
        paddingTop: 10,
        paddingBottom: 10,
      },
});

const handlePress = () => {
    if (global.login = true)
    {
        global.login = false;
        Alert.alert('You have been logged out');
        
    }
};

class About extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'archive'} size={50} color={tintColor} />
        )
    }
    render() {
        return (
            <View style={styles.form}>
                <ImageBackground source={require('../images/landing_page_bg.png')} style={styles.image}>
                    <Text style={styles.text}>Red Opal Investments</Text>
               {/*}
                <FlatList
                    data={this.props.companies}
                    renderItem={({item}) => <CompanyItem companies={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    
                />
        */}
                     <View style={styles.form}>
                        <Text style={styles.header}>Application details</Text>
                        <Text style={styles.textBody}>
                            username:                   zak.alchin2_roi
                        </Text>
                        <Text style={styles.textBody}>
                            email:              zak.alchin@roi.com.au
                        </Text>
                        <Text style={styles.textBody}>
                            employee id:                                 008
                        </Text>
                        <Text style={styles.textBody}>
                            account created:           30 / 05 / 2024
                        </Text>
                        <Text style={styles.textBody}>
                            admin account?                             no
                        </Text>
                        <Text style={styles.textBody}>
                            
                        </Text>
                        <Text style={styles.textBody}>
                            app version:                                 1.0
                        </Text>
                        <Text style={styles.textBody}>
                            
                        </Text>
                        <Text style={styles.textBody}>
                            
                        </Text>
                        <Text style={styles.textBody}>
                            
                        </Text>
                        <View style={styles.actionButtonContainerRoot}>
            <TouchableOpacity onPress={handlePress} style={styles.button}>
                <Text style={styles.text}>Log Out</Text>
            </TouchableOpacity>
            </View>
                        
                     </View>

                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const people = state.people;

    const companies = 
        _.chain(people)
            .groupBy('company')
            .map((value, key) => {
                return {
                    company: key,
                    names: value
                }
            })
            .value();

    return {
        companies,
    }
}

export default connect(mapStateToProps)(About);
