import React, { Component } from 'react'



export default class FilterObject extends Component {
constructor() {
    super()
    this.state = {

        userInput: '',
        filteredHedgehogs: [],
        hedgehogs: [{
       name: `Blanche`,
       breed:`Algerian`,
       color: `chocoloate`,
       pinto: false,
    },
    {
        name: `Samus`,
        breed:`African`,
        color: `platinum`,
        pinto: false,
    },
    {
        name: `Flora`,
        breed:`African`,
        color: `Salt & Pepper`,
        pinto: true,
    }]
}
}
handleChange(val) {
    this.setState({ userInput: val });
  }
filterThisObj(prop) { 
    let hedgehogs = this.state.hedgehogs
    let filteredHedgehogs = []
    for (let i = 0; i< hedgehogs.length; i++) {
        if (hedgehogs[i].hasOwnProperty(prop)) {
            filteredHedgehogs.push(hedgehogs[i])
        }
    }
this.setState ({filteredHedgehogs: filteredHedgehogs})
}


    render() {
        return (
            <div className="puzzleBox filterObjPB">
            <h4>Filter Object</h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.hedgehogs, null, 10) } </span>
<input className="inputLine" onChange={e => this.handleChange(e.target.value)}/>
<button className="confirmationButton" onClick={()=> this.filterThisObj(this.state.userInput)}>Filter</button>
<span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredHedgehogs, null, 10) } </span>
            </div>
        )
    }
}
