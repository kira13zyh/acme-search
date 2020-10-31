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
type Result = Entry[];

export default function filterDataBySearchTerm(
  searchTerm: string,
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
  const words = searchTerm.split(" ");
  const result: Result = words.reduce((acc: Entry[], word: string) => {
    const filtered = (unfilteredData as Entry[]).filter((entry: Entry) =>
      entry["matching_terms"].includes(word)
    );
    return [...acc, ...filtered];
  }, []);

  return result;
}
