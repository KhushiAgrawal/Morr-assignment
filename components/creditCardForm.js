import React, { useState } from 'react';
import { StyleSheet, View,Button, } from 'react-native';
import { Input } from 'react-native-elements';

// import Button from './Button';

const creditCardForm: React.FC = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  function onSubmit() {
    console.log('form submitted');
  }
  return (
    <View>
      <Input
        style={styles.textField}
        label="First Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        style={styles.textField}
        label="Last Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      
      <Input
        style={styles.textField}
        label="Card Number"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />
      <View style={styles.row}>
        <Input
          style={[
            styles.textField,
            {
              marginRight: 24,
            },
          ]}
          label="MM/YY"
          value={expiration}
          onChangeText={(text) => setExpiration(text)}
        />
        <Input
          style={styles.textField}
          label="Security Code"
          value={cvv}
          onChangeText={(text) => setCvv(text)}
        />
        
      </View>
      <Button title="Submit Payment" onPress={onSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 36,
  },
  textField: {
    flex: 1,
    marginTop: 24,
  },
});
export default creditCardForm;