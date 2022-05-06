import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CharacterService } from "../services/characterService";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import useLike from "../hooks/likehook";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export default function Character() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const { isLiked, isDisliked, toggleLike, toggleDislike } = useLike(id);

  useEffect(() => {
    CharacterService.getCharacterByID(id).then(setCharacter);
  }, [id]);

  function handleClick() {
    navigate("/");
  }

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <Card sx={{ margin: 5, width: 600 }}>
      <IconButton
        color="primary"
        aria-label="add an alarm"
        onClick={handleClick}
      >
        <ArrowBackIosNewOutlinedIcon sx={{ mt: 2 }} />
      </IconButton>
      <CardContent>
        <Avatar
          alt={character.name}
          src={character.image}
          sx={{ width: 80, height: 80, mb: 2 }}
        />

        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
          {character.name}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Species: {character.species}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Gender:{character.gender}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Location:{character.location.name}:
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Episode:{character.episode}:
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Status:{character.status}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Created:{character.created}
        </Typography>

        <IconButton
          color="primary"
          aria-label="add an alarm"
          onClick={() => toggleLike(id)}
        >
          {isLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
        </IconButton>

        <IconButton
          color="primary"
          aria-label="add an alarm"
          onClick={() => toggleDislike(id)}
        >
          {isDisliked ? <ThumbDownIcon /> : <ThumbDownAltOutlinedIcon />}
        </IconButton>
      </CardContent>
    </Card>
  );
}
