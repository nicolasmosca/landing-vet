import React from 'react';

const VetShopLandingPage: React.FC = () => {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to Paws & Claws Vet Shop</h1>
        <p style={styles.subtitle}>Your trusted partner in pet health and happiness</p>
      </header>

      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.paragraph}>
          At Paws & Claws Vet Shop, we provide high-quality veterinary products and expert advice to ensure your beloved pets stay healthy and happy. From nutritious food, hygiene supplies to toys and accessories, we have everything your pet needs.
        </p>
      </section>

      <section style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <ul style={styles.list}>
          <li>Veterinary-approved Nutrition Products</li>
          <li>Pet Grooming Supplies</li>
          <li>Health Care & Preventative Treatments</li>
          <li>Friendly Expert Support</li>
        </ul>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.sectionTitle}>Get in Touch</h2>
        <p style={styles.paragraph}>Call us at <a href="tel:+1234567890" style={styles.link}>+1 (234) 567-890</a> or visit our shop to discover everything we offer for your furry friends.</p>
      </section>
    </main>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#222',
    backgroundColor: '#fafafa'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  title: {
    fontSize: '2.75rem',
    margin: 0,
    color: '#4a8f4a'
  },
  subtitle: {
    fontSize: '1.25rem',
    marginTop: '0.5rem',
    color: '#6b6b6b'
  },
  aboutSection: {
    marginBottom: '2.5rem'
  },
  sectionTitle: {
    fontSize: '1.75rem',
    marginBottom: '1rem',
    borderBottom: '2px solid #4a8f4a',
    paddingBottom: '0.25rem'
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#333'
  },
  servicesSection: {
    marginBottom: '2.5rem'
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    fontSize: '1rem',
    color: '#333'
  },
  ctaSection: {
    textAlign: 'center',
    padding: '1.5rem',
    backgroundColor: '#e6f2e6',
    borderRadius: '8px'
  },
  link: {
    color: '#4a8f4a',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default VetShopLandingPage;
