import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
// import persistor from "./redux/persistStore";
// import PostList from "./postsList";

import "./styles.css";
import Login from "./login";
import ProjectList from "./containers/project/projectList";
import App from "./app";

const rootElement = document.getElementById("root");

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
    </ApolloProvider>
    {/* </PersistGate> */}
  </Provider>,
  rootElement
);
