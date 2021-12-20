import * as React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

import styles from './styles';
import {indicators} from '../../services/dataSource';
import Card from '../../components/Card';
import {colors} from '../../utils/colors';
import Block from '../../components/Block';
import {ScrollView} from 'react-native-gesture-handler';
import { normalize } from '../../utils';

export default function Indicators() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Indicadores</Text>
        </View>
        <View style={styles.indicatorsContainer}>
          <FlatList
            data={indicators}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({item}) => {
              return <Card key={item.id} indicator={item} />;
            }}
          />
        </View>
        <Block width={300} align={'flex-start'}>
          <View style={styles.chartContainer}>
            <Text style={styles.chartText}>Faturamento vs Custo Fixo</Text>
            <LineChart
              yLabelsOffset={20}
              withInnerLines={false}
              withOuterLines={false}
              style={styles.chart}
              data={{
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                datasets: [
                  {
                    data: [
                      100, 50, 40, 80, 60, 230, 120, 400, 300, 100, 290, 310,
                      250,
                    ],
                  },
                ],
              }}
              width={normalize(260)}
              height={normalize(260)}
              verticalLabelRotation={0}
              segments={8}
              chartConfig={{
                backgroundColor: colors.blue,
                backgroundGradientFrom: colors.white,
                backgroundGradientTo: colors.white,
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => colors.blue,
                labelColor: (opacity = 1) => colors.lightGrey,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '0',
                },
              }}
              bezier
            />
          </View>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
}
