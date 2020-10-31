export type CalendarSearchResult = {
  id: string;
  title: string;
  invitees: string;
  matching_terms: string[];
  date: string;
};

export type ContactsSearchResult = {
  id: string;
  name: string;
  company: string;
  emails: string[];
  phones: string[];
  matching_terms: string[];
  last_contact: string;
};

export type DropboxSearchResult = {
  id: string;
  path: string;
  title: string;
  shared_with: string[];
  matching_terms: string[];
  created: string;
};

export type SlackSearchResult = {
  id: string;
  channel: string;
  author: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
};

export type TweetSearchResult = {
  user: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
};
