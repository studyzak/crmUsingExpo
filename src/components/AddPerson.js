import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { TextInput, Button, Headline } from 'react-native-paper';
import UpdatePerson from './UpdatePerson';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
   
    addButton: {
        marginTop: 20,
        marginBottom: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        textColor: "#fff",
    },
    inputField: {
        margin: 4,
        textColor: "#941a1d",
        backgroundColor: "#d9d9d9",
        theme: {
            color: {
                primary: "#c64c38",
            }
        },
    },
    headline: {
        textAlign: 'center'
    },
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
});

class AddPerson extends Component {

    state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        project: '',
        notes: ''
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }

    formUpdate({prop, value}) {
        this.setState(prevState => ({...prevState, [prop]: value}))
    }

    onAddPress() {
        const { firstName, lastName, phone, email, company, project, notes } = this.state;

        this.props.addPerson({ firstName, lastName, phone, email, company, project, notes});

        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            company: '',
            project: '',
            notes: ''
        })

        this.props.navigation.navigate('People List');
    }

    render() {
        if(this.props.toUpdate) {
            return <UpdatePerson backToPeopleList={() => this.props.navigation.navigate("People List")}/>
        }

        return (
            <ImageBackground source={require('../images/landing_page_bg.png')} style={styles.image}>
                    <Text style={styles.text}>Red Opal Investments</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
                >
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.form}>
                        <Headline style={styles.headline}>Add a new contact</Headline>
                        <TextInput
                            autoFocus={false}
                            style={styles.inputField}
                            label="First name"
                            value={this.state.firstName}
                            onChangeText={value => this.formUpdate({ prop: 'firstName', value})}
                            textColor={'#941a1d'}
                            backgroundColor={'#D9D9D9'}
                            theme={{
                                colors: {
                                    primary: '#c64c38',       // Border color when focused
                                }
                            }}
                        />
                        <TextInput
                            style={styles.inputField}
                            label="Last name"
                            value={this.state.lastName}
                            onChangeText={value => this.formUpdate({ prop: 'lastName', value})}
                            textColor={'#941a1d'}
                            backgroundColor={'#D9D9D9'}
                            theme={{
                                colors: {
                                    primary: '#c64c38',       // Border color when focused
                                }
                            }}
                        />
                        <TextInput
                            style={styles.inputField}
                            label="Phone number"
                            value={this.state.phone}
                            onChangeText={value => this.formUpdate({ prop: 'phone', value})}
                            textColor={'#941a1d'}
                            backgroundColor={'#D9D9D9'}
                            theme={{
                                colors: {
                                    primary: '#c64c38',       // Border color when focused
                                }
                            }}
                        />                    
                        <TextInput
                            style={styles.inputField}
                            label="Email"
                            value={this.state.email}
                            onChangeText={value => this.formUpdate({ prop: 'email', value})}
                            textColor={'#941a1d'}
                            backgroundColor={'#D9D9D9'}
                            theme={{
                                colors: {
                                    primary: '#c64c38',       // Border color when focused
                                }
                            }}
                        />                    
                        <TextInput
                            style={styles.inputField}
                            label="Department"
                            value={this.state.company}
                            onChangeText={value => this.formUpdate({ prop: 'company', value})}
                            textColor={'#941a1d'}
                            backgroundColor={'#D9D9D9'}
                            theme={{
                                colors: {
                                    primary: '#c64c38',       // Border color when focused
                                }
                            }}
                        />                    
                        <TextInput
                            style={styles.inputField}
                            label="Project"
                            value={this.state.project}
                            onChangeText={value => this.formUpdate({ prop: 'project', value})}
                            textColor={'#941a1d'}
                            backgroundColor={'#D9D9D9'}
                            theme={{
                                colors: {
                                    primary: '#c64c38',       // Border color when focused
                                }
                            }}
                        />                    
                        <TextInput
                            style={styles.inputField}
                            label="Address"
                            value={this.state.notes}
                            onChangeText={value => this.formUpdate({ prop: 'notes', value})}
                            textColor={'#941a1d'}
                            backgroundColor={'#D9D9D9'}
                            theme={{
                                colors: {
                                    primary: '#c64c38',       // Border color when focused
                                }
                            }}
                        />                       
                        <View style={styles.addButton}>
                            <Button textColor={'white'} style={{backgroundColor: '#941a1d'}} mode="elevated" icon="plus" onPress={this.onAddPress.bind(this)}>
                                Add Contact
                            </Button>
                        </View>
                        
                    </View>
                </ScrollView>
                </KeyboardAvoidingView>
                </ImageBackground>
        )
    }
}

const mapStateToProps = state => {
    const toUpdate = state.toUpdate;
    return {
        toUpdate
    }
}

export default connect(mapStateToProps, actions)(AddPerson);
