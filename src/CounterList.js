import React from 'react'
import Counter from './Counter'

class CounterList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            counters: [0, 0, 0]
        }
    }

    updateCounters(value, index) {
        let counterVals = this.state.counters
        counterVals[index] = value
        this.setState({ counters: counterVals })
    }

    render() {
        return (
            <div className="counterList">
                <p>Lifted Up: {this.state.counters[0]}</p>
                <Counter step={1} max={35} min={0} onChange={(value) => this.updateCounters(value, 0)} />
                <p>Lifted Up: {this.state.counters[1]}</p>
                <Counter step={3} max={30} min={0} onChange={(value) => this.updateCounters(value, 1)} />
                <p>Lifted Up: {this.state.counters[2]}</p>
                <Counter step={50} max={350} min={-350} onChange={(value) => this.updateCounters(value, 2)} />
            </div>

        )
    }
}

export default CounterList