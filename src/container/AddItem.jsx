import React, { Component } from 'react'
import {AddCard} from '../actions'
import {connect} from 'react-redux'
import swal from 'sweetalert'

const dis=(dispatch)=>({
    additem : (obj)=> dispatch(AddCard(obj))
})

class AddItem extends Component {
    adding=()=>{
        var a = document.getElementById("name").value;
        var b = document.getElementById("dep").value;
        var c = document.getElementById("email").value;
        var d = document.getElementById("cgpa").value;
        var e = document.getElementById("age").value;
        var f = document.getElementById("semester").value;
        if(a.length!==0 && b.length!==0  && c.length!==0  && d.length!==0  && e.length!==0  && f.length!==0 ){
            var obj = {
                name : a,
                dep : b,
                email : c,
                cgpa : d,
                age : e,
                semester : f
            }
            swal({
                title: "Are you sure?",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Student infomation updated!!!", {
                    icon: "success",
                  });
                  this.props.additem(obj);

                } else {
                  swal("Canceled");
                }
              });
        }
        else{
            alert("Please full form")
        }
    }
    render() {
        var details = this.props.details;
        return (
            <div style={{border:'1px solid #CCE4FD',padding:'0px 50px',paddingBottom:'50px'}}>
                <p className="alert alert-primary add-item-text">ADD STUDENT</p>
                <div className="add-card-item">
                    <input id="name" placeholder="Enter the name..."></input><br></br>
                    <input id="dep" placeholder="Enter the dep. name..."></input><br></br>
                    <input id="email" placeholder="Enter the email..."></input><br></br>
                    <input id="cgpa" placeholder="Enter CGPA..."></input><br></br>
                    <input id="age" placeholder="Enter Age..."></input><br></br>
                    <input id="semester" placeholder="Enter semester..."></input><br></br>
                    <button onClick={this.adding} id="add-item">Submit</button>
 
                
                
                </div>
               
                
            </div>
        )
    }
}
export default connect(null,dis)(AddItem)