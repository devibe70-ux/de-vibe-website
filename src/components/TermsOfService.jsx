export default function TermsOfService() {
  return (
    <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2>Terms of Service</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)' }}>
          <p><strong>Effective Date: {new Date().getFullYear()}</strong></p>
          <p>
            Welcome to De Vibe. These terms and conditions outline the rules and regulations for the use of De Vibe's Website, 
            located at devibestudio.com.
          </p>
          
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use De Vibe 
            if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h3>2. Intellectual Property Rights</h3>
          <p>
            Other than the content you own, under these Terms, De Vibe and/or its licensors own all the intellectual 
            property rights and materials contained in this Website. You are granted limited license only for purposes 
            of viewing the material contained on this Website.
          </p>

          <h3>3. Restrictions</h3>
          <p>You are specifically restricted from all of the following:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Publishing any Website material in any other media;</li>
            <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
            <li>Publicly performing and/or showing any Website material;</li>
            <li>Using this Website in any way that is or may be damaging to this Website;</li>
            <li>Using this Website in any way that impacts user access to this Website;</li>
            <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
          </ul>

          <h3>4. User Content</h3>
          <p>
            In these Website Standard Terms and Conditions, "User Content" shall mean any audio, video text, images or 
            other material you choose to display on this Website. By displaying Your Content, you grant De Vibe a non-exclusive, 
            worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
          </p>

          <h3>5. No warranties</h3>
          <p>
            This Website is provided "as is," with all faults, and De Vibe express no representations or warranties, of any kind 
            related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
          </p>

          <h3>6. Limitation of liability</h3>
          <p>
            In no event shall De Vibe, nor any of its officers, directors and employees, shall be held liable for anything arising 
            out of or in any way connected with your use of this Website whether such liability is under contract. 
            De Vibe, including its officers, directors and employees shall not be held liable for any indirect, consequential or 
            special liability arising out of or in any way related to your use of this Website.
          </p>

          <h3>7. Severability</h3>
          <p>
            If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted 
            without affecting the remaining provisions herein.
          </p>

          <h3>8. Governing Law & Jurisdiction</h3>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of the State/Country in which De Vibe operates, 
            and you submit to the non-exclusive jurisdiction of the state and federal courts located in that region for the resolution of any disputes.
          </p>
        </div>
      </div>
    </section>
  );
}
