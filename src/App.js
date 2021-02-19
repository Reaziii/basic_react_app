import logo from './logo.svg';
import './App.css';
import Cards from './container/Cards';
import Header from './Header';
import React,{Component } from 'react';
import {DelateCard,AddCard,AddMenue,RequestList} from './actions'
import {connect} from 'react-redux'
import AddItem from './container/AddItem';

const mapState=(state)=>{
	return {
		'details' : state.playcard.details,
		'menulist' : state.playcard.menulist,
		'list' : state.getlist.list,
	}
}

const dis = (dispatch)=>({
    	change : (value) => dispatch(DelateCard(value)),
		AddMenue : (obj) => dispatch(AddMenue((obj))),
	}
)
class App extends Component {

	render(){
	const {change,details,menulist} = this.props;
	
		return (
			<div className="App">
				<Header></Header>
					<div style={{paddingTop:'80px'}} className="row">
						<div className="col-4">
							{/*left side bar here */}
							<Cards></Cards>
						</div>
						<div className="col-8">
						<AddItem></AddItem>
						
						</div>
					</div>

			</div>
		);
	}
}

export default connect(mapState,dis)(App);
