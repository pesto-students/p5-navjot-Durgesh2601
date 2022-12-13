import { ADD_STEP, RESET_STEPS } from "./actions";

const initialState = {
  stepsCount: 0,
};

export const reducer = (state = initialState, action) => {
  const { stepsCount } = state;
  switch (action.type) {
    case ADD_STEP: {
      return {
        stepsCount: stepsCount + 1,
      };
    }
    case RESET_STEPS: {
      return {
        stepsCount: 0,
      };
    }
    default:
      return state;
  }
};
