import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { TextInput, Button, Headline } from 'react-native-paper';
//import { orange100 } from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    updateButton: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: 20,
        flex: 1,
        textColor: "#fff",
        marginBottom: 0,
    },
    inputField: {
        margin: 4
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

class UpdatePerson extends Component {

    state = {
        firstName: this.props.person.firstName,
        lastName: this.props.person.lastName,
        phone: this.props.person.phone,
        email: this.props.person.email,
        company: this.props.person.company,
        project: this.props.person.project,
        notes: this.props.person.notes,
        id: this.props.person.id
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'plus'} size={50} color={red} />
        )
    }

    formUpdate({prop, value}) {
        this.setState(prevState => ({...prevState, [prop]: value}))
    }

    onUpdatePress() {
        const { firstName, lastName, phone, email, company, project, notes, id } = this.state;

        this.props.updatePersonData({ firstName, lastName, phone, email, company, project, notes, id});

        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            company: '',
            project: '',
            notes: '',
            id: ''
        })

        this.props.backToPeopleList()
    }

    onCancelPress() {
        this.props.noneSelected()
        this.props.backToPeopleList()
    }

    render() {
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
                    <Headline style={styles.headline}>Edit contact details</Headline>
                    <TextInput
                        style={styles.inputField}
                        label="First name"
                        value={this.state.firstName}
                        onChangeText={value => this.formUpdate({ prop: 'firstName', value})}
                        textColor={'#3399FF'}
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
                        textColor={'#3399FF'}
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
                        textColor={'#3399FF'}
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
                        textColor={'#3399FF'}
                            backgroundColor={'#D9D9D9'}
                            theme={{
                                colors: {
                                    primary: '#c64c38',       // Border color when focused
                                }
                            }}
                    />                    
                    <TextInput
                        style={styles.inputField}
                        label="Company"
                        value={this.state.company}
                        onChangeText={value => this.formUpdate({ prop: 'company', value})}
                        textColor={'#3399FF'}
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
                        textColor={'#3399FF'}
                            backgroundColor={'#D9D9D9'}
                            theme={{
                                colors: {
                                    primary: '#c64c38',       // Border color when focused
                                }
                            }}
                    />                    
                    <TextInput
                        style={styles.inputField}
                        label="Notes"
                        value={this.state.notes}
                        onChangeText={value => this.formUpdate({ prop: 'notes', value})}
                        textColor={'#3399FF'}
                            backgroundColor={'#D9D9D9'}
                            theme={{
                                colors: {
                                    primary: '#c64c38',       // Border color when focused
                                }
                            }}
                    />                       
                    <View style={styles.updateButton}>
                        <Button textColor={'white'} style={{backgroundColor: '#3399FF'}} mode="elevated" icon="floppy" onPress={this.onUpdatePress.bind(this)}>
                            Save Details
                        </Button>
                    </View>
                    <View>
                        <Button textColor={'white'} style={{backgroundColor: '#CC0000'}} mode="elevated" icon="undo" onPress={this.onCancelPress.bind(this)}>
                            Cancel
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
    return  {
        person: state.personSelected
    }
}

export default connect(mapStateToProps, actions)(UpdatePerson);
