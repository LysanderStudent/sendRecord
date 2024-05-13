import React from "react";
import { HeaderComponent } from "../ui/components/HeaderComponent";
import { ContentComponent } from "../ui/components/ContentComponent";

export const BasePage = () => {
  const projectName = "[Nombre del proyecto]";
  return (
    <>
      <HeaderComponent projectName={projectName} />
      <ContentComponent projectName={projectName} />
    </>
  );
};
