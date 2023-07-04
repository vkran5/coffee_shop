export const registerAction = (data) => {
  console.log(data);
  return {
    type: 'REGISTER',
    payload: data,
  };
};
