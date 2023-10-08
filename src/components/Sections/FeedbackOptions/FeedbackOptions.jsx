import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ countFeedback }) => {
  return (
    <div className={css.buttonContainer}>
      <button
        className={css.buttonFeedback}
        onClick={() => countFeedback('good')}
      >
        Good
      </button>
      <button
        className={css.buttonFeedback}
        onClick={() => countFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.buttonFeedback}
        onClick={() => countFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};
