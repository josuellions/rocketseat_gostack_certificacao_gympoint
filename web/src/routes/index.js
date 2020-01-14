import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SingIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';

import PlanList from '../pages/Plan/List';
import PlanRegister from '../pages/Plan/Register';

import StudentUp from '../pages/Student/SignUp';
import StudentList from '../pages/Student/List';

import RegistrationList from '../pages/Registration/List';
import RegistrationRegister from '../pages/Registration/Register';

import HelpOrder from '../pages/HelpOrder';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" exact component={SingUp} isPrivate />
      <Route path="/plan/list" exact component={PlanList} isPrivate />
      <Route path="/plan/register" exact component={PlanRegister} isPrivate />
      <Route
        path="/plan/register/:id"
        exact
        component={PlanRegister}
        isPrivate
      />
      <Route path="/student/register" exact component={StudentUp} isPrivate />
      <Route
        path="/student/register/:id"
        exact
        component={StudentUp}
        isPrivate
      />
      <Route path="/student/list" exact component={StudentList} isPrivate />
      <Route
        path="/registration/list"
        exact
        component={RegistrationList}
        isPrivate
      />
      <Route
        path="/registration/register"
        exact
        component={RegistrationRegister}
        isPrivate
      />
      <Route
        path="/registration/register/:id"
        exact
        component={RegistrationRegister}
        isPrivate
      />
      <Route path="/helporder/list" exact component={HelpOrder} isPrivate />

      <Route
        path="/"
        component={() => <h1>Error page não encontrada, error 404</h1>}
      />
    </Switch>
  );
}
