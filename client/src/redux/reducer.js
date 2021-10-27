import * as types from "./actionType";

const initialState = {
    streams: [],
    stream: {},
    loading : true
}

const streamsReducers = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_STREAMS:
            return {
                ...state,
                streams: action.payload,
                loading : false
            };
            case types.DELETE_STREAM:
            case types.CREATE_STREAM:
                case types.UPDATE_STREAM:
                return {
                    ...state,
                    loading: false
                };
                case types.GET_SINGLE_STREAM:
                    return {
                        ...state,
                        stream: action.payload,
                        loading: false,
                    }
        default:
            return state;
    }
}

export default streamsReducers;