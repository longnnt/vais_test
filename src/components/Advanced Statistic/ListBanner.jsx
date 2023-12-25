import React from "react";
import "./index.css";
import { Banner } from "./Banner";

const listBanner = [
  {
    id: 1,
    bannerHead: "brand recognition",
    bannerDesc:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
  },
  {
    id: 2,
    bannerHead: "defailed records",
    bannerDesc:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions",
  },
  {
    id: 3,
    bannerHead: "fully customizable",
    bannerDesc:
      "Improve brand awereness and content discoverability through customizable links, supercharging audience engagement",
  },
];

export const ListBanner = () => {
  return (
    <div className="list__banner">
      {listBanner?.map((item, index) => (
        <Banner
          key={item?.id}
          bannerHead={item?.bannerHead}
          bannerDesc={item?.bannerDesc}
          i={index}
          isHidden={index !== listBanner.length - 1 ? true : false}
        />
      ))}
    </div>
  );
};
