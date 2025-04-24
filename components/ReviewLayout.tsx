import React from 'react';

interface ReviewLayoutProps {
  children: React.ReactNode;
}

const ReviewLayout: React.FC<ReviewLayoutProps> = ({ children }) => (
  <section className="bg-white rounded-xl shadow p-6 md:p-10 mb-8">
    {children}
  </section>
);

export default ReviewLayout;
