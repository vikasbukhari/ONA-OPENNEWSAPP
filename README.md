
# ONA - WordPress Android Version
![](https://miro.medium.com/max/1400/1*F6Ko-BtPaRI2cNG6rWrJMQ.jpeg)
.
.

:exclamation: ** iOS Version of App has not been tested yet.**


## About The App

ONA or Open News App is an open source React Native Based Application for WordPress News and Blog Websites.


## Features

* React Native Based
* Clean and Elegent UI
* Firebase Push Notifications
* WordPress REST API
* Separate Categories Section.
* External Links to privacy and other pages.

![](https://miro.medium.com/max/700/1*wY2kGWl2YbFA41qtSBb7uQ.png)
![](https://miro.medium.com/max/700/1*P3ib-wBsUDNdpZy_-a10qQ.png)
## How to Run the App

To Run or test the app on your PC.

1. Download the repository into your PC.
2. Run `npm install` in the folder, this will install all npm required packages.
3. To Run the app `npx react-native run-android`

# Setting Up Your App.



## 1. WordPress Requirements

1. To connect the app with your wordpress website you must have working REST API on your website.

2. Download and Activate `REST API Featured Image`Plugin on your WordPress Image. [Plugin Link](https://wordpress.org/plugins/rest-api-featured-image/)


## 2. Building Your App

1. Start a new react native project.
2. Delete `node modules` folder from your newly created project.
3. Copy `Packages`from ONA `package.json`and run `npm install`inside your newly created project.

> Now we need to setup things inside `android` folder of your new project.

## 3. Setting up AndroidManifest file.

1. From `ONA/android/app/main/android/AndroidManifest` copy the lines mentioned within `section that needs to be copied` into your own newly created projects `android/app/main/android/AndroidManifest`.

## 4. Setting up `build.gradle` file.

1. Go to `android/build.gradle`file of `ONA` and copy the lines of code mentioned in file within`ext` and `dependencies`
2. Go to `android/app/build.gradle`and copy the lines mentioned within `dependencies` and `282-232`.

## 5. Setting Up Firebase and Other Additional Settings.

1.  Go to Firebase console, Create a new project.
2.  Click on  `Android`, fill up the details like Project name, Package name etc.
3.  Register and Download the Config file  `google-services.json`
4.  In  `android/app`  folder replace  `google-services`with your  `google-services`file.

## 6. Setting Up Values Colors and Strings.

In `ONA\android\app\src\main\res\values\`

1. In `values\strings`
2. Add the `<string  name="default_notification_channel_id"  translatable="false">fcm_default_channel</string>`to your strings file below your app name.
3. In `values\colors` add below mentioned code.

## 7. Copying the `assests` folder

The assets folder contains fonts and the icon files that your app needs to run, Copy the `ONA\android\app\src\main\assets`to your project folder.

## 8. Adding Icons

   In `ONA\android\app\src\main\res` file add all sizes of icons that are being used in the application. You can generate them using Android Studio or Online tools. 

## 9. Final
 Run `react-native-link` command inside your project directory.

Your App Is Ready.


# Additional Guides


## Connecting with your Website and Changing App Name

1. Go to `constants.js` file in `assets` folder of the app.
2. Change the value of `APP_BASE_URL`to URL of your website, `Note: Do not add / at the end of the URL.`
3. To change name of the app, change the value of  `APP_NAME`.


## Settings Page Links Change

In `constants.js`file, change the values of below given constant values.

    TERMS_AND_CON_LINK:  '#', 
    WEBSITE_LINK:  '#',
    PRIVACY_LINK:  '#',
    FEEDBACK_LINK:  '#',
    

## Changing Lottie Animation

> OSN comes with Lottie animations, to change the loading animation of the app, Go to the lottie website and download the animation you want in JSON format first.

Once you have downloaded the JSON file, Go to `assets/loading`file and replace `newsload1` with the file you download, keep the filename to `newsload1`.

## App Credits

React Native: [Vikas Bukhari](https://github.com/vikasbukhari/) 
WordPress API's: [Nasir Khan](https://github.com/nasir22)
