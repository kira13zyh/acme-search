export type CalendarSearchResult = {
  id: string;
  title: string;
  invitees: string;
  matching_terms: string[];
  date: string;
  type: "calendar";
};

export type ContactsSearchResult = {
  id: string;
  name: string;
  company: string;
  emails: string[];
  phones: string[];
  matching_terms: string[];
  last_contact: string;
  type: "contacts";
};

export type DropboxSearchResult = {
  id: string;
  path: string;
  title: string;
  shared_with: string[];
  matching_terms: string[];
  created: string;
  type: "dropbox";
};

export type SlackSearchResult = {
  id: string;
  channel: string;
  author: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
  type: "slack";
};

export type TweetSearchResult = {
  user: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
  type: "tweet";
};

export type DataType = "calendar" | "contacts" | "dropbox" | "slack" | "tweet";

export type Entry =
  | CalendarSearchResult
  | ContactsSearchResult
  | DropboxSearchResult
  | SlackSearchResult
  | TweetSearchResult;

export type Result = Entry[];
