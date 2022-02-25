import React from "react";
import { Route, Switch } from "react-router-dom";

// import ReportIndexContainer from './reports/report_index_container';
// import CreateReportFormContainer from './reports/create_report_form_container';
// import EditReportFormContainer from './reports/edit_report_form_container';
// import ReportShowContainer from './reports/report_show_container';

const App = () => (
  <div className="app">
    <h1>App React - ResTable Homepage</h1>
    {/* <Switch>
      <Route exact path="/" component={ReportIndexContainer} />
      <Route path="/reports/new" component={CreateReportFormContainer} />
      <Route exact path="/reports/:reportId" component={ReportShowContainer} />
      <Route
        path="/reports/:reportId/edit"
        component={EditReportFormContainer}
      />
    </Switch> */}
  </div>
);

export default App;
