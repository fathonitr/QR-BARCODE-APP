import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.page}>
      <Text>Home Screen</Text>
      <Button
        title="Code Scanner"
        onPress={() => navigation.navigate('CodeScanner')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
