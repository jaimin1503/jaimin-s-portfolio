import React, { useState, useEffect } from "react";

const TypeWriter = () => {
  const words = [
    "Front-end Development.",
    "Back-end Development.",
    "Web-design.",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  function type() {
    // Current word
    const currentWord = words[wordIndex];
    // Determine the function to be performed
    const shouldDelete = isDeleting ? 1 : -1;
    // Create the new text
    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );
    // Determine if this word is complete
    if (!isDeleting && text === currentWord) {
      // Make a pause at the end
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      // Move to the next word
      setWordIndex((current) => (current + 1) % words.length);
    }
  }
  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 100);
    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
    // Add dependencies to the dependency array
  }, [wordIndex, isDeleting, text]);
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};
export default TypeWriter;
