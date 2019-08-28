import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

// gives the ability of using the navigation prop to ResultsList without
// having to use the SearchScreen
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        showsHorizontalScrollIndicator={false}
        // key extractor which is going to look at every item inside
        // of results for every object inside there and from every object we need to return some kind of stable
        // identifier.
        keyExtractor={result => result.id}
        // item the actual object that we are currently iterating over
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                // when ResultsShow gets displayed, it will have the id information now
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "bold"
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);
