import React from "react";
import "./App.css";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import filterDataByWord from "./filterDataByWord";
import {
  CalendarSearchResult,
  ContactsSearchResult,
  DropboxSearchResult,
  SlackSearchResult,
  TweetSearchResult,
} from "./types";

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
    const words = searchTerm.split(" ");
    words.forEach((word) => {
      const matchCalendar = filterDataByWord(word, "calendar");
      setCalendarSearchResult((csrs) => [...csrs, ...matchCalendar]);
      const matchContacts = filterDataByWord(word, "contacts");
      setContactsSearchResult((csrs) => [...csrs, ...matchContacts]);
      const matchDropbox = filterDataByWord(word, "dropbox");
      setDropboxSearchResult((dsrs) => [...dsrs, ...matchDropbox]);
      const matchSlack = filterDataByWord(word, "slack");
      setSlackSearchResult((ssrs) => [...ssrs, ...matchSlack]);
      const matchTweet = filterDataByWord(word, "tweet");
      setTweetSearchResult((tsrs) => [...tsrs, ...matchTweet]);
    });
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
        <p>{calendarSearchResult[0] ? calendarSearchResult[0].date : "none"}</p>
        <p>{contactsSearchResult[0] ? contactsSearchResult[0].name : "none"}</p>
        <p>{dropboxSearchResult[0] ? dropboxSearchResult[0].title : "none"}</p>
        <p>{slackSearchResult[0] ? slackSearchResult[0].message : "none"}</p>
        <p>{tweetSearchResult[0] ? tweetSearchResult[0].user : "none"}</p>
      </header>
    </div>
  );
}

export default App;
