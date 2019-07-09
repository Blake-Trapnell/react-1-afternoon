import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor() {
        super()
this.state = {
    
    userInput: ``,
    filteredArray: [],
    unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
}
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }
    filterThisString(prop) {
        let unfilteredArray = this.state.unfilteredArray
        let filteredArray = []
        for (let i = 0; i < unfilteredArray.length; i++) {
            if (unfilteredArray[i].includes(prop)) {
                filteredArray.push(unfilteredArray[i])
            }
        }
        this.setState({ filteredArray: this.filteredArray})
    }

    render() {
        return (
             <div className="puzzleBox filterStringPB">
                 <h4>Filter String</h4>
                <span className="puzzleText">Filtered Array : { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={()=> this.filterThisString(this.state.userInput)}>Filter</button>
                <span  className="resultsBox filterStringRB"> { JSON.stringify(this.state.filteredArray, null, 10) }</span>
             </div>
        )
        }
    }