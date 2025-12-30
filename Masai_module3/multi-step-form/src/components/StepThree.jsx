function StepThree({ state, dispatch }) {
  const { name, email, username, password } = state.formData;

  return (
    <div>
      <h3>Review Details</h3>

      <p><b>Name:</b> {name}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Username:</b> {username}</p>
      <p><b>Password:</b> {password}</p>

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </button>

      <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
        Submit
      </button>

      {state.isSubmitted && <h3>✅ Form Submitted Successfully!</h3>}
    </div>
  );
}

export default StepThree;
