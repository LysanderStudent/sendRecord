const colorTheme = "#1a202c";
const backgroundTranscriptionOptionsStyle = '#F3F4F6';
const colorTextOptionsStyle = '#9CA3AF';

export const headerStyle = {
  height: 220,
  backgroundColor: colorTheme,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const textStyle = {
  color: "#fff",
  fontWeight: "bold",
};

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

export const buttonsOption = {
  padding: 5,
  backgroundColor: "#EAEAEA",
  borderRadius: 10,
};

const buttonOptionStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  margin: 0,
  border: "none",
  transition: "background-color 0.3s, color 0.3s",
};

export const activeStyle = {
  ...buttonOptionStyle,
  backgroundColor: "white",
  color: "black",
  border: 0,
};

export const inactiveStyle = {
  ...buttonOptionStyle,
  backgroundColor: "#EAEAEA",
  color: "#666666",
  border: 0,
};

export const RowTranscriptionOptionsStyle = {
  display: "flex",
  justifyContent: "center",
  height: 400
}

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