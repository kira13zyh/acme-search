import React from "react";
import "./App.css";
import Input from "@material-ui/core/Input/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button/Button";
import filterDataBySearchTerm from "./filterDataBySearchTerm";
import {
  CalendarSearchResult,
  ContactsSearchResult,
  DropboxSearchResult,
  SlackSearchResult,
  TweetSearchResult,
} from "./types";
import ResultList from "./components/ResultList";
import { makeStyles } from "@material-ui/core";

function App() {
  // State Management
  const [searchTerm, onChangeSearchTerm] = React.useState<string>("");
  const [currentSearchTerm, setCurrentSearchTerm] = React.useState<string>("");
  const [calendarSearchResult, setCalendarSearchResult] = React.useState<
    CalendarSearchResult[]
  >([]);
  const [contactsSearchResult, setContactsSearchResult] = React.useState<
    ContactsSearchResult[]
  >([]);
  const [dropboxSearchResult, setDropboxSearchResult] = React.useState<
    DropboxSearchResult[]
  >([]);
  const [slackSearchResult, setSlackSearchResult] = React.useState<
    SlackSearchResult[]
  >([]);
  const [tweetSearchResult, setTweetSearchResult] = React.useState<
    TweetSearchResult[]
  >([]);

  // Style Management
  const classes = useStyles();

  function findInfo(searchTerm: string) {
    setCurrentSearchTerm(searchTerm);
    const matchCalendar = filterDataBySearchTerm(searchTerm, "calendar");
    setCalendarSearchResult(matchCalendar);
    const matchContacts = filterDataBySearchTerm(searchTerm, "contacts");
    setContactsSearchResult(matchContacts);
    const matchDropbox = filterDataBySearchTerm(searchTerm, "dropbox");
    setDropboxSearchResult(matchDropbox);
    const matchSlack = filterDataBySearchTerm(searchTerm, "slack");
    setSlackSearchResult(matchSlack);
    const matchTweet = filterDataBySearchTerm(searchTerm, "tweet");
    setTweetSearchResult(matchTweet);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h3 style={{ margin: "15" }}>Foo.com</h3>
        <TextField
          type='text'
          onChange={(event) => onChangeSearchTerm(event.target.value)}
          style={{
            width: "50%",
            backgroundColor: "white",
            margin: "20px",
          }}
          variant='outlined'
        ></TextField>
        <Button
          variant='contained'
          color='primary'
          onClick={() => findInfo(searchTerm)}
        >
          Search
        </Button>
      </header>
      {currentSearchTerm && (
        <div className={classes.row}>
          <ResultList
            dataType={"calendar"}
            searchResult={calendarSearchResult}
          ></ResultList>
          <ResultList
            dataType={"contacts"}
            searchResult={contactsSearchResult}
          ></ResultList>
          <ResultList
            dataType={"dropbox"}
            searchResult={dropboxSearchResult}
          ></ResultList>
          <ResultList
            dataType={"slack"}
            searchResult={slackSearchResult}
          ></ResultList>
          <ResultList
            dataType={"tweet"}
            searchResult={tweetSearchResult}
          ></ResultList>
        </div>
      )}
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
