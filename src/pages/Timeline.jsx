import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineItems = [
    {
      id: 1,
      title: 'Discovery & Planning',
      description: 'We begin by understanding your business goals, target audience, and project requirements. Our team conducts thorough research and creates a detailed project roadmap with timelines and milestones.'
    },
    {
      id: 2,
      title: 'Design & Development',
      description: 'Our expert designers and developers work together to create an intuitive user interface and robust functionality. We use cutting-edge technologies to build scalable and secure web and mobile applications.'
    },
    {
      id: 3,
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing is conducted to ensure your application is bug-free, secure, and performs optimally. We test across different devices, browsers, and scenarios to deliver a flawless user experience.'
    },
    {
      id: 4,
      title: 'Launch & Support',
      description: 'We handle the deployment process and ensure a smooth launch of your application. Post-launch, we provide ongoing maintenance, updates, and technical support to keep your application running smoothly.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = timelineRef.current;
      if (!container) return;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = Math.min(scrollPosition / totalHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const timelineItems = Array.from(document.querySelectorAll('.timeline-item'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = timelineItems.indexOf(entry.target);
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = entry.boundingClientRect.top + scrollTop;

        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } else {
          // Detect if scrolling up
          if (scrollTop < elementTop) {
            // Hide this and all after it (bottom to top effect)
            for (let i = timelineItems.length - 1; i >= index; i--) {
              timelineItems[i].classList.remove('visible');
              timelineItems[i].classList.add('hidden');
            }
          }
        }
      });
    }, observerOptions);

    timelineItems.forEach(item => observer.observe(item));

    return () => {
      timelineItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <>
    <div className='process'>
    <div className="process-header">
        <div className="scroll-text">
          <span className="gradient-text">PROCESS</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PROCESS</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PROCESS</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PROCESS</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PROCESS</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PROCESS</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PROCESS</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PROCESS</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PROCESS</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PROCESS</span>&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline-center">
        <div className="timeline-line">
          <div 
            className="timeline-progress" 
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>
        </div>
        {timelineItems.map((item) => (
          <div className="timeline-item hidden" key={item.id}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h2 className="timeline-title">{item.title}</h2>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Timeline;
