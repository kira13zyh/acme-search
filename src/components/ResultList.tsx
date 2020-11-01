import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import { Entry, Result } from "../types";

interface ResultListParams {
  dataType: string;
  searchResult: Entry[];
}

export default function ResultList({
  dataType,
  searchResult,
}: ResultListParams): any {
  const list = searchResult.map((search: Entry) => {
    const searchInfo = Object.entries(search).map(([key, value]) => {
      return (
        <div>
          <h4>{key}:</h4>
          <p>{value}</p>
        </div>
      );
    });

    return <ListItem>{searchInfo}</ListItem>;
  });
  return (
    <div>
      <h3>{dataType}</h3>
      <List>{list}</List>
    </div>
  );
}
