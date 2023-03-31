import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { features } from "~/constants";
import { styles } from "~/components/layout/styles";

const Features: React.FC = () => {
  return (
    <div className={`${styles.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <Feature key={feature.id} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature: React.FC<{
  icon: IconDefinition;
  title: string;
  content: string;
  index: number;
}> = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row rounded-[20px] p-6 ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div className={`h-[64px] w-[64px] rounded-full ${styles.flexCent}`}>
        <FontAwesomeIcon
          icon={icon}
          size="xl"
          style={{ color: "#ffffff" }}
          className={`rounded-lg ${styles.btnGrd} object-contain p-3`}
        />
      </div>
      <div className="ml-3 flex flex-1 flex-col">
        <h4 className="mb-1 text-[18px] font-semibold leading-[23.4px] text-white">
          {title}
        </h4>
        <p className="text-[16px] font-normal leading-[24px] text-td-gry-0">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Features;
