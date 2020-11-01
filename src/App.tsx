import React from "react";
import "./App.css";
import Input from "@material-ui/core/Input/Input";
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

function App() {
  const [searchTerm, onChangeSearchTerm] = React.useState("");
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

  function findInfo(searchTerm: string) {
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
        <h1>Foo</h1>
        <Input
          type='text'
          onChange={(event) => onChangeSearchTerm(event.target.value)}
        ></Input>
        <Button
          variant='contained'
          color='primary'
          onClick={() => findInfo(searchTerm)}
        >
          Search
        </Button>
        <div>
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
            searchResult={calendarSearchResult}
          ></ResultList>
        </div>
      </header>
    </div>
  );
}

export default App;
