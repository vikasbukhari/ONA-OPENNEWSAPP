import React from 'react';
import { StyleSheet , flex} from 'react-native';
import constants from '../assets/constants';


const HomepageStyle = StyleSheet.create({

    RecentNewsContainer: {
      padding: 10,
      height: '100%',
      backgroundColor: constants.LIGHT_THEME_BG,
    },  
  
    RecentNewsTitle: {
      color: constants.LIGHT_THEME_TEXT_COLOR_DARK,
      fontSize: 24,
      fontFamily:  constants.PRIMARY_FONT_BOLD,
      marginBottom: 20,
      marginTop: 30,
      padding: 5,
    },  
  
    FullContainer :{
      backgroundColor:  constants.LIGHT_THEME_BG,
    },
  
    CardContainer : {
      display: flex,
      flexDirection: 'row',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
    },
  
    CardImage: {
      height: 120,
      width: 120,
      borderRadius: 10,   
    },
  
    CardContainerRight: {
      display: flex,
      paddingLeft: 20,
      paddingTop: 20,
      flexShrink: 1,
    },
  
    CardTag: {
        marginBottom: 4,
        fontSize: 16,
        color: constants.LIGHT_THEME_PRIMARY_COLOR,
        fontFamily: constants.PRIMARY_FONT_MEDIUM
    },
  
    CardHeadline: {
      fontSize: 14,
      fontFamily: constants.PRIMARY_FONT_MEDIUM,
      lineHeight: 22,
      color: constants.LIGHT_THEME_TEXT_COLOR_DARK,
    },

    AppTitle: {
      fontFamily: constants.PRIMARY_FONT_BLACK,
      fontSize: 18,
      padding: 1,
    }
  
});

const CategoriesStyleSheet = StyleSheet.create({

    CategoryPage: {
      backgroundColor: constants.LIGHT_THEME_LIGHT_BLUE_BG,
      height: '100%',
    },  

    AllCategorieTags: {
     
      display: flex,
      flexWrap: 'wrap',
      flexDirection: 'row',
    },

    heading :{
      marginTop: 22,
      textAlign: 'center',
      fontFamily: constants.PRIMARY_FONT_BOLD,
      fontSize: 24,
      marginBottom: 40,
    },

    TagContainer :{
      borderRadius: 10,
      flexBasis: '40%',
      backgroundColor: constants.LIGHT_THEME_BG,
      margin: 18,
      padding: 20,
      shadowColor: constants.LIGHT_THEME_BG,
      shadowOffset: {
          width: 0,
          height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 9,
      // width: 130,
     

    },

    TagText: {
      fontFamily: constants.PRIMARY_FONT_SEMI_BOLD,
      fontSize: 14,
      color: constants.LIGHT_THEME_PRIMARY_COLOR,
      textAlign: 'center'
    }
    

});


const NewsPageStyle = StyleSheet.create({

  TextViewContainer: {
      backgroundColor: constants.LIGHT_THEME_BG,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      marginTop: -40,
      padding: 30,
      shadowColor: constants.CARD_BACKGROUND_GREY,
      shadowOffset: {
          width: 0,
          height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      
      elevation: 24,
  },

  TextTag:{
      marginBottom: 20,
      fontSize: 16,
      color: constants.LIGHT_THEME_PRIMARY_COLOR,
      fontFamily: constants.PRIMARY_FONT_MEDIUM,
  },

  TitleTag :{
      marginBottom: 20,
      fontSize: 18,
      fontFamily: constants.PRIMARY_FONT_SEMI_BOLD,
      color: constants.LIGHT_THEME_TEXT_COLOR_DARK,
  },

  MetaTag: {
      fontFamily: constants.PRIMARY_FONT_LIGHT,
      color: constants.LIGHT_THEME_TEXT_COLOR,
      marginBottom: 20,
  },

  ArticleText: {
      fontFamily: constants.PRIMARY_FONT_REGULAR,
      fontSize: 16,
      color: constants.LIGHT_THEME_TEXT_COLOR,
      lineHeight: 26,

  }


});
  


const SettingPageStyles = StyleSheet.create({
  HeadSetting :{
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'poppins_bold',
    fontSize: 20,
    marginBottom: 40,
  },

  SettingSingle :{
    display: flex,
    flexDirection: 'row',
    flexWrap:'wrap',
    padding: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
    flexGrow: 1,

  },

  SettingSingleTitle: {
    fontFamily: 'poppins_medium',
    fontSize: 18,
    flexGrow: 6,
    
  },

  osNewsStyleHeader: {
    fontFamily: 'poppins_bold',
    fontSize: 18,
    margin: 12,
  
  },

  SettingSingleIcon:{
    flexGrow: 1,
    padding: 2,

  },

  SettingSingleButton:{
    flexGrow: 3,
  },

  LinksSettings:{
    marginTop: 8,
    flexGrow: 3,
    padding: 6,
  },

  SingleLink: {
    fontFamily: 'poppins_regular',
    fontSize: 16,
    margin: 10,
  },
  osNewsStyle: {
  
    padding: 5,
  }

});



export {HomepageStyle, CategoriesStyleSheet,NewsPageStyle ,SettingPageStyles};