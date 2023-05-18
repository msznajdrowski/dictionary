import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { FixedSizeList, ListChildComponentProps } from "react-window";

type DataListProps = {
  data: string[];
};

const DataList = ({ data }: DataListProps) => {
  const renderRow = React.useCallback(
    ({ index, style }: ListChildComponentProps) => {
      const item = data[index];

      return (
        <ListItem style={style} key={index}>
          <ListItemText primary={item} />
        </ListItem>
      );
    },
    [data]
  );

  return (
    <List>
      <FixedSizeList
        height={500}
        itemCount={data.length}
        itemSize={50}
        width="100%"
      >
        {renderRow}
      </FixedSizeList>
    </List>
  );
};

export { DataList };
