import { useEffect, useState } from "react";
import { getCharacters, searchCharacter } from "../api/Api";

export default function CharactersApi(props: any) {
    
const {characters} = props;

  return (
    <>
    <div className="character">
      {characters.map((character: any) => {
        function status(status: any) {
          switch (status) {
            case "Alive":
              return <span className="c__alive">Status: Vivo</span>;
              break;
            case "Dead":
              return <span className="c__dead">Status: Muerto</span>;
              break;
            case "unknown":
              return <span className="c__unknown">Status: Desconocido</span>;
          }
        }

        return (
            <div className="characters">
              <img key={character.id} src={character.image} alt="character" />
              {character.origin.name ? (
                <span className="c__origin">{character.origin.name}</span>
              ) : (
                ""
              )}
              <div className="characters__body">
                <h1 className="c__name">
                  {character.name.replace("Abadango Cluster Princess", "ABCP")}
                </h1>
                {status(character.status)}
                <span className="c__location">
                  Location: {character.location.name}
                </span>
                <span className="c__species">
                  Specie: {character.species ? character.species : "???"}
                </span>
                {character.type ? (
                  <span className="c__type">Type: {character.type}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
        );
      })}
    </div>
    </>
  );
}
