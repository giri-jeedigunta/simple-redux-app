export default (state, action) => {
  console.log("Reducer");
  switch (action.type) {
    case "rotate":
      return { rotating: action.payload };
    default:
      return state;
  }
};
