import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  Overlay,
  TouchableOpacity,
} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {pxToDp} from '../../../util/stylesKits';
import validator from '../../../util/validaror';
import THButton from '../../../components/THButton';
import Verify from "../../../components/verifyComponent"
const Toast = Overlay.Toast;
const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorShow, setErrorShow] = useState(true);
  const [isLogin, setLogin] = useState(true);
  const [counterValue,setCounterValue] = useState("获取验证码")
  // 监听输入框变化的回调
  const handelChangeText = props => {
    setPhoneNumber(props);
  };
  // 监听完成的回调函数用于检测手机号格式
  const submitPhoneNumber = () => {
    const isShow = validator.validatePhone(phoneNumber);
    setErrorShow(isShow);
    if (!isShow) {
      return;
    }
    // Toast.show('正在获取手机验证码', 5000);
    setLogin(false);
  };
  // 获取验证码
  const handelVerify = ()=>{
    console.log(counterValue !== "获取验证码",)
    if(counterValue !== "获取验证码"){return}
    let counter = 60
    let time = setInterval(()=>{
      if(counter <= 0 ){
        clearInterval(time)
        setCounterValue("获取验证码")
        return
      }
      counter--
      setCounterValue(`重新获取验证码 (${counter}S)`)
      console.log("定时器")
    },3000)
  }

  // 验证码子组件传参
  const propsVerify = (data)=>{
    console.log("data",data,data[5])
    data[5] == 0?props.navigation.navigate("UserInfo"):props.navigation.navigate("Home")
  }

  /**业务代码,登录的代码 */
  const loginContainer = () => {
    return <View>
    {/* 标题 */}
    <View style={{marginLeft: 20, marginTop: 20}}>
      <Text style={{fontSize: pxToDp(25), fontWeight: 'bold'}}>
        手机号登录
      </Text>
    </View>
    {/* 表单 */}
    <Input
      placeholder="请输入手机号码"
      maxLength={11}
      keyboardType="phone-pad"
      value={phoneNumber}
      inputStyle={{color: '#333'}}
      onChangeText={phoneNumber => handelChangeText(phoneNumber)}
      errorMessage={errorShow ? '' : '手机号码格式有误'}
      onSubmitEditing={() => submitPhoneNumber()}
      leftIcon={{
        type: 'font-awesome',
        name: 'phone',
        color: '#ccc',
        size: pxToDp(20),
      }}
    />
    {/* 提交按钮 */}
    <View
      style={{
        width: '100%',
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
      }}>
      <THButton
        handelPress={submitPhoneNumber}
        value="获取手机验证码"></THButton>
    </View>
  </View>
  };
  /**验证码登录 */
  const verifyContainer = () => {
    return (
      <View>
        <View style={{marginLeft: 20, marginTop: 20}}>
          <Text style={{fontSize: pxToDp(25), fontWeight: 'bold'}}>
            验证码登录
          </Text>
          <Text>当前号码: 86+{phoneNumber}</Text>
        </View>
        <View>
          <Verify propsVerify={propsVerify}></Verify>
        </View>
        <View style={{
          width: '100%',
          height: 50,
          paddingLeft: 10,
          paddingRight: 10,
          marginTop:100
        }}>
          <THButton
          handelPress={handelVerify}
          value={`${counterValue}`}></THButton>
        </View>
      </View>
    );
  };
  return (
    <View>
      <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
      <Image
        style={{width: '100%', height: pxToDp(200)}}
        source={require('../../../res/profileBackground.jpg')}></Image>
      {
        isLogin?loginContainer():verifyContainer()
      }
    </View>
  );
};
export default Login;
