import { Platform } from 'react-native'


const isAndroid = Platform.OS === 'android' ? true : false

const COLORS = {
  BACKGROUND: "#1F3247",
  GREEN: '#43BA97',
  BLUE:'#0091EA'
};

const BUTTON = {
  LOGIN: {backgroundColor:'#43BA97', paddingVertical:'3%', paddingHorizontal:'32.5%', borderRadius:5, justifyContent:'center', alignItems:'center', }
}

const TEXT = {
  T1 : {fontSize:8, color:'white'},
  T2 : {fontSize:10, color:'white'},
  T3 : {fontSize:12, color:'white'},
  T4 : {fontSize:14, color:'white'},
  T5 : {fontSize:16, color:'white'},
  T6 : {fontSize:18, color:'white'},
  T7 : {fontSize:20, color:'white'},
  T8 : {fontSize:22, color:'white'},
  T9 : {fontSize:24, color:'white'},
  T10 : {fontSize:26, color:'white'},
  T11 : {fontSize:28, color:'white'}
  
}

export default {COLORS, BUTTON, TEXT, isAndroid};
