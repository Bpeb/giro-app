import {StyleSheet} from 'react-native';

import {normalize} from '../../utils';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleContainer: {
    marginTop: normalize(20),
    marginLeft: normalize(20),
    marginBottom: normalize(10),
  },
  title: {
    fontWeight: '500',
    fontSize: normalize(22),
    color: colors.darkGrey,
  },
  indicatorsContainer: {
    margin: normalize(5),
  },
  chart: {
    marginTop: normalize(20),
    alignSelf: 'flex-start',
  },
  subchart: {
    position: 'absolute',
  },
  chartContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginRight: normalize(10),
  },
  chartText: {
    color: colors.lightGrey,
    fontSize: normalize(16),
    fontWeight: '700',
  },
});

export default styles;
