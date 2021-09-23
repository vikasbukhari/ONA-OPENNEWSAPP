import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import constants from '../assets/constants';
import LottieView from 'lottie-react-native';
import {CategoriesStyleSheet} from '../assets/StyleSheet';

const Categories = ({navigation}) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
      loadCategories();
  }, [])
  

  const loadCategories = async () => {
      let myHeaders = new Headers();
      myHeaders.set('Cache-Control', 'no-cache');
      myHeaders.set('Pragma', 'no-cache');
      myHeaders.set('Expires', '0');
      const response = await fetch(`${constants.APP_BASE_URL}/wp-json/wp/v2/categories`, {headers: myHeaders});
      const data = await response.json();
      setCategories(data);
     
  }

  const DataConstant = categories.map(function(x){
        return (
          <TouchableOpacity onPress={()=> navigation.navigate("CategoryView",{catname: x.name, catid: x.id})} key={x.id} style={CategoriesStyleSheet.TagContainer}>
            <Text style={CategoriesStyleSheet.TagText}>{x.name}</Text>
          </TouchableOpacity>
        )
  });


  return (
    <SafeAreaView>
     
      <View style={CategoriesStyleSheet.CategoryPage}>
          
          <Text style={CategoriesStyleSheet.heading}>
            Categories
          </Text>

          <ScrollView style={{backgroundColor: constants.LIGHT_THEME_LIGHT_BLUE_BG}}>

              <View style={CategoriesStyleSheet.AllCategorieTags}>
            
                {categories.length < 1 ? <LottieView style={{width: 150, height: 200, margin: '16%',}} source={require('../assets/loading/newsload1.json')} autoPlay loop /> : DataConstant}
                
              </View>

          </ScrollView>
        
          
      </View>

    </SafeAreaView>
    
  );
}


export default Categories;
  