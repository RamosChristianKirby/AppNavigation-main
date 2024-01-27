import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopTabNavigator from '../navigators/TopBarNavigator';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Jobs({navigation}) {
    return (
    <View style={{backgroundColor: 'white'}}>
    <ScrollView>
        <View style={styles.Main}>
            <TextInput style={styles.Input} placeholder='Search'></TextInput>
            <TouchableOpacity style={styles.search}><Ionicons name="search" size={24} color="black" /></TouchableOpacity>
        </View>

        <View>
            <View style={{flexDirection: 'row',marginLeft: 20, marginTop: 50, maxWidth: '50%', display:'flex', justifyContent: 'space-between'}}>
            <TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: '500', flexDirection: 'row', justifyContent: 'space-betweens'}}>Software Developer/Engineer</Text></TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 50, marginRight: 10}}>
                <Ionicons name="heart-dislike-circle-outline" size={32} color="black" /> 
                </TouchableOpacity>

                <TouchableOpacity>
                <Ionicons name="heart-circle-outline" size={32} color="black" /></TouchableOpacity>
            </View>
            <Text style={{ marginLeft: 20, marginTop: 20, color: '#A9A9A9' }}>₱100,000 - ₱200,000</Text>
            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Less than 30 hrs/week</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 50}}>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500'}}>3 to 6 months</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Duration</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Expert</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 130}}>
            <Entypo name="location-pin" size={28} color="black" style={{marginTop: 20}}/>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Cagayan, PH</Text>
            </View>
            </View>
            <Text style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>Designs, develops, tests, and maintains software applications.</Text>
            
        </View> 

        <View>
            <View style={{flexDirection: 'row',marginLeft: 20, marginTop: 10, maxWidth: '50%', display:'flex', justifyContent: 'space-between'}}>
            <TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: '500', flexDirection: 'row', justifyContent: 'space-betweens'}}>Network Administrator</Text></TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 105, marginRight: 10}}>
                <Ionicons name="heart-dislike-circle-outline" size={32} color="black" /> 
                </TouchableOpacity>

                <TouchableOpacity>
                <Ionicons name="heart-circle-outline" size={32} color="black" /></TouchableOpacity>
            </View>
            <Text style={{ marginLeft: 20, marginTop: 20, color: '#A9A9A9' }}>₱150,000 - ₱300,000</Text>
            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Less than 30 hrs/week</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 50}}>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500'}}>3 to 6 months</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Duration</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Expert</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 130}}>
            <Entypo name="location-pin" size={28} color="black" style={{marginTop: 20}}/>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Cagayan, PH</Text>
            </View>
            </View>
            <Text style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}> Manages and maintains an organization's computer networks.</Text>
            
        </View>   

        <View>
            <View style={{flexDirection: 'row',marginLeft: 20, marginTop: 10, maxWidth: '50%', display:'flex', justifyContent: 'space-between'}}>
            <TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: '500', flexDirection: 'row', justifyContent: 'space-betweens'}}>Database Administrator (DBA)</Text></TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 60, marginRight: 10}}>
                <Ionicons name="heart-dislike-circle-outline" size={32} color="black" /> 
                </TouchableOpacity>

                <TouchableOpacity>
                <Ionicons name="heart-circle-outline" size={32} color="black" /></TouchableOpacity>
            </View>
            <Text style={{ marginLeft: 20, marginTop: 20, color: '#A9A9A9' }}>₱150,000 - ₱220,000</Text>
            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Less than 30 hrs/week</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 50}}>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500'}}>3 to 6 months</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Duration</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Expert</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 130}}>
            <Entypo name="location-pin" size={28} color="black" style={{marginTop: 20}}/>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Cagayan, PH</Text>
            </View>
            </View>
            <Text style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>Responsible for the design, implementation, and maintenance of an organization's databases.</Text>
            
        </View>

        <View>
            <View style={{flexDirection: 'row',marginLeft: 20, marginTop: 10, maxWidth: '50%', display:'flex', justifyContent: 'space-between'}}>
            <TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: '500', flexDirection: 'row', justifyContent: 'space-betweens'}}>Cybersecurity Analyst</Text></TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 50, marginRight: 10}}>
                <Ionicons name="heart-dislike-circle-outline" size={32} color="black" /> 
                </TouchableOpacity>

                <TouchableOpacity>
                <Ionicons name="heart-circle-outline" size={32} color="black" /></TouchableOpacity>
            </View>
            <Text style={{ marginLeft: 20, marginTop: 20, color: '#A9A9A9' }}>₱80,000 - ₱120,000</Text>
            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Less than 30 hrs/week</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 50}}>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500'}}>3 to 6 months</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Duration</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Expert</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 130}}>
            <Entypo name="location-pin" size={28} color="black" style={{marginTop: 20}}/>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Cagayan, PH</Text>
            </View>
            </View>
            <Text style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>Monitors and protects an organization's computer systems and networks from cyber threats.</Text>
            
        </View>

        <View>
            <View style={{flexDirection: 'row',marginLeft: 20, marginTop: 10, maxWidth: '50%', display:'flex', justifyContent: 'space-between'}}>
            <TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: '500', flexDirection: 'row', justifyContent: 'space-betweens'}}>Systems Analyst</Text></TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 50, marginRight: 10}}>
                <Ionicons name="heart-dislike-circle-outline" size={32} color="black" /> 
                </TouchableOpacity>

                <TouchableOpacity>
                <Ionicons name="heart-circle-outline" size={32} color="black" /></TouchableOpacity>
            </View>
            <Text style={{ marginLeft: 20, marginTop: 20, color: '#A9A9A9' }}>₱130,000 - ₱150,000</Text>
            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Less than 30 hrs/week</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 50}}>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500'}}>3 to 6 months</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Duration</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Expert</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 130}}>
            <Entypo name="location-pin" size={28} color="black" style={{marginTop: 20}}/>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Cagayan, PH</Text>
            </View>
            </View>
            <Text style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}> Analyzes and evaluates an organization's computer systems and procedures.</Text>
            
        </View>

        <View>
            <View style={{flexDirection: 'row',marginLeft: 20, marginTop: 10, maxWidth: '50%', display:'flex', justifyContent: 'space-between'}}>
            <TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: '500', flexDirection: 'row', justifyContent: 'space-betweens'}}>IT Project Manager</Text></TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 50, marginRight: 10}}>
                <Ionicons name="heart-dislike-circle-outline" size={32} color="black" /> 
                </TouchableOpacity>

                <TouchableOpacity>
                <Ionicons name="heart-circle-outline" size={32} color="black" /></TouchableOpacity>
            </View>
            <Text style={{ marginLeft: 20, marginTop: 20, color: '#A9A9A9' }}>₱90,000 - ₱180,000</Text>
            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Less than 30 hrs/week</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 50}}>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500'}}>3 to 6 months</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Duration</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Expert</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 130}}>
            <Entypo name="location-pin" size={28} color="black" style={{marginTop: 20}}/>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Cagayan, PH</Text>
            </View>
            </View>
            <Text style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>Plans, executes, and oversees IT projects from initiation to completion. </Text>
            
        </View>

        <View>
            <View style={{flexDirection: 'row',marginLeft: 20, marginTop: 10, maxWidth: '50%', display:'flex', justifyContent: 'space-between'}}>
            <TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: '500', flexDirection: 'row', justifyContent: 'space-betweens'}}>Cloud Solutions Architect</Text></TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 50, marginRight: 10}}>
                <Ionicons name="heart-dislike-circle-outline" size={32} color="black" /> 
                </TouchableOpacity>

                <TouchableOpacity>
                <Ionicons name="heart-circle-outline" size={32} color="black" /></TouchableOpacity>
            </View>
            <Text style={{ marginLeft: 20, marginTop: 20, color: '#A9A9A9' }}>₱70,000 - ₱110,000</Text>
            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Less than 30 hrs/week</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 50}}>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500'}}>3 to 6 months</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Duration</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Expert</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 130}}>
            <Entypo name="location-pin" size={28} color="black" style={{marginTop: 20}}/>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Cagayan, PH</Text>
            </View>
            </View>
            <Text style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>Designs and implements cloud-based solutions, considering scalability, security, and performance.</Text>
            
        </View>

        <View>
            <View style={{flexDirection: 'row',marginLeft: 20, marginTop: 10, maxWidth: '50%', display:'flex', justifyContent: 'space-between'}}>
            <TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: '500', flexDirection: 'row', justifyContent: 'space-betweens'}}>IT Support Specialist</Text></TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 50, marginRight: 10}}>
                <Ionicons name="heart-dislike-circle-outline" size={32} color="black" /> 
                </TouchableOpacity>

                <TouchableOpacity>
                <Ionicons name="heart-circle-outline" size={32} color="black" /></TouchableOpacity>
            </View>
            <Text style={{ marginLeft: 20, marginTop: 20, color: '#A9A9A9' }}>₱50,000 - ₱150,000</Text>
            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Less than 30 hrs/week</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 50}}>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500'}}>3 to 6 months</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Duration</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', display: 'flex', marginLeft: 20}}>
            <View>
            <Text style={{maxWidth: '100%', marginTop: 30, fontSize: 16, fontWeight: '500',}}>Expert</Text>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Hour needed</Text>
            </View>
            <View style={{marginLeft: 130}}>
            <Entypo name="location-pin" size={28} color="black" style={{marginTop: 20}}/>
            <Text style={{color: '#A9A9A9', marginTop: 5}}>Cagayan, PH</Text>
            </View>
            </View>
            <Text style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>Provides technical assistance and support to end-users and resolves IT issues. </Text>
            
        </View>

         

        </ScrollView>
    </View>


        
        

    )
}

const styles = StyleSheet.create ({
    Main: {
        backgroundColor: '#fff',
        width: 350,
        height:50,
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white',
        marginLeft: 20
    },

    Input: {
        marginLeft: 10,
        marginTop:5,
        width: '85%'
    },
    search: {
        left:  1,
        backgroundColor: '#279EFF',
        height: 50,
        width: 41,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }

})