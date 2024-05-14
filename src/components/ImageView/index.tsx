import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  imageViewStyle?: StyleProp<ViewStyle>;
  imageSource?: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
}

const ImageView = (props: Props) => {
  const {imageViewStyle, imageSource, imageStyle} = props;
  return (
    <View style={imageViewStyle}>
      <Image source={imageSource} style={imageStyle} />
    </View>
  );
};

export default ImageView;
