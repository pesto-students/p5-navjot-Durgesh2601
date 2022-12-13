import { useDispatch, useSelector } from "react-redux";

export const StepsCounter = () => {
  const { stepsCount } = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const handleBtnClick = (actionType) => {
    if (actionType) {
      dispatch({ type: actionType });
    }
  };
  return (
    <>
      <h2>You've walked {stepsCount} steps today!</h2>
      <button
        className="button-container add"
        onClick={() => handleBtnClick("add_step")}
      >
        Add a Step
      </button>
      <br />
      <br />
      <button
        className="button-container"
        onClick={() => handleBtnClick("reset_steps")}
      >
        Reset Steps
      </button>
    </>
  );
};
