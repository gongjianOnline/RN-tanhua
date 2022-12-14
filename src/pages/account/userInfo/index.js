import React from "react"
import {View,Text} from "react-native"
import SvgUri from "react-native-svg-from-uri";
import {pxToDp} from "../../../util/stylesKits"

const boyIcon ='<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="770"><path d="M883.371 111.623h-299.766c-16.142 0-29.127 12.986-29.127 29.127s12.986 29.127 29.127 29.127h230.347l-138.354 138.354c-61.774-52.55-139.325-81.191-221.366-81.191-91.387 0-177.311 35.559-241.998 100.246-64.686 64.686-100.246 150.611-100.246 241.998s35.559 177.311 100.246 241.998c64.686 64.686 150.611 100.246 241.998 100.246s177.311-35.559 241.998-100.246c64.686-64.686 100.246-150.611 100.246-241.998 0-81.313-28.157-158.257-79.857-219.788l137.626-137.626v228.647c0 16.142 12.986 29.127 29.127 29.127s29.127-12.986 29.127-29.127v-299.766c0-16.142-13.107-29.127-29.127-29.127zM454.231 853.273c-156.558 0-283.989-127.431-283.989-283.989s127.431-283.989 283.989-283.989c77.187 0 147.214 30.947 198.429 81.070 0.85 1.092 1.699 2.185 2.791 3.155 0.971 0.971 2.063 1.821 3.035 2.67 49.274 51.094 79.735 120.635 79.735 197.093 0 156.558-127.431 283.989-283.989 283.989z" fill="" p-id="771"></path></svg>'
const girlIcon = '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="800"><path d="M826.569697 197.042424C759.59596 130.19798 670.771717 93.349495 576.258586 93.349495s-183.466667 36.719192-250.311111 103.692929C259.10303 263.886869 222.254545 352.711111 222.254545 447.353535c0 84.428283 29.349495 164.331313 83.264647 228.072728L245.010101 735.935354l-101.624242-101.624243c-11.248485-11.248485-29.99596-10.860606-41.761617 0.905051-11.765657 11.765657-12.153535 30.513131-0.90505 41.761616L202.343434 778.60202l-91.668687 91.79798c-11.765657 11.765657-11.765657 30.90101 0 42.537374 11.765657 11.765657 30.90101 11.765657 42.537374 0L245.139394 821.010101l101.624242 101.624242c11.248485 11.248485 29.99596 10.860606 41.761617-0.90505 11.765657-11.765657 12.153535-30.513131 0.90505-41.761616L287.806061 778.343434l60.509091-60.509091c63.741414 53.915152 143.644444 83.264646 228.072727 83.264647 94.513131 0 183.337374-36.719192 250.311111-103.692929s103.692929-155.79798 103.692929-250.311112c-0.129293-94.513131-36.848485-183.337374-103.822222-250.052525zM576.258586 740.977778C414.383838 740.977778 282.634343 609.228283 282.634343 447.353535c0-162.00404 131.749495-293.753535 293.753536-293.753535S870.012121 285.349495 870.012121 447.353535c0 161.874747-131.749495 293.624242-293.753535 293.624243z m0 0" fill="" p-id="801"></path></svg>'
const UserInfo = ()=>{
  return (
    <View style={{flex:1,backgroundColor:"#fff",padding:20}}>
      <View>
        <Text style={{fontSize:28}}>????????????</Text>
        <Text style={{fontSize:28,marginTop:5}}>??????????????????</Text>
      </View>
      {/* ?????? */}
      <View style={{flexDirection:'row',alignItems:"center",justifyContent:"center",marginTop:20}}>
        <View style={{width:pxToDp(60),height:pxToDp(60),borderRadius:50,backgroundColor:"#eee",marginRight:50,justifyContent:"center",alignItems:"center"}}>
          <SvgUri width="30" height="30" svgXmlData={boyIcon}></SvgUri>
        </View>
        <View style={{width:60,height:60,borderRadius:50,backgroundColor:"#eee",justifyContent:"center",alignItems:"center"}}>
          <SvgUri width="30" height="30" svgXmlData={girlIcon}></SvgUri>
        </View>
      </View>
    </View>
  )
}
export default UserInfo