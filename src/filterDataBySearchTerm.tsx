import { calendar as calendarRaw } from "./data/calendar.json";
import { contacts as contactsRaw } from "./data/contacts.json";
import { dropbox as dropboxRaw } from "./data/dropbox.json";
import { slack as slackRaw } from "./data/slack.json";
import { tweet as tweetRaw } from "./data/tweet.json";
import {
  CalendarSearchResult,
  ContactsSearchResult,
  DropboxSearchResult,
  SlackSearchResult,
  TweetSearchResult,
} from "./types";
import _ from "lodash";

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
  // Add type to the raw data
  const calendar = calendarRaw.map((c) => ({ ...c, type: "calendar" }));
  const contacts = contactsRaw.map((c) => ({ ...c, type: "contacts" }));
  const dropbox = dropboxRaw.map((d) => ({ ...d, type: "dropbox" }));
  const slack = slackRaw.map((s) => ({ ...s, type: "slack" }));
  const tweet = tweetRaw.map((t) => ({ ...t, type: "tweet" }));

  // Map name to processed data
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

  return _.uniq(result);
}
