import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import CarTable from './tables/carTable';
import HomeTable from './tables/homeTable';
import ThermTable from './tables/thermTable';

export default (
      <Switch>
        <Route exact path='/home' component={HomeTable} />
        <Route path='/car' component={CarTable} />
        <Route path='/therm' component={ThermTable} />
      </Switch>
);
