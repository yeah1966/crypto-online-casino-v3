import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 border-b pb-4">
      <button
        className="w-full text-left font-semibold text-lg flex justify-between items-center focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="ml-2 text-blue-600">{open ? '-' : '+'}</span>
      </button>
      {open && <div className="mt-2 text-gray-700">{answer}</div>}
    </div>
  );
};

export default FAQItem;
