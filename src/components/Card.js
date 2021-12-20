import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconSubValue from 'react-native-vector-icons/AntDesign';

import Block from './Block';
import {getIndicatorIconColor, normalize} from '../utils';
import {colors} from '../utils/colors';

export default function Card({indicator}) {
  return (
    <Block width={140}>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Icon
            name={indicator.icon}
            size={normalize(20)}
            color={getIndicatorIconColor(indicator.id)}
          />
          <Text style={styles.title}>{indicator.title}</Text>
        </View>
        <View style={styles.containerValue}>
          {indicator.unit === 'R$' && (
            <Text style={styles.subvalue}>{indicator.unit}</Text>
          )}
          <Text style={styles.textValue}>{indicator.value}</Text>
          {indicator.unit === '%' && (
            <Text style={styles.textValue}>{indicator.unit}</Text>
          )}
        </View>
        <View style={styles.containerSubvalue}>
          <IconSubValue
            name="caretup"
            size={normalize(15)}
            color={colors.green}
          />
          <Text style={styles.textSubvalue}>{indicator.subvalue}</Text>
          <Text style={styles.textSubvalue}>%</Text>
        </View>
      </View>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 0,
  },
  containerTitle: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    marginLeft: normalize(5),
    fontSize: normalize(14),
    fontWeight: 'bold',
    color: colors.lightGrey,
  },
  containerValue: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  textValue: {
    fontSize: normalize(35),
    fontWeight: '900',
    color: colors.darkGrey,
  },
  containerSubvalue: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  subvalue: {
    marginLeft: normalize(5),
    marginBottom: normalize(7),
    fontSize: normalize(14),
    fontWeight: 'bold',
    color: colors.lightGrey,
  },
  textSubvalue: {
    marginLeft: normalize(5),
    fontSize: normalize(14),
    color: colors.lightGrey,
  },
});
