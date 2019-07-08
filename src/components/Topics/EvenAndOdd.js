import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
             evenArray: [],
             oddArray: [],
             userInput: "",
        }
    }
    handleChange(val) {
        this.setState({ userInput: val})
    }
     evensOrOdds = (userInput)=> {
         let ar = userInput.split(',')
         let  evens = []
         let odds = []
        for (let i = 0; i < ar.length; i++) {
            ar[i] % 2 === 0 ? evens.push(parseInt(ar[i])) : odds.push(parseInt(ar[i]))
        }
        this.setState({ evenArray: evens, oddArray: odds})
    }

    render() {
        return (
            <div className= "puzzleBox evenAndOddPB">

            <h4> Evens and Odds</h4>
            <input className= "inputLine" onChange={(e) => this.handleChange(e.target.value)} />
            <button className="confirmationButton" onClick={ () => { this.evensOrOdds(this.state.userInput) }}> Split </button>
            <span className= "resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>

        )
    }
}
