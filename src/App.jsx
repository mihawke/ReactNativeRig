import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import CustomAlert from './components/CustomAlert/CustomAlert';


const App = () => {

    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.Container}>
                    <CustomAlert message={'Alert Message'} visible={true} state={'success'} onClose={() => { }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        padding: 10,
        flex: 1,
        alignItems: 'center'
    },
});

export default App;
