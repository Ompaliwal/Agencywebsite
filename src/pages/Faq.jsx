import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Which package is best for me?",
      answer: "The best package depends on your specific needs and goals. We offer a range of options from basic video editing to comprehensive creative packages. During our consultation, we'll discuss your project requirements and recommend the most suitable package for your budget and objectives."
    },
    {
      question: "Why should we choose your service?",
      answer: "We combine technical expertise with creative vision to deliver high-quality videos that effectively communicate your message. Our team has extensive experience across industries, we offer personalized service, and we're committed to your satisfaction with every project."
    },
    {
      question: "How long does the video process take?",
      answer: "Typical production timelines range from 1-4 weeks depending on the complexity and scope of your project. During our initial consultation, we'll provide a more specific timeline based on your requirements and current production schedule."
    },
    {
      question: "Can I cancel at any time?",
      answer: "Yes, you can cancel your project, though cancellation terms vary depending on the stage of production. Please refer to our service agreement for specific details about our cancellation policy and any applicable fees."
    },
    {
      question: "How can I send big files to you?",
      answer: "We provide secure file transfer options for our clients. Upon project initiation, we'll set you up with access to our cloud storage system where you can easily upload large files. Alternatively, we can work with your preferred file sharing service."
    },
    {
      question: "I have a big project and it's a bit complex...",
      answer: "We specialize in managing complex projects of all sizes. Our team has the expertise to break down complicated requirements into manageable components. We'll work closely with you to understand your vision and deliver results that exceed your expectations."
    },
    {
      question: "What if I don't like my video and how do revisions work?",
      answer: "Your satisfaction is our priority. Our packages include a specific number of revision rounds. If you're not completely satisfied, we'll make adjustments based on your feedback. Additional revisions beyond the included rounds can be arranged at a reasonable rate."
    },
    {
      question: "How can I subscribe for a long term?",
      answer: "We offer monthly and quarterly subscription plans for clients who need ongoing video production. These plans provide cost savings and priority scheduling. Contact us to discuss custom subscription options tailored to your long-term needs."
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>You have questions. We have answers</h1>
      </div>

      <div className="faq-content">
        <div className="faq-title">
          <h2>Frequently asked <span>questions</span></h2>
          <p>(Find answers to frequently asked questions about CreativEdits, our range of services, how we operate, and insights on maximizing the benefits of our agency services.)</p>
        </div>
        
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <p>{item.question}</p>
                <div className="arrow-icon">
                  {activeIndex === index ? '▲' : '▼'}
                </div>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;