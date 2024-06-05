import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { Button, Card, List } from 'react-native-paper';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = StyleSheet.create({
    card: {
      marginTop: 10,
      paddingBottom: 20,
      marginBottom: 20,
      borderColor: 'lightgrey',
      borderWidth: 0.5,
    },
    title1: {
        top: 10,
        left: 80,
        fontSize: 24,
    },
    title2: {
        top: 35,
        left: 82,
        fontSize: 18,
    },
    image: {
        flex: 0,
        height: 100,
        width: 390,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        left: 325,
        color: 'red',
    },  
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    textArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        width: 260,
    },
    textIcons: {
        color: '##c64c38',
    },
    actionArea: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    editIcon: {
        color: "#c64c38"
    },
    sections: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 10,
        width: 100,
    },
    deleteIcon: {
        color: "#c64c38"
    },
    editDeleteArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(211,211,211, 0.3)',
        marginBottom: 10,
    },
    actionImage: {
        width: 100,
        height: 100,
    },

    personName: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    personCompany: {
        fontSize: 30,
        textAlign: 'center'
    },
    personMetaInfoContainer: {
        padding: 10,
        //textColor: "#fff",
    },
    actionButtonContainer: {
        margin: 1, 
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    editDeleteButtonsContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        textColor: "#fff",
    },
    actionButtonContainerRoot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'justify',
        flex: 1,
        paddingTop: 0,
        paddingBottom: 100,
        //paddingLeft: 100,
        //paddingRight: -100,
    }
  });

class DetailView extends Component {

    onEditPress() {
       
        this.props.updatePerson();
        this.props.navigateToAddPerson()
    }

    onDeletePress() {
        
        this.props.deletePerson();

        this.props.navigateToPeopleList()
                   
    }

    render() {

        const {firstName, lastName, company, email, project, phone, notes} = this.props.person
        const {noneSelected, toUpdate} = this.props

        return (
           // <ImageBackground source={require('../images/landing_page_bg.png')} style={styles.image}>
            <View>
                
                    <View style={styles.actionButtonContainer}>
                        <Button textColor={'white'} style={{backgroundColor: '#941a1d'}} icon="arrow-left" mode="elevated" onPress={() => noneSelected()}>
                            Go back
                        </Button> 
                        </View>
                    <ScrollView showsVerticalScrollIndicator={true}>
                    
                        <View>
                            <Text style={styles.personName}>{`${firstName} ${lastName}`}</Text>
                        </View>
                        <View>
                            <Text style={styles.personCompany}>{`${company}`}</Text>
                        </View>
                        <View style={styles.personMetaInfoContainer}>
                            <Card>
                                <Card.Content>
                                <List.Item
                                style={styles.listItem}
                                title="Phone Number"
                                description={phone}
                                left={props => <List.Icon {...props} icon="phone" color={'#3b3b3b'}/>}
                                />
                                <List.Item
                                    title="E-Mail"
                                    description={email}
                                    left={props => <List.Icon {...props} icon="email" color={'#3b3b3b'}/>}
                                />
                                <List.Item
                                    title="Project"
                                    description={project}
                                    left={props => <List.Icon {...props} icon="clipboard-text" color={'#3b3b3b'}/>}
                                />                                                
                                <List.Item
                                    title="Address"
                                    description={notes}
                                    left={props => <List.Icon {...props} icon="home" color={'#3b3b3b'}/>}
                                />                                                
                                </Card.Content>
                                <Card.Actions style={styles.editDeleteButtonsContainer}>
                                    <Button buttonColor={'#CC0000'} textColor={'white'} mode="elevated" icon="delete" onPress={this.onDeletePress.bind(this)}>Delete</Button>
                                    <Button buttonColor={'#3399FF'} textColor={'white'} mode="elevated" icon="pencil" onPress={this.onEditPress.bind(this)}>Edit</Button>
                                </Card.Actions>
                            </Card>
                        </View>
                        <View style={styles.actionButtonContainerRoot}>
                            <View style={styles.actionButtonContainer}>
                                <Button textColor={'#fff'} style={{backgroundColor: '#941a1d'}} icon="phone" mode="elevated" onPress={() => {Linking.openURL(`tel:${phone}`);}}>
                                    Call
                                    
                                </Button>
                            </View>
                            <View style={styles.actionButtonContainer}>
                                <Button textColor={'#fff'} style={{backgroundColor: '#941a1d'}} icon="email" mode="elevated" onPress={() => {Linking.openURL(`mailto:${email}`);}}>
                                    E-mail
                                </Button>
                            </View>
                            <View style={styles.actionButtonContainer}>
                                <Button textColor={'#fff'} style={{backgroundColor: '#941a1d'}} icon="message-alert" mode="elevated" onPress={() => {Linking.openURL(`sms:${phone}`);}}>
                                    SMS
                                </Button>
                            </View>
                        </View>
                    </ScrollView>
            </View>
           // </ImageBackground>
        )
    }

}

const mapStateToProps = state => {
    return { 
        person: state.personSelected,
        toUpdate: state.toUpdate,
    }
}

export default connect(mapStateToProps, actions)(DetailView);
