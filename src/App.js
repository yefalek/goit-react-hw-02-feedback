import FeedbackOptions from './components/FeedbackOptions/feedback';
import Statistics from './components/Statistics/statistics';
import Section from './components/Section/section';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    var percentage = 100;
    return `${percentage * (good / total)}`;
  };

  render() {
    return (
      <div>
        {/* <Section title="Please leave feedback"> */}
        <FeedbackOptions />
        {/* </Section> */}
        {/* <Section title="Statistics"> */}
        <Statistics />
        {/* </Section> */}
      </div>
    );
  }
}

export default App;
