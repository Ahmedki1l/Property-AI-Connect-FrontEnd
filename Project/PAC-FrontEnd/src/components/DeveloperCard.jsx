/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// DeveloperCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/DeveloperCard.css";

const DeveloperCard = ({ developer }) => {
  return (
    <div className="developer-card">
      <div className="developer-image">
        <img src={developer.image} alt="Asset" />
      </div>
      <div className="developer-info">
        <h3 className="developer-name">{developer.name}</h3>
        <p className="developer-projects">
          <svg
            className="icon2"
            viewBox="0 0 66 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.9657 14.6286C26.4 14.6286 26.0229 14.9943 26.0229 15.5429V17.3714C26.0229 17.92 26.4 18.2857 26.9657 18.2857C27.5314 18.2857 27.9086 17.92 27.9086 17.3714V15.5429C27.9086 14.9943 27.4372 14.6286 26.9657 14.6286ZM33.66 18.2857C34.2257 18.2857 34.6029 17.92 34.6029 17.3714V15.5429C34.6029 14.9943 34.2257 14.6286 33.66 14.6286C33.0943 14.6286 32.7172 14.9943 32.7172 15.5429V17.3714C32.7172 17.92 33.0943 18.2857 33.66 18.2857ZM20.2714 14.6286C19.7057 14.6286 19.3286 14.9943 19.3286 15.5429V17.3714C19.3286 17.92 19.7057 18.2857 20.2714 18.2857C20.8372 18.2857 21.2143 17.92 21.2143 17.3714V15.5429C21.2143 14.9943 20.7429 14.6286 20.2714 14.6286ZM40.26 18.2857C40.8257 18.2857 41.2029 17.92 41.2029 17.3714V15.5429C41.2029 14.9943 40.8257 14.6286 40.26 14.6286C39.6943 14.6286 39.3172 14.9943 39.3172 15.5429V17.3714C39.3172 17.92 39.7886 18.2857 40.26 18.2857ZM26.9657 20.48C26.4 20.48 26.0229 20.8457 26.0229 21.3943V23.2229C26.0229 23.7714 26.4 24.1371 26.9657 24.1371C27.5314 24.1371 27.9086 23.7714 27.9086 23.2229V21.3943C27.9086 20.8457 27.4372 20.48 26.9657 20.48ZM20.2714 20.48C19.7057 20.48 19.3286 20.8457 19.3286 21.3943V23.2229C19.3286 23.7714 19.7057 24.1371 20.2714 24.1371C20.8372 24.1371 21.2143 23.7714 21.2143 23.2229V21.3943C21.2143 20.8457 20.7429 20.48 20.2714 20.48ZM26.9657 26.3314C26.4 26.3314 26.0229 26.6971 26.0229 27.2457V29.0743C26.0229 29.6229 26.4 29.9886 26.9657 29.9886C27.5314 29.9886 27.9086 29.6229 27.9086 29.0743V27.2457C27.9086 26.6971 27.4372 26.3314 26.9657 26.3314ZM20.2714 26.3314C19.7057 26.3314 19.3286 26.6971 19.3286 27.2457V29.0743C19.3286 29.6229 19.7057 29.9886 20.2714 29.9886C20.8372 29.9886 21.2143 29.6229 21.2143 29.0743V27.2457C21.2143 26.6971 20.7429 26.3314 20.2714 26.3314ZM26.9657 32.0914C26.4 32.0914 26.0229 32.4571 26.0229 33.0057V34.8343C26.0229 35.3829 26.4 35.7486 26.9657 35.7486C27.5314 35.7486 27.9086 35.3829 27.9086 34.8343V33.0057C27.9086 32.5486 27.4372 32.0914 26.9657 32.0914ZM20.2714 32.0914C19.7057 32.0914 19.3286 32.4571 19.3286 33.0057V34.8343C19.3286 35.3829 19.7057 35.7486 20.2714 35.7486C20.8372 35.7486 21.2143 35.3829 21.2143 34.8343V33.0057C21.2143 32.5486 20.7429 32.0914 20.2714 32.0914ZM20.2714 37.9429C19.7057 37.9429 19.3286 38.3086 19.3286 38.8571V40.6857C19.3286 41.2343 19.7057 41.6 20.2714 41.6C20.8372 41.6 21.2143 41.2343 21.2143 40.6857V38.8571C21.2143 38.3086 20.7429 37.9429 20.2714 37.9429ZM20.2714 43.7943C19.7057 43.7943 19.3286 44.16 19.3286 44.7086V46.5371C19.3286 47.0857 19.7057 47.4514 20.2714 47.4514C20.8372 47.4514 21.2143 47.0857 21.2143 46.5371V44.7086C21.2143 44.16 20.7429 43.7943 20.2714 43.7943ZM40.26 43.7943C39.6943 43.7943 39.3172 44.16 39.3172 44.7086V46.5371C39.3172 47.0857 39.6943 47.4514 40.26 47.4514C40.8257 47.4514 41.2029 47.0857 41.2029 46.5371V44.7086C41.2029 44.16 40.8257 43.7943 40.26 43.7943Z"
              fill="#9FAFAE"
            />
            <path
              d="M50.16 34.3771C50.6314 33.28 50.9143 32.0914 50.9143 30.8114C50.9143 27.4286 48.9343 24.4114 45.9171 22.9486V10.9714C45.9171 10.4229 45.54 10.0571 44.9743 10.0571H15.5571C14.9914 10.0571 14.6143 10.4229 14.6143 10.9714V52.1143H11.3143C10.7486 52.1143 10.3714 52.48 10.3714 53.0286C10.3714 53.5771 10.7486 53.9429 11.3143 53.9429H15.5571H26.0229H34.4143H44.9743H49.2171C49.7829 53.9429 50.16 53.5771 50.16 53.0286C50.16 52.48 49.7829 52.1143 49.2171 52.1143H45.9171V39.4057L50.6314 43.9771C50.82 44.16 51.1029 44.2514 51.2914 44.2514C51.48 44.2514 51.7629 44.16 51.9514 43.9771L55.2514 40.7771C55.44 40.5943 55.5343 40.4114 55.5343 40.1371C55.5343 39.8629 55.44 39.68 55.2514 39.4971L50.16 34.3771ZM33.5657 52.1143H27.06V45.3486C27.06 43.6114 28.5686 42.1486 30.36 42.1486C32.1514 42.1486 33.66 43.6114 33.66 45.3486V52.1143H33.5657ZM44.0314 52.1143H35.3571V45.3486C35.3571 42.6057 33 40.32 30.1714 40.32C27.3429 40.32 24.9857 42.6057 24.9857 45.3486V52.1143H16.4057V11.8857H44.0314V22.3086C43.3714 22.1257 42.6171 21.9429 41.7686 21.9429C36.7714 21.9429 32.6229 25.8743 32.6229 30.8114C32.6229 35.7486 36.6771 39.68 41.7686 39.68C42.5229 39.68 43.2771 39.5886 44.0314 39.4057V52.1143ZM41.7686 37.8514C37.8086 37.8514 34.5086 34.7429 34.5086 30.8114C34.5086 26.88 37.7143 23.7714 41.7686 23.7714C45.7286 23.7714 49.0286 26.88 49.0286 30.8114C49.0286 34.7429 45.8229 37.8514 41.7686 37.8514ZM51.3857 42.0571L47.1429 37.9429C47.8971 37.3943 48.5571 36.7543 49.1229 36.0229L53.2714 40.0457L51.3857 42.0571Z"
              fill="#9FAFAE"
            />
          </svg>
          {developer.projects.length} projects
        </p>
      </div>
      <Link to={`/developer/${developer.developerId}/Home`} className="asset-card-link2">
        <button className="view-button">View</button>
      </Link>
    </div>
  );
};

export default DeveloperCard;
