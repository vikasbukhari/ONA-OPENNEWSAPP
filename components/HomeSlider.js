import React, { Component } from 'react';
import { Text, View, Image, flex} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import constants from '../assets/constants';
import LottieView from 'lottie-react-native';


class HomeSlider extends Component{

    constructor(props){
        super(props);
        this.state = {

          activeIndex:0,
          posts: {},
          loading: true,

      }
      
    }

    componentDidMount(){

      this.getData();

      this.interval = setInterval(this.getData, 300000);
  
    //  console.log( this.props.refreshing);

    }

    componentDidUpdate(){
      if(this.props.refreshing){
        this.getData();
      }

    }

    getData = () => {
      let myHeaders = new Headers();
      myHeaders.set('Cache-Control', 'no-cache');
      myHeaders.set('Pragma', 'no-cache');
      myHeaders.set('Expires', '0');

      fetch(`${constants.APP_BASE_URL}/wp-json/wp/v2/posts?_fields=id,title,featured_media_src_url,featured_media`, {headers: myHeaders})
      .then((response) => response.json())
      .then((data => { 
       
        this.setState({
          posts: data,
          loading: false,
        })
      }
      ))

    }


    renderItem = ({item,index}) => {
        return (
       
          <View style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderRadius: 20,
           
             height: 250,
             marginLeft: 16,
             backgroundColor: 'white',
              elevation: 20,
              marginBottom:20,
              marginTop: 20,
              shadowColor: 'white',
              shadowOffset: {
                  width: 0,
                  height: 10,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.00,
              display: flex, flexDirection: 'column'}}>
            
            <Image style={{height: 150, width: '100%' ,borderTopLeftRadius: 20,
             borderTopRightRadius: 20}} 
             source={{uri: item.illustration}} />

            <Text onPress={() => this.props.navigation.navigate('ViewNews', { postID: item.id})} style={{fontSize: 14, padding: 12 ,marginTop: 20, fontFamily: 'poppins_semibold'}}>{item.title}</Text>
          </View>

        )
    }
    render(){


      if(this.state.loading){
        
        return(<View style={{
          display: flex,
          alignContent: 'center',
          justifyContent: 'center',
          flex: 1,
       
        }}><LottieView style={{width: 10, height: 100, marginLeft: '28%',}} source={require('../assets/loading/newsload1.json')} autoPlay loop />
        </View>)
      
      }else{



        const carouselItems = this.state.posts.map(function(x){
          return (
            {
              id: x.id,
              title: x.title.rendered,
              illustration: x.featured_media_src_url,
            
            }
          )
        })
        
        return(
          <View style={{ flex: 1, flexDirection:'row', marginTop: 20, backgroundColor: '#FBFEFB'}}>
          <Carousel
            
            loop={true}
            loopClonesPerSide={2}
            autoplay={true}
            autoplayDelay={200}
            autoplayInterval={5000}
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={carouselItems}
            sliderWidth={100}
            itemWidth={350}
            renderItem={this.renderItem}
            onSnapToItem = { index => this.setState({activeIndex:index}) } />
           </View>
      )
      }




    }

}

export default HomeSlider;
  