export const GET_DATA = "GET_DATA";
export const PERSON_ADD = "PERSON_ADD";
export const RANDOM_PERSON_ADD = "RANDOM_PERSON_ADD";

export const reducer = (state, action) => {
    switch (action.type) {
        case GET_DATA:
            return action.data;
        case PERSON_ADD:
            return [...state, action.addP];
        case RANDOM_PERSON_ADD :
			return [...state, action.addRandomP];
        default:
            return state;
    }
}
