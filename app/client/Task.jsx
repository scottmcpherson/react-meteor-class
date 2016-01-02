// Task component - represents a single todo item

// We need static property support for classes!
export class Task extends React.Component {

  constructor(props) {
    super(props);
  }

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }

  render() {
    return (
      <li>
        {/* Having to bind the context so deleteThisTask has access to this */}
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
        {this.props.task.text}
      </li>
    );
  }
};

// Static properties for classes are not supported in the ecmascript package?
Task.PropTypes = {
  task: React.PropTypes.object.isRequired
};
