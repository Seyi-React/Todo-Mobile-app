 import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable android_ripple={{color:''}} onPress={props.delete}>
      <View>
        <Text style={styles.goals}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goals: {
    margin: 5,
    color: "white",
    textTransform: "capitalize",
    backgroundColor: "navy",
    borderRadius: 6,
    padding: 8,
  },
});

export default GoalItem;
