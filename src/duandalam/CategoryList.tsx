import * as React from "react";
import {EditButton, List, useListContext} from "react-admin";
import inflection from "inflection";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

import LinkToRelatedProducts from "./LinkToRelatedProducts";
import {Category} from "../types";

const CategoryList = () => (
  <List
    sort={{field: "name", order: "ASC"}}
    perPage={20}
    pagination={false}
    component="div"
    actions={false}
  >
    <CategoryGrid />
  </List>
);

const CategoryGrid = () => {
  const {data, isLoading} = useListContext<Category>();
  console.log("DDATA: ", data);
  if (isLoading) {
    return null;
  }
  return (
    <Grid container spacing={2} sx={{marginTop: "1em"}}>
      {data.map(record => (
        <Grid key={record.keyID} xs={12} sm={6} md={4} lg={3} xl={2} item>
          <Card>
            <CardMedia
              image={`https://drive.google.com/uc?export=view&id=${record.images[0]}`}
              sx={{height: 140}}
            />
            <CardContent sx={{paddingBottom: "0.5em"}}>
              <Typography variant="h5" component="h2" align="center">
                {inflection.humanize(record.name)}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                ".MuiCardActions-spacing": {
                  display: "flex",
                  justifyContent: "space-around",
                },
              }}
            >
              <LinkToRelatedProducts />
              <EditButton record={record} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;
