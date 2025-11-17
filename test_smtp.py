#!/usr/bin/env python3
"""
Quick SMTP Test Script
Tests if your email credentials work with different SMTP providers
"""

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# ===== CONFIGURATION =====
# Edit these with your credentials
AUTH_EMAIL = "badis.machraoui@ethinc.ch"  # Your login email
PASSWORD = "QB0!XTMq@872bmc"
FROM_EMAIL = "contact@ethinc.ch"  # Shared mailbox to send FROM
RECIPIENT = "badismach@gmail.com"  # Send test email to yourself

# Common SMTP configurations to try
SMTP_CONFIGS = [
    {
        "name": "Microsoft 365 / Outlook",
        "host": "smtp.office365.com",
        "port": 587,
        "use_tls": True
    },
    {
        "name": "Gmail",
        "host": "smtp.gmail.com",
        "port": 587,
        "use_tls": True
    },
    {
        "name": "Infomaniak (Swiss)",
        "host": "mail.infomaniak.com",
        "port": 587,
        "use_tls": True
    },
    {
        "name": "Generic SSL (port 465)",
        "host": "mail.ethinc.ch",
        "port": 465,
        "use_tls": False,
        "use_ssl": True
    }
]

# ===== TEST FUNCTION =====
def test_smtp(config):
    """Test SMTP connection with given configuration"""
    print(f"\n{'='*60}")
    print(f"Testing: {config['name']}")
    print(f"Host: {config['host']}")
    print(f"Port: {config['port']}")
    print(f"{'='*60}")
    
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = FROM_EMAIL  # Send FROM the shared mailbox
        msg['To'] = RECIPIENT
        msg['Subject'] = f"SMTP Test from {config['name']} (Shared Mailbox)"
        
        body = f"""
        This is a test email from the SMTP test script.
        
        Authentication: {AUTH_EMAIL}
        Sending FROM: {FROM_EMAIL} (shared mailbox)
        
        Configuration tested:
        - Provider: {config['name']}
        - Host: {config['host']}
        - Port: {config['port']}
        - TLS: {config.get('use_tls', False)}
        
        If you received this, SMTP is working! ✅
        And you can send as contact@ethinc.ch! ✅
        """
        msg.attach(MIMEText(body, 'plain'))
        
        # Connect and send
        if config.get('use_ssl', False):
            # SSL connection (port 465)
            print("Connecting with SSL...")
            server = smtplib.SMTP_SSL(config['host'], config['port'], timeout=10)
        else:
            # Regular connection with STARTTLS (port 587)
            print("Connecting with STARTTLS...")
            server = smtplib.SMTP(config['host'], config['port'], timeout=10)
            if config.get('use_tls', False):
                server.starttls()
        
        print(f"Connected! Logging in as {AUTH_EMAIL}...")
        server.login(AUTH_EMAIL, PASSWORD)
        
        print("Logged in! Sending test email...")
        server.send_message(msg)
        
        print("✅ SUCCESS! Email sent successfully!")
        print(f"   Check {RECIPIENT} for the test email")
        
        server.quit()
        return True
        
    except smtplib.SMTPAuthenticationError as e:
        print(f"❌ Authentication Failed: {e}")
        print("   Check your email and password")
        return False
        
    except smtplib.SMTPException as e:
        print(f"❌ SMTP Error: {e}")
        return False
        
    except Exception as e:
        print(f"❌ Connection Failed: {e}")
        return False

# ===== MAIN =====
def main():
    print("""
    ╔════════════════════════════════════════════════════════════╗
    ║           SMTP Configuration Test Script                  ║
    ╚════════════════════════════════════════════════════════════╝
    """)
    
    print(f"Authenticating as: {AUTH_EMAIL}")
    print(f"Sending FROM: {FROM_EMAIL} (shared mailbox)")
    print(f"Sending TO: {RECIPIENT}")
    
    if PASSWORD == "your_password_here":
        print("\n⚠️  WARNING: Please edit the script and add your password!")
        return
    
    print("\nTesting multiple SMTP configurations...\n")
    
    successful_configs = []
    
    for config in SMTP_CONFIGS:
        if test_smtp(config):
            successful_configs.append(config)
    
    print(f"\n{'='*60}")
    print("SUMMARY")
    print(f"{'='*60}")
    
    if successful_configs:
        print(f"\n✅ {len(successful_configs)} configuration(s) worked!\n")
        for config in successful_configs:
            print(f"  ✓ {config['name']}")
            print(f"    Host: {config['host']}")
            print(f"    Port: {config['port']}")
            print()
    else:
        print("\n❌ No configurations worked.")
        print("\nTroubleshooting tips:")
        print("  1. Double-check your email and password")
        print("  2. Check if 2FA is enabled (you may need an app password)")
        print("  3. Contact your email provider for SMTP settings")
        print("  4. Check firewall/antivirus blocking SMTP ports")
    
    print(f"{'='*60}\n")

if __name__ == "__main__":
    main()

