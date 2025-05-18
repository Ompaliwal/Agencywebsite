import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './FormInquiry.css';

// You'll need to add your own icons or import them from your assets
// Example placeholder - replace with your actual icons
import webDevIcon from '../assets/webdev.png';
import mobileDevIcon from '../assets/appdev.png';
import uiUxIcon from '../assets/uiux.png';
import aiIcon from '../assets/aiintegration.png';

function FormInquiry() {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    companyName: '',
    service: 'web',
    monthlyBudget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleServiceSelect = (serviceType) => {
    setFormData({
      ...formData,
      service: serviceType
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_9ieh7km',
        'template_95to2if',
        form.current,
        'oHWNvBSQTCZhg4htV'
      );
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        companyName: '',
        service: 'web',
        monthlyBudget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitted(false);
    }
  };

  const services = [
    {
      id: 'web',
      title: 'Web Development',
      icon: webDevIcon,
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: mobileDevIcon,
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      icon: uiUxIcon,
    },
    {
      id: 'ai',
      title: 'AI Integration',
      icon: aiIcon,
    },
  ];

  const budgetOptions = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const timelineOptions = [
    'Less than 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Ongoing support'
  ];

  return (
    <div className="inquiry-page">
      <header className="inquiry-header">
        <div className="container">
          <h1 className="inquiry-title">Start Your Project</h1>
          <p className="inquiry-subtitle">Tell us about your vision and let's bring it to life</p>
        </div>
      </header>

      <section className="form-section">
        <div className="container">
          <div className="form-container">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h2>Thank You!</h2>
                <p>Your inquiry has been submitted successfully. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-group-container">
                  <div className="form-group-section">
                    <h3 className="form-section-title">Contact Information</h3>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={handleChange}
                          placeholder="John"
                          required 
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={handleChange}
                          placeholder="Doe"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required 
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="number">Phone Number</label>
                        <input 
                          type="tel" 
                          id="number" 
                          name="number" 
                          value={formData.number} 
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567" 
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="companyName">Company Name</label>
                      <input 
                        type="text" 
                        id="companyName" 
                        name="companyName" 
                        value={formData.companyName} 
                        onChange={handleChange}
                        placeholder="Your Company, Inc."
                      />
                    </div>
                  </div>
                  
                  <div className="form-group-section">
                    <h3 className="form-section-title">Project Details</h3>
                    
                    <div className="form-group">
                      <label>Select Service Type</label>
                      <div className="services-tabs form-services-tabs">
                        {services.map(service => (
                          <button
                            type="button"
                            key={service.id}
                            className={`service-tab ${formData.service === service.id ? 'active' : ''}`}
                            onClick={() => handleServiceSelect(service.id)}
                          >
                            <img src={service.icon} alt={service.title} className="tab-icon" />
                            <span>{service.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="monthlyBudget">Monthly Budget</label>
                      <select 
                        id="monthlyBudget" 
                        name="monthlyBudget" 
                        value={formData.monthlyBudget} 
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a budget range</option>
                        {budgetOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Project Description</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        rows="5"
                        placeholder="Describe your project, goals, and specific requirements..."
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="form-submit">
                  {submitStatus === 'success' && (
                    <div className="success-message">
                      Thank you for your inquiry! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="error-message">
                      There was an error submitting your inquiry. Please try again.
                    </div>
                  )}

                  <button type="submit" className="submit-btn get-started-btn" disabled={submitted}>
                    {submitted ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                  <p className="privacy-note">By submitting this form, you agree to our Privacy Policy and Terms of Service.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="inquiry-benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⏱️</div>
              <h3>Quick Response</h3>
              <p>We respond to all inquiries within 24 hours during business days.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Personalized Approach</h3>
              <p>Each project starts with a tailored consultation to understand your unique needs.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Expert Guidance</h3>
              <p>Our specialists will help you choose the right solution for your business.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3>Confidentiality</h3>
              <p>Your project details and business information are always kept secure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section inquiry-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Prefer to Talk Directly?</h2>
            <p>Schedule a no-obligation consultation with our development team.</p>
            <div className="cta-buttons">
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

export default FormInquiry;