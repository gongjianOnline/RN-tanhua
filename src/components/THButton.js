import LinearGradient from 'react-native-linear-gradient';
import {Text,StyleSheet,TouchableOpacity} from "react-native"

const ThButton = (props)=>{
  return  (
    <TouchableOpacity onPress={()=>props.handelPress()} style={{width:"100%",height:"100%"}}>
      <LinearGradient 
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={['#a862c8', '#f16180']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          {props.value?props.value:"按钮"}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export default ThButton