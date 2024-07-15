import { logger } from './general';
import { logout } from './auth';

const errorHandler = (error = {}, auth = false) => {
  let message = '';
  logger(error);
  if (error) {
    const { response, code } = error || {};

    if (code === 'ERR_NETWORK' || code === 'ECONNABORTED') {
      message = 'Network error. Please, check your internet connection.';
    } else if (response?.status === 401 || response?.status === 403) {
      if (auth) {
        message = 'You are either not authorized to access this resource or your session has expired. Please login again';
        localStorage.setItem('err', message);

        logout();
      } else {
        message = 'Your login credentials are incorrect or you are not authorized to access this resource.';
      }
    } else if (Array.isArray(response?.data?.error)) {
      message = response?.data?.error?.join(', ');
    } else {
      message = response?.data?.msg
      || response?.data?.message
      || response?.data?.error
      || response?.data?.error?.message
      || 'Something went wrong. Please try again';
    }
  } else {
    message = 'Something went wrong. Check your internet connection and try again please.';
  }
  return message.toString();
};

export default errorHandler;
