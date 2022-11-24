import React,{useState} from "react"
import {View,Text,Image,StatusBar,Overlay} from "react-native"
import { Input, Icon } from '@rneui/themed';
import {pxToDp} from "../../../util/stylesKits"
import validator from "../../../util/validaror"
const Toast = Overlay.Toast;
const Login = ()=>{
  const [phoneNumber,setPhoneNumber] = useState("")
  const [errorShow,setErrorShow] = useState(true)
  // 监听输入框变化的回调
  const handelChangeText = (props)=>{
    setPhoneNumber(props)
  }
  // 监听完成的回调函数用于检测手机号格式
  const submitPhoneNumber = ()=>{
    const isShow = validator.validatePhone(phoneNumber)
    setErrorShow(isShow)
    if(!isShow){return }
    Toast.show("Hello Toast")
  }
  return (
    <View>
      <StatusBar backgroundColor={"transparent"} translucent={true}></StatusBar>
      <Image
        style={{width:"100%",height:pxToDp(200)}}
        source={require("../../../res/profileBackground.jpg")}></Image>
      {/* 标题 */}
      <View style={{marginLeft:20,marginTop:20}}>
        <Text style={{fontSize:pxToDp(25),fontWeight:"bold"}}>手机号登录</Text>
      </View>
      {/* 表单 */}
      <Input
        placeholder='请输入手机号码'
        maxLength={11}
        keyboardType="phone-pad"
        value={phoneNumber}
        inputStyle={{color:"#333"}}
        onChangeText={(phoneNumber)=>handelChangeText(phoneNumber)}
        errorMessage={errorShow?"":"手机号码格式有误"}
        onSubmitEditing={()=>submitPhoneNumber()}
        leftIcon={{ 
          type: 'font-awesome', 
          name: 'phone', 
          color: "#ccc",
          size:pxToDp(20)
        }}
      />
    </View>
  )
}
export default Login