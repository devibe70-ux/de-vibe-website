import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const phases = [
  {
    title: "Core Business Information",
    questions: [
      { id: "q1", label: "What is the name of your company?", type: "text" },
      { id: "q2", label: "What is your field of business?", type: "text" },
      { id: "q3", label: "Are you a registered business?", type: "select", options: ["Yes", "No", "In Process"] },
      { id: "q4", label: "Do you have a co-owner?", type: "select", options: ["Yes", "No"] },
      { id: "q5", label: "What is the official address of the business?", type: "textarea" },
      { id: "q6", label: "What are your primary products or services?", type: "textarea" },
      { id: "q7", label: "What is your company's core mission or vision?", type: "textarea" },
    ]
  },
  {
    title: "Brand Identity & Target Market",
    questions: [
      { id: "q8", label: "Do you have a logo?", type: "select", options: ["Yes", "No", "Need a redesign"] },
      { id: "q9", label: "Do you have a slogan or tagline?", type: "text" },
      { id: "q10", label: "Do you have a defined business target audience?", type: "textarea" },
      { id: "q11", label: "Do you have established brand guidelines?", type: "select", options: ["Yes", "No", "Partially"] },
      { id: "q12", label: "Who are your top three main competitors?", type: "textarea" },
      { id: "q13", label: "What is your Unique Selling Proposition (USP)?", type: "textarea" },
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
      { id: "q21", label: "What are your primary short-term and long-term marketing goals?", type: "textarea" },
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (currentStep < phases.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Map answers to readable labels for the email
    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
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

  const currentPhase = phases[currentStep];

  return (
    <section className="bg-alt" style={{ flex: 1, padding: '4rem 0' }}>
      <div className="container quote-container" style={{ maxWidth: '700px' }}>
        <h2>Start Your Project</h2>
        
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
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  />
                )}
                {q.type === 'textarea' && (
                  <textarea 
                    value={formData[q.id] || ''}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    placeholder={q.placeholder || ''}
                    rows={3}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', resize: 'vertical' }}
                  />
                )}
                {q.type === 'select' && (
                  <select 
                    value={formData[q.id] || ''}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
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
                    style={{ '--PhoneInput-color--focus': 'var(--accent)', '--PhoneInputInternationalIconPhone-opacity': 0.8, backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', border: '1px solid var(--border)', padding: '0.5rem 0.75rem' }}
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
  );
}
