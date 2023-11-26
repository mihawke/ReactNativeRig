import React from 'react';
import { View, Text, Alert } from 'react-native';
import Button from './components/Button/Button';
import CustomAlert from './components/CustomAlert/CustomAlert';

const App = () => {
    return (
        <View>
            <Text>
                <CustomAlert></CustomAlert>
            </Text>
        </View>
    )
}

export default App;