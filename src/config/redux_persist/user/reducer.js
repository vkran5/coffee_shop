const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return { ...initialState, ...action.payload };
    case 'LOGIN':
      return { ...initialState, ...action.payload };
    default:
      return state;
  }
};
