This project was done with a focus on the demonstration of the overall understanding of the concepts.

Of course, it could be enhanced a lot but due to the lack of the time, I will write down points that could be and should be enhanced if it if it was a real project.

 ## Architecure approach
  
  I am using modules in the project. Module is an architectural unit, think as a microservice.

  Each module depends only on own state, one module is an independent service and does not have the influence to other modules. Transitions between modules are possible with the Link component from the react-router package.
  Whenever you transitioned to other modules you can parse URL and initialize state with data coming from the backend.

  **In a real world, the best approach to communicate between two modules on one level is to use 'EVENT DRIVEN' approach. To use middleware which gives you a possibility to create channels and publish/subscribe to the events in those channels, it could be implemented with the rx.js library.**

  e.g. modulesA -> moduleB:get-data:success subscribe
  whenever the data will be received in the channel of the moduleB, moduleA will be notified

  **After implementation of this approach, it would be possible to DIVIDE a team and implement different services inside an application without conflicts and collisions.**

  For this current implementation, I've implemented the simpliest approach.


## UX/UI
  Currently, the most simple bootstrapped UX/UI was implemented (it could be and should be significantly improved)
  Implementation of the good UX/UI is a very scrupulous task.

  - prerequisites, requirements ( product owner vision, trends, brand colours and themes, feedbacks )
  - user feedback ( to know the pros and cons of the current implementation )
  - user stories ( to understand what features and interactions to implement and how )
  - prototype ( mvp version of the product, clickable wireframe )
  - A/B testing ( of the implemented version of the UX/UI )

  That's why i left it simple and without a lot of the good things.


## Future enhancements

  If i have more prerequisites/requirements and time.
 
  - re-think ux/ui
  - stop displaying ID's since it is a bad practice to display ID's to the user (except this dashboard will be used by admins or tech team)
  - implement all the api endpoints (CRUD)
  - validate incoming data
  - validate input data
  - better error handling of the http calls
  - more component tests
  - more manual tests 
  - filter incoming data by data types and write filters for every type of the incoming data (status, dateFrom, dateTo ...)
  - display the data in an apropriate way (calendar for date, etc), selectbox for statuses, etc.....
  - styles for mobile version if needed
  - naming of the table header values
  - editable grid if needed
  - smoother transitions


## Folder Structure

```
├── src
│   ├── index.js
│   ├── modules
│   │   ├── Feed
│   │   │   ├── __snapshots__
│   │   │   │   └── feed.test.js.snap
│   │   │   ├── actionTypes.js
│   │   │   ├── actions.js
│   │   │   ├── components
│   │   │   │   └── Feed.jsx
│   │   │   ├── feed.test.js
│   │   │   ├── index.js
│   │   │   ├── reducers
│   │   │   │   ├── feedReducer.js
│   │   │   │   └── index.js
│   │   │   └── service.js
│   │   └── Transactions
│   │       ├── __snapshots__
│   │       │   └── transactions.test.js.snap
│   │       ├── actionTypes.js
│   │       ├── actions.js
│   │       ├── components
│   │       │   ├── FeedList.jsx
│   │       │   └── Transaction.jsx
│   │       ├── index.js
│   │       ├── reducers
│   │       │   ├── index.js
│   │       │   └── transactionsReducer.js
│   │       ├── service.js
│   │       └── transactions.test.js
│   ├── service-mapper
│   │   ├── index.js
│   │   └── mappers
│   │       ├── transactionFeed.js
│   │       └── transactions.js
│   ├── serviceWorker.js
│   ├── services
│   │   └── http.js
│   ├── store.js
│   └── styles.js
```

## Structure definition

  - Modules  - architectural Unit, think about it as a microservice. Module is a unit that depends only on each own state and props (no props propagated from another modules). It has own reducer, actions, actionTypes, service (for http calls), components. Two modules can not depend on each other. This flow gives us a possibility to work in a MICROSERVICE way. To develop separate parts of the project and keep it safe and decoupled.

  - __snapshots__ - test snapshot of the component to test react components, jest implementation
  - actions - module actions, such as async calls etc
  - actionTypes - constants
  - componenets - module react components 
  - reducers - reducers which is combined in ../index.js for a state management
  - service - separated set of the http calls which is implemented via http service ../services/http.js (wrapper above the axios)
  - .test.js - components tests, for now only couple of them
  - service-mapper - mappers of the incoming data from the async call, here we can iterate through the response and return only needed collection or validate e.g. http.get(`/transaction/${number}`).then(dataFeed => mappers.feedMapper.mapFeedData(dataFeed.data))

  - services - shared services across modules, http wrapper with put, delete, post, get methods and error handling
  - store - state store
  - styles - global styles, for some global rules such as font-family etc.

## Implemented features
  - pagination
  - http calls
  - modules
  - navigation
  - store management
  - tests
  - simple ux/ui
  - type checking

## Scripts

  - [yarn start] - start dev server
  - [yarn build] - build project, you need a web server to serve the files after, e.g. serve -s build
  - [yarn test] - to run tests

## Tools and packages

  - axios - async http calls
  - eslint - linting tools to avoid silly mistakes and to keep the code clean and homogeneous  
  - eslint-config-airbnb - airbnb coding styles to keep the code clean and homogeneous
  - muicss - for layout boostraping (Container, Panel, Col, Row), responsive layout, fast development
  - prop-types - type checking
  - redux - state management
  - redux-thunk - react middleware to work with async calls
  - styled-components - react component sylings, easy of use, modularity, state of the art features, perfomance, painless maintenance, prefixing
  - react-fontawesome - for icons, backbutton icon

## To run the project

```sh
  yarn install
  yarn start
```
  then open in the browser http://localhost:3000/, check if the server is runnung before






