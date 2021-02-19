import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {DelateCard} from '../actions'
import { connect } from 'react-redux';
import swal from 'sweetalert'
// const mapState= state =>{
// 	return {
// 		'details' : state.getlist.list
// 	}
// }

const dis = (dispatch)=>({
    change : (value) => dispatch(DelateCard(value))
}
)

class Card extends Component {
    alt = (id) => {
        swal({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("SInformation Deleted", {
                icon: "success",
              });
              this.props.change(id);

            } else {
              swal("Canceled");
            }
          });
    }
    render() {
        var a = this.props.details;
        console.log(this.props)
        var img = "https://robohash.org/"+a.name;
        console.log(a[0]);
        return (
            <div className="card-mm">
            <div className="top-side">
            <div className="heyyou">
                <button onClick={()=>this.alt(this.props.id)} className="close-button">&#215;</button>
            </div>

`               <img className="card-imgs" src={img}></img>
            </div>
            <br></br>
            <div className="detail-sec">
                <p className="card-name" style={{color:'white'}}>{a.name}</p>
                <p className="card-email">{a.email}</p>

            </div>

            </div>
        )
    }
}
export default connect(null,dis)(Card);