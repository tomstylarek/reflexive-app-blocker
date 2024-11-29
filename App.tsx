import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const getFullName = (firstName: string, lastName: string) => {
    return firstName + ' ' + lastName;
  }

  return (
    <LinearGradient
      colors={['#bdc3c7', '#2c3e50']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View>
        <Button title='Continue to app' color={'415a77'}></Button>
      </View>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: '#aed9e0',
    padding: 20
  }
});
