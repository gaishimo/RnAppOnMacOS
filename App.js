/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  useWindowDimensions,
  Dimensions,
  Platform,
} from 'react-native';

const COLORS = ['#5EF2FE', '#66FF85', '#ECFF66'];

const App: () => React$Node = () => {
  // const dimensions = useWindowDimensions();
  const dimensions = Dimensions.get('window');
  console.log('width:', dimensions.width, 'height:', dimensions.height);

  console.log('Platform.OS:', Platform.OS);

  const [windowSize, setWindowSize] = useState(dimensions);
  const onLayout = useCallback(
    (event) => {
      const {width, height} = event.nativeEvent.layout;
      setWindowSize({width, height});
    },
    [setWindowSize],
  );

  const direction = windowSize.width > windowSize.height ? 'row' : 'column';
  const radius =
    direction === 'row' ? windowSize.width * 0.05 : windowSize.height * 0.05;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        onLayout={onLayout}
        style={[styles.page, {flexDirection: direction}]}>
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
