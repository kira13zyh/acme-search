import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import {
  CalendarSearchResult,
  ContactsSearchResult,
  DropboxSearchResult,
  Entry,
  SlackSearchResult,
  TweetSearchResult,
} from "../types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import CalendarItem from "./CalendarItem";
import ContactsItem from "./ContactsItem";
import DropboxItem from "./DropboxItem";
import SlackItem from "./SlackItem";
import TweetItem from "./TweetItem";

interface ResultListParams {
  dataType: string;
  searchResult: Entry[];
}

export default function ResultList({
  dataType,
  searchResult,
}: ResultListParams): any {
  const classes = useStyles();

  function isCalendarEntry(e: Entry): e is CalendarSearchResult {
    return e.type === "calendar";
  }
  function isContactsEntry(e: Entry): e is ContactsSearchResult {
    return e.type === "contacts";
  }

  function isSlackEntry(e: Entry): e is SlackSearchResult {
    return e.type === "slack";
  }

  function isDropboxEntry(e: Entry): e is DropboxSearchResult {
    return e.type === "dropbox";
  }

  function isTweetEntry(e: Entry): e is TweetSearchResult {
    return e.type === "tweet";
  }

  const eventToDisplay = searchResult.map((search: Entry) => {
    if (isCalendarEntry(search)) {
      return <CalendarItem search={search}></CalendarItem>;
    } else if (isContactsEntry(search)) {
      return <ContactsItem search={search}></ContactsItem>;
    } else if (isDropboxEntry(search)) {
      return <DropboxItem search={search}></DropboxItem>;
    } else if (isSlackEntry(search)) {
      return <SlackItem search={search}></SlackItem>;
    } else if (isTweetEntry(search)) {
      return <TweetItem search={search}></TweetItem>;
    }
  });

  return (
    <Card className={classes.card}>
      <CardContent>
        <text className={classes.categoryTitle}>{dataType}</text>
        <List>
          <ListItem style={{ flexDirection: "column" }}>
            {eventToDisplay}
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  card: {
    maxWidth: "45%",
    margin: "10px",
    padding: "15px",
  },
  item: {
    width: "50%",
    display: "flex",
    alignSelf: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
