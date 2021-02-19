import React, { Component } from 'react'

export default class Searchbox extends Component {
    func = (event) => {
        this.props.onchange(event.target.value);
    }
    render() {
        return (
            <div>
                <div className="alert alert-warning" role="alert">
                    <input onChange={this.func} type="search" placeholder="Search here..." className="searchbox"></input>

                </div>
                
            </div>
        )
    }
}
