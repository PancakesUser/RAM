import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { searchCharacter, getCharacters } from "../api/Api";
import CharactersApi from "./Characters";
import Loader from "./Loader";

export default function SearchBar() {
  var [characterName, setcharacterName] = useState('');
  var [characters, setCharacters] = useState([]);
  var [isLoading, setisLoading] = useState(false);

  const getCharacterInfo = () => {
     setisLoading(true);
     getCharacters("character").then(({ data }) => {
      const { info, results } = data;
      setCharacters(results);
      setisLoading(false);
    });
  };

  useEffect(() => {
    getCharacterInfo();
  }, []);



  const handleSubmit = (event: any) => {
      setisLoading(true);
      event.preventDefault();
      searchCharacter(characterName)
      .then(({data}) => {
        setCharacters(data.results);
        setisLoading(false);
      }).catch((error: AxiosError) => {
            if(error) {
              setisLoading(false);
              if(error.response?.status === 404) {
                 window.location.href = '/404'
              };
            }
      });
  };


  if(isLoading) {
    return(
      <Loader/>
    )
  }

  return(
    <>
      <form className="search__form"  onSubmit={handleSubmit}>
        <input className="search" type="text" placeholder="Search by name" onChange={(e) => {setcharacterName(e.target.value)}}/>
        <input className="search" type="submit" value="Search"/>
      </form>
    {characters ? <CharactersApi characters={characters}/>: ''}
   </>
  )
}