import { useState } from "react";

export const useLanguage = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleIdiomaClick = () => {
    setShowButtons(!showButtons);
  };

  return {
    showButtons,
    handleIdiomaClick
  };
};
