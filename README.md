# Acme Search Project

This is a simplified personalized search engine web app with functions similar to Alfred and Apple Spotlight. Built with love by Emily Hill using React + Google Material UI.
My approach to this project included 3 phases:
1. Creating sketches and mocks of the UI;
2. Creating the React project and choosing a design system;
3. Polishing the application to properly format and develop advanced feature.

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Advanced Feature

Live update of search results as new data are added/deleted. This is achieved by refetching new search results every three seconds when a search query is provided.

To test this feature, run the applciation using `npm start`, make a search query (e.g: "acme co."), and watch the page update when you add/delete JSON object(s) from the "[DATACATEGORY].json".

## UX Considerations

- If no result is found in a particular category, the category does not appear.
- If no result is found in every category, the text "no result" is displayed.
- To search, one can press "Enter" instead of pressing the search button.
- Duplicated search results from multiple queries are omitted. For example. if one make a search query "acme alice", the overlapping search results will only show up once.
- Used flexbox to arrange the results so that the web app is responsive to screen-size changes.
