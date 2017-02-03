import React,{Component} from 'react';
import {

    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

export default class TitleBar extends Component{
    render(){
        return(
            <View>
                <View style={ys.title}>
                          <View style={ys.title_left}>
                            <Text>{this.props.left}</Text>
                          </View>
                          <View style={ys.title_center}>
                            <Text>{this.props.center}</Text>
                          </View>
                          <View style={ys.title_left}>
                            <Text>{this.props.right}</Text>
                          </View>
                        </View>
            </View>
        );
    }
}
const ys = StyleSheet.create({
  title: {
    width: Dimensions
      .get('window')
      .width,
    backgroundColor: '#fff000',
    height: 50,
    flexDirection: 'row'
  },
  title_left: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa666',
    height: 50
  },
  title_center: {
    width: Dimensions
      .get('window')
      .width - 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff666',
    height: 50
  }
});
module.exports=TitleBar;