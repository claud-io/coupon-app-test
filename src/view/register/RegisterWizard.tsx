import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomDatePicker from "../../component/CustomDatePicker";
import CustomInput from "../../component/CustomInput";
import { postUserDetails } from "../../api";
import { useHistory } from "react-router-dom";

const wizardSteps = [
  {
    id: "name",
    component: CustomInput,
    type: "name",
  },
  {
    id: "email",
    component: CustomInput,
    type: "email",
  },
  {
    id: "birthday",
    component: CustomDatePicker,
    type: "",
  },
];

const RegisterWizard = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<any>({});
  const history = useHistory();

  const { component, id, ...rest } = wizardSteps[step];
  const { t } = useTranslation();
  const onInputChange = (key: string, value: any) => {
    setData((prev: any) => ({ ...prev, [key]: value }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (step === wizardSteps.length - 1) {
      postUserDetails(data)
        .then(() => history.push("/"))
        .catch(() => alert("an error occurred"));
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex-1 px-5 md:px-40 py-20 mx-auto">
        <div className="w-full md:w-2/4 py-6">
          {React.createElement(component, {
            ...rest,
            id,
            label: t(`wizard.${step}.label`),
            placeholder: t(`wizard.${step}.placeholder`),
            value: data[id],
            onChange: onInputChange,
            required: true,
          })}
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent 
	  shadow-sm text-sm font-medium rounded-md text-white 
	  bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          {t("continue")}
        </button>
      </div>
    </form>
  );
};

export default RegisterWizard;
