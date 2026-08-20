import React from 'react'

export default function Services() {
  return (
    <section className="page services-page container">
      <header className="hero small">
        <h1>Our Services</h1>
        <p>End-to-end real estate services for buyers, sellers, and investors.</p>
      </header>

      <div className="features">
        <div className="feature">
          <h3>Buyer's Agent</h3>
          <p>Personalized search, tours, and negotiation support.</p>
        </div>
        <div className="feature">
          <h3>Seller's Listing</h3>
          <p>Staging advice, marketing, and pricing strategy to sell fast.</p>
        </div>
        <div className="feature">
          <h3>Investment Consulting</h3>
          <p>Market analysis and portfolio recommendations for investors.</p>
        </div>
      </div>
    </section>
  )
}
