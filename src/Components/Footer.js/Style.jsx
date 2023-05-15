import { createUseStyles } from "react-jss";

const Style = createUseStyles((theme) => ({
  keyWord: {
    fontSize: "12px",
    backgroundColor: "rgba(196, 196, 196, 0.19)",
    border: "none",
    padding: "6px 30px",
  },
  container: {
    backgroundColor: theme.colors.background,
    padding: "40px",
  },
  searchInput: {
    maxWidth: "200px",
  },

  rowBorder: {
    "& :not(:last-child)": {
      borderRight: "1px solid white",
      "@media (max-width: 768px)": {
        borderRight: "none",
        borderBottom: "1px solid white",
      },
    },
  },
  colWidth: {
    minWidth: "260px",
    maxWidth: "270px",
    padding: "10px",
    borderBottom: "none",
    "& :not(:last-child)": {
      border: "none",
    },
  },
}));

export default Style;
