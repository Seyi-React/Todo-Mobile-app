import { StyleSheet, View, FlatList, Image } from "react-native";

import { useState } from "react";
import GoalItem from "./assets/components/GoalItem";
import GoalText from "./assets/components/TextInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoal(text) {
    setGoals((current) => [
      ...current,
      {
        addText: text,
        id: Math.random().toString(),
      },
    ]);
  }
  function onDelete(id) {
    console.log("deleted");
  }

  return (
    <View style={styles.appContain}>
      <GoalText onAdd={addGoal} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.addText}
                id={itemData.item.id}
                delete={onDelete}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#ffff",
          marginRight: 20,
          marginLeft: 20,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        {/* <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: "https://images.unsplash.com/photo-1682628890978-1d825f195f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
          }}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContain: {
    paddingTop: 50,
    marginTop: 30,
  },
  mine: {
    textAlign: "center",
    paddingTop: 20,
    marginTop: 20,
    color: "navy",
    fontSize: 18,
    letterSpacing: 1,
  },

  listContainer: {
    margin: 10,
    paddingTop: 30,
  },
});
