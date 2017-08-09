var React = require('react');

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Loading',
      speed: 100
    };
  }

  componentDidMount(){
    var stopper = '...' + this.state.text + '...';
    this.interval = window.setInterval(() => {
      if(this.state.text === stopper){
        this.setState(() => {
          return {
            text: 'Loading'
          }
        });
      }  else {
        this.setState((prevState) => {
          return {
            text: '.' + prevState.text + '.'
          }
        });
      }
    }, this.state.speed);
  }

  componentWillUnmount () {
    window.clearInterval(this.interval);
  }

  render(){
    return (
        <p style={styles.content}>
          {this.state.text}
        </p>
    )
  }
}

export default Loading;
