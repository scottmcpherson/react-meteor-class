import { App } from './App.jsx';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("render-target"));
});
