import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Indicators from './screens/Indicators';
import Logo from './assets/images/logo.png';
import {normalize} from './utils';
import {colors} from './utils/colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Indicators"
          component={Indicators}
          options={{
            headerShadowVisible: true,
            headerStyle: {
              elevation: 10,
              shadowColor: colors.black,
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <View style={styles.headerTitleBlock}>
                <Image style={styles.tinyLogo} source={Logo} />
                <Text style={styles.headerTitleText}>GIRO</Text>
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity style={styles.icon} onPress={() => {}}>
                <Icon
                  name="menu"
                  color={colors.darkGrey}
                  size={normalize(30)}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleText: {
    fontWeight: 'bold',
    fontSize: normalize(26),
    color: 'black',
  },
  container: {
    paddingTop: normalize(50),
  },
  tinyLogo: {
    width: normalize(40),
    height: normalize(40),
  },
  icon: {
    marginLeft: 5,
  },
});
