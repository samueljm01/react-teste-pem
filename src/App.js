import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Loading from "../src/Components/Loading"

const List = React.lazy(() => import("./Views/List"));
const Edit = React.lazy(() => import("./Views/Edit"));

const AppWrapper = styled.div`
  padding: 2em;
`;

function App() {
  return (
    <AppWrapper>
      <Suspense fallback={<Loading color="red" type="spin"/>}>
        <BrowserRouter>
          <Route path="/" exact={true} render={() => <List />} />
          <Route path="/novo/:id" render={() => <Edit />} />
          <Route path="/novo" exact={true} render={() => <Edit />} />
        </BrowserRouter>
      </Suspense>
    </AppWrapper>
  );
}

export default App;
