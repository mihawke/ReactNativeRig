import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './CustomAlert.styles';

const CustomAlert = () => {

  return (
      <View style={styles.container}>
        <Text style={styles.label}>Alert</Text>
      </View>
  );
};

export default CustomAlert;
