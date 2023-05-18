import React from "react";
import { Box, Paper, TextField, Typography } from "@mui/material";
import { useDictionaryData } from "./use-dictionary-data.hook";
import { DataList } from "../data-list";

type DictionaryProps = {
  data: string[];
};

const Dictionary = ({ data }: DictionaryProps) => {
  const { searchValue, handleChangeSearch, filteredData } =
    useDictionaryData(data);

  return (
    <Paper sx={{ padding: 2 }}>
      <Box mb={2}>
        <Typography variant="h5" textAlign="center">
          Dictionary
        </Typography>
      </Box>
      <TextField
        size="small"
        onChange={handleChangeSearch}
        value={searchValue}
        label="Search"
      />
      <DataList data={filteredData} />
    </Paper>
  );
};

export { Dictionary };
