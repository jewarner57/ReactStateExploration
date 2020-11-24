import React from 'react'
import './Counter.css'

class Counter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        //this.changeCounter = this.changeCounter.bind(this)
    }

    changeCounter(step) {

        let currCount = this.state.count
        if (currCount + step <= this.props.max && currCount + step >= this.props.min) {
            currCount += step
            this.setState({ count: currCount })
            this.props.onChange(currCount)
        }
    }

    render() {
        return (
            <div className="counter">
                <div onClick={() => this.changeCounter(-this.props.step)} className="subtract">
                    <div>-</div>
                </div>
                <h1>{this.state.count}</h1>
                <div onClick={() => this.changeCounter(this.props.step)} className="add">
                    <div>+</div>
                </div>



            </div >
        )
    }
}

export default Counter