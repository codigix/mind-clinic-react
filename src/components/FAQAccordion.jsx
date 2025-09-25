// src/components/FAQAccordion.jsx
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQAccordion = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-8 border-t border-primary/20 pt-3">
      <h2 className="text-2xl font-bold mb-4 text-primary">FAQs</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-3 py-2 text-left text-sm font-medium text-gray-800 hover:bg-primary/5"
            >
              {faq.question}
              {openIndex === index ? (
                <Minus className="w-4 h-4 text-primary" />
              ) : (
                <Plus className="w-4 h-4 text-primary" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-3 pb-2 text-sm text-muted-foreground">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
