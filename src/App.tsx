import React from "react";
import {Admin, CustomRoutes, Resource, ListGuesser} from "react-admin";
import {Login, Layout} from "./layout";
import {Route} from "react-router";
import {Dashboard} from "./dashboard";
import authProvider from "./authProvider";
import duandalam from "./duandalam";
import thuvientulieu from "./thuvientulieu";
import myProvider from "./myProvider";
import {fetchJson as httpClient} from "./httpClient";
import thongtinkhac from "./thongtinkhac";
import banner from "./banner";

const dataProvider = myProvider(
  "https://my-json-server.typicode.com/tiennguyen00/demo",
  httpClient
);

function App() {
  return (
    <Admin
      title=""
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={Layout}
      // dashboard={Dashboard}
      loginPage={Login}
    >
      {/* <CustomRoutes>
      <Route path="/configuration" element={<Configuration />} />
      <Route path="/segments" element={<Segments />} />
    </CustomRoutes> */}

      <Resource name="duandalam" {...duandalam} />
      <Resource name="thuvientulieu" {...thuvientulieu} />
      <Resource name="thongtinkhac" {...thongtinkhac} />
      <Resource name="banner" {...banner} />
      <Resource name="vechungtoi" {...thongtinkhac} />
      <Resource name="nhagobamien" {...thongtinkhac} />
      <Resource name="dichvucungcap" {...thongtinkhac} />
    </Admin>
  );
}

export default App;
