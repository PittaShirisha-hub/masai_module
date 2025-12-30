import { useReducer } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

// Initial State
const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
  isSubmitted: false,
};

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Multi-Step Registration Form</h2>
      <p>Step {state.step} of 3</p>

      {state.step === 1 && (
        <StepOne state={state} dispatch={dispatch} />
      )}

      {state.step === 2 && (
        <StepTwo state={state} dispatch={dispatch} />
      )}

      {state.step === 3 && (
        <StepThree state={state} dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;
