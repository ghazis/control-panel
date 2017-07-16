import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import CarTable from './carTable';
import HomeTable from './homeTable';
import ThermTable from './thermTable';

export default (
      <Switch>
        <Route exact path='/home' component={HomeTable} />
        <Route path='/car' component={CarTable} />
        <Route path='/therm' component={ThermTable} />
      </Switch>
);
