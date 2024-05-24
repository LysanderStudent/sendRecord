export const colorTheme = "#1a202c";
export const backgroundTranscriptionOptionsStyle = '#F3F4F6';
export const colorTextOptionsStyle = '#9CA3AF';

export const langugeButtonStyle = {
  color: "white",
  backgroundColor: colorTheme,
  borderRadius: 50,
  fontWeight: "bold",
  borderWidth: 0,
};

export const langugeSelectedStyle = {
  color: colorTheme,
  backgroundColor: "white",
  borderRadius: 50,
  fontWeight: "bold",
  borderWidth: 0,
};

const buttonOptionStyle = "flex items-center px-8 py-5 m-0 border-0 transition duration-300 ease-in-out";

export const activeStyle = `${buttonOptionStyle} bg-white text-black font-bold`;
export const inactiveStyle = `${buttonOptionStyle} bg-gray-200 text-[#666666]`;

export const textAreaTrancriptionStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "start"
}

export const textAreaStyle = {
  resize: "none",
  height: 400
}

export const removeStylesButtonAntd = {
  border: 0,
  boxShadow: 'none'
}

export const draggerStyle = {
  background: backgroundTranscriptionOptionsStyle,
  color: colorTextOptionsStyle
}

export const cardRecordStyle = {
  backgroundColor: backgroundTranscriptionOptionsStyle,
  textAlign: "center",
  padding: 40
}

export const buttonStartRecordStyle = {
  ...removeStylesButtonAntd,
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  height: '50%',
  marginBottom: 10
}

export const textRecordStyle = {
  textAlign: "center",
  color: "#6B7280"
}