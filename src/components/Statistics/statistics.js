export default function Statistics() {
  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback();
  const Percentage = this.countPositiveFeedbackPercentage();

  return (
    <div>
      <span className="Counter__value">Good: {good}</span>;
      <span className="Counter__value">Neutral: {neutral}</span>;
      <span className="Counter__value">Bad: {bad}</span>;
      <span className="Counter__value">Total: {total}</span>;
      <span className="Counter__value">Positive feedback: {Percentage}%</span>;
    </div>
  );
}
