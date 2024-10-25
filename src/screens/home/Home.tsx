import React from 'react';
import { View, Text, Button } from 'react-native';

interface Props {
  onchange: ()=> void
}

export const Home = ({onchange}: Props) => {
  return (
    <View>
      <Text>Desde el home</Text>
      <Button
        title="boton desde el Home"
        onPress={onchange}
      />
    </View>
  );
};
