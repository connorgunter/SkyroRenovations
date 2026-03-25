import "./Footer.css";
import dunsBadge from "../../assets/dunsseal.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="trust-badges">
        {/* BBB */}
        <a
          href="https://www.bbb.org/us/fl/jensen-beach/profile/building-contractors/skyro-renovations-llc-0633-90356635/#sealclick"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://seal-seflorida.bbb.org/seals/blue-seal-293-61-bbb-90356635.png"
            alt="BBB Accredited Business"
          />
        </a>

        {/* DUNS */}
        <a
          href="https://www.dnb.com/business-directory/company-profiles.skyro_renovations_llc.7a6a13c646a8777770f134efa120ddf0.html"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={dunsBadge}
            className="duns-image"
            alt="D-U-N-S Registered"
          />
        </a>
      </div>

      <p>
        © 2025 Skyro Renovations LLC. Site by{" "}
        <a
          href="https://connorgunter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connor Gunter
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
