import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Main } from '../components/index'

export default class MainContainer extends React.Component {
  state = {
    data: [],
    isLoading: false
  }

//   componentDidMount(){
//     this.getPostData();
//   }

//   getPostData = async() => {
//     const data = await this.callPostData();
//     this.setState({
//       data: data.rows,
//       isLoading: true
//     })
//   }

//   callPostData = async() => {
//     return fetch('api주소')
//     .then(request => request.json())
//     .catch(err => console.log(err))
//   }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Main
              data={{image : "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            }}
            />
          {/* {this.state.data.map((data, index) => (
            <Main
              data={data}
              key={index}
            />
          ))} */}
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    header: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContainer: {
      flex: 1,
      flexDirection: 'column',
      width: '100%'
    }
  });