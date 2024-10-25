// Importaciones necesarias
import React from 'react';
import { View, Button, Image } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CameraScreen = () => {
  const [imageUri, setImageUri] = React.useState<string | null>(null);

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      saveToPhotos: true,
    });

    if (result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      await AsyncStorage.setItem('savedImage', uri || '');
    }
  };

  const loadImage = async () => {
    const uri = await AsyncStorage.getItem('savedImage');
    if (uri) {
      setImageUri(uri);
    }
  };

  React.useEffect(() => {
    loadImage();
  }, []);

  return (
    <View>
      <Button title="Abrir Cámara" onPress={openCamera} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default CameraScreen;

