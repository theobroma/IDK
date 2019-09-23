/* eslint-disable */
const format = require('date-fns/format');

const locales = {
  ru: require('date-fns/locale/ru'),
};

// module.exports = function(date, formatStr) {
//   return format(date, formatStr, {
//     locale: locales[window.__localeId__], // or global.__localeId__
//   });
// };

module.exports = format;
