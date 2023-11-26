import React, { useState } from 'react';
import styles from './Button.styles';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import colors from '../../theme/colors';

const Button = ({ label, onPress, btnColor, btnState, variant, isDisabled, onPressOut, onPressIn }) => {
  const [active, setActive] = useState(false);
  const [isPressed, setPressed] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      disabled={isDisabled}
      onPressIn={() => {
        setPressed(true);
        setActive((prevActive) => !prevActive);
        { onPressIn }
      }}
      onPressOut={() => { setPressed(false); { onPressOut } }}
    >
      <View
        style={[
          styles.button,
          {
            backgroundColor: variant === 'primary' ? (isPressed ? colors[btnColor].hover : (active ? colors[btnColor].active : colors[btnColor][btnState])) : 'transparent',
            borderWidth: variant === 'primary' ? 0 : 3,
            borderColor: variant === 'primary' ? 'transparent' : (isPressed ? colors[btnColor].hover : (active ? colors[btnColor].active : colors[btnColor][btnState])),
          },
        ]}
      >
        <Text
          style={[
            styles.label,
            {
              color: variant === 'primary' ? "#FFFFFF" : (isPressed ? colors[btnColor].hover : (active ? colors[btnColor].active : colors[btnColor][btnState]))
            }]}
        >
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
