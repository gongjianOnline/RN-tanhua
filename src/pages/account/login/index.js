import React,{useState} from "react"
import {View,Text,Image,StatusBar} from "react-native"
import { Input, Icon } from '@rneui/themed';
import {pxToDp} from "../../../util/stylesKits"
const Login = ()=>{
  const [phoneNumber,setPhoneNumber] = useState("")
  const handelChangeText = (props)=>{
    setPhoneNumber(props)
  }
  const submitPhoneNumber = ()=>{
    console.log("点击完成")
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
        errorMessage="手机格式不正确"
        onSubmitEditing={()=>submitPhoneNumber()}
        leftIcon={{ 
          type: 'font-awesome', 
          name: 'phone', 
          color: "#ccc",
          size:pxToDp(20)
        }}
      />
      <Text>{phoneNumber}</Text>
    </View>
  )
}
export default Login