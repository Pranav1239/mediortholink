'use client';

import React, { useState } from 'react';

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ background: '#ecfdf5', padding: '30px', borderRadius: '16px', border: '1px solid #10b981', textAlign: 'center' }}>
        <h3 style={{ color: '#065f46', fontSize: '24px', marginBottom: '10px' }}>Appointment Request Received!</h3>
        <p style={{ color: '#047857' }}>Thank you for booking with Whhub Healthcare. Our staff will contact you shortly to confirm your schedule.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#334155' }}>Full Name *</label>
          <input type="text" required placeholder="John Doe" style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#334155' }}>Phone Number *</label>
          <input type="tel" required placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#334155' }}>Email Address *</label>
          <input type="email" required placeholder="john@example.com" style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#334155' }}>Department *</label>
          <select required defaultValue="orthopedics" style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px', background: '#fff' }}>
            <option value="orthopedics">Orthopedics</option>
            <option value="dermatology">Dermatology</option>
            <option value="neurology">Neurology</option>
            <option value="cardiology">Cardiology</option>
            <option value="oncology">Oncology</option>
            <option value="pediatrics">Pediatrics</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#334155' }}>Preferred Date *</label>
          <input type="date" required style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#334155' }}>Preferred Time *</label>
          <input type="time" required style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px' }} />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#334155' }}>Message / Notes</label>
        <textarea rows={4} placeholder="Briefly describe your symptoms or reason for visit..." style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px' }}></textarea>
      </div>

      <button type="submit" className="primary-button" style={{ border: 'none', cursor: 'pointer', borderRadius: '10px', padding: '16px', fontSize: '16px', fontWeight: 600 }}>
        <span className="primary-button-text">CONFIRM BOOKING</span>
      </button>
    </form>
  );
}
