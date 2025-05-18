import React, { useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom'; // At the top



// You'll need to replace these with your actual assets
import webDevIcon from '../assets/webdev.png';
import mobileDevIcon from '../assets/appdev.png';
import uiUxIcon from '../assets/uiux.png';
import aiIcon from '../assets/aiintegration.png';

import clientLogo1 from '../assets/avatar1.png';
import clientLogo2 from '../assets/avatar1.png';
import clientLogo3 from '../assets/avatar1.png';
import clientLogo4 from '../assets/avatar1.png';

import projectImg1 from '../assets/test1.png';
import projectImg2 from '../assets/test2.png';
import projectImg3 from '../assets/test4.png';

function ServicePage() {
  const [activeTab, setActiveTab] = useState('web');

  const services = [
    {
      id: 'web',
      title: 'Web Development',
      icon: webDevIcon,
      description: 'Custom web applications built with modern frameworks and technologies to deliver exceptional user experiences.',
      features: ['React & Next.js', 'Node.js Backend', 'E-Commerce', 'CMS Integration', 'Performance Optimization']
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: mobileDevIcon,
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization', 'Push Notifications']
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      icon: uiUxIcon,
      description: 'User-centered design that creates intuitive, engaging, and accessible digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing']
    },

    {
      id: 'ai',
      title: 'AI Integration',
      icon: aiIcon,
      description: 'Leverage the power of artificial intelligence to automate processes and gain valuable insights.',
      features: ['Machine Learning', 'NLP', 'Chatbots', 'Computer Vision', 'Predictive Analytics']
    },

  ];

  const testimonials = [
    {
      text: "Their development team took our complex requirements and delivered a solution that exceeded our expectations. The attention to detail was impressive.",
      author: "Sarah Johnson",
      company: "TechVision Inc."
    },
    {
      text: "We've worked with many development agencies, but this team stands out for their technical expertise and commitment to quality. They're now our go-to partner.",
      author: "Michael Chen",
      company: "Innovate Solutions"
    },
    {
      text: "The most responsive and professional development team we've ever worked with. They delivered our project on time and within budget with exceptional quality.",
      author: "Emma Rodriguez",
      company: "GrowthPulse"
    },
    {
      text: "The team's expertise in modern technologies helped us transform our digital presence completely. Their solutions are scalable and future-proof.",
      author: "David Kim",
      company: "FutureTech"
    },
    {
      text: "Working with this team was a game-changer for our business. Their innovative approach and technical excellence delivered outstanding results.",
      author: "Lisa Wang",
      company: "Digital Dynamics"
    },
    {
      text: "The level of professionalism and technical expertise is unmatched. They consistently deliver high-quality solutions that drive business growth.",
      author: "James Wilson",
      company: "Global Innovations"
    },
    {
      text: "Their attention to detail and commitment to excellence is remarkable. They've helped us achieve our digital transformation goals.",
      author: "Maria Garcia",
      company: "TechForward"
    },
    {
      text: "The team's ability to understand our business needs and translate them into technical solutions is exceptional. Highly recommended!",
      author: "Robert Taylor",
      company: "Smart Solutions"
    }
  ];

  const projects = [
    {
      title: "KAMEZi",
      description: "A visually captivating, responsive website designed to highlight the hotel’s luxury, and guest experiences with immersive visuals and a seamless booking journey.",
      image: projectImg1,
      link: "https://www.villaskamezi.com/",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "COLLIDER",
      description: "A visually rich, responsive website crafted to showcase the beer brand’s story, products, and community with immersive design and seamless user experience.",
      image: projectImg2,
      link: "https://www.drinkcollider.com/",

      technologies: ["React", "Tailwind", "Express", "MongoDB"]
    },
    {
      title: "E-COMMERCE ",
      description: "E-commerce platform delivering real-time sales analytics and inventory management for smarter, more efficient, data-driven online retail operations.",
      image: projectImg3,
      link: "https://www.jcojewellery.com/?country=US",

      technologies: ["Vue.js", "MongoDB", "Node.js", "JWT "]
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <div className="service-page">
      <header className="service-header">
        <div className="container">
          <h1 className="service-title">Premium Development Services</h1>
          <p className="service-subtitle">Transforming your ideas into powerful digital solutions</p>
        </div>
      </header>

      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Our Expertise</h2>
            <p>Comprehensive development services tailored to your business needs</p>
          </div>

          <div className="services-tabs">
            {services.map(service => (
              <button
                key={service.id}
                className={`service-tab ${activeTab === service.id ? 'active' : ''}`}
                onClick={() => setActiveTab(service.id)}
              >
                <img src={service.icon} alt={service.title} className="tab-icon" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          <div className="service-details">
            <div className="service-content">
              <h3>{activeService.title}</h3>
              <p>{activeService.description}</p>

              <div className="service-features">
                {activeService.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-bullet">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* <button className="get-started-btn">Explore {activeService.title}</button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Development Process</h2>
            <p>A proven approach to deliver exceptional results</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We start by understanding your business, goals, and requirements to define the project scope.</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>Our team creates a detailed roadmap, architecture, and design specifications for your approval.</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>We build your solution using agile methodologies with regular updates and feedback cycles.</p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Testing</h3>
              <p>Rigorous quality assurance ensures your product is robust, secure, and performance-optimized.</p>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Launch</h3>
              <p>We handle deployment and provide support for a smooth transition to production.</p>
            </div>

            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Maintenance</h3>
              <p>Ongoing support, updates, and optimization to ensure your solution evolves with your business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>See how we've helped businesses transform their digital presence</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>


        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <p>Don't just take our word for it</p>
        </div>

        <div className="testimonials-container">
          <div className="testimonials-track">
            {/* Original testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p>{testimonial.text}</p>
                </div>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            ))}
            {/* Duplicated testimonials for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`duplicate-${index}`} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p>{testimonial.text}</p>
                </div>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="clients-section">
        <div className="container">
          <div className="section-header">
            <h2>Trusted By</h2>
          </div>
          
          <div className="client-logos">
            <img src={clientLogo1} alt="Client logo" className="client-logo" />
            <img src={clientLogo2} alt="Client logo" className="client-logo" />
            <img src={clientLogo3} alt="Client logo" className="client-logo" />
            <img src={clientLogo4} alt="Client logo" className="client-logo" />
          </div>
        </div>
      </section>
       */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Elevate Your Digital Presence?</h2>
            <p>Let's talk about how our development expertise can help you achieve your business goals.</p>
            <div className="cta-buttons">
            <Link to="/form-inquiry">
            <button className="get-started-btn main-btn">Get Started</button>
          </Link>
              <a
                href="https://cal.com/bagora-agency-pfnups/secret"
                target="_blank"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <button className="book-call-btn">Schedule a Consultation</button>
              </a>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicePage;