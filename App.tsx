import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { Home } from './src/screens/home/Home';
import { useCustom } from './src/hooks/useCustom';
import ScrollViewScreen from './src/screens/scrollview/ScrollViewScreen';
import FlatListScreen from './src/screens/flatlist/FlatListScreen';
import SectionListScreen from './src/screens/sectionList/SectionList';
import TouchablesScreen from './src/screens/touchables/TouchablesScreen';
import AnimatedCircle from './src/screens/animated/Animated';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import CameraScreen from './src/screens/cameraScreen/CameraScreen';

const App = () => {
  const {ref, onChange, myOnchange, suma} = useCustom();

  return (
    // <View>
    //   <Text style={{backgroundColor: 'blue', fontSize: 30}}>{suma}</Text>
    //   <Button
    //     ref={ref}
    //     title="Button"
    //     onPress={()=>onChange(10)}
    //   />
    //   <Home
    //     onchange={myOnchange}
    //   />
    //   <Home
    //     onchange={myOnchange}
    //   />
      
    //   <IonIcon
    //     name="add-outline"
    //     size={100}
    //     color="blue"
    //   />
    // </View>
    
      // <ScrollViewScreen />
      // <FlatListScreen />
      // <SectionListScreen/>
      // <TouchablesScreen/>
      // <AnimatedCircle/>
      <CameraScreen/>

  );
};

export default App;


