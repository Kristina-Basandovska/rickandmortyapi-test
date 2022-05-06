import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/characterCard";
import useLike from "../hooks/likehook";
import { CharacterService } from "../services/characterService";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export default function LikedCharacters() {
  const [likedCharacters, setLikedCharacters] = useState([]);
  const { listOfLikedId } = useLike();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  useEffect(() => {
    CharacterService.getCharacterByID(...listOfLikedId).then((data) =>
      Array.isArray(data)
        ? setLikedCharacters(data)
        : setLikedCharacters([data])
    );
  }, [listOfLikedId]);

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="add an alarm"
        onClick={handleClick}
      >
        <ArrowBackIosNewOutlinedIcon sx={{ mt: 2 }} />
      </IconButton>
      <ul>
        {likedCharacters.map((character) => (
          <li style={{ listStyle: "none", width: 275 }} key={character.id}>
            <Card
              id={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
