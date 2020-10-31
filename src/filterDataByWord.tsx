import { calendar } from "./data/calendar.json";
import { contacts } from "./data/contacts.json";
import { dropbox } from "./data/dropbox.json";
import { slack } from "./data/slack.json";
import { tweet } from "./data/tweet.json";
import {
  CalendarSearchResult,
  ContactsSearchResult,
  DropboxSearchResult,
  SlackSearchResult,
  TweetSearchResult,
} from "./types";

type DataType = "calendar" | "contacts" | "dropbox" | "slack" | "tweet";
type Entry =
  | CalendarSearchResult
  | ContactsSearchResult
  | DropboxSearchResult
  | SlackSearchResult
  | TweetSearchResult;

function isCalendar(datatype: DataType): datatype is "calendar" {
  return datatype === "calendar";
}

export default function filterDataByWord(
  word: string,
  dataType: DataType
): any[] {
  const dataMap = {
    calendar,
    contacts,
    dropbox,
    slack,
    tweet,
  };

  const unfilteredData = dataMap[dataType];
  const result = (unfilteredData as Entry[]).filter((entry: Entry) =>
    entry["matching_terms"].includes(word)
  );

  return result;
}
