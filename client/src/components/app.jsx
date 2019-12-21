import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Hello from React
                <input type="text" placeholder="Enter todos..."></input>
            </div>
        )
    }
}

export default App;