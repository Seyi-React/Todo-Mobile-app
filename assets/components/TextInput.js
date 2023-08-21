
import {StyleSheet,View,TextInput,Button} from 'react-native'
import { useState } from 'react';

const GoalText = (props) => {

 const [text, setText] = useState("");

    function checkGoal(enteredText) {
        setText(enteredText);
      }

      function addGoal () {
        props.onAdd(text);
        setText('')
      }
 
    return (
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goal!!!"
          onChangeText={checkGoal}
          value={text}
        />
        <Button title="Add Goal" color="navy" onPress={addGoal} />
      </View>
    )
}


export default GoalText;


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 3,
      },
      TextInput: {},    
})