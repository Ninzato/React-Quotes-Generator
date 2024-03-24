export default function QuoteContainer({ quote, newQuote }) {
  function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
    window.open(twitterUrl, "_blank");
  }

  return (
    <div className="quote-container">
      {/* Socials Button Container */}
      <div className="socials-container" onClick={tweetQuote}>
        <button className="twitter-button">
          <i className="fab fa-square-x-twitter"></i>
        </button>
      </div>

      {/* Quote */}
      <div className="quote-text">
        <i className="fas fa-quote-left"></i>
        <span>{quote.text}</span>
      </div>

      {/* Author */}
      <div className="quote-author">
        <span>{quote.author}</span>
      </div>

      {/* Button */}
      <div className="button-container">
        <button className="button" onClick={() => newQuote()}>
          New Quote
        </button>
      </div>
    </div>
  );
}
