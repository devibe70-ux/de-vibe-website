export default function PrivacyPolicy() {
  return (
    <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2>Privacy Policy</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)' }}>
          <p><strong>Effective Date: {new Date().getFullYear()}</strong></p>
          <p>
            At De Vibe, accessible from devibestudio.com, one of our main priorities is the privacy of our visitors. 
            This Privacy Policy document contains types of information that is collected and recorded by De Vibe and how we use it.
          </p>
          
          <h3>1. Information We Collect</h3>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
            will be made clear to you at the point we ask you to provide your personal information.
            If you contact us directly, we may receive additional information about you such as your name, email address, 
            phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>We use the information we collect in various ways, including to:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h3>3. Log Files</h3>
          <p>
            De Vibe follows a standard procedure of using log files. These files log visitors when they visit websites. 
            All hosting companies do this and a part of hosting services' analytics. The information collected by log files 
            include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, 
            referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>

          <h3>4. Advertising Partners Privacy Policies</h3>
          <p>
            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in 
            their respective advertisements and links that appear on De Vibe, which are sent directly to users' browser. 
            They automatically receive your IP address when this occurs. These technologies are used to measure the 
            effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          <p>
            Note that De Vibe has no access to or control over these cookies that are used by third-party advertisers.
          </p>

          <h3>5. Third Party Privacy Policies</h3>
          <p>
            De Vibe's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the 
            respective Privacy Policies of these third-party ad servers for more detailed information. It may include their 
            practices and instructions about how to opt-out of certain options.
          </p>

          <h3>6. CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
          <p>Under the CCPA, among other rights, California consumers have the right to:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
            <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
            <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
          </ul>
          <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
        </div>
      </div>
    </section>
  );
}
