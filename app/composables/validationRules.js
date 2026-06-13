import { useI18n } from 'vue-i18n'

const ruleRequired = (rule, value, callback) => {
  if (!value) {
    callback(new Error(rule.msg))
  } else {
    callback();
  }
}
export function vRequired() {
  const i18n = useI18n({ useScope: 'global' })
  return { validator: ruleRequired, msg: i18n.t('Поле не может быть пустым') }
}

const requiredList = (rule, value, callback) => {
  if(!(value && value.length)){
    callback(new Error(rule.msg));
  } else {
    callback();
  }
}
export function vRequiredList() {
  const i18n = useI18n({ useScope: 'global' })
  return { validator: requiredList, msg: i18n.t('Пожалуйста, выберите хотя бы одно значение') }
}

const requiredNotNull = (rule, value, callback) => {
  if((value == null || value == '') && value != 0){
    callback(new Error(rule.msg));
  } else {
    callback();
  }
}
export function vRequiredGender() {
  const i18n = useI18n({ useScope: 'global' })
  return { validator: requiredNotNull, msg: i18n.t('Поле не может быть пустым') }
}

var requiredNumber = (rule, value, callback) => {
  if(!Number(value) > 0){
    callback(new Error(rule.msg));
  } else {
    callback();
  }
};
export function vRequiredNumber() {
  const i18n = useI18n({ useScope: 'global' })
  return { validator: requiredNumber, msg: i18n.t('Поле не может быть пустым') }
}
export function vConfomPass(pass) {
  const i18n = useI18n({ useScope: 'global' })
  return { validator: compare, pass: pass, msg: i18n.t('Пожалуйста, введите пароль еще раз') }
}
var compare = (rule, value, callback) => {
  if (value != rule.pass) {
    callback(new Error(rule.msg));
  } else {
    callback();
  }
};

var requiredRadio = (rule, value, callback) => {
  if(!value && !(typeof value == 'boolean')){
    callback(new Error($nuxt.$t(rule.msg)));
  } else {
    callback();
  }
};
export function vRequiredRadio(){
  const i18n = useI18n({ useScope: 'global' })
  return { validator: requiredRadio, msg: i18n.t('Пожалуйста, выберите одно значение') }
} 