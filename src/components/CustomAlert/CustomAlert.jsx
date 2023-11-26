import React, { useState } from 'react';
import { Image, Modal, Text, View, TouchableOpacity } from 'react-native';
import styles from './CustomAlert.styles';
import colors from '../../theme/colors';

const CustomAlert = ({ state, visible, message, onClose }) => {


  const handleAlertIcon = (state) => {
    if (state === 'error') {
      return [<Image source={require('../../assets/alert/alert_error.png')} style={{ width: 20, height: 20 }} />,
      <Image source={require('../../assets/close/close_error.png')} style={{ width: 15, height: 15 }} />];
    }
    else if (state === 'warning') {
      return [<Image source={require('../../assets/alert/alert_warning.png')} style={{ width: 20, height: 20 }} />,
      <Image source={require('../../assets/close/close_warning.png')} style={{ width: 15, height: 15 }} />];

    }
    else if (state === 'success') {
      return [<Image source={require('../../assets/alert/alert_success.png')} style={{ width: 20, height: 20 }} />,
      <Image source={require('../../assets/close/close_success.png')} style={{ width: 15, height: 15 }} />];

    }
    else if (state === 'info') {
      return [<Image source={require('../../assets/alert/alert_info.png')} style={{ width: 20, height: 20 }} />,
      <Image source={require('../../assets/close/close_info.png')} style={{ width: 15, height: 15 }} />];
    }
    else {
      return [<Image source={require('../../assets/alert/alert_default.png')} style={{ width: 20, height: 20 }} />,
      <Image source={require('../../assets/close/close_default.png')} style={{ width: 15, height: 15 }} />];
    }
  }
  const handleColor = (state) => {
    if (state === 'error') {
      return ['#FEEFEF', '#DA1414'];
    } else if (state === 'warning') {
      return ['#FFF4EC', '#B95000'];
    } else if (state === 'success') {
      return ['#EDF9F0', '#287D3C'];
    } else if (state === 'info') {
      return ['#EEF2FA', '#2E5AAC'];
    } else {
      return ['#FFFFFF', '#000000'];
    }
  };

  const AlertIcons = handleAlertIcon(state);

  const AlertColors = handleColor(state);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={() => onClose()}
    >
      <View style={styles.container}>
        <View style={[styles.modalView , { backgroundColor: AlertColors[0] }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {AlertIcons[0]}
            <Text
              style={[styles.label,
              {
                color: AlertColors[1],
                marginLeft: 5
              }]}
            >{message}
            </Text>
          </View>
          <TouchableOpacity onPress={() => onClose()}>
            <View>
              {AlertIcons[1]}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
