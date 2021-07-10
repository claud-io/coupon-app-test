import React from "react";
import { Plan } from "../../../types";
import honeybg from "../../../resources/honeycomb.png";
import {
  AcademicCapIcon,
  SearchIcon,
  ArchiveIcon,
} from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { deviceType } from "react-device-detect";

interface PlanCardProps {
  plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div
      onClick={() =>
        history.push({
          pathname: `/grazie/${plan.id}`,
          search: `?device=${deviceType}`,
        })
      }
      className="cursor-pointer flex flex-col relative w-130 h-64 overflow-hidden rounded-lg shadow-md  
    hover:shadow-xl transition-shadow duration-300 ease-in-out "
    >
      <div className="flex flex-col items-center justify-end bg-yellow-200 flex-1 pb-8">
        <div className="w-14 h-14 text-yellow-500 rounded-full bg-white flex items-center justify-center absolute top-4 right-4  font-bold">
          &euro; {plan.price}
        </div>
        <h1 className="text-white uppercase text-4xl pb-8">{plan.name}</h1>
        <div className="w-full px-3 flex justify-around">
          {plan.certificate && (
            <span className="flex items-center justify-center">
              <AcademicCapIcon className="w-5 h-5" />
              <span className="text-sm">{t("certificate")}</span>
            </span>
          )}
          {plan.monitoring && (
            <span className="flex items-center justify-center">
              <SearchIcon className="w-5 h-5" />{" "}
              <span className="text-sm">{t("monitor")}</span>
            </span>
          )}
          {!!plan.quantity && plan.quantity > 0 && (
            <span className="flex items-center justify-center">
              <ArchiveIcon className="w-5 h-5" />{" "}
              <span className="text-sm">
                {plan.quantity}kg {t("honey")}
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-center p-4 text-xl font-bold text-yellow-300 ">
        {t("select")}
      </div>
    </div>
  );
};

export default PlanCard;
