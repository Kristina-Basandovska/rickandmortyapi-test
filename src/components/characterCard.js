import { Avatar, Card, CardContent, Typography } from "@mui/material";
import React from "react";


export default function CharacterCard({ id, name, image, status }) {
  return (
    <Card sx={{ mb: 3, }}>
      <CardContent>
        <Avatar alt={name} src={image} />

        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {status}
        </Typography>
      </CardContent>
    </Card>
  );
}
