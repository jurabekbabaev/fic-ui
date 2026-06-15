import { useI18n } from 'vue-i18n'

export function price(value, decimal = 0) {
  const val = (value / 1).toFixed(decimal).replace(' ', ',');
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function t(object, column_param = 'name') {
  const i18n = useI18n({ useScope: 'global' })
  if(object && typeof object == 'object'){
    if(!column_param) column_param = 'name';
    var column = `${column_param}_${i18n.locale.value}`
    if(object[column]){
      return object[column]
    }
    if(i18n.locale.value == 'oz'){
      column = `${column_param}_uz`;
      return object[column]?object[column]:''
    }
  }
  if(typeof object == 'string'){
    return object;
  }
  return '';
}
const monthsRu = {
  0: "Январь",
  1: "Февраль",
  2: "Март",
  3: "Апрель",
  4: "Май",
  5: "Июнь",
  6: "Июль",
  7: "Август",
  8: "Сентябрь",
  9: "Октябрь",
  10: "Ноябрь",
  11: "Декабрь",
};
const monthsEn = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};
const monthsUz = {
  0: "Yanvar",
  1: "Fevral",
  2: "Mart",
  3: "Aprel",
  4: "May",
  5: "Iyun",
  6: "Iyul",
  7: "Avgust",
  8: "Sentyabr",
  9: "Oktyabr",
  10: "Noyabr",
  11: "Dekabr",
};
const monthsCryl = {
  0: "Январ",
  1: "Феврал",
  2: "Март",
  3: "Апрел",
  4: "Май",
  5: "Июн",
  6: "Июл",
  7: "Август",
  8: "Сентябр",
  9: "Октябр",
  10: "Ноябр",
  11: "Декабр",
};
const monthsRus = {
  0: "Января",
  1: "Февраля",
  2: "Марта",
  3: "Апреля",
  4: "Мая",
  5: "Июня",
  6: "Июля",
  7: "Августа",
  8: "Сентября",
  9: "Октября",
  10: "Ноября",
  11: "Декабря",
};
export function date(val, format = 'DD.MM.YYYY HH:mm:ss') {
  const i18n = useI18n({ useScope: 'global' })
  if(val){
    let value = val
    if (val.search("T")>0) {
      value = val.replace("T",' ').slice(0, 19)
    } else if (val.search("-")) {
      value = val.replace(/-/g,'/')
    }
    
    let dateClass = value != "" ? new Date(value) : new Date();
    if (format.search("YYYY") >= 0) {
      format = format.replace("YYYY", String(dateClass.getFullYear()));
    }
    if (format.search("MM") >= 0) {
      let monthInt = dateClass.getMonth() + 1;
      let month = monthInt > 9 ? monthInt : ("0" + monthInt);
      format = format.replace("MM", String(month));
    }
    if (format.search("DD") >= 0) {
      let day = dateClass.getDate() > 9 ? dateClass.getDate() : ("0" + dateClass.getDate());
      format = format.replace("DD", String(day));
    }
    if (format.search("DAY") >= 0) {
      format = format.replace("DAY", String(dateClass.getDate()));
    }
    if (format.search("HH") >= 0) {
      let hours = dateClass.getHours() > 9 ? dateClass.getHours() : ("0" + dateClass.getHours());
      format = format.replace("HH", String(hours));
    }
    if (format.search("mm") >= 0) {
      let minutes = dateClass.getMinutes() > 9 ? dateClass.getMinutes() : ("0" + dateClass.getMinutes());
      format = format.replace("mm", String(minutes));
    }
    if (format.search("ss") >= 0) {
      let seconds = dateClass.getSeconds() > 9 ? dateClass.getSeconds() : ("0" + dateClass.getSeconds());
      format = format.replace("ss", String(seconds));
    }
    if (format.search("MNTHS") >= 0) {
      let monthInt = dateClass.getMonth();
      let monthName = String(dateClass.getMonth());
      switch(i18n.locale.value){
        case 'ru':
          monthName = String(monthsRus[monthInt]).toLowerCase()
          break;
        case 'uz':
          monthName = String(monthsUz[monthInt]).toLowerCase();
          break;
        case 'en':
          monthName = String(monthsEn[monthInt]).toLowerCase();
          break;
        default: 
          monthName = String(monthsCryl[monthInt]).toLowerCase();
          break;
      }
      format = format.replace("MNTHS", monthName)
    }
    if (format.search("MONTH") >= 0) {
      let monthInt = dateClass.getMonth();
      let monthName = String(dateClass.getMonth());
      switch(i18n.locale.value){
        case 'ru':
          monthName = String(monthsRu[monthInt]).toLowerCase();
          break;
        case 'uz':
          monthName = String(monthsUz[monthInt]).toLowerCase();
          break;
        case 'en':
          monthName = String(monthsEn[monthInt]).toLowerCase();
          break;
        default: 
          monthName = String(monthsCryl[monthInt]).toLowerCase();
          break;
      }
      format = format.replace("MONTH", monthName);
    }
    return format;
  }
  return ""
}

export function monthToYears(monthCount){
  if(monthCount){
    let years = monthCount/12;
    if(!Number.isInteger(years)){
      years = Math.floor(years);
      return {
        year: years,
        month: monthCount - (years*12),
      }
    }else{
      return {
        year: years,
        month: 0,
      }
    }
  }
  return null;
}

export function getResponseText(n){
  const i18n = useI18n({ useScope: 'global' })
  let str1 = i18n.t('n отклик');
  let str2 = i18n.t('n отклика');
  let str5 = i18n.t('n откликов');
  return ((((n%10)==1)&&((n%100)!=11))?(str1):(((((n%10)>=2)&&((n%10)<=4))&&(((n%100)<10)||((n%100)>=20)))?(str2):(str5)))
}
export function getYear(n){
  const i18n = useI18n({ useScope: 'global' })
  let str1 = i18n.t('год');
  let str2 = i18n.t('года');
  let str5 = i18n.t('лет');
  return ((((n%10)==1)&&((n%100)!=11))?(str1):(((((n%10)>=2)&&((n%10)<=4))&&(((n%100)<10)||((n%100)>=20)))?(str2):(str5)))
}
export function getAge(n){
  const i18n = useI18n({ useScope: 'global' })
  let str1 = i18n.t('age год');
  let str2 = i18n.t('age года');
  let str5 = i18n.t('age лет');
  return ((((n%10)==1)&&((n%100)!=11))?(str1):(((((n%10)>=2)&&((n%10)<=4))&&(((n%100)<10)||((n%100)>=20)))?(str2):(str5)))
}
export function getMonthRu(n){
  const i18n = useI18n({ useScope: 'global' })
  let str1 = i18n.t('месяц');
  let str2 = i18n.t('месяца');
  let str5 = i18n.t('месяцев');
  return ((((n%10)==1)&&((n%100)!=11))?(str1):(((((n%10)>=2)&&((n%10)<=4))&&(((n%100)<10)||((n%100)>=20)))?(str2):(str5)))
}
export function firstCharUppercase(string) {
  if (typeof string == 'string' && string.length > 1) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
}
export function clearForLogout(){
  const token = useCookie('access_token');
  token.value = null;
}

// Universal multilingual function for any field (title, name, description, content, etc.)
export function getLocalizedField(item, fieldName = 'title') {
  const i18n = useI18n({ useScope: 'global' })
  if (item && typeof item === 'object') {
    const locale = i18n.locale.value;
    let localizedField = '';
    switch(locale) {
      case 'ru':
        localizedField = `${fieldName}_ru`;
        break;
      case 'en':
        localizedField = `${fieldName}_en`;
        break;
      case 'uz':
        localizedField = `${fieldName}_uz`;
        break;
      default:
        localizedField = `${fieldName}_ru`;
    }
    
    return item[localizedField] || item[`${fieldName}_ru`] || item[fieldName] || '';
  }
  
  if (typeof item === 'string') {
    return item;
  }
  
  return '';
}

export function getLocalizedTitle(item) {
  return getLocalizedField(item, 'title');
} 

export function recursiveCheckObj(parentKey, value, formData) {
  if (typeof value == 'object') {
    if (Array.isArray(value)) {
      value.forEach((child, index) => {
        recursiveCheckObj(`${parentKey}[${index}]`, child, formData);
      });
    } else {
      Object.keys(value || {}).forEach(key => {
        recursiveCheckObj(parentKey + `[${key}]`, value[key], formData);
      })
    }
  } else {
    formData.append(parentKey, value);
  }
}

export function fullPath(path) {
  const config = useRuntimeConfig()
  const prefix = config.public.NUXT_API_BASE_URL_ASSETS
  return prefix+path;
}

// Resolve a static image to a full URL served from the images host (cPanel /images).
// Usage: img('management/image11.png') -> `${imageBaseUrl}/images/management/image11.png`
// Images live ONLY on cPanel under public_html/<domain>/images/ (uploaded manually),
// they are NOT bundled at build time. Base comes from runtimeConfig.public.imageBaseUrl
// (.env NUXT_PUBLIC_IMAGE_BASE_URL, falls back to siteUrl). Kept separate from siteUrl
// so the API/site domain and the image-hosting domain can differ.
export function img(path) {
  const clean = String(path || '').replace(/^\/+/, '')
  let base = ''
  try {
    const cfg = useRuntimeConfig().public
    base = cfg.imageBaseUrl || cfg.siteUrl || ''
  } catch (e) {
    base = ''
  }
  base = base.replace(/\/+$/, '')
  return `${base}/images/${clean}`
}

export function doc(path) {
  const clean = String(path || '').replace(/^\/+/, '').replace(/^documents\//, '')
  let base = ''
  try {
    const cfg = useRuntimeConfig().public
    base = cfg.imageBaseUrl || cfg.siteUrl || ''
  } catch (e) {
    base = ''
  }
  base = base.replace(/\/+$/, '')
  return `${base}/documents/${clean}`
}