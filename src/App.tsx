import React from "react";
import { Dictionary } from "./components/dictionary";
import { GlobalStyles } from "@mui/material";
import { MainLayout } from "./layouts/main-layout";
import { getWordsList } from "./data";

const dictionaryData = getWordsList();

const App = () => (
  <>
    <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
    <MainLayout>
      <Dictionary data={dictionaryData} />
    </MainLayout>
  </>
);

export default App;
