import {
  PetCard,
  PetGrid,
  PetSpecies,
  PetTitle,
  ScreenContainer,
  ScreenTitle,
  SearchInput,
  TopBar,
} from "./styles";

export interface Pet {
  id: number;
  name: string;
  species: string;
}

export const PET_MOCK = [
  { id: 1, name: "Rex", species: "Dog" },
  { id: 2, name: "Mia", species: "Cat" },
  { id: 3, name: "Tweety", species: "Bird" },
  { id: 4, name: "Thor", species: "Dog" },
  { id: 5, name: "Luna", species: "Cat" },
  { id: 6, name: "Zeke", species: "Bird" },
  { id: 7, name: "Pet1", species: "Dog" },
  { id: 8, name: "Pet2", species: "Bird" },
  { id: 9, name: "Pet9", species: "Cat" },
  { id: 10, name: "Pet10", species: "Dog" },
  { id: 11, name: "Pet11", species: "Cat" },
  { id: 12, name: "Pet12", species: "Cat" },
  { id: 13, name: "Pet13", species: "Bird" },
  { id: 14, name: "Pet14", species: "Dog" },
  { id: 15, name: "Pet15", species: "Bird" },
];

export function HomeScreen() {
  //   const [pets, setPets] = useState<Pet[]>([]);
  //   const [search, setSearch] = useState("");

  //   const filteredProducts = pets.filter(
  //     (pets) => search.toLowerCase;
  //   );

  //   // useEffect setSearch
  //   []);

  return (
    <ScreenContainer>
      <TopBar>
        <ScreenTitle>Patient Search</ScreenTitle>
        <SearchInput
          placeholder="Search pet by name..."
          // value={search}
          // onChangeText={setSearch}
        />

        <PetGrid
          data={PET_MOCK}
          renderItem={({ item }) => (
            <PetCard>
              <PetTitle>{item.name}</PetTitle>
              <PetSpecies>{item.species}</PetSpecies>
            </PetCard>
          )}
          keyExtractor={(item) => item.id}
        />
      </TopBar>
    </ScreenContainer>
  );
}
