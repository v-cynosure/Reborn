import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        console.log('test')
        axios.post('http://localhost:3333/api/register', {
            username: 'zining',
            password: '12345',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" />
                <br />
                <input type="password" />
                <br />
                <button type="button" onClick={this.handleSubmit}>submit</button>
            </form>
        )
    }
}

export default App
