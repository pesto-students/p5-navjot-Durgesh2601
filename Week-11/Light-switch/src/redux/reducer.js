import { TOGGLE } from "./actions";

const initialState = {
  background: "black",
  textContent: "dark",
};

export const reducer = (state = initialState, action) => {
  const { background, textContent } = state;
  switch (action.type) {
    case TOGGLE: {
      return {
        background: background === "black" ? "white" : "black",
        textContent: textContent === "dark" ? "lit" : "dark",
      };
    }
    default: {
      return state;
    }
  }
};

