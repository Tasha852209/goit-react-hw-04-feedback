import React, { useState } from 'react';
import { Section } from './Sections/Section';
import { FeedbackOptions } from './Sections/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Sections/Statistics/Statistics';
import { Notification } from './Sections/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = type => {
    if (type === 'good') {
      return setGood(prevGood => prevGood + 1);
    }
    if (type === 'neutral') {
      return setNeutral(prevNeutral => prevNeutral + 1);
    }
    if (type === 'bad') {
      return setBad(prevBad => prevBad + 1);
      // this.setState(prevState => ({
      //   [type]: prevState[type] + 1,
      // }));
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions countFeedback={countFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
