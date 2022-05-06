import React, { useState } from "react";
const LIKE_KEY = "likes";
const DISLIKE_KEY = "dislikes";

export default function useLike(id) {
  const [isLiked, setLike] = useState(() => {
    const likes = JSON.parse(localStorage.getItem(LIKE_KEY)) || [];
    const isCharacterLiked = likes.includes(id);
    return isCharacterLiked;
  });
  const [isDisliked, setDislike] = useState(() => {
    const dislikes = JSON.parse(localStorage.getItem(DISLIKE_KEY)) || [];
    const isCharacterDisliked = dislikes.includes(id);
    return isCharacterDisliked;
  });

  const [listOfLikedId, setListOfLikedId] = useState(
    JSON.parse(localStorage.getItem(LIKE_KEY)) || []
  );

  function toggleLike(id) {
    const likes = JSON.parse(localStorage.getItem(LIKE_KEY)) || [];
    const isCharacterLiked = likes.includes(id);
    if (isCharacterLiked) {
      const filteredLikes = likes.filter((likeId) => likeId !== id);
      localStorage.setItem(LIKE_KEY, JSON.stringify(filteredLikes));
      setLike(false);
      setListOfLikedId(filteredLikes);
    } else {
      const allLikes = [...likes, id];
      localStorage.setItem(LIKE_KEY, JSON.stringify(allLikes));
      setLike(true);
      setListOfLikedId(allLikes);
    }
  }
  function toggleDislike(id) {
    const dislikes = JSON.parse(localStorage.getItem(DISLIKE_KEY)) || [];
    const isCharacterDisliked = dislikes.includes(id);

    if (isCharacterDisliked) {
      //user wants to remove dislike
      const filteredDislikes = dislikes.filter((dislikeId) => dislikeId !== id);
      localStorage.setItem(DISLIKE_KEY, JSON.stringify(filteredDislikes));
      setDislike(false);
    } else {
      //user wants to add dislike
      const allDislikes = [...dislikes, id];
      localStorage.setItem(DISLIKE_KEY, JSON.stringify(allDislikes));
      setDislike(true);
    }
  }
  return { isLiked, isDisliked, toggleLike, toggleDislike, listOfLikedId };
}
