import { Reducer } from "redux";

type FormState = {
    formValid: boolean;
};

const initialState: FormState = {
    formValid: false,
};

const formReducer: Reducer<FormState> = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FORM_VALID":
            return {
                ...state,
                formValid: action.formValid,
            };
        default:
            return state;
    }
};

export default formReducer;
