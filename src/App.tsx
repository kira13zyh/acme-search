import React from "react";
import "./App.css";
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
import _ from "lodash";

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

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log(currentSearchTerm);
      if (currentSearchTerm) {
        findInfo(currentSearchTerm);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSearchTerm]);

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

  const noResult =
    currentSearchTerm &&
    _.isEmpty(calendarSearchResult) &&
    _.isEmpty(contactsSearchResult) &&
    _.isEmpty(dropboxSearchResult) &&
    _.isEmpty(slackSearchResult) &&
    _.isEmpty(tweetSearchResult);

  return (
    <div className='App'>
      <header className='App-header'>
        <h3 style={{ margin: "15" }}>Foo.com</h3>
        <TextField
          type='text'
          onChange={(event) => onChangeSearchTerm(event.target.value)}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              findInfo(searchTerm);
              ev.preventDefault();
            }
          }}
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
      {noResult && (
        <div style={{ margin: 30 }}>
          <text className={classes.noSearch}>No Result Found</text>
        </div>
      )}
      {currentSearchTerm ? (
        <div className={classes.row}>
          {calendarSearchResult.length !== 0 && (
            <ResultList
              dataType={"calendar"}
              searchResult={calendarSearchResult}
            ></ResultList>
          )}
          {contactsSearchResult.length !== 0 && (
            <ResultList
              dataType={"contacts"}
              searchResult={contactsSearchResult}
            ></ResultList>
          )}
          {dropboxSearchResult.length !== 0 && (
            <ResultList
              dataType={"dropbox"}
              searchResult={dropboxSearchResult}
            ></ResultList>
          )}
          {slackSearchResult.length !== 0 && (
            <ResultList
              dataType={"slack"}
              searchResult={slackSearchResult}
            ></ResultList>
          )}
          {tweetSearchResult.length !== 0 && (
            <ResultList
              dataType={"tweet"}
              searchResult={tweetSearchResult}
            ></ResultList>
          )}
        </div>
      ) : (
        <div style={{ margin: 30 }}>
          <text className={classes.noSearch}>Start Searching Today</text>
        </div>
      )}
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "space-around",
    justifyContent: "flex-start",
  },
  noSearch: {
    fontSize: 30,
    justifyContent: "center",
    color: "grey",
  },
});
