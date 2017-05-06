import React from 'react'
import ReactDOM from 'react-dom'
import styles from './style.css'

class App extends React.Component{
	// constructor to define initial state
	constructor() {
		super()
		this.state = {
			count: 0
		}
	}
	
	// Fired eactly after the component was mounted
	componentDidMount() {
		this.counter = setInterval(() => {
			this.setState({count: this.state.count + 1})
		}, 1000)
	}
	
	// Fired exactly before the component will be unmounted
	componentWillUnmount() {
		clearInterval(this.counter)
	}
	
	render() {
		return (
			<div className={`container ${styles.div}`}>
				<h1>Hello World!</h1>
				<h3>You spend {this.state.count}s on this page!</h3>
			</div>
		)
	}
}


export default App

ReactDOM.render(<App />, document.getElementById('root'))
