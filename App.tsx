import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { hello, rustAdd} from './modules/iota-identity';
import { useEffect, useState } from 'react';

export default function App() {
  const [value, setValue] = useState<null | number>(null)
  useEffect(() => {
    async function getNumber(){
      let result = await rustAdd(1, 5)
      setValue(result)
    }
    getNumber()
  })
  return (
    <View style={styles.container}>
      <Text>{hello()}</Text>
      <Text>{value}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
