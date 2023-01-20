import React, {useState} from "react";

import {faqData} from "../../data.json";
import "./faqs.css";

function FAQs() {

  const [faqs, setFaqs] = useState(faqData)

  const showAnswer = clickedFaq => {
    setFaqs(faqs.map((faq, index) => {
      index === clickedFaq ?
      faq.open = !faq.open :
      faq.open = false;

      return faq;
    }))
  }

    return (
      <div className="rdsShadow faqContainer">
        {
            faqs.map((faqItem, index) => {
                return(
                    <div className={`qBlock ${faqItem.open ? "opened" : "closed"} fz-18`} key={`faq-${index}`} onClick={() => showAnswer(index)}>
                    <h4>{faqItem.question}</h4>
                    <p className="lightGrey">{faqItem.answer}</p>
                  </div>
                )
            })
        }

      </div>
    );
}

export default FAQs
