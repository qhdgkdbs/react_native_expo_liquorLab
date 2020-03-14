import React, { Component } from 'react';
import { StyleSheet,
         Text, 
         TouchableOpacity, 
         SafeAreaView, 
         View, 
         ScrollView,
         Dimensions,
         Image,
        } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import CardView from './card';

// import * as Haptics from 'expo-haptics';

class App extends Component {
  

  render(){
    const data = {
      
    }

    return (
      <View>
        <View>
        <Slideshow 
          dataSource={[
            { title: 'LIQUOR LAB',
              url:'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            },
            { title: 'LIQUOR LAB',
              url:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            },
            { title: 'LIQUOR LAB',
              url:'https://images.unsplash.com/photo-1560508180-03f285f67ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            }
        ]}
        height = { 300 }
        arrowSize	={ 0 }
        titleStyle = {{ fontSize: 40, 
                        color : 'white', 
                        backgroundColor: "black" 
                      }}
        
        />
        </View>

        <ScrollView>
         <CardView
          data={this.props.data}
          key={this.props.index}
         />
        </ScrollView>
      </View>
    );
    }
  }

const styles = StyleSheet.create({
  center:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
