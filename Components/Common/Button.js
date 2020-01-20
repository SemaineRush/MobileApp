import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const PrimaryButton = props => <TouchableOpacity
  onPress={ props.onPress }
  style={ props.style }
>
  <Text>{ props.title }</Text>
</TouchableOpacity>;