export const checkStatus = status => {
  if (status) {
    return 'online';
  } else {
    return 'offline';
  }
};
