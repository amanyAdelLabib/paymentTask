import { StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
import { Colors } from './../../Utils/Colors';

export default StyleSheet.create({
  container: {
    height: responsiveHeight(20),
    marginBottom: spacing.md,
    backgroundColor: Colors.appColor1,
    borderRadius: 24,
    marginHorizontal:  spacing.md,
    elevation: 6,
    padding:'3%'
  },
  containerText:{
    flexDirection:'row'
  },
  imageContainer: {flex: 1},
  image: {
    flex: 1,
    borderRadius: 24,
    height: responsiveHeight(30),
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 160,
    paddingLeft:  spacing.md,
    paddingRight:  spacing.sm,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  mainText: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '600',
    color:'black',
    paddingBottom: spacing.sm,
  },
  text: {
    fontSize: responsiveFontSize(2.3),
    paddingBottom: spacing.sm,
  },
  timestamp: {
    position: 'absolute',
    // color: Colors.appColor1,
    fontSize: responsiveFontSize(1.5),
    fontWeight: '300',
    right: spacing.md,
    bottom: spacing.sm,
  },
  btn:{
    width:responsiveWidth(20),
    position: 'absolute',
    height:responsiveHeight(5),
    alignItems:'center',
    justifyContent:'center',
    // color: Colors.appColor1,
    right: spacing.md,
    bottom: spacing.sm,
    borderRadius:20,
  },
  btn2:{
    width:responsiveWidth(20),
    position: 'absolute',
    height:responsiveHeight(5),
    alignItems:'center',
    justifyContent:'center',
    // color: Colors.appColor1,
    left: spacing.md,
    bottom: spacing.sm,
    borderRadius:20,
  },
  secondText:{
    color:'white',
    fontSize:responsiveFontSize(2)
  },
  
});