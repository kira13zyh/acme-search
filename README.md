# Acme Search Project

This is a simplified personalized search engine web app with functions similar to Alfred and Apple Spotlight. Built with love by Emily Hill using React + Google Material UI.

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Advanced Feature

Live update of search results as new data are added/deleted. This is achieved by refetching new search results every three seconds when a search query is provided.

To test this feature, run the applciation using `npm start`, make a search query (e.g: "acme co."), and watch the page update when you add/delete JSON object(s) from the "[DATACATEGORY].json".

## UX Considerations

- If no result is found in a particular category, the category will not appear.
- To search, one can press "Enter" instead of pressing the search button.
