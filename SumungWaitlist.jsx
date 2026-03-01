import React, { useState } from 'react';
import styles from './SumungWaitlist.module.css';

export default function SumungWaitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email.');
      return;
    }
    // Placeholder: Replace with actual form action later
    setSubmitted(true);
    setError('');
  };

  return (
    <div className={styles.background}>
      <main className={styles.centeredBox}>
        <section className={styles.logoRow}>
          {/* Logo placeholder */}
          <div className={styles.logoCircle}>S</div>
          <h1 className={styles.brand}>sumung</h1>
        </section>
        <h2 className={styles.title}>Your Financial Co-pilot</h2>
        <p className={styles.subtitle}>AI-powered finance for SMBs and freelancers—no accounting required.</p>
        <div className={styles.abstractVisual} />
        {!submitted ? (
          <form className={styles.waitlistForm} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className={styles.inputField}
              autoComplete="off"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={styles.inputField}
              autoComplete="off"
              required
            />
            <button className={styles.submitBtn} type="submit">Join Waitlist</button>
            {error && <div className={styles.errorMsg}>{error}</div>}
          </form>
        ) : (
          <div className={styles.successMsg}>Thanks for joining! We’ll notify you when we launch.</div>
        )}
        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} Sumung Inc.</span>
        </footer>
      </main>
    </div>
  );
}
