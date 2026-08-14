import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const phases = [
  {
    title: "Core Business Information",
    questions: [
      { id: "q1", label: "What is the name of your company?", type: "text" },
      { id: "q2", label: "What is your field of business?", type: "text" },
      { id: "q3", label: "Are you a registered business?", type: "select", options: ["Yes", "No", "In Process"] },
      { id: "q4", label: "Do you have a co-owner?", type: "select", options: ["Yes", "No"] },
      { id: "q5", label: "What is the official address of the business? (Include Street, City)", type: "textarea", minLength: 20 },
      { id: "q6", label: "What are your primary products or services?", type: "textarea", minLength: 15 },
      { id: "q7", label: "What is your company's core mission or vision?", type: "textarea", minLength: 15 },
    ]
  },
  {
    title: "Brand Identity & Target Market",
    questions: [
      { id: "q8", label: "Do you have a logo?", type: "select", options: ["Yes", "No", "Need a redesign"] },
      { id: "q9", label: "Do you have a slogan or tagline?", type: "text" },
      { id: "q10", label: "Do you have a defined business target audience?", type: "textarea", minLength: 15 },
      { id: "q11", label: "Do you have established brand guidelines?", type: "select", options: ["Yes", "No", "Partially"] },
      { id: "q12", label: "Who are your top three main competitors?", type: "textarea", minLength: 10 },
      { id: "q13", label: "What is your Unique Selling Proposition (USP)?", type: "textarea", minLength: 15 },
    ]
  },
  {
    title: "Digital Presence & Content Strategy",
    questions: [
      { id: "q14", label: "Do you have a domain name?", type: "select", options: ["Yes", "No"] },
      { id: "q15", label: "Do you have active social media profiles?", type: "textarea", placeholder: "E.g., Instagram, Facebook..." },
      { id: "q16", label: "Do you have a Google Business Listing?", type: "select", options: ["Yes", "No"] },
      { id: "q17", label: "Do you have a media kit?", type: "select", options: ["Yes", "No"] },
      { id: "q18", label: "Do you use a content planner?", type: "select", options: ["Yes", "No"] },
      { id: "q19", label: "Is your website currently live? (If yes, provide URL)", type: "text" },
      { id: "q20", label: "Are you currently running any paid advertising campaigns?", type: "textarea", placeholder: "E.g., Google Ads, Meta Ads" },
      { id: "q21", label: "What are your primary short-term and long-term marketing goals?", type: "textarea", minLength: 20 },
    ]
  },
  {
    title: "Contact & Communication Channels",
    questions: [
      { id: "q22", label: "Do you have a dedicated business email address?", type: "text" },
      { id: "q23", label: "Do you have a general phone number?", type: "phone" },
      { id: "q24", label: "Do you have a WhatsApp account specifically for the business?", type: "select", options: ["Yes", "No"] },
      { id: "q25", label: "Do you have physical business cards?", type: "select", options: ["Yes", "No"] },
      { id: "q26", label: "Who is the primary point of contact for day-to-day communications?", type: "text" },
    ]
  }
];

export default function GetQuote() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Clear errors when stepping
    setErrors({});
  }, [currentStep]);

  const handleInputChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error for this field as they type
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: null }));
    }
  };

  const validateCurrentPhase = () => {
    const currentPhase = phases[currentStep];
    const newErrors = {};
    let isValid = true;

    currentPhase.questions.forEach(q => {
      const val = formData[q.id];
      
      // 1. Required Check
      if (!val || (typeof val === 'string' && val.trim() === '')) {
        newErrors[q.id] = 'This field is required';
        isValid = false;
        return;
      }

      // 2. Phone Validation (Must be exactly correct format for the country)
      if (q.type === 'phone') {
        if (!isValidPhoneNumber(val)) {
          newErrors[q.id] = 'Please enter a valid, active phone number (e.g. 10 digits)';
          isValid = false;
        }
      }

      // 3. Gibberish & Length Prevention for Text/Textarea
      if (q.type === 'textarea' || q.type === 'text') {
        const textVal = val.trim();
        
        // Check minLength if specified
        if (q.minLength && textVal.length < q.minLength) {
          newErrors[q.id] = `Please provide a more detailed response (min ${q.minLength} characters)`;
          isValid = false;
        }

        // Prevent gibberish without spaces in long text
        if (q.type === 'textarea' && textVal.length > 10 && !textVal.includes(' ')) {
          newErrors[q.id] = 'Please provide a valid format with actual words';
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateCurrentPhase()) {
      if (currentStep < phases.length - 1) setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateCurrentPhase()) {
      return;
    }

    // 1-Hour Rate Limit Check
    const lastSubmit = localStorage.getItem('lastQuoteSubmit');
    if (lastSubmit && (Date.now() - parseInt(lastSubmit)) < 3600000) {
      setSubmitStatus("cooldown");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const payload = {
      access_key: "45435487-fdf4-41dd-972a-de5a219ce29f",
      subject: "New Project Inquiry - De Vibe",
      from_name: formData.q1 || "New Client",
    };

    phases.forEach(phase => {
      phase.questions.forEach(q => {
        if (formData[q.id]) {
          payload[q.label] = formData[q.id];
        }
      });
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        localStorage.setItem('lastQuoteSubmit', Date.now().toString());
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <section className="bg-alt" style={{ flex: 1, padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Thank You!</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Your comprehensive project details have been received. We will review them and get back to you shortly.
          </p>
        </div>
      </section>
    );
  }

  if (submitStatus === "cooldown") {
    return (
      <section className="bg-alt" style={{ flex: 1, padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Submission Limit Reached</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            You have already submitted a quote request recently. Please wait 1 hour before submitting another one to prevent spam.
          </p>
        </div>
      </section>
    );
  }

  const currentPhase = phases[currentStep];

  return (
    <>
      <Helmet>
        <title>Get a Free Quote - De Vibe Agency</title>
        <meta name="description" content="Request a free project estimate for web development, software solutions, or logo design." />
        <link rel="canonical" href="https://www.devibestudio.com/quote" />
        <meta property="og:title" content="Get a Free Quote - De Vibe Agency" />
        <meta property="og:url" content="https://www.devibestudio.com/quote" />
      </Helmet>
      <section className="bg-alt" style={{ flex: 1, padding: '4rem 0' }}>
        <div className="container quote-container" style={{ maxWidth: '750px' }}>
          <h1 style={{ marginBottom: '0.5rem' }}>Start Your Project</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            Tell us about your business vision or request a <strong>7-Day Live Staging Preview</strong>.
          </p>

          {/* 7-DAY LIVE TRIAL STAGING & OUTREACH DEMO PROTOCOL BANNER */}
          <div className="glass-card" style={{ padding: '2rem', marginBottom: '2.5rem', textAlign: 'left', border: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '0.4rem 0.85rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
                ⚡ 7-Day Live Staging Preview Protocol
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Zero-Risk Trial</span>
            </div>

            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
              Test Your Live Custom Website for 7 Days Before Finalizing
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              We build a dedicated staging repository and host your live interactive demo for <strong>7 full days</strong>. Test UI responsiveness, page load speeds, and share with your team. If approved within 7 days, we migrate the site to your domain with full source code transfer and 18% GST tax invoice. If not renewed, the sandbox automatically spins down.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>
              <span>✅ 100% Free 7-Day Live Sandbox</span>
              <span>•</span>
              <span>✅ Custom GitHub Staging Repo</span>
              <span>•</span>
              <span>✅ Instant WhatsApp Team Outreach</span>
            </div>
          </div>
        
        {/* Progress Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          {phases.map((_, idx) => (
            <div 
              key={idx} 
              style={{ 
                flex: 1, 
                height: '6px', 
                backgroundColor: idx <= currentStep ? 'var(--accent)' : 'var(--border)',
                borderRadius: '3px',
                transition: 'background-color 0.3s ease'
              }}
            />
          ))}
        </div>

        <form onSubmit={currentStep === phases.length - 1 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }} style={{ textAlign: 'left', backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent)' }}>Phase {currentStep + 1} of {phases.length}</h3>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>{currentPhase.title}</h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {currentPhase.questions.map(q => (
              <div key={q.id}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                  {q.label}
                </label>
                {q.type === 'text' && (
                  <input 
                    type="text" 
                    value={formData[q.id] || ''}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    placeholder={q.placeholder || ''}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: `1px solid ${errors[q.id] ? 'red' : 'var(--border)'}`, backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  />
                )}
                {q.type === 'textarea' && (
                  <textarea 
                    value={formData[q.id] || ''}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    placeholder={q.placeholder || ''}
                    rows={3}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: `1px solid ${errors[q.id] ? 'red' : 'var(--border)'}`, backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', resize: 'vertical' }}
                  />
                )}
                {q.type === 'select' && (
                  <select 
                    value={formData[q.id] || ''}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: `1px solid ${errors[q.id] ? 'red' : 'var(--border)'}`, backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  >
                    <option value="" disabled>Select an option</option>
                    {q.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                )}
                {q.type === 'phone' && (
                  <PhoneInput
                    defaultCountry="IN"
                    value={formData[q.id] || ''}
                    onChange={(value) => handleInputChange(q.id, value)}
                    style={{ '--PhoneInput-color--focus': 'var(--accent)', '--PhoneInputInternationalIconPhone-opacity': 0.8, backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', border: `1px solid ${errors[q.id] ? 'red' : 'var(--border)'}`, padding: '0.5rem 0.75rem' }}
                    numberInputProps={{
                      style: {
                        border: 'none',
                        background: 'transparent',
                        color: 'var(--text-primary)',
                        width: '100%',
                        outline: 'none',
                        fontSize: '1rem'
                      }
                    }}
                  />
                )}
                {errors[q.id] && (
                  <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    {errors[q.id]}
                  </div>
                )}
              </div>
            ))}
          </div>

          {submitStatus === "error" && (
            <div style={{ color: 'red', marginTop: '1rem' }}>
              An error occurred while submitting the form. Please try again.
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
            <button 
              type="button" 
              className="btn btn-outline" 
              onClick={handlePrev}
              disabled={currentStep === 0 || isSubmitting}
              style={{ opacity: currentStep === 0 ? 0.5 : 1 }}
            >
              Previous
            </button>
            
            {currentStep < phases.length - 1 ? (
              <button type="submit" className="btn">
                Next Phase
              </button>
            ) : (
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
    </>
  );
}
