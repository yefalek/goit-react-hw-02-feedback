export default function FeedbackOptions() {
  return (
    <div className="Counter">
      <button type="button" onClick={this.handleIncrementGood}>
        good
      </button>
      <button type="button" onClick={this.handleIncrementNeutral}>
        neutral
      </button>
      <button type="button" onClick={this.handleIncrementBad}>
        bad
      </button>
    </div>
  );
}
