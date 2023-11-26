import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    width:"85%",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal:15,
    alignItems:'center',
    justifyContent:'space-between'
  },
  label: {
    fontSize: 14,
    lineHeight:24,
    fontWeight: '700'
  },
});

export default styles;