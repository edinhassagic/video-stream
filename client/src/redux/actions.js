import * as types from "./actionType";
import axios from "axios";


const getStreams = (streams) => ({
type: types.GET_STREAMS,
payload: streams
})

const streamDeleted = () => ({
    type: types.DELETE_STREAM
})

const streamAdded = () => ({
    type: types.CREATE_STREAM
})

const streamUpdated = () => ({
    type: types.UPDATE_STREAM
})

const getStream = (stream) => ({
    type: types.GET_SINGLE_STREAM,
    payload: stream
})



export const loadStreams = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/streams`).then((resp) => {
            console.log("resp", resp)
            dispatch(getStreams(resp.data));
        }).catch((erorr) =>console.log(erorr))
    }
}

export const deleteStream = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/streams/${id}`)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(streamDeleted());
            dispatch(loadStreams())
        }).catch((erorr) =>console.log(erorr))
    }
}

export const addStream = (stream) => {
    return function (dispatch) {
        axios.post(`http://localhost:5000/streams`, stream)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(streamAdded());
            dispatch(loadStreams());
            
        }).catch((erorr) =>console.log(erorr))
    }
}

export const getSingleStream = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/streams/${id}`)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(getStream(resp.data));
            
        }).catch((erorr) =>console.log(erorr))
    }
}

export const updateStream = (stream, id) => {
    return function (dispatch) {
        axios.put(`http://localhost:5000/streams/${id}`, stream)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(streamUpdated());
            
        }).catch((erorr) =>console.log(erorr))
    }
}