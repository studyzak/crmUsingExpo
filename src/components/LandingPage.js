import React, {useState} from "react";
import { ImageBackground, StyleSheet, Text, Image, View,  Alert, Button, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput, Headline } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {



const handlePress = () => {
    if (name == correctUser && password == correctPswd)
    {
        global.login = true;
        Alert.alert('Logged in successfully');
        
    }
    else{
        Alert.alert('incorrect username or password');
    }
};

const [name, setName] = useState('');
const [password, setPassword] = useState('');
const correctUser = "john.smith@roinvestment.com";
const correctPswd = "Mypassword1";

return (
    <ImageBackground source={require('../images/landing_page_bg.png')} style={styles.image}>
        <Text style={styles.text}>Red Opal Investments</Text>
            <Image source={require('../images/roi_logo.png')} style={styles.logo} />
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
        <ScrollView>
        <View style={styles.container}>

         {/*   
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('People List')}
        />
        */} 
            <View style={styles.form}>
            <TextInput
                    autoFocus={false}
                    style={styles.inputField}
                    label="email / username"
                    value={name}
                    onChangeText={setName}
                    secureTextEntry={false}
                    textColor={'#941a1d'}
                    backgroundColor={'#D9D9D9'}
                    theme={{
                        colors: {
                            primary: '#c64c38',       // Border color when focused
                        }
                    }}
                />
                <TextInput
                    autoFocus={false}
                    style={styles.inputField}
                    label="password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    textColor={'#941a1d'}
                    backgroundColor={'#D9D9D9'}
                    theme={{
                        colors: {
                            primary: '#c64c38',       // Border color when focused
                        }
                    }}
                />
            </View>
            <View>
              <Text style={styles.forgetPassword}>
                Forgotten password?
                <Text style={styles.resetPassword}> reset</Text>
              </Text>
              
            </View>
            
          
            
            
        </View>
        </ScrollView>
  </KeyboardAvoidingView>
  <View style={styles.actionButtonContainerRoot}>
            <TouchableOpacity onPress={handlePress} style={styles.button}>
                <Text style={styles.text}>Log In</Text>
            </TouchableOpacity>
            </View>
  </ImageBackground>
  )
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 2,
    marginBottom: 0,
    justifyContent: "center",
    //alignItems: "center,"
  },
  buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
    resizeMode: "stretch"
  },
  logo:{
    //flex: 0.4,
    //flexDirection: 'column',
    resizeMode: "contain",
    height: 150,
    width: 320,
    justifyContent: "flex-start",
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
  forgetPassword: {
    //flexDirection: 'column',
    fontFamily: "Cochin",
    letterSpacing: "1",
    color: "white",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "bold",
    textAlign: "right",
    //backgroundColor: "#941a1d"
    paddingTop: 5,
    paddingRight: 30,
  },
  resetPassword: {
    color: "#3399FF",
    textAlign: "right",
    textDecorationLine: "underline"
  },
  inputField: {
    //flexDirection: "column",
    margin: 0
    
},
form: {
    //flex: 0.4,
    flexDirection: 'column',
    paddingTop: 50,
    paddingBottom: 0,
    paddingLeft: 30,
    paddingRight: 30,
    //justifyContent: 'space-between',
},
button: {
    //paddingVertical: 5,
    paddingHorizontal: 10,
    //width: 200,
    flex: 1,
    alignItems: "center",
    backgroundColor: '#941a1d',
    padding: 2,
    borderRadius: 10,
    justifyContent: "center",
    display: "flex",
    paddingTop: 5,
  },
  actionButtonContainerRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 0.25,
    paddingTop: 2,
    paddingBottom: 2,
    margin: 2,
    paddingLeft: 20,
    paddingRight: 20,
}
});

export default App;
