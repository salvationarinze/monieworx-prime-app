import moment from 'moment-timezone';

export const toggleScroll = () => {
  const overlays = document.querySelectorAll('.overlay');

  if (overlays.length > 0) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
};

export const formatCurrency = (value, showCurrency = true) => {
  if (value) {
    let val = value;
    val = val ? parseFloat(val).toFixed(2) : 0.00;
    return val === 0
      ? `${showCurrency ? '₦' : ''}0.00`
      : `${showCurrency ? '₦' : ''}${Number(val).toLocaleString('en-US')}`;
  }
  if (value === 0) return `${showCurrency ? '₦' : ''}0`;
  return null;
};

export const formatPercentage = (value) => {
  if (typeof value === 'number') {
    let sign = '';
    if (value > 0) sign = '+';
    else if (value < 0) sign = '-';
    return `${sign}${value}%`;
  }
  if (typeof value === 'string') {
    return `${value}%`;
  }
  return null;
};

export const convertImgToBase64 = (inputFile) => {
  if (inputFile === undefined) return '';
  const file = new FileReader();

  return new Promise((resolve, reject) => {
    file.onerror = () => {
      file.abort();
      reject(new DOMException('Problem parsing input file.'));
    };

    file.onload = () => {
      resolve(file.result);
    };
    file.readAsDataURL(inputFile);
  });
};

export const concealEmail = (email = '') => email.replace(/(?!^).(?=[^@]+@)/g, '*');

export const concealPhone = (value = '') => (value ? value.replace(/\w/g, '*') : '');

export const maskValue = (value = '') => (value ? value.replace(/\w(?=(?:\w){3})/g, '*') : '');

export const truncateText = (value = '', maxLength = 10) => {
  if (!value || typeof value !== 'string') return value;
  const foo = value.slice(0, maxLength);

  return `${foo}${value.length > maxLength ? '...' : ''}`;
};

export const logger = (...logs) => (process.env.NODE_ENV === 'development'
  ? console.log(...logs, `(Log time - ${moment().format('LLL')})`)
  : undefined);

export const format2Digits = (num) => {
  if (typeof num !== 'number' || Number.isNaN(num)) return 0;

  return num.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) || 0;
};

export const capitalize = (text = '') => {
  const val = decodeURIComponent(text);
  return val?.split(' ')?.map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`).join(' ');
};
