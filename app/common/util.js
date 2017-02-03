let React=require('react-native')
let Dimensions=require('Dimensions')
let{
  PixelRatio
}=React;
module.exports={
  pixel:1/PixelRatio.get(),
  size:{
        width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  }
}
