import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import { Card } from "./Components/PokemonCard/styles";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
    id: 0,
  });
  const [pokemon1, setPokemon1] = useState({
    name: "Hitmonlee",
    type: "Fight",
    evolved: true,
    weight: 1.5,
    color: "brown",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/3/32/106Hitmonlee.png/250px-106Hitmonlee.png",
    id: 1,
  });

  // Para fazer seus próximos pokemons, crie novos estados!

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard
          color={pokemon.color}
          image={pokemon.image}
          name={pokemon.name}
          type={pokemon.type}
          weight={pokemon.weight}
        />
        {/* Crie aqui seus próximos pokemons! */}
        <PokemonCard
          color={pokemon1.color}
          image={pokemon1.image}
          name={pokemon1.name}
          type={pokemon1.type}
          weight={pokemon1.weight}
        />        
      </FlexContainer>
    </>
  );
}

export default App;
