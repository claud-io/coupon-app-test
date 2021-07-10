import React from "react";
import { useQuery } from "react-query";
import { getPlans } from "../../../api";
import PlanCard from "./PlanCard";

const Plans = () => {
  const { data } = useQuery("coupons", getPlans, {
    initialData: [],
    notifyOnChangeProps: ["data"],
  });

  return (
    <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div className="flex flex-nowrap ml-10 ">
        {data?.map((plan, idx) => (
          <div className="inline-block px-3" key={idx}>
            <PlanCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
