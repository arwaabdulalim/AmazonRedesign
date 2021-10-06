import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MainTitle from '../../components/MainTitle';
import Header from '../../components/Header';
import {login, logout, handleAddToCart, deleteItems} from '../../redux/user';
import ProductList from '../ProductList';
import Category from '../../components/Category';
import Deals from '../../components/Deals';
import ProductDetails from '../ProductDetails/index';

const Home = props => {
  // const dispatch = useDispatch();
  //const {user} = useSelector(state => state);
  //console.log('store', user);

  //const [categoryList, setCategoryList] = useState([]);

  //useEffect(() => {
  //  fetchData();
  // }, []);
  // 1 revisit functions
  // 2 diff ben el async await / then
  // 3 revisit el state set / value
  // const fetchData = async () => {
  // const response = await fetch('http://localhost:3000/arwatest');
  //  const responseJson = await response.json();
  // setCategoryList(responseJson);
  //  };

  //console.log('categoryList', categoryList);
  return (
    <SafeAreaView>
      <Header navigation={props.navigation} />
      <Category navigation={props.navigation} />
      <Deals navigation={props.navigation} />
    </SafeAreaView>
    //<SafeAreaView style={{}}>
    // <Text>Home Screen</Text>

    // {/** CATS COMPOENT */}
    //  <FlatList
    //  data={categoryList}
    //  renderItem={({item, index}) => (
    //  <TouchableOpacity
    // onPress={() => dispatch(handleAddToCart(item))}
    //    onPress={() => props.navigation.navigate('ProductList')}
    //   style={{width: 100, height: 100, backgroundColor: 'gray'}}>
    //   <Text>{item.name}</Text>
    //  </TouchableOpacity>
    //  )}
    //  />
    // <Button
    //  title="delete"
    //  onPress={() => props.navigation.navigate('ProductList')}
    //  />
    // </SafeAreaView>
  );
};

export default Home;
