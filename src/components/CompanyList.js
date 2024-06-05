import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ImageBackground, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/EvilIcons';
import CompanyItem from './CompanyItem';

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
      form: {
        paddingBottom: 40,
      },
});

class CompanyList extends Component {
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
                <FlatList
                    data={this.props.companies}
                    renderItem={({item}) => <CompanyItem companies={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    
                />
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

export default connect(mapStateToProps)(CompanyList);
