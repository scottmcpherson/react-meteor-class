import { Task } from './Task.jsx';

// We need static property support for classes!
export class App extends React.MeteorComponent {

  constructor(props) {
    super(props);
  }

  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch()
    }
  }

  renderTasks() {
    return this.data.tasks.map(task => {
      return <Task key={task._id} task={task} />;
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let text = this.refs.textInput.value.trim();

    Tasks.insert({
      text,
      createdAt: new Date()
    });

    this.refs.textInput.value = "";
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>

          {/* Having to bind the context so handleSubmit has access to this */}
          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks" />
          </form>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
};
