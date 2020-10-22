/* eslint-disable */
import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBox from '../../components/global/forms/SearchBox';

export default function HomePage() {
   return (
      <Fragment>
         <div className="container">
            <Grid container spacing={5} className="mt-60" justify="center">
               <Grid item xs={11} sm={10} md={8} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                  <SearchBox />
               </Grid>
            </Grid>
         </div>
      </Fragment>
   )
}

;