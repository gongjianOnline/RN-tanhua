import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderColor: '#00000030',
    textAlign: 'center',
    borderBottomWidth:1,
    color:"#a760ca"
  },
  focusCell: {
    borderColor: '#a760ca',
  },
});

const CELL_COUNT = 6;

const Verify = (params) => {
  console.log(params)
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  console.log("props",props)
  // 完成验证码
  const handelChange = (props)=>{
    setValue(props)
    if(props.length === 6){
      params.propsVerify(props)
      // props[5] === 0 ?navigation.navigate('UserInfo'):navigation.navigate('Home')
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      {/* <Text style={styles.title}>Verification</Text> */}
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={(value)=>{handelChange(value)}}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor cursorSymbol="|" delay={2500}/> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Verify;