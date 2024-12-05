import React, { useEffect } from 'react';
import '../styling/Terms.scss';
import Footer from './Footer';

const Referral = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-container">
      <div className="content-section">
        <h1 className="main-title">i2u.ai, Ideas to Unicorns through AI! Ecosystem Membership & Referral Reward System Terms & Conditions</h1>

        <h2 className="section-title">1. Membership Tiers and Reservation</h2>
        <p>i2u.ai is launching the "Ideas to Unicorns through AI" Ecosystem ("Ecosystem"). Membership offers benefits and resources to support AI startups.</p>
        <p>Ecosystem Memberships are initially available through a reservation system. A limited number of memberships are offered at each tier. Initially, only 1,000 memberships are available.</p>

        <h3 className="subsection-title">Membership Tiers</h3>
        <p>Four tiers are available: Tier 1 (highest), Tier 2, Tier 3, and Tier 4 (lowest).</p>

        <h3 className="subsection-title">Initial Tier Allocation & Quota</h3>
        <ul>
          <li>The first 100 reservations (10% of 1,000) will receive Tier 1.</li>
          <li>The next 200 reservations (20% of 1,000) will receive Tier 2.</li>
          <li>The next 300 reservations (30% of 1,000) will receive Tier 3.</li>
          <li>The final 400 reservations (40% of 1,000) will receive Tier 4.</li>
        </ul>

        <h3 className="subsection-title">Reservation Window and Waiting List</h3>
        <p>The reservation window is open until December 16, 2024. If reservations exceed 1,000, a waiting list will be created. If additional memberships become available, they will be allocated based on the waiting list order. Tier allocation for all the registrants will be determined based on the total number of reservations received (including those initially reserved and those on the waiting list) using the same percentage allocation (10%, 20%, 30%, 40%).</p>

        <h3 className="subsection-title">Tier Assignment</h3>
        <ul>
          <li>Initial Tier: Based on reservation time within the initial 1,000 memberships.</li>
          <li>Tier Upgrades: Members can upgrade their tier by referring new members. A real-time Referral Leaderboard ranks members by successful referrals. Top-ranked members may be eligible for tier upgrades.</li>
        </ul>
        <h3 className="subsection-title">Existing i2u.ai Subscribers</h3>
        <p>Current subscribers receive a complimentary Ecosystem Membership. Their initial tier will be determined and communicated to them directly.</p>

        <h2 className="section-title">2. Referral Reward System</h2>
        <p>This system applies to all Ecosystem Members.</p>

        <h2 className="section-title">3. Eligibility (Referrals)</h2>
        <ul>
          <li>Referrers: Must be active Ecosystem Members.</li>
          <li>Referred Members: Must be new to the i2u.ai Ecosystem.</li>
          <li>Referral Process: Referred Members must sign up using the Referrer's unique link/code.</li>
        </ul>

        <h2 className="section-title">4. Referral Rewards for Referrers</h2>
        <ul>
          <li>Reward Structure: Referrers earn rewards based on the initial tier of each Referred Member. Rewards are in [Your Currency] or User Points (see Section 7).</li>
          <li>Early Bird Bonus: An additional bonus may be available for referrals who sign up within a specific timeframe.</li>
          <li>Referral Leaderboard Bonus: Top-ranked Referrers on the monthly Leaderboard may receive additional bonuses.</li>
          <li>Reward Payment: Rewards are credited to the Referrer's i2u.ai account in the following month.</li>
        </ul>

        <h2 className="section-title">5. Benefits for Referred Members</h2>
        <ul>
          <li>Referred Members may receive benefits upon joining.</li>
          <li>Referred Members receive their own unique referral code.</li>
        </ul>

        <h2 className="section-title">6. Revenue Share</h2>
        <p>Details will be announced.</p>

        <h2 className="section-title">7. User Points</h2>
        <ul>
          <li>i2u.ai awards User Points for various actions.</li>
          <li>User Points are redeemable for benefits. Specifics will be announced.</li>
          <li>i2u.ai may adjust the User Points system.</li>
        </ul>

        <h2 className="section-title">8. General Terms</h2>
        <ul>
          <li>i2u.ai may change, suspend, or terminate any part of these programs.</li>
          <li>Fraudulent activity leads to disqualification.</li>
          <li>These terms are subject to change. Updates will be posted.</li>
          <li>Participation implies agreement to these and i2u.ai's general Terms & Conditions.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Referral;
