import React from "react";
import {
  BottomLogoContainer,
  FooterBottomBottom,
  FooterBottomBottomLogoContainer,
  FooterBottomBottomText,
  FooterBottomInner,
  FooterBottomItems,
  FooterBottomPolicy,
  FooterBottomPolicyList,
  FooterBottomSection,
  FooterBottomTop,
  FooterBottomTopInner,
  FooterBottomTopLogo,
  FooterContainer,
  FooterMiddleBtn,
  FooterMiddleInner,
  FooterMiddleSection,
  FooterMiddleSponser,
  FooterTopInner,
  FooterTopLogo,
  FooterTopSection,
  LogoBT,
  LogoBTFlex,
  LogoBTInner,
  LogoBTInnerFlex,
  LogoBTSection,
  SVGBT,
  SVGBTInner,
  SVGSection,
} from "./StyleFooter";
import logo1 from "../../../assets/img/logo/logo1.png";
import logo2 from "../../../assets/img/logo/logo2.png";
import logo3 from "../../../assets/img/logo/logo3.png";
import logo4 from "../../../assets/img/logo/logo4.png";
import logo5 from "../../../assets/img/logo/logo5.png";
import logo6 from "../../../assets/img/logo/logo6.png";
import logo7 from "../../../assets/img/logo/logo7.png";
import logo8 from "../../../assets/img/logo/logo8.png";
import logo9 from "../../../assets/img/logo/logo9.png";
import logo10 from "../../../assets/img/logo/logo10.png";
import logo11 from "../../../assets/img/logo/logo11.png";
import logo12 from "../../../assets/img/logo/logo12.png";
import logo13 from "../../../assets/img/logo/logo13.png";
import logo14 from "../../../assets/img/logo/logo14.png";
import logo15 from "../../../assets/img/logo/logo15.png";
import logo16 from "../../../assets/img/logo/logo16.png";
import logo17 from "../../../assets/img/logo/logo17.png";
import logo18 from "../../../assets/img/logo/logo18.png";
import logo19 from "../../../assets/img/logo/logo19.png";
import logo20 from "../../../assets/img/logo/logo20.png";
import logo21 from "../../../assets/img/logo/logo21.png";
import logo22 from "../../../assets/img/logo/logo22.png";
import logo23 from "../../../assets/img/logo/logo23.png";
import logo24 from "../../../assets/img/logo/logo24.png";
import logo25 from "../../../assets/img/logo/logo25.png";
import logo26 from "../../../assets/img/logo/logo26.png";
import logo27 from "../../../assets/img/logo/logo27.png";
import toplogo1 from "../../../assets/img/logo/toplogo1.png";
import toplogo2 from "../../../assets/img/logo/toplogo12.png";
import item1 from "../../../assets/img/logo/Rose-Glyph.png";
import item2 from "../../../assets/img/logo/Item.png";
import item3 from "../../../assets/img/logo/Item-1.png";
import item4 from "../../../assets/img/logo/Item-2.png";
import item5 from "../../../assets/img/logo/Item-3.png";
import footerlogo from "../../../assets/img/logo/footerlogo.png";
import global from "../../../assets/img/logo/footerlanguage.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTopSection>
        <FooterTopInner>
          <FooterTopLogo logo={toplogo1}></FooterTopLogo>
          <FooterTopLogo logo={toplogo2}></FooterTopLogo>
        </FooterTopInner>
      </FooterTopSection>
      <FooterMiddleSection>
        <FooterMiddleInner>
          <FooterMiddleSponser logo={logo1} />
          <FooterMiddleSponser logo={logo2} />
          <FooterMiddleSponser logo={logo3} />
          <FooterMiddleSponser logo={logo4} />
          <FooterMiddleSponser logo={logo5} />
          <FooterMiddleSponser logo={logo6} />
          <FooterMiddleSponser logo={logo7} />
          <FooterMiddleSponser logo={logo8} />
          <FooterMiddleSponser logo={logo9} />
          <FooterMiddleSponser logo={logo10} />
          <FooterMiddleSponser logo={logo11} />
          <FooterMiddleSponser logo={logo12} />
          <FooterMiddleSponser logo={logo13} />
          <FooterMiddleSponser logo={logo14} />
          <FooterMiddleSponser logo={logo15} />
          <FooterMiddleSponser logo={logo16} />
          <FooterMiddleSponser logo={logo17} />
          <FooterMiddleSponser logo={logo18} />
          <FooterMiddleSponser logo={logo19} />
          <FooterMiddleSponser logo={logo20} />
          <FooterMiddleSponser logo={logo21} />
          <FooterMiddleSponser logo={logo22} />
          <FooterMiddleSponser logo={logo23} />
          <FooterMiddleSponser logo={logo24} />
          <FooterMiddleSponser logo={logo25} />
          <FooterMiddleSponser logo={logo26} />
          <FooterMiddleSponser logo={logo27} />
          <FooterMiddleBtn>VIEW ALL CLUB PARTNERS</FooterMiddleBtn>
        </FooterMiddleInner>
      </FooterMiddleSection>
      <FooterBottomSection>
        <FooterBottomInner>
          <FooterBottomTop>
            <FooterBottomTopLogo logo={footerlogo} />
            <FooterBottomTopInner>
              <LogoBTSection>
                <LogoBTFlex>
                  <LogoBTInnerFlex>
                    <LogoBTInner>
                      <LogoBT logo={global}></LogoBT>KO
                    </LogoBTInner>
                  </LogoBTInnerFlex>

                  <SVGSection>
                    <SVGBTInner>
                      <SVGBT viewBox="0 0 24 24">
                        <path d="M23.4982 5.81032C23.3625 5.2668 23.0951 4.77074 22.7227 4.37179C22.3503 3.97285 21.8861 3.68502 21.3764 3.5371C19.5 3 12 3 12 3C12 3 4.5 3 2.62364 3.5371C2.11393 3.68502 1.64966 3.97285 1.27729 4.37179C0.904916 4.77074 0.637506 5.2668 0.501818 5.81032C5.96046e-08 7.81645 0 12 0 12C0 12 5.96046e-08 16.1835 0.501818 18.1897C0.637506 18.7332 0.904916 19.2293 1.27729 19.6282C1.64966 20.0271 2.11393 20.315 2.62364 20.4629C4.5 21 12 21 12 21C12 21 19.5 21 21.3764 20.4629C21.8861 20.315 22.3503 20.0271 22.7227 19.6282C23.0951 19.2293 23.3625 18.7332 23.4982 18.1897C24 16.1835 24 12 24 12C24 12 24 7.81645 23.4982 5.81032Z" />
                        <path d="M9 16V8L17 12L9 16Z" id="play" />
                      </SVGBT>
                    </SVGBTInner>
                    <SVGBTInner>
                      <SVGBT
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.007 2.16136C15.2152 2.16136 15.5951 2.17542 16.8568 2.23169C18.0293 2.28326 18.6625 2.48017 19.0846 2.64427C19.6428 2.85993 20.0461 3.12248 20.4636 3.53975C20.8857 3.96171 21.1436 4.36023 21.3594 4.91815C21.5236 5.34011 21.7205 5.97773 21.7721 7.14515C21.8284 8.41102 21.8425 8.79078 21.8425 11.993C21.8425 15.1998 21.8284 15.5796 21.7721 16.8408C21.7205 18.0129 21.5236 18.6458 21.3594 19.0678C21.1436 19.6257 20.881 20.0289 20.4636 20.4462C20.0414 20.8681 19.6428 21.126 19.0846 21.3417C18.6625 21.5058 18.0246 21.7027 16.8568 21.7542C15.5904 21.8105 15.2105 21.8246 12.007 21.8246C8.79891 21.8246 8.419 21.8105 7.15732 21.7542C5.98476 21.7027 5.35157 21.5058 4.92945 21.3417C4.37131 21.126 3.96795 20.8635 3.55052 20.4462C3.1284 20.0242 2.87043 19.6257 2.65468 19.0678C2.49052 18.6458 2.29353 18.0082 2.24194 16.8408C2.18566 15.5749 2.17159 15.1952 2.17159 11.993C2.17159 8.78609 2.18566 8.40633 2.24194 7.14515C2.29353 5.97304 2.49052 5.34011 2.65468 4.91815C2.87043 4.36023 3.13309 3.95702 3.55052 3.53975C3.97264 3.1178 4.37131 2.85993 4.92945 2.64427C5.35157 2.48017 5.98945 2.28326 7.15732 2.23169C8.419 2.17542 8.79891 2.16136 12.007 2.16136ZM12.007 0C8.74731 0 8.33926 0.0140652 7.05882 0.0703262C5.78308 0.126587 4.906 0.332877 4.14618 0.628248C3.35353 0.937683 2.68282 1.34558 2.01681 2.01602C1.3461 2.68177 0.93805 3.35222 0.628493 4.13987C0.333008 4.90408 0.126637 5.77613 0.0703537 7.05138C0.0140707 8.336 0 8.7439 0 12.0023C0 15.2608 0.0140707 15.6687 0.0703537 16.9486C0.126637 18.2239 0.333008 19.1006 0.628493 19.8601C0.93805 20.6525 1.3461 21.3229 2.01681 21.9887C2.68282 22.6544 3.35353 23.067 4.14149 23.3718C4.906 23.6671 5.77839 23.8734 7.05413 23.9297C8.33457 23.9859 8.74262 24 12.0023 24C15.2621 24 15.6701 23.9859 16.9506 23.9297C18.2263 23.8734 19.1034 23.6671 19.8632 23.3718C20.6512 23.067 21.3219 22.6544 21.9879 21.9887C22.6539 21.3229 23.0666 20.6525 23.3715 19.8648C23.667 19.1006 23.8734 18.2286 23.9296 16.9533C23.9859 15.6734 24 15.2655 24 12.007C24 8.74858 23.9859 8.34069 23.9296 7.06075C23.8734 5.78551 23.667 4.90877 23.3715 4.14925C23.076 3.35222 22.668 2.68177 21.9973 2.01602C21.3313 1.35026 20.6605 0.937683 19.8726 0.632936C19.1081 0.337566 18.2357 0.131276 16.9599 0.0750147C15.6748 0.0140653 15.2668 0 12.007 0Z"
                          fill="white"
                        />
                        <path
                          d="M12.0065 5.83708C8.60142 5.83708 5.83887 8.59855 5.83887 12.0023C5.83887 15.4061 8.60142 18.1676 12.0065 18.1676C15.4117 18.1676 18.1742 15.4061 18.1742 12.0023C18.1742 8.59855 15.4117 5.83708 12.0065 5.83708ZM12.0065 16.0016C9.79744 16.0016 8.00576 14.2106 8.00576 12.0023C8.00576 9.7941 9.79744 8.00313 12.0065 8.00313C14.2157 8.00313 16.0073 9.7941 16.0073 12.0023C16.0073 14.2106 14.2157 16.0016 12.0065 16.0016Z"
                          fill="white"
                        />
                        <path
                          d="M19.8574 5.5933C19.8574 6.39033 19.2101 7.03264 18.4174 7.03264C17.6201 7.03264 16.9775 6.38564 16.9775 5.5933C16.9775 4.79627 17.6248 4.15395 18.4174 4.15395C19.2101 4.15395 19.8574 4.80095 19.8574 5.5933Z"
                          fill="white"
                        />
                      </SVGBT>
                    </SVGBTInner>
                    <SVGBTInner>
                      <SVGBT
                        viewBox="0 0 22 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.244 0.25H20.552L13.325 8.51L21.827 19.75H15.17L9.956 12.933L3.99 19.75H0.679998L8.41 10.915L0.253998 0.25H7.08L11.793 6.481L17.244 0.25ZM16.083 17.77H17.916L6.084 2.126H4.117L16.083 17.77Z"
                          fill="black"
                        />
                      </SVGBT>
                    </SVGBTInner>
                    <SVGBTInner>
                      <SVGBT
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z"
                          id="play"
                          fill="white"
                        />
                      </SVGBT>
                    </SVGBTInner>
                    <SVGBTInner>
                      <SVGBT
                        viewBox="0 0 25 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.938721 1.71921C0.938721 0.769972 1.73275 0 2.71227 0H23.1652C24.1447 0 24.9387 0.769972 24.9387 1.71921V22.2808C24.9387 23.2303 24.1447 24 23.1652 24H2.71227C1.73275 24 0.938721 23.2303 0.938721 22.2808V1.71921Z"
                          fill="#006699"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.85966 20V9.20427H5.21543V20H8.85966ZM7.03753 7.7303C8.30834 7.7303 9.09932 6.90131 9.09932 5.86531C9.07564 4.80599 8.30835 4 7.06164 4C5.81505 4 5 4.80599 5 5.86531C5 6.90131 5.79081 7.7303 7.01377 7.7303H7.03753Z"
                          fill="white"
                          id="play"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.876 20H14.5202V13.9712C14.5202 13.6486 14.5439 13.3262 14.6401 13.0956C14.9035 12.4509 15.5032 11.7832 16.5099 11.7832C17.8286 11.7832 18.3561 12.7732 18.3561 14.2245V20H22V13.8099C22 10.4939 20.2021 8.95094 17.8045 8.95094C15.8385 8.95094 14.9755 10.0329 14.4959 10.7699H14.5203V9.20427H10.8761C10.9239 10.2173 10.876 20 10.876 20Z"
                          fill="white"
                          id="play"
                        />
                      </SVGBT>
                    </SVGBTInner>
                  </SVGSection>
                </LogoBTFlex>
              </LogoBTSection>
              <FooterBottomPolicy>
                <FooterBottomPolicyList>ACCESSIBILTY</FooterBottomPolicyList>
                <FooterBottomPolicyList>
                  FAIR PROCESSING NOTICE
                </FooterBottomPolicyList>
                <FooterBottomPolicyList>COOKIE POLICY</FooterBottomPolicyList>
                <FooterBottomPolicyList>PRIVACY POLICY</FooterBottomPolicyList>
                <FooterBottomPolicyList>TERMS OF USE</FooterBottomPolicyList>
                <FooterBottomPolicyList>CONTACT US</FooterBottomPolicyList>
                <FooterBottomPolicyList>SITE MAP</FooterBottomPolicyList>
              </FooterBottomPolicy>
            </FooterBottomTopInner>
          </FooterBottomTop>
          <FooterBottomBottom>
            <FooterBottomBottomText> Fan Support</FooterBottomBottomText>
            <FooterBottomBottomLogoContainer>
              <BottomLogoContainer>
                <FooterBottomItems logo={item1} />
                <FooterBottomItems logo={item2} />
                <FooterBottomItems logo={item3} />
                <FooterBottomItems logo={item4} />
                <FooterBottomItems logo={item5} />
              </BottomLogoContainer>
            </FooterBottomBottomLogoContainer>
            <FooterBottomBottomText id="right">
              Manchester City FC Ltd 2024
            </FooterBottomBottomText>
          </FooterBottomBottom>
        </FooterBottomInner>
      </FooterBottomSection>
    </FooterContainer>
  );
};

export default Footer;
