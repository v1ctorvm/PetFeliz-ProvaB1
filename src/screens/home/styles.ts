import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ScreenContainer = styled(SafeAreaView)`
  background-color: blue;
  flex: 1;
`;

export const TopBar = styled.View`
  background-color: white;
`;

export const ScreenTitle = styled.Text`
  font-size: 28px;
  color: #000;
  padding-left: 18px;
  font-weight: bold;
`;

export const SearchInput = styled.TextInput`
  height: 40px;
  background-color: #f5f5f5;
  border-width: 1px;
  border-color: #e0e0e0;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
`;

export const PetGrid = styled.FlatList``;

export const PetCard = styled.View`
  background-color: green;
  margin: 8px;
  border-radius: 5px;
  padding: 12px;
`;

export const PetTitle = styled.Text`
  font-size: 24px;
  font-weight: 500;
`;

export const PetSpecies = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #817b7b;
`;
