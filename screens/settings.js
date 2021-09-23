import React, {useState} from 'react';
import { Text, View, Button,flex, StyleSheet, Switch, Linking } from 'react-native';
import constants from '../assets/constants';
import {SettingPageStyles} from '../assets/StyleSheet';

const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{display: flex, flexDirection: 'column'}}>
     
      <View>
           <Text style={SettingPageStyles.HeadSetting}>Settings</Text> 
      </View>

      <View style={SettingPageStyles.LinksSettings}>
      <Text style={SettingPageStyles.osNewsStyleHeader}>About Us</Text>
        <Text onPress={() => Linking.openURL(constants.TERMS_AND_CON_LINK)} style={SettingPageStyles.SingleLink}>Terms and Conditions</Text>
        <Text onPress={() => Linking.openURL(constants.WEBSITE_LINK)} style={SettingPageStyles.SingleLink}>Our Website</Text>
        <Text onPress={() => Linking.openURL(constants.PRIVACY_LINK)} style={SettingPageStyles.SingleLink}>Privacy Policy</Text>
        <Text onPress={() => Linking.openURL(constants.FEEDBACK_LINK)} style={SettingPageStyles.SingleLink}>Feedback</Text>
      </View>


      <View style={SettingPageStyles.osNewsStyle}>
        <Text onPress={() => Linking.openURL('#')} style={SettingPageStyles.osNewsStyleHeader}>About Developer</Text>
        <Text onPress={() => Linking.openURL('#')} style={SettingPageStyles.SingleLink}>About OS News</Text>
        <Text onPress={() => Linking.openURL('#')} style={SettingPageStyles.SingleLink}>Credits</Text>
        <Text onPress={() => Linking.openURL('#')} style={SettingPageStyles.SingleLink}>Disclaimer</Text>
        <Text onPress={() => Linking.openURL('#')} style={SettingPageStyles.SingleLink}>Visit Us</Text>

        </View>
       
    </View>
  );
}

  

export default Settings;
  