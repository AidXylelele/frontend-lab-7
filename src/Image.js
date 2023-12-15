import React from "react";

const Image = ({ index, counter, lastElementRef }) => {
  return (
    <div className="city-photo">
      <a href="https://www.berlin.de/en/">
        <img
          ref={index === counter - 1 ? lastElementRef : null}
          width="300"
          alt="Berlin"
          src="https://media.istockphoto.com/id/503874284/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D1%80%D0%BB%D0%B8%D0%BD-%D1%81-%D1%80%D0%B5%D0%BA%D1%83-%D1%88%D0%BF%D1%80%D0%B5%D0%B5-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5-%D0%B3%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=Oer1iCAHUWu8j-jZ93lbeqezhmNaNersbcxrgK4Mj-Q="
        />
      </a>
    </div>
  );
};

export default Image;
