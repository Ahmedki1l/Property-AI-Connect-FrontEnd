/* eslint-disable no-unused-vars */
/* src/pages/SellPage.jsx */
import React, { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/SellPage.css";

const SellPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const places = [
    "Giza",
    "Zayed",
    "Cairo",
    "Giza",
    "Zayed",
    "Cairo",
    "Giza",
    "Zayed",
    "Cairo",
    "Giza",
    "Zayed",
    "Cairo",
  ];

  useEffect(() => {
    // Function to handle click outside of dropdown
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    inputRef.current.value = option;
    setShowDropdown(false);
  };

  return (
    <div>
      <NavBar />
      <div className="sell-page">
        <div className="image-container2">
          <div className="background-image"></div>
        </div>
        <div className="sell-content">
          <div className="top-content">
            <div className="left-content">
              <div className="input-group">
                <div className="search-box2" onClick={toggleDropdown}>
                  <input
                    type="text"
                    className="sell-input"
                    placeholder="Enter your address"
                    ref={inputRef}
                  />
                  {showDropdown && (
                    <div className="dropdown" ref={dropdownRef}>
                      <div className="dropdown-inner">
                        {places.map((place, index) => (
                          <div
                            key={index}
                            className={`dropdown-item ${
                              place === selectedOption ? "selectedOption" : ""
                            }`}
                            onClick={() => handleOptionSelect(place)}
                          >
                            {place}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="custom-icon2">
                    {/* Include your SVG or custom HTML structure here */}
                    <svg
                      width="36"
                      height="37"
                      viewBox="0 0 36 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_62_7)">
                        <path
                          d="M17.0409 7.29499L16.5199 8.20906C15.7517 7.77249 14.905 7.49152 14.0282 7.38222C13.1514 7.27291 12.2617 7.33739 11.4098 7.57199C10.5579 7.80659 9.76058 8.20671 9.06335 8.74949C8.36613 9.29227 7.78265 9.96708 7.34625 10.7354L6.43219 10.2151C7.45223 8.42152 9.14272 7.10641 11.1321 6.55884C13.1214 6.01127 15.2468 6.27606 17.0409 7.29499Z"
                          fill="#231F20"
                        />
                        <path
                          d="M22.666 4.60624C17.8777 -0.526576 9.80511 -0.807826 4.67159 3.97975C2.24047 6.25303 0.796181 9.38792 0.648063 12.713C0.499944 16.0381 1.65977 19.289 3.87914 21.7694C6.09851 24.2499 9.20094 25.7626 12.522 25.9837C15.843 26.2048 19.1186 25.1166 21.6471 22.9522C21.7803 22.8383 21.9113 22.7211 22.0402 22.6006C22.1696 22.4804 22.2954 22.3573 22.4185 22.2329C24.7259 19.8943 26.04 16.7543 26.0861 13.4693C26.1322 10.1844 24.9068 7.00871 22.666 4.60624ZM23.7017 13.6555C23.6086 16.3353 22.4791 18.8745 20.5512 20.7382C18.6232 22.6019 16.0472 23.6447 13.3657 23.6469C13.2434 23.6469 13.1203 23.6448 12.9966 23.6405C11.6375 23.5969 10.3005 23.2841 9.06311 22.7204C7.82567 22.1566 6.71231 21.3531 5.78745 20.3562C1.89425 16.1797 2.12276 9.61952 6.29651 5.72631C7.79353 4.32975 9.67107 3.40849 11.6917 3.07905C13.7123 2.74962 15.7853 3.0268 17.6483 3.87555C19.5114 4.7243 21.081 6.10649 22.1585 7.84731C23.2359 9.58814 23.773 11.6094 23.7017 13.6555Z"
                          fill="#231F20"
                        />
                        <path
                          d="M17.0409 7.29499L16.5199 8.20906C15.7517 7.77249 14.905 7.49152 14.0282 7.38222C13.1514 7.27291 12.2617 7.33739 11.4098 7.57199C10.5579 7.80659 9.76058 8.20671 9.06335 8.74949C8.36613 9.29227 7.78265 9.96708 7.34625 10.7354L6.43219 10.2151C7.45223 8.42152 9.14272 7.10641 11.1321 6.55884C13.1214 6.01127 15.2468 6.27606 17.0409 7.29499Z"
                          fill="white"
                        />
                        <path
                          d="M34.7955 32.5063L26.1379 23.5569L22.6926 26.7723L31.3516 35.7266C31.5621 35.9525 31.8153 36.1345 32.0964 36.2622C32.3776 36.3898 32.6813 36.4606 32.9899 36.4705H33.0736C33.5325 36.4699 33.9814 36.3354 34.365 36.0835C34.7487 35.8315 35.0504 35.473 35.2333 35.052C35.4161 34.6311 35.4721 34.1658 35.3943 33.7135C35.3166 33.2611 35.1084 32.8413 34.7955 32.5056V32.5063Z"
                          fill="#231F20"
                        />
                        <path
                          d="M22.0658 21.8539L21.2946 22.5733L24.3972 25.8994L25.1684 25.1799L22.0658 21.8539Z"
                          fill="#231F20"
                        />
                        <path
                          d="M17.0409 7.29499L16.5199 8.20906C15.7517 7.77249 14.905 7.49152 14.0282 7.38222C13.1514 7.27291 12.2617 7.33739 11.4098 7.57199C10.5579 7.80659 9.76058 8.20671 9.06335 8.74949C8.36613 9.29227 7.78265 9.96708 7.34625 10.7354L6.43219 10.2151C7.45223 8.42152 9.14272 7.10641 11.1321 6.55884C13.1214 6.01127 15.2468 6.27606 17.0409 7.29499Z"
                          fill="#231F20"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_62_7">
                          <rect
                            width="36"
                            height="36"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="sell-input"
                  placeholder="Enter your unit area"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="sell-input"
                  placeholder="Enter the number of rooms"
                />
              </div>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="sell-input"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          <div className="bottom-content">
            <button className="price-estimator-btn">
              <span className="btn-text">Price Estimator</span>
            </button>
            <input
              type="text"
              className="estimated-price-input"
              placeholder="Estimated price"
            />
          </div>
          <div className="Lower-section">
            <h2 className="agent-heading">
              Sell your real estate with an agent
            </h2>
            <button className="find-agent-btn">
              <span className="btn-text">Find an agent</span>
            </button>
            <h2 className="fsbo-heading">Sell your real estate yourself</h2>
            <button className="fsbo-btn">
              <span className="btn-text">Post Your Real Estate For Sale</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellPage;
