import React from 'react'
import Counter from './Counter'

class CounterList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            counter1: 0
        }

        //this.changeCounter = this.changeCounter.bind(this)
    }

    updateCounters(value) {
        this.setState({ counter1: value })
    }

    render() {
        return (
            <div className="counterList">
                <p>{this.state.counter1}</p>
                <Counter step={1} max={35} min={0} onChange={(value) => this.updateCounters(value)} />
                <Counter step={3} max={30} min={0} />
                <Counter step={50} max={350} min={-350} />
            </div>

        )
    }
}

export default CounterList