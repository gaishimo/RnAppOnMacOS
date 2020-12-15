/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, StatusBar, useWindowDimensions} from 'react-native';

const COLORS = ['#5EF2FE', '#66FF85', '#ECFF66'];

const App: () => React$Node = () => {
  const dimensions = useWindowDimensions();
  const direction = dimensions.width > dimensions.height ? 'row' : 'column';
  console.log('width:', dimensions.width, 'height:', dimensions.height);

  const radius =
    direction === 'row' ? dimensions.width * 0.05 : dimensions.height * 0.05;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={[styles.page, {flexDirection: 'row'}]}>
        {[0, 1, 2].map((i) => (
          <View
            key={i}
            style={[
              styles.shape,
              {
                width: radius * 2,
                height: radius * 2,
                borderRadius: radius,
                backgroundColor: COLORS[i],
                opacity: 0.5,
              },
            ]}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  shape: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
});

export default App;
