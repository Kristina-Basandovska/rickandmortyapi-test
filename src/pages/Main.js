import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import InfiniteScroll from "react-infinite-scroll-component";
import { CharacterService } from "../services/characterService";
import CharacterCard from "../components/characterCard";
import Header from "../components/Header";

export default function Main() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const [characters, setCharacters] = useState([]);
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });

  console.log(currentCharacters);

  useEffect(() => {
    CharacterService.getAllCharacters().then((list) => {
      setCharacters(list);
      setCurrentCharacters(list.slice(0, 10));
      if (list.length > 10) {
        setHasMore(true);
      }
    });
  }, []);

  const getMoreData = () => {
    if (currentCharacters.length === characters.length) {
      setHasMore(false);
      return;
    }

    setCurrentCharacters((prev) => [
      ...prev,
      ...characters.slice(count.prev + 10, count.next + 10),
    ]);

    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
  };

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  function handleSelect(id) {
    navigate(`/character/${id}`);
  }

  const options = characters.map((user) => ({
    label: user.name,
    value: user.id,
  }));

  return (
    <div>
      <Header />
      <Search
        name="input"
        onChange={handleChange}
        value={input}
        options={options}
        onOptionClick={handleSelect}
      />

      <InfiniteScroll
        dataLength={currentCharacters.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <ul>
          {currentCharacters &&
            currentCharacters
              .filter((character) =>
                character.name.toLowerCase().startsWith(input)
              )
              .map((character) => (
                <li
                  style={{ listStyle: "none", width: 275 }}
                  key={character.id}
                  onClick={() => handleSelect(character.id)}
                >
                  <CharacterCard
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    status={character.status}
                  />
                </li>
              ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}
