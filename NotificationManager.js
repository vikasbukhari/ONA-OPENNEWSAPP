import React, {Component} from 'react';
import PushNotification from 'react-native-push-notification';

class NotificationManager {
    configure = () => {

        // Must be outside of any component LifeCycle (such as `componentDidMount`).
    PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {

      console.log('NOTIFICATION:', notification);

      
  
      // process the notification
      // (required) Called when a remote is received or opened, or local notification is opened
    },
  
    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
      // process the action
    },
  
    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },
  
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
  
    // Should the initial notification be popped automatically
    // default: true
  
  
    popInitialNotification: true,
  
    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
  
     
  
    requestPermissions: true,
   });

   PushNotification.createChannel(
    {
        channelId: 'fcm_default_channel', // (required)
        channelName: 'fcm_default_channel', // (required)
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        vibrate: true,

    },
    
    (created) => console.log(`createChannel returned '${created}`),
  );

  

  // For In App Notifications
function showNotification(title, message, id, vibrate, sound, ongoing=false){
    PushNotification.localNotification({
      /* Android Only Properties */
      id: id,
      autoCancel: true,
      vibrate: vibrate,
      vibration: vibrate ? 300 : undefined,
      priority: "high",
      visibility: "public",
      importance: "high",
      ongoing: ongoing,
      largeIcon: 'ic_stat_asset' || 'ic_stat_asset',
      smallIcon: 'ic_stat_asset' || 'ic_stat_asset',
      /* iOS only properties */
      //alertAction: 'view',
      userInfo: {id: id}, // required for ios local notification
  
      /* iOS and Android properties */
      title: title,
      message: message, // (required)
      playSound: sound,
      soundName: sound ? 'default' : undefined,
      // number: number // silly library, iOS requires number, while android string...
  
    });

  }


}
}

export const notificationManager = new NotificationManager();
