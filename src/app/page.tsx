'use client';

import React from 'react';
import PageWrapper from './components/PageWrapper/PageWrapper';

export default function HomePage() {
  return (
    <PageWrapper>
      <section style={{ padding: '3rem', textAlign: 'center' }}>
        <h1>Welcome to Kc iFitness</h1>
        <p>Your one-stop fitness and wellness center.</p>
      </section>
    </PageWrapper>
  );
}
