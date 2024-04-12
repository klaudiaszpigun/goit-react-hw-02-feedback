// onLeaveFeedback to importowanie funkcji z komponentu App.jsx
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <li>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
