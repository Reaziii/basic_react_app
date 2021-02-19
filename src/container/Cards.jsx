import React, { Component } from 'react'
import { connect } from 'react-redux';
// import {details} from '../details'
import {DelateCard, RequestList} from '../actions'

import Card from './Card'
import Searchbox from './Searchbox';

const mapState= state =>{
	return {
		details : state.getlist.list,
        error : state.getlist.error
	}
}

const dis = (dispatch)=>({
    change : (value) => dispatch(DelateCard(value)),
    update : ()=>dispatch(RequestList())
}
)

class Cards extends Component {
    constructor(){
        super();
        this.state={
            searchfild : '',
        }
    }
    func=(value)=>{
        console.log(value);
        this.setState({searchfild:value})
    }
    render() {
        const listtt =  this.props.details.map((value,i)=>{
            if(value.name.toLowerCase().includes(this.state.searchfild.toLowerCase())) return <Card key={i}  details={value} id={i}></Card>
        })

        if(this.props.error.length){
            console.log(this.props.error);
        }

        return (
            <div style={{border:'1px solid #b8daff'}}>
            <p className="alert alert-primary add-item-text "><a>LIST</a>   
                <button onClick={this.props.update} style={{textAlign:'right',float:'right'}} className="btn btn-primary">RESET</button>
            </p>
            <Searchbox onchange={this.func}></Searchbox>
                <div className="scroll">
                    { this.props.details.length==0?<h1 className="alert alert-danger">didnot update yet</h1>:
                        listtt
                    }
                </div>
            </div>
        )
    }
}
export default connect(mapState,dis)(Cards)