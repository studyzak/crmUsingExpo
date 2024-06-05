import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';
import LandingPage from './LandingPage'
import Icon from 'react-native-vector-icons/EvilIcons';
import About from './About';
import { Ionicons } from '@expo/vector-icons';
//import { login } from './LandingPage';

const Tab = createBottomTabNavigator();

global.login = true;
function MyTabs() {
 // if (global.login == true) {
   return (
    
    <Tab.Navigator>
      <Tab.Screen name="Log In" component={LandingPage} options={{
        tabBarIcon: ({focused, color, size}) => (
          <Ionicons name='lock-closed' color={"#941a1d"} size={25}/>
        ),
        tabBarActiveBackgroundColor: "#d9d9d9",
        tabBarActiveTintColor: "#3b3b3b",
        tabBarInactiveTintColor: "#941a1d",
        
      }} 
      />
      <Tab.Screen name="Contacts" component={PeopleList} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='person' color={"#941a1d"} size={25}/>
       ),
       tabBarActiveBackgroundColor: "#d9d9d9",
        tabBarActiveTintColor: "#3b3b3b",
        tabBarInactiveTintColor: "#941a1d",
      }} 
      />
      
      <Tab.Screen name="Add" component={AddPerson} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='add' color={"#941a1d"} size={30}/>
        ),
        tabBarActiveBackgroundColor: "#d9d9d9",
        tabBarActiveTintColor: "#3b3b3b",
        tabBarInactiveTintColor: "#941a1d",
      }} 
      />
     
      <Tab.Screen name="Dept." component={CompanyList} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='reorder-three' color={"#941a1d"} size={30}/>
        ),
        tabBarActiveBackgroundColor: "#d9d9d9",
        tabBarActiveTintColor: "#3b3b3b",
        tabBarInactiveTintColor: "#941a1d",
      }} 
      />
      
      <Tab.Screen name="About" component={About} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='information-circle' color={"#941a1d"} size={30}/>
        ),
        tabBarActiveBackgroundColor: "#d9d9d9",
        tabBarActiveTintColor: "#3b3b3b",
        tabBarInactiveTintColor: "#941a1d",
      }} 
      />
    </Tab.Navigator>
    
  );
 //  }
   
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

