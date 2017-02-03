/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Utils from './common/util';
import TitleBar from './view/title';//自定义Title
import TabNavigator from 'react-native-tab-navigator';
import Bars from './bar';

const TabNavigatorItem =TabNavigator.Item;
export default class DemoProject extends Component {
  constructor(props) {
    super(props);
    // 初始化 state 参数
    this.state = {
      appendText: '...12...111......',
      str: '[{123,123}]'
    };
  }
  /**
     * 跳转页面至SecondPage
     * @param name 传递参数
     * @param type 动画类型
     */
    gotoNext(name, type = 'Normal') {
      this.props.navigator.push({
        component: Bars,
        passProps: {
          id: name
        },
        onPress: this.onPress,
        rightText: 'ALERT!',
        type: type
      })
    }
  render() {
    return (
      <View style={yss.container}>
        <TitleBar left='返回' center='首页' right='关于'/>

        <TouchableOpacity
                   onPress={()=>this.gotoNext('第一页', 'Modal')}
                    style={{width:200,height:200}}><Text>我是下面的内容。。。</Text></TouchableOpacity>

      </View>
    );
  }
}

const yss = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop:56,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    backgroundColor: '#f3f3f1',
    width: 100,
    height: 50
  }
});

module.exports = DemoProject;
