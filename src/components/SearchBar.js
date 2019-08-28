import React from "react";
import { View, Text, StyleSheet } from "react-native";
// como o projeto foi criado com o expo, basta importar direto o icon
// dessa biblioteca e usá-lo como um react component JSX
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      {/* name é tirado da biblioteca */}
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        // quando o usuario terminar de digitar
        onEndEditing={onTermSubmit}
        style={styles.inputStyle}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10,
    // flexDirection: "row" -> all children will be displayed in the same line
    flexDirection: "row"
  },

  inputStyle: {
    // flex: 1 -> use up as much space in the flexDirection direction as it possibly can
    flex: 1,
    fontSize: 18
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;
