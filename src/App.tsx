import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './store';
import { PATH } from "./consts";
import { NotFoundPage, HomePage, MemberPage, DetailPage } from "./pages";
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import "./App.css";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.START} element={<HomePage />} />
          <Route path={PATH.ALL_MEMBERS} element={<MemberPage />} />
          <Route path={PATH.SHOW_MEMBER} element={<DetailPage />} />
          <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
   </Provider>
  );
}

export default App;

library.add(fab, fas, far)