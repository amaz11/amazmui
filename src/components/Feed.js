import { Box } from "@mui/material";
import React from "react";
import Cards from "./Cards";

const Feed = () => {
  return (
    <Box flex={4} p={2} m={2}>
      <Cards />
      <Cards />
      <Cards />
    </Box>
  );
};

export default Feed;
