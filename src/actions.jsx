export const AddCard = (obj)=>({
    type : 'ADD_CARD',
    payload : obj,
})

export const DelateCard = (id) =>({
    type : 'DELETE_CARD',
    payload : id,
})

export const AddMenue = (obj)=>({
    type : 'ADD_MENUE',
    payload : obj,
})

export const RequestList = () =>(dispatch)=>{
    dispatch({ type : 'REQUEST_PENDING'})

    fetch("https://raw.githubusercontent.com/Reaziii/json/main/db.json")
    .then(res => res.json())
    .then(data => dispatch({
        type : 'REQUEST_SUCCED',
        payload: data,
    }))
    .catch(error => dispatch({
        type : 'REQUEST_FAILD',
        payload : error
    }))
}