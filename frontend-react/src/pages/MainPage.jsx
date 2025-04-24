import { useState } from 'react';
import NewNavbar from '../components/NewNavbar';

const ExpenseTrackerLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [email, setEmail] = useState('');

  const toggleFaq = (index) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  return (
    <div style={styles.container}>
<NewNavbar/>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Take Control of Your Finances Today</h1>
          <p style={styles.heroSubtitle}>
            Track expenses, manage budgets, and achieve your financial goals with the most powerful yet simple expense tracking platform.
          </p>
          <div style={styles.heroCTA}>
            <button style={styles.primaryButton}>Start For Free</button>
            <button style={styles.secondaryButton}>Watch Demo</button>
          </div>
          <div style={styles.heroStats}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>2M+</span>
              <span style={styles.statLabel}>Active users</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>$10B+</span>
              <span style={styles.statLabel}>Expenses tracked</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>4.9</span>
              <span style={styles.statLabel}>App Store rating</span>
            </div>
          </div>
        </div>
        <div style={styles.heroImageContainer}>
          <div style={styles.heroImage}>
            <div style={styles.mockup}>
              <div style={styles.mockupHeader}>
                <div style={styles.mockupCircle}></div>
                <div style={styles.mockupCircle}></div>
                <div style={styles.mockupCircle}></div>
              </div>
              <div style={styles.mockupContent}>
                <div style={styles.mockupTitle}>Monthly Overview</div>
                <div style={styles.mockupChart}>
                  <div style={{...styles.mockupBar, height: '60%', backgroundColor: '#4CAF50'}}></div>
                  <div style={{...styles.mockupBar, height: '80%', backgroundColor: '#2196F3'}}></div>
                  <div style={{...styles.mockupBar, height: '40%', backgroundColor: '#FFC107'}}></div>
                  <div style={{...styles.mockupBar, height: '70%', backgroundColor: '#9C27B0'}}></div>
                  <div style={{...styles.mockupBar, height: '50%', backgroundColor: '#FF5722'}}></div>
                </div>
                <div style={styles.mockupData}>
                  <div style={styles.mockupDataItem}>
                    <div style={styles.mockupDataLabel}>Food</div>
                    <div style={styles.mockupDataValue}>$340</div>
                  </div>
                  <div style={styles.mockupDataItem}>
                    <div style={styles.mockupDataLabel}>Housing</div>
                    <div style={styles.mockupDataValue}>$1,200</div>
                  </div>
                  <div style={styles.mockupDataItem}>
                    <div style={styles.mockupDataLabel}>Transport</div>
                    <div style={styles.mockupDataValue}>$250</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section style={styles.trustedBy}>
        <h3 style={styles.trustedTitle}>Trusted by individuals and companies worldwide</h3>
        <div style={styles.logosContainer}>
          <div style={styles.companyLogo}>Microsoft</div>
          <div style={styles.companyLogo}>Google</div>
          <div style={styles.companyLogo}>Amazon</div>
          <div style={styles.companyLogo}>Apple</div>
          <div style={styles.companyLogo}>Meta</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Powerful Features to Master Your Money</h2>
          <p style={styles.sectionSubtitle}>
            Everything you need to track, analyze and optimize your personal or business finances
          </p>
        </div>

        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📊</div>
            <h3 style={styles.featureTitle}>Smart Dashboard</h3>
            <p style={styles.featureDescription}>
              Get a complete overview of your finances with customizable widgets and real-time insights.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔄</div>
            <h3 style={styles.featureTitle}>Auto-Sync</h3>
            <p style={styles.featureDescription}>
              Connect with over 10,000 financial institutions to automatically import and categorize transactions.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📱</div>
            <h3 style={styles.featureTitle}>Mobile App</h3>
            <p style={styles.featureDescription}>
              Track expenses on the go with our powerful mobile app for iOS and Android devices.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📈</div>
            <h3 style={styles.featureTitle}>Advanced Analytics</h3>
            <p style={styles.featureDescription}>
              Visualize your spending patterns with interactive charts and detailed reports.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔔</div>
            <h3 style={styles.featureTitle}>Smart Alerts</h3>
            <p style={styles.featureDescription}>
              Get notified about unusual spending, upcoming bills, or when you're close to budget limits.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔒</div>
            <h3 style={styles.featureTitle}>Bank-Level Security</h3>
            <p style={styles.featureDescription}>
              Your data is protected with 256-bit encryption and secure authentication protocols.
            </p>
          </div>
        </div>

        <div style={styles.featureShowcase}>
          <div style={styles.showcaseContent}>
            <h3 style={styles.showcaseTitle}>Set and Achieve Financial Goals</h3>
            <p style={styles.showcaseDescription}>
              Create custom savings goals, track your progress, and get personalized recommendations to reach your financial milestones faster.
            </p>
            <ul style={styles.showcaseList}>
              <li style={styles.showcaseItem}>✓ Visualize progress toward each goal</li>
              <li style={styles.showcaseItem}>✓ Set up automatic contributions</li>
              <li style={styles.showcaseItem}>✓ Get smart recommendations based on spending patterns</li>
              <li style={styles.showcaseItem}>✓ Celebrate achievements with milestone rewards</li>
            </ul>
          </div>
          <div style={styles.showcaseImage}>
            <div style={styles.goalsMockup}>
              <div style={styles.goalItem}>
                <div style={styles.goalHeader}>
                  <div style={styles.goalTitle}>Vacation Fund</div>
                  <div style={styles.goalAmount}>$3,500</div>
                </div>
                <div style={styles.goalProgress}>
                  <div style={{...styles.goalProgressBar, width: '65%'}}></div>
                </div>
                <div style={styles.goalStats}>$2,275 of $3,500 (65%)</div>
              </div>
              
              <div style={styles.goalItem}>
                <div style={styles.goalHeader}>
                  <div style={styles.goalTitle}>Emergency Fund</div>
                  <div style={styles.goalAmount}>$10,000</div>
                </div>
                <div style={styles.goalProgress}>
                  <div style={{...styles.goalProgressBar, width: '40%', backgroundColor: '#2196F3'}}></div>
                </div>
                <div style={styles.goalStats}>$4,000 of $10,000 (40%)</div>
              </div>
              
              <div style={styles.goalItem}>
                <div style={styles.goalHeader}>
                  <div style={styles.goalTitle}>New Car</div>
                  <div style={styles.goalAmount}>$25,000</div>
                </div>
                <div style={styles.goalProgress}>
                  <div style={{...styles.goalProgressBar, width: '20%', backgroundColor: '#9C27B0'}}></div>
                </div>
                <div style={styles.goalStats}>$5,000 of $25,000 (20%)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={styles.testimonials}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>What Our Users Say</h2>
          <p style={styles.sectionSubtitle}>
            Join thousands of satisfied users who have transformed their financial habits
          </p>
        </div>

        <div style={styles.testimonialsGrid}>
          <div style={styles.testimonialCard}>
            <div style={styles.testimonialRating}>★★★★★</div>
            <p style={styles.testimonialText}>
              "FinTrack completely changed how I manage my money. The insights helped me cut unnecessary expenses and save an extra $400 each month."
            </p>
            <div style={styles.testimonialAuthor}>
              <div style={styles.authorAvatar}>JD</div>
              <div style={styles.authorInfo}>
                <div style={styles.authorName}>Jessica Davis</div>
                <div style={styles.authorTitle}>Small Business Owner</div>
              </div>
            </div>
          </div>

          <div style={styles.testimonialCard}>
            <div style={styles.testimonialRating}>★★★★★</div>
            <p style={styles.testimonialText}>
              "As someone who struggled with budgeting for years, this app has been a game-changer. The automatic categorization is incredibly accurate!"
            </p>
            <div style={styles.testimonialAuthor}>
              <div style={styles.authorAvatar}>MR</div>
              <div style={styles.authorInfo}>
                <div style={styles.authorName}>Michael Rodriguez</div>
                <div style={styles.authorTitle}>Software Engineer</div>
              </div>
            </div>
          </div>

          <div style={styles.testimonialCard}>
            <div style={styles.testimonialRating}>★★★★★</div>
            <p style={styles.testimonialText}>
              "The goal tracking feature motivated me to finally save for my dream vacation. The visual progress bars make saving fun and rewarding."
            </p>
            <div style={styles.testimonialAuthor}>
              <div style={styles.authorAvatar}>LP</div>
              <div style={styles.authorInfo}>
                <div style={styles.authorName}>Lisa Park</div>
                <div style={styles.authorTitle}>Healthcare Professional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={styles.pricing}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Simple, Transparent Pricing</h2>
          <p style={styles.sectionSubtitle}>
            Choose the plan that fits your needs, all with no hidden fees
          </p>
        </div>

        <div style={styles.pricingCards}>
          <div style={styles.pricingCard}>
            <div style={styles.pricingHeader}>
              <h3 style={styles.pricingTitle}>Free</h3>
              <div style={styles.pricingPrice}>$0<span style={styles.pricingPeriod}>/month</span></div>
              <p style={styles.pricingDescription}>Perfect for individuals just starting with expense tracking</p>
            </div>
            <ul style={styles.pricingFeatures}>
              <li style={styles.pricingFeature}>✓ Basic expense tracking</li>
              <li style={styles.pricingFeature}>✓ Up to 3 financial accounts</li>
              <li style={styles.pricingFeature}>✓ Monthly reports</li>
              <li style={styles.pricingFeature}>✓ Mobile app access</li>
              <li style={styles.pricingFeature}>✓ Email support</li>
            </ul>
            <button style={styles.pricingButton}>Get Started</button>
          </div>

          <div style={{...styles.pricingCard, ...styles.popularPlan}}>
            <div style={styles.popularLabel}>Most Popular</div>
            <div style={styles.pricingHeader}>
              <h3 style={styles.pricingTitle}>Premium</h3>
              <div style={styles.pricingPrice}>$9.99<span style={styles.pricingPeriod}>/month</span></div>
              <p style={styles.pricingDescription}>Ideal for individuals serious about financial management</p>
            </div>
            <ul style={styles.pricingFeatures}>
              <li style={styles.pricingFeature}>✓ Everything in Free</li>
              <li style={styles.pricingFeature}>✓ Unlimited financial accounts</li>
              <li style={styles.pricingFeature}>✓ Advanced analytics</li>
              <li style={styles.pricingFeature}>✓ Custom categories</li>
              <li style={styles.pricingFeature}>✓ Custom budget creation</li>
              <li style={styles.pricingFeature}>✓ Goal tracking</li>
              <li style={styles.pricingFeature}>✓ Priority support</li>
            </ul>
            <button style={{...styles.pricingButton, ...styles.primaryPricingButton}}>Start 14-Day Trial</button>
          </div>

          <div style={styles.pricingCard}>
            <div style={styles.pricingHeader}>
              <h3 style={styles.pricingTitle}>Business</h3>
              <div style={styles.pricingPrice}>$24.99<span style={styles.pricingPeriod}>/month</span></div>
              <p style={styles.pricingDescription}>For small businesses and teams managing expenses</p>
            </div>
            <ul style={styles.pricingFeatures}>
              <li style={styles.pricingFeature}>✓ Everything in Premium</li>
              <li style={styles.pricingFeature}>✓ Multi-user access</li>
              <li style={styles.pricingFeature}>✓ Role-based permissions</li>
              <li style={styles.pricingFeature}>✓ Receipt scanning</li>
              <li style={styles.pricingFeature}>✓ Expense approval flows</li>
              <li style={styles.pricingFeature}>✓ QuickBooks/Xero integration</li>
              <li style={styles.pricingFeature}>✓ Dedicated account manager</li>
            </ul>
            <button style={styles.pricingButton}>Contact Sales</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={styles.faq}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p style={styles.sectionSubtitle}>
            Find answers to common questions about our expense tracking platform
          </p>
        </div>

        <div style={styles.faqContainer}>
          {[
            {
              question: "How secure is my financial data?",
              answer: "Your data is protected with bank-level 256-bit encryption. We follow industry best practices for security and never store your banking credentials. Our platform undergoes regular security audits and complies with financial data protection regulations."
            },
            {
              question: "Can I connect my bank accounts?",
              answer: "Yes! FinTrack integrates with over 10,000 financial institutions worldwide. You can securely connect your bank accounts, credit cards, investment portfolios, and more for automatic transaction imports."
            },
            {
              question: "Is there a mobile app available?",
              answer: "Absolutely! We offer native apps for both iOS and Android devices that sync seamlessly with the web version. Track expenses on the go, scan receipts, and receive real-time notifications about your spending."
            },
            {
              question: "How do I cancel my subscription?",
              answer: "You can cancel your subscription anytime from your account settings. If you cancel, you'll continue to have access to premium features until the end of your current billing period. We don't offer refunds for partial months."
            },
            {
              question: "Can I export my financial data?",
              answer: "Yes, you can export your data anytime in various formats including CSV, Excel, and PDF. This makes it easy to use your data for tax preparation or other financial planning tools."
            }
          ].map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <div 
                style={styles.faqQuestion} 
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span style={styles.faqIcon}>
                  {selectedFaq === index ? '−' : '+'}
                </span>
              </div>
              {selectedFaq === index && (
                <div style={styles.faqAnswer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Take Control of Your Finances?</h2>
          <p style={styles.ctaSubtitle}>
            Join over 2 million users who have transformed their financial habits with FinTrack
          </p>
          <div style={styles.ctaForm}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={styles.ctaInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <button style={styles.ctaButton}>Get Started Free</button>
          </div>
          <p style={styles.ctaNote}>
            Free 14-day trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerColumn}>
            <div style={styles.footerLogo}>
              <span style={styles.logoIcon}>💰</span>
              <span style={styles.logoText}>FinTrack</span>
            </div>
            <p style={styles.footerDescription}>
              The modern way to track expenses and achieve your financial goals.
            </p>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.socialIcon}>𝕏</a>
              <a href="#" style={styles.socialIcon}>f</a>
              <a href="#" style={styles.socialIcon}>in</a>
              <a href="#" style={styles.socialIcon}>📷</a>
            </div>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Product</h4>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>Features</a></li>
              <li><a href="#" style={styles.footerLink}>Pricing</a></li>
              <li><a href="#" style={styles.footerLink}>Integrations</a></li>
              <li><a href="#" style={styles.footerLink}>Roadmap</a></li>
              <li><a href="#" style={styles.footerLink}>Release Notes</a></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Resources</h4>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>Blog</a></li>
              <li><a href="#" style={styles.footerLink}>Help Center</a></li>
              <li><a href="#" style={styles.footerLink}>Guides</a></li>
              <li><a href="#" style={styles.footerLink}>Webinars</a></li>
              <li><a href="#" style={styles.footerLink}>API Docs</a></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Company</h4>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>About Us</a></li>
              <li><a href="#" style={styles.footerLink}>Careers</a></li>
              <li><a href="#" style={styles.footerLink}>Press</a></li>
              <li><a href="#" style={styles.footerLink}>Contact</a></li>
              <li><a href="#" style={styles.footerLink}>Partners</a></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Legal</h4>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="#" style={styles.footerLink}>Terms of Service</a></li>
              <li><a href="#" style={styles.footerLink}>Security</a></li>
              <li><a href="#" style={styles.footerLink}>GDPR</a></li>
              <li><a href="#" style={styles.footerLink}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} FinTrack. All rights reserved.
          </p>
          <div style={styles.appStores}>
            <a href="#" style={styles.appStore}>
              <span style={styles.appStoreIcon}>📱</span> App Store
            </a>
            <a href="#" style={styles.appStore}>
              <span style={styles.appStoreIcon}>🤖</span> Google Play
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    color: '#333',
    lineHeight: 1.6,
    backgroundColor: '#FAFAFA',
    margin: 0,
    padding: 0,
  },
  

  // Hero section styles
  hero: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 20px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      padding: '40px 20px',
    }
  },
  heroContent: {
    flex: '1',
    marginRight: '40px',
    '@media (max-width: 768px)': {
      marginRight: '0',
      marginBottom: '40px',
    }
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: '800',
    color: '#1E293B',
    lineHeight: '1.2',
    marginBottom: '24px',
    '@media (max-width: 768px)': {
      fontSize: '36px',
    }
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#64748B',
    marginBottom: '32px',
    maxWidth: '540px',
  },
  heroCTA: {
    display: 'flex',
    marginBottom: '48px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    }
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginRight: '16px',
    '@media (max-width: 768px)': {
      marginRight: '0',
      marginBottom: '16px',
    }
  },
  secondaryButton: {
    backgroundColor: '#F1F5F9',
    color: '#334155',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  heroStats: {
    display: 'flex',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    }
  },
  statItem: {
    marginRight: '40px',
    '@media (max-width: 768px)': {
      marginRight: '0',
      marginBottom: '16px',
    }
  },
  statNumber: {
    display: 'block',
    fontSize: '28px',
    fontWeight: '800',
    color: '#2563EB',
  },
  statLabel: {
    color: '#64748B',
    fontSize: '14px',
  },
  heroImageContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
  },
  heroImage: {
    maxWidth: '100%',
  },
  mockup: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '500px',
  },
  mockupHeader: {
    backgroundColor: '#F9FAFB',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #E5E7EB',
  },
  mockupCircle: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#E5E7EB',
    marginRight: '6px',
  },
  mockupContent: {
    padding: '20px',
  },
  mockupTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#1E293B',
  },
  mockupChart: {
    display: 'flex',
    alignItems: 'flex-end',
    height: '200px',
    marginBottom: '20px',
    borderBottom: '1px solid #E5E7EB',
    paddingBottom: '10px',
  },
  mockupBar: {
    width: '18%',
    marginRight: '2%',
    borderRadius: '4px 4px 0 0',
    backgroundColor: '#2563EB',
  },
  mockupData: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  mockupDataItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#F9FAFB',
    borderRadius: '4px',
  },
  mockupDataLabel: {
    fontWeight: '500',
    color: '#4B5563',
  },
  mockupDataValue: {
    fontWeight: '600',
    color: '#1E293B',
  },
  
  // Trusted By section
  trustedBy: {
    padding: '40px 20px',
    backgroundColor: '#F1F5F9',
    textAlign: 'center',
  },
  trustedTitle: {
    fontSize: '16px',
    color: '#64748B',
    marginBottom: '30px',
    fontWeight: '500',
  },
  logosContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  companyLogo: {
    margin: '0 30px 20px',
    fontSize: '18px',
    fontWeight: '700',
    color: '#94A3B8',
  },
  
  // Features section styles
  features: {
    padding: '100px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: '16px',
  },
  sectionSubtitle: {
    fontSize: '18px',
    color: '#64748B',
    maxWidth: '600px',
    margin: '0 auto',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginBottom: '80px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    }
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  featureIcon: {
    fontSize: '32px',
    marginBottom: '16px',
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: '12px',
  },
  featureDescription: {
    color: '#64748B',
    fontSize: '16px',
  },
  featureShowcase: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: '12px',
    padding: '40px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      padding: '30px',
    }
  },
  showcaseContent: {
    flex: '1',
    marginRight: '40px',
    '@media (max-width: 768px)': {
      marginRight: '0',
      marginBottom: '30px',
    }
  },
  showcaseTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: '16px',
  },
  showcaseDescription: {
    color: '#64748B',
    marginBottom: '24px',
  },
  showcaseList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  showcaseItem: {
    marginBottom: '12px',
    color: '#334155',
    display: 'flex',
    alignItems: 'center',
  },
  showcaseImage: {
    flex: '1',
  },
  goalsMockup: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    padding: '30px',
  },
  goalItem: {
    marginBottom: '24px',
  },
  goalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  goalTitle: {
    fontWeight: '600',
    color: '#1E293B',
  },
  goalAmount: {
    fontWeight: '700',
    color: '#2563EB',
  },
  goalProgress: {
    height: '8px',
    backgroundColor: '#E2E8F0',
    borderRadius: '4px',
    marginBottom: '8px',
  },
  goalProgressBar: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: '4px',
  },
  goalStats: {
    fontSize: '14px',
    color: '#64748B',
  },
  
  // Testimonials section styles
  testimonials: {
    padding: '100px 20px',
    backgroundColor: '#F8FAFC',
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    }
  },
  testimonialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  testimonialRating: {
    color: '#F59E0B',
    fontSize: '20px',
    marginBottom: '16px',
  },
  testimonialText: {
    color: '#334155',
    fontSize: '16px',
    marginBottom: '24px',
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    display: 'flex',
    alignItems: 'center',
  },
  authorAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    marginRight: '16px',
  },
  authorName: {
    fontWeight: '600',
    color: '#1E293B',
  },
  authorTitle: {
    color: '#64748B',
    fontSize: '14px',
  },
  
  // Pricing section styles
  pricing: {
    padding: '100px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  pricingCards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    }
  },
  pricingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '40px 30px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    flex: '1',
    maxWidth: '350px',
    position: 'relative',
    '@media (max-width: 768px)': {
      maxWidth: '100%',
    }
  },
  popularPlan: {
    borderColor: '#2563EB',
    transform: 'scale(1.05)',
    zIndex: '1',
    '@media (max-width: 768px)': {
      transform: 'none',
    }
  },
  popularLabel: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '14px',
    fontWeight: '600',
  },
  pricingHeader: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  pricingTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: '16px',
  },
  pricingPrice: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: '12px',
  },
  pricingPeriod: {
    fontSize: '16px',
    color: '#64748B',
    fontWeight: '400',
  },
  pricingDescription: {
    color: '#64748B',
    fontSize: '14px',
  },
  pricingFeatures: {
    listStyle: 'none',
    padding: '0',
    margin: '0 0 40px 0',
  },
  pricingFeature: {
    color: '#334155',
    padding: '8px 0',
    borderBottom: '1px solid #E2E8F0',
  },
  pricingButton: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '2px solid #2563EB',
    backgroundColor: 'transparent',
    color: '#2563EB',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  primaryPricingButton: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
  },
  
  // FAQ section styles
  faq: {
    padding: '100px 20px',
    backgroundColor: '#F8FAFC',
  },
  faqContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  faqItem: {
    borderBottom: '1px solid #E2E8F0',
  },
  faqQuestion: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
    cursor: 'pointer',
    fontWeight: '600',
    color: '#1E293B',
    fontSize: '18px',
  },
  faqIcon: {
    color: '#2563EB',
    fontSize: '24px',
  },
  faqAnswer: {
    padding: '0 0 20px',
    color: '#64748B',
    lineHeight: '1.6',
  },
  
  // CTA section styles
  cta: {
    backgroundColor: '#2563EB',
    padding: '80px 20px',
    textAlign: 'center',
  },
  ctaContent: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  ctaTitle: {
    color: '#FFFFFF',
    fontSize: '36px',
    fontWeight: '800',
    marginBottom: '16px',
  },
  ctaSubtitle: {
    color: '#E0E7FF',
    fontSize: '18px',
    marginBottom: '40px',
  },
  ctaForm: {
    display: 'flex',
    maxWidth: '500px',
    margin: '0 auto 24px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    }
  },
  ctaInput: {
    flex: '1',
    padding: '14px 20px',
    borderRadius: '8px 0 0 8px',
    border: 'none',
    fontSize: '16px',
    '@media (max-width: 768px)': {
      borderRadius: '8px',
      marginBottom: '16px',
    }
  },
  ctaButton: {
    backgroundColor: '#0F172A',
    color: '#FFFFFF',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '0 8px 8px 0',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      borderRadius: '8px',
    }
  },
  ctaNote: {
    color: '#BFDBFE',
    fontSize: '14px',
  },
  
  // Footer styles
  footer: {
    backgroundColor: '#0F172A',
    color: '#F1F5F9',
    padding: '80px 20px 40px',
  },
  footerContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto 60px',
  },
  footerColumn: {
    flex: '1',
    minWidth: '200px',
    marginBottom: '40px',
    '@media (max-width: 768px)': {
      minWidth: '50%',
    }
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '800',
    fontSize: '24px',
    color: '#FFFFFF',
    marginBottom: '20px',
  },
  footerDescription: {
    color: '#94A3B8',
    marginBottom: '24px',
    maxWidth: '300px',
  },
  socialIcons: {
    display: 'flex',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#1E293B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'all 0.3s ease',
  },
  footerHeading: {
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '24px',
  },
  footerLinks: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  footerLink: {
    color: '#94A3B8',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '12px',
    transition: 'color 0.3s ease',
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    borderTop: '1px solid #1E293B',
    paddingTop: '30px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    }
  },
  copyright: {
    color: '#94A3B8',
    '@media (max-width: 768px)': {
      marginBottom: '20px',
    }
  },
  appStores: {
    display: 'flex',
  },
  appStore: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    color: '#FFFFFF',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    marginLeft: '12px',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      marginLeft: '0',
      marginRight: '12px',
    }
  },
  appStoreIcon: {
    marginRight: '8px',
  },
};

export default ExpenseTrackerLandingPage;