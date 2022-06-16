import React from "react";
import {Admin, CustomRoutes, Resource, ListGuesser} from "react-admin";
import {Login, Layout} from "./layout";
import {Route} from "react-router";
import {Dashboard} from "./dashboard";
import authProvider from "./authProvider";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin
      title=""
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
      loginPage={Login}
    >
      {/* <CustomRoutes>
      <Route path="/configuration" element={<Configuration />} />
      <Route path="/segments" element={<Segments />} />
    </CustomRoutes> */}
      {/* <Resource name="customers" {...visitors} />
    <Resource name="commands" {...orders} options={{label: "Orders"}} />
    <Resource name="invoices" {...invoices} />
    <Resource name="products" {...products} />
    <Resource name="categories" {...categories} />
    <Resource name="reviews" {...reviews} /> */}
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}

export default App;
