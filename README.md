# Using Meteor and React with es6 Classes

This is a proof of concept I through together that looks at how one might go about using es6 classes with meteor and react.

It exposes the `getMeteorData` method from the meteor data mixin for react.

Instead of extending `React.Component`, you would extend `React.MeteorComponent`.

When using this approach, if your class contains the `componentWillUpdate` or `componentWillUnmount` react lifecycle methods, you will have to call `super()` to let MeteorComponent recalculate the data when those methods are called:

```
// Using Meteor's 1.3 module support
export class App extends React.MeteorComponent {

  constructor(props) {
    super(props);
  }

  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch()
    }
  }

  componentWillUpdate() {
    super();
    // ...your code here
  }

```
