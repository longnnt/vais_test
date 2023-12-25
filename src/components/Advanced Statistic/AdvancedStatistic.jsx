import React from "react";
import { ListBanner } from "./ListBanner";
import { ShortenLink } from "../ShortenLink/ShortenLink";
import { ShortenLinkItem } from "../ShortenLink/ShortenLinkItem";

export const AdvancedStatistic = () => {
  return (
    <div className="advanced--statistic">
      <ShortenLink />
      <ShortenLinkItem />
      <div className="advanced--statistic__heading">advanced statistics</div>
      <div className="advanced--statistic__desc">
        Track how your links are performing across the web with
      </div>
      <div className="advanced--statistic__desc">
        {" "}
        our advanced statistics dashboard.
      </div>
      <ListBanner />
    </div>
  );
};
