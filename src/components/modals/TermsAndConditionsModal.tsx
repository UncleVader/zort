import React, {Dispatch, FC, SetStateAction} from 'react';
import ModalWindow from "@/components/shared/ModalWindow";


interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const TermsAndConditionsModal:FC<IProps> = (props) => {
  return (
    <ModalWindow
      title="Terms and Conditions"
      {...props}
    >
      <div className="[&_h3]:text-secondary [&_h3]:text-lg [&_h4]:text-secondary [&_h4]:text-lg [&_h5]:text-white [&_h5]:text-lg] [&_p]:text-white/50  [&_p]:mb-4 ">
        <h3>Last Updated: 07 January 2025</h3>
        <p>Welcome to ZORT, an AI-powered bet-tracking application operated by GIS Analytics Limited (&#34;we,&#34; &#34;us,&#34; or
          &#34;our&#34;). By downloading, accessing, or otherwise using ZORT (the &#34;App&#34;), you agree to be bound by the following
          Terms and Conditions (the &#34;Terms&#34;). Please read them carefully.</p>

        <h4>1. Overview and Acceptance</h4>
        <h5>1.1 Purpose</h5>
        <p>ZORT is designed to assist users in logging, analyzing, and optimizing their sports betting activities. By
          accessing or using any part of ZORT, you acknowledge that you have read, understood, and agree to be bound by
          these Terms.</p>

        <h5>1.2 Modifications</h5>
        <p>We may modify or update these Terms at any time to reflect changes in our practices or applicable law. If any
          material changes are made, we will provide a clear notice within the App or via email. Your continued use of
          ZORT constitutes acceptance of any updated Terms.</p>

        <h4>2. Eligibility and User Accounts</h4>
        <p>You must be at least eighteen (18) years of age to use this application. By using ZORT, you represent and
          warrant that you satisfy this requirement.</p>

        <h4>3. Data Collection and Privacy</h4>
        <p>We collect only the personal information necessary to operate and improve the App. We do not sell or lease
          your personal data to third parties.</p>

        <h4>4. Contact Information</h4>
        <p>For questions regarding these Terms, the App, or to submit a complaint, please contact us at:</p>
        <p>GIS Analytics Limited<br/>
          info@gisanalytics.uk</p>
      </div>
    </ModalWindow>
  );
};

export default TermsAndConditionsModal;