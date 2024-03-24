import { useEffect, useState } from "react";
import QuoteContainer from "./QuoteContainer";
import Loader from "./Loader";

export default function App() {
  const [quotesArray, setQuotesArray] = useState([]);
  const [quote, setQuote] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function newQuote() {
    setIsOpen(true);
    setQuote(quotesArray[Math.floor(Math.random() * quotesArray.length)]);
    setIsOpen(false);
  }

  useEffect(function () {
    async function getQuotes() {
      setIsOpen(true);
      const apiUrl =
        "https://jacintodesign.github.io/quotes-api/data/quotes.json";
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQuotesArray(data);
      setQuote(data[Math.floor(Math.random() * data.length)]);
      setIsOpen(false);
    }
    getQuotes();
  }, []);

  return (
    <div>
      <QuoteContainer quote={quote} newQuote={newQuote} />
      {isOpen ? <Loader /> : null}
    </div>
  );
}
