import nodemailer from 'nodemailer';

// SMTP Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'dreamtravelagency395@gmail.com',
    pass: process.env.EMAIL_PASS || 'ftwz jcrf ztxe ioev'
  }
});

// Email Templates
export const getAdminEmailTemplate = (formData: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Enquiry - Dream Travel Agency</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          margin: 0; 
          padding: 0; 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          min-height: 100vh;
        }
        .email-wrapper { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); 
          padding: 40px 20px; 
          min-height: 100vh; 
        }
        .container { 
          max-width: 700px; 
          margin: 0 auto; 
          background: #ffffff; 
          border-radius: 25px; 
          overflow: hidden; 
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
          border: 3px solid rgba(255,255,255,0.3);
        }
        .header { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 30%, #f093fb 70%, #f5576c 100%); 
          padding: 50px 40px; 
          text-align: center; 
          position: relative;
          overflow: hidden;
        }
        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: rotate(45deg);
          animation: shine 4s infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
          100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        }
        .brand-container {
          background: linear-gradient(135deg, #ffd700 0%, #ffb347 30%, #ff6b6b 70%, #ee5a24 100%);
          padding: 20px 30px;
          border-radius: 20px;
          margin: 0 auto 25px;
          display: inline-block;
          box-shadow: 0 15px 35px rgba(255, 215, 0, 0.4);
          position: relative;
          z-index: 2;
          border: 2px solid rgba(255,255,255,0.3);
        }
        .brand-text {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 28px;
          font-weight: 900;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          letter-spacing: 1px;
        }
        .brand-emoji {
          font-size: 32px;
          margin-right: 10px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        .header h1 { 
          color: #ffffff; 
          margin: 0; 
          font-size: 36px; 
          font-weight: 900; 
          text-shadow: 0 3px 6px rgba(0,0,0,0.2);
          position: relative;
          z-index: 2;
          letter-spacing: 1px;
        }
        .header p { 
          color: #f8f9fa; 
          margin: 20px 0 0 0; 
          font-size: 20px; 
          font-weight: 600;
          position: relative;
          z-index: 2;
          text-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .content { 
          padding: 60px 50px; 
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #e3f2fd 100%);
        }
        .welcome-badge {
          background: linear-gradient(135deg, #10b981 0%, #059669 30%, #047857 100%);
          color: white;
          padding: 18px 35px;
          border-radius: 30px;
          display: inline-block;
          font-weight: 800;
          margin-bottom: 35px;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          font-size: 18px;
          border: 2px solid rgba(255,255,255,0.2);
        }
        .enquiry-details { 
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 30%, #fdcb6e 70%, #e17055 100%); 
          border: none;
          padding: 40px; 
          margin: 40px 0; 
          border-radius: 20px; 
          box-shadow: 0 15px 40px rgba(253, 203, 110, 0.3);
          position: relative;
          overflow: hidden;
          border: 3px solid rgba(255,255,255,0.4);
        }
        .enquiry-details::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #f39c12, #e74c3c, #9b59b6, #3498db);
        }
        .enquiry-details h3 {
          color: #8b4513;
          margin: 0 0 30px 0;
          font-size: 26px;
          font-weight: 900;
          display: flex;
          align-items: center;
          gap: 15px;
          text-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .detail-row { 
          margin: 25px 0; 
          padding: 20px 0; 
          border-bottom: 2px solid rgba(139, 69, 19, 0.1); 
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        .detail-row:last-child { border-bottom: none; }
        .detail-label { 
          font-weight: 900; 
          color: #8b4513; 
          min-width: 140px;
          font-size: 18px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        .detail-value { 
          color: #2c3e50; 
          flex: 1;
          font-size: 18px;
          line-height: 1.6;
          font-weight: 600;
        }
        .message-box {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 25px;
          border-radius: 15px;
          border: 3px solid #ffd700;
          margin-top: 15px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          font-weight: 600;
        }
        .footer { 
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #5d4e75 70%, #8b5a2b 100%); 
          color: #ffffff; 
          padding: 50px 40px; 
          text-align: center; 
        }
        .footer-brand {
          background: linear-gradient(135deg, #ffd700 0%, #ffb347 30%, #ff6b6b 70%, #ee5a24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 20px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          letter-spacing: 1px;
        }
        .footer p { margin: 15px 0; line-height: 1.8; font-weight: 600; }
        .footer a { 
          color: #74b9ff; 
          text-decoration: none; 
          font-weight: 700;
          transition: color 0.3s ease;
        }
        .footer a:hover { color: #0984e3; }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 30px;
          text-align: left;
        }
        .contact-item {
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%);
          padding: 20px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.2);
          font-weight: 600;
        }
        .contact-item strong {
          font-weight: 900;
          font-size: 16px;
        }
        .timestamp {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%);
          padding: 25px;
          border-radius: 15px;
          margin-top: 40px;
          text-align: center;
          color: #1565c0;
          font-size: 16px;
          border-left: 6px solid #2196f3;
          font-weight: 700;
          box-shadow: 0 8px 20px rgba(33, 150, 243, 0.2);
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="container">
          <div class="header">
            <div class="brand-container">
              <span class="brand-emoji">✈️</span>
              <span class="brand-text">Dream Travel Agency</span>
            </div>
            <h1>🎯 New Customer Enquiry</h1>
            <p>📧 You have received a new enquiry from your website</p>
          </div>
          
          <div class="content">
            <div class="welcome-badge">
              🚀 **New Lead Alert**
            </div>
            
            <div class="enquiry-details">
              <h3>📋 **Customer Details**</h3>
              
              <div class="detail-row">
                <span class="detail-label">👤 **Name:**</span>
                <span class="detail-value">**${formData.name}**</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">📧 **Email:**</span>
                <span class="detail-value">**${formData.email}**</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">📱 **Phone:**</span>
                <span class="detail-value">**${formData.phone || 'Not provided'}**</span>
              </div>
              
              ${formData.packageName ? `
              <div class="detail-row">
                <span class="detail-label">🎒 **Package:**</span>
                <span class="detail-value">**${formData.packageName}**</span>
              </div>
              ` : ''}
              
              ${formData.subject ? `
              <div class="detail-row">
                <span class="detail-label">📝 **Subject:**</span>
                <span class="detail-value">**${formData.subject}**</span>
              </div>
              ` : ''}
              
              ${formData.travelDate ? `
              <div class="detail-row">
                <span class="detail-label">📅 **Travel Date:**</span>
                <span class="detail-value">**${formData.travelDate}**</span>
              </div>
              ` : ''}
              
              ${formData.numberOfPersons ? `
              <div class="detail-row">
                <span class="detail-label">👥 **Persons:**</span>
                <span class="detail-value">**${formData.numberOfPersons}**</span>
              </div>
              ` : ''}
              
              <div class="detail-row">
                <span class="detail-label">💬 **Message:**</span>
                <div class="detail-value">
                  <div class="message-box">
                    **${formData.message}**
                  </div>
                </div>
              </div>
            </div>
            
            <div class="timestamp">
              📅 **Received:** ${new Date().toLocaleString()}<br>
              🌐 **Source:** Dream Travel Agency Website
            </div>
          </div>
          
          <div class="footer">
            <div class="footer-brand">✈️ Dream Travel Agency</div>
            <p style="font-size: 20px; margin-bottom: 30px;">**🌟 Making Dreams Come True, One Journey at a Time 🌟**</p>
            
            <div class="contact-grid">
              <div class="contact-item">
                <strong>📍 **Address**</strong><br>
                **Pathriya Fatak, Mangaj Ward No. 6**<br>
                **Madhya Pradesh, India**
              </div>
              <div class="contact-item">
                <strong>📞 **Phone**</strong><br>
                <a href="tel:+919109455317">**+91 9109455317**</a>
              </div>
              <div class="contact-item">
                <strong>✉️ **Email**</strong><br>
                <a href="mailto:dreamtravelagency395@gmail.com">**dreamtravelagency395@gmail.com**</a>
              </div>
              <div class="contact-item">
                <strong>📱 **WhatsApp**</strong><br>
                <a href="https://wa.me/919109455317">**Chat Now**</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getCustomerEmailTemplate = (formData: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - Dream Travel Agency</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          margin: 0; 
          padding: 0; 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          min-height: 100vh;
        }
        .email-wrapper { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); 
          padding: 40px 20px; 
          min-height: 100vh; 
        }
        .container { 
          max-width: 700px; 
          margin: 0 auto; 
          background: #ffffff; 
          border-radius: 25px; 
          overflow: hidden; 
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
          border: 3px solid rgba(255,255,255,0.3);
        }
        .header { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 30%, #f093fb 70%, #f5576c 100%); 
          padding: 50px 40px; 
          text-align: center; 
          position: relative;
          overflow: hidden;
        }
        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: rotate(45deg);
          animation: shine 4s infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
          100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        }
        .brand-container {
          background: linear-gradient(135deg, #ffd700 0%, #ffb347 30%, #ff6b6b 70%, #ee5a24 100%);
          padding: 20px 30px;
          border-radius: 20px;
          margin: 0 auto 25px;
          display: inline-block;
          box-shadow: 0 15px 35px rgba(255, 215, 0, 0.4);
          position: relative;
          z-index: 2;
          border: 2px solid rgba(255,255,255,0.3);
        }
        .brand-text {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 28px;
          font-weight: 900;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          letter-spacing: 1px;
        }
        .brand-emoji {
          font-size: 32px;
          margin-right: 10px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        .header h1 { 
          color: #ffffff; 
          margin: 0; 
          font-size: 36px; 
          font-weight: 900; 
          text-shadow: 0 3px 6px rgba(0,0,0,0.2);
          position: relative;
          z-index: 2;
          letter-spacing: 1px;
        }
        .header p { 
          color: #f8f9fa; 
          margin: 20px 0 0 0; 
          font-size: 20px; 
          font-weight: 600;
          position: relative;
          z-index: 2;
          text-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .content { 
          padding: 60px 50px; 
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #e3f2fd 100%);
        }
        .success-badge {
          background: linear-gradient(135deg, #10b981 0%, #059669 30%, #047857 100%);
          color: white;
          padding: 20px 40px;
          border-radius: 30px;
          display: inline-block;
          font-weight: 800;
          margin-bottom: 35px;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          font-size: 20px;
          border: 2px solid rgba(255,255,255,0.2);
        }
        .highlight-box { 
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 30%, #fdcb6e 70%, #e17055 100%); 
          padding: 40px; 
          border-radius: 20px; 
          margin: 40px 0; 
          text-align: center; 
          box-shadow: 0 15px 40px rgba(253, 203, 110, 0.3);
          position: relative;
          overflow: hidden;
          border: 3px solid rgba(255,255,255,0.4);
        }
        .highlight-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #f39c12, #e74c3c, #9b59b6, #3498db);
        }
        .highlight-box h2 {
          color: #8b4513;
          margin: 0 0 20px 0;
          font-size: 30px;
          font-weight: 900;
          text-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .highlight-box p {
          color: #5d4037;
          font-size: 20px;
          line-height: 1.7;
          margin: 0;
          font-weight: 700;
        }
        .summary-section {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%);
          padding: 35px;
          border-radius: 20px;
          margin: 35px 0;
          border-left: 6px solid #2196f3;
          box-shadow: 0 10px 30px rgba(33, 150, 243, 0.2);
          border: 2px solid rgba(255,255,255,0.3);
        }
        .summary-section h3 {
          color: #0d47a1;
          margin: 0 0 25px 0;
          font-size: 26px;
          font-weight: 900;
          text-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .summary-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .summary-list li {
          padding: 15px 0;
          border-bottom: 2px solid rgba(13, 71, 161, 0.1);
          color: #1565c0;
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 15px;
          font-weight: 700;
        }
        .summary-list li:last-child { border-bottom: none; }
        .contact-info { 
          background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 50%, #a5d6a7 100%); 
          padding: 35px; 
          border-radius: 20px; 
          margin: 35px 0; 
          text-align: center;
          border: 3px solid #4caf50;
          box-shadow: 0 10px 30px rgba(76, 175, 80, 0.2);
        }
        .contact-info h3 {
          color: #1b5e20;
          margin: 0 0 25px 0;
          font-size: 26px;
          font-weight: 900;
          text-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .contact-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          margin-top: 25px;
        }
        .btn { 
          display: inline-block; 
          background: linear-gradient(135deg, #10b981 0%, #059669 30%, #047857 100%); 
          color: white; 
          padding: 15px 30px; 
          text-decoration: none; 
          border-radius: 30px; 
          font-weight: 800; 
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          transition: transform 0.3s ease;
          font-size: 16px;
          border: 2px solid rgba(255,255,255,0.2);
        }
        .btn:hover { transform: translateY(-3px); }
        .btn-whatsapp {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 30%, #075e54 100%);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        }
        .next-steps {
          background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 50%, #ce93d8 100%);
          padding: 35px;
          border-radius: 20px;
          margin: 35px 0;
          border-left: 6px solid #9c27b0;
          box-shadow: 0 10px 30px rgba(156, 39, 176, 0.2);
          border: 2px solid rgba(255,255,255,0.3);
        }
        .next-steps h3 {
          color: #4a148c;
          margin: 0 0 25px 0;
          font-size: 26px;
          font-weight: 900;
          text-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .steps-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .steps-list li {
          padding: 18px 0;
          color: #6a1b9a;
          font-size: 18px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          line-height: 1.6;
          font-weight: 700;
        }
        .step-number {
          background: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 30%, #4a148c 100%);
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 3px;
          box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);
        }
        .footer { 
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #5d4e75 70%, #8b5a2b 100%); 
          color: #ffffff; 
          padding: 50px 40px; 
          text-align: center; 
        }
        .footer-brand {
          background: linear-gradient(135deg, #ffd700 0%, #ffb347 30%, #ff6b6b 70%, #ee5a24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 20px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          letter-spacing: 1px;
        }
        .footer p { margin: 15px 0; line-height: 1.8; font-weight: 600; }
        .footer a { 
          color: #74b9ff; 
          text-decoration: none; 
          font-weight: 700;
          transition: color 0.3s ease;
        }
        .footer a:hover { color: #0984e3; }
        .social-links {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }
        .social-link {
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);
          padding: 15px 25px;
          border-radius: 25px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          transition: background 0.3s ease;
          border: 2px solid rgba(255,255,255,0.2);
        }
        .social-link:hover {
          background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%);
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="container">
          <div class="header">
            <div class="brand-container">
              <span class="brand-emoji">✈️</span>
              <span class="brand-text">Dream Travel Agency</span>
            </div>
            <h1>🎉 **Thank You, ${formData.name}!**</h1>
            <p>✅ **Your enquiry has been received successfully**</p>
          </div>
          
          <div class="content">
            <div class="success-badge">
              🚀 **Enquiry Confirmed Successfully!**
            </div>
            
            <div class="highlight-box">
              <h2>🌟 **Your Dream Trip Awaits!** 🌟</h2>
              <p>
                **We've received your enquiry and our travel experts will contact you within 24 hours to help plan your perfect trip. 
                Get ready for an unforgettable journey!** ✨
              </p>
            </div>
            
            <div class="summary-section">
              <h3>📋 **Your Enquiry Summary**</h3>
              <ul class="summary-list">
                <li><strong>👤 **Name:**</strong> **${formData.name}**</li>
                <li><strong>📧 **Email:**</strong> **${formData.email}**</li>
                ${formData.phone ? `<li><strong>📱 **Phone:**</strong> **${formData.phone}**</li>` : ''}
                ${formData.packageName ? `<li><strong>🎒 **Package:**</strong> **${formData.packageName}**</li>` : ''}
                ${formData.travelDate ? `<li><strong>📅 **Travel Date:**</strong> **${formData.travelDate}**</li>` : ''}
                ${formData.numberOfPersons ? `<li><strong>👥 **Number of Persons:**</strong> **${formData.numberOfPersons}**</li>` : ''}
              </ul>
            </div>
            
            <div class="contact-info">
              <h3>📞 **Need Immediate Assistance?**</h3>
              <p style="color: #1b5e20; margin: 20px 0; font-size: 18px; font-weight: 700;">
                **🌟 Our travel experts are available 24/7 to help you plan your perfect trip 🌟**
              </p>
              <div class="contact-buttons">
                <a href="tel:+919109455317" class="btn">📞 **Call Now**</a>
                <a href="https://wa.me/919109455317" class="btn btn-whatsapp">💬 **WhatsApp**</a>
                <a href="mailto:dreamtravelagency395@gmail.com" class="btn">✉️ **Email Us**</a>
              </div>
            </div>
            
            <div class="next-steps">
              <h3>🌟 **What Happens Next?**</h3>
              <ul class="steps-list">
                <li>
                  <div class="step-number">1</div>
                  <div>**Our travel expert will review your requirements and preferences**</div>
                </li>
                <li>
                  <div class="step-number">2</div>
                  <div>**We'll prepare a customized itinerary tailored just for you**</div>
                </li>
                <li>
                  <div class="step-number">3</div>
                  <div>**You'll receive a detailed quote with all inclusions within 24 hours**</div>
                </li>
                <li>
                  <div class="step-number">4</div>
                  <div>**We'll help you plan every detail of your dream trip to perfection**</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="footer">
            <div class="footer-brand">✈️ Dream Travel Agency</div>
            <p style="font-size: 20px; margin-bottom: 30px;">**🌟 Making Dreams Come True, One Journey at a Time 🌟**</p>
            
            <p>
              **📍 Pathriya Fatak, Mangaj Ward No. 6, Madhya Pradesh, India**<br>
              **📞** <a href="tel:+919109455317">**+91 9109455317**</a> **|** 
              **✉️** <a href="mailto:dreamtravelagency395@gmail.com">**dreamtravelagency395@gmail.com**</a>
            </p>
            
            <div class="social-links">
              <a href="https://wa.me/919109455317" class="social-link">📱 **WhatsApp**</a>
              <a href="https://www.instagram.com/dreamtravellers3" class="social-link">📷 **Instagram**</a>
              <a href="tel:+919109455317" class="social-link">📞 **Call Us**</a>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const sendEmail = async (formData: any) => {
  try {
    const emailFrom = process.env.EMAIL_FROM || 'dreamtravelagency395@gmail.com';
    const emailTo = process.env.EMAIL_TO || 'dreamtravelagency395@gmail.com';

    // Send email to admin
    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      subject: `New Enquiry from ${formData.name} - Dream Travel Agency`,
      html: getAdminEmailTemplate(formData)
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: emailFrom,
      to: formData.email,
      subject: 'Thank You for Your Enquiry - Dream Travel Agency',
      html: getCustomerEmailTemplate(formData)
    });

    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'Failed to send email' };
  }
};