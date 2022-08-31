import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
export default StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:spacing.sm,
    marginVertical:responsiveHeight(3)
  },
  textContainer:{
    backgroundColor:"#06bcee",
    borderRadius:60,
    height:responsiveHeight(15),
    width:responsiveWidth(35),
    alignItems:'center',
    justifyContent:'center'
  },
  mainText:{
    color:'white',
    fontWeight:"bold",
    fontSize:responsiveFontSize(2)
  },
  secondText:{
    color:'white',
    fontSize:responsiveFontSize(2)
  },
  btnContainer:{
    backgroundColor:"#06bcee",
    borderRadius:30,
    height:responsiveHeight(8),
    width:responsiveWidth(20),
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    marginTop:responsiveHeight(3.3)
    

  },

});