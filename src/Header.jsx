import React, { Component } from 'react'
import {AddCard,AddMenue} from './actions'
import { connect } from 'react-redux'
import swal from 'sweetalert';

const dis = (dispatch) => {
    return {
        add : (obj)=> dispatch(AddCard(obj)),
		AddMenue : (obj) => dispatch(AddMenue((obj))),

    }
}

const mapstate = (state) =>({
    menulist : state.getlist.menulist
})

class Header extends Component {
    func=()=>{
        var a = prompt("Enter menu name : ");
        var b = prompt("Enter the link : ");
        if(a.length===0 || b.length===0){
            alert("Please Enter all data");
            return 0;
        }
        var obj = {
            name : a,
            link : b
        }
        var flag = 1;
        this.props.menulist.map(value=>{
            if(value.name===a || value.link===b){
                flag = 0;
            }
        })
        if(flag){
            this.props.AddMenue(obj);
            swal("Menu added!");
        }
        else{
            alert("Name or Link already exits!!");
        }
    }
    render() {
        const {menulist} = this.props;
        const list = menulist.map((value,i)=>(
            <li key={i}><a href={value.link}>{value.name}</a></li>
        ))
        return (
            <div>
                <nav>
                    <ul>
                        {list}
                   
                        <li><button onClick={this.func} className="mybtn btn btn-danger "> ADD MENU </button></li>
                        </ul>
                </nav>
                
            </div>
        )
    }
}
export default  connect(mapstate,dis)(Header)