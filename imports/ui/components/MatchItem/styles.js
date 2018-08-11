const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "white"
  },
  matchItem: {
    borderBottom: "1px solid #9E9E9E",
    height: "15rem"
  },
  avatar: {
    borderRadius: "5rem",
    height: "10vh",
    width: "18vw"
  },
  matchName: {
    fontSize: "5rem"
  },
  matchDate: {
    position: "relative",
    top: "30px",
    fontSize: "2rem"
  },
  matchEmail: {
    position: "absolute",
    fontSize: "2rem",
    right: "30px",
    top: "6rem"
  }
});

export default styles;
