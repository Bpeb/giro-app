import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import {normalize} from '../utils';
import {colors} from '../utils/colors';

export default function Block({width, children, align}) {
  return (
    <View
      style={[
        {width: normalize(width), alignItems: align ? align : 'center'},
        styles.container,
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    elevation: normalize(9),
    padding: normalize(10),
    paddingLeft: normalize(20),
    paddingRight: normalize(20),
    margin: normalize(10),
    borderRadius: normalize(10),
  },
});
