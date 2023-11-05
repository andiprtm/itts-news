import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button';
import Biodata from './components/biodata';
// import LineSeparator from './components/lineSeparator';
// import Separator from './components/separator';
// import Button from './components/classButton';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LineSeparator /> */}
      <Biodata title="Nama lengkap" text="Moch. Andi Divangga Pratama"/>
      {/* <Separator height={30}/> */}
      <Button text="Lihat Berita"/>
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
    padding: "8%",
  },
});
