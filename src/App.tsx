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
    setCalendarSearchResult([...matchCalendar]);
    const matchContacts = filterDataBySearchTerm(searchTerm, "contacts");
    setContactsSearchResult((csrs) => [...csrs, ...matchContacts]);
    const matchDropbox = filterDataBySearchTerm(searchTerm, "dropbox");
    setDropboxSearchResult((dsrs) => [...dsrs, ...matchDropbox]);
    const matchSlack = filterDataBySearchTerm(searchTerm, "slack");
    setSlackSearchResult((ssrs) => [...ssrs, ...matchSlack]);
    const matchTweet = filterDataBySearchTerm(searchTerm, "tweet");
    setTweetSearchResult((tsrs) => [...tsrs, ...matchTweet]);
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
        <h2>Calendar</h2>
        <p>{calendarSearchResult[0] ? calendarSearchResult[0].date : "none"}</p>
        <h2>Contacts</h2>
        <p>{contactsSearchResult[0] ? contactsSearchResult[0].name : "none"}</p>
        <h2>Dropbox</h2>
        <p>{dropboxSearchResult[0] ? dropboxSearchResult[0].title : "none"}</p>
        <h2>Slack</h2>
        <p>{slackSearchResult[0] ? slackSearchResult[0].message : "none"}</p>
        <h2>Tweet</h2>
        <p>{tweetSearchResult[0] ? tweetSearchResult[0].user : "none"}</p>
      </header>
    </div>
  );
}

export default App;
