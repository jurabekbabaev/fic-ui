import axios from 'axios';
import { useLoaderStore } from '@/stores/loader'
export default function apiRequest(options){
  const { $i18n } = useNuxtApp();
  const token = useCookie('access_token');
  const loader = useLoaderStore();
  const config = useRuntimeConfig()
  const router = useRouter()
  const service = axios.create({
    baseURL: config.public.NUXT_API_BASE_URL, 
    timeout: 60000 // request timeout
  });
  
  service.interceptors.request.use(
    config => {
      loader.increase();
      config.headers['X-USER-INDEX'] = getUserIndex();
      config.headers['X-USER-LANG'] = $i18n.locale.value;
      if (token.value) {
        config.headers['Authorization'] = 'Bearer '+token.value;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  service.interceptors.response.use(
    response => {
      loader.decrease();
      const res = response.data;
      if (response.status < 200 || response.status >= 300) {
        return Promise.reject(new Error(res.message || 'Error'));
      }

      return res && Object.prototype.hasOwnProperty.call(res, 'data')
        ? res.data
        : res;
    },
    error => {
      loader.decrease();
      if (error.response && error.response.status === 401) {
        // if(error.response && error.response['data'] && error.response['data']['message'] && error.response['data']['message'] != "Unauthenticated."){
        //   errorsAlert(error.response, $i18n);
        // }
        router.push(`/${$i18n.locale.value}/auth/login`);

        token.value = null;
      }else if(error.response){
        errorsAlert(error.response, $i18n);
      }else{
        netwokErrorAlert(error, $i18n);
      }
      return Promise.reject(error);
    }
  );

  return service(options);
  
}

function getUserIndex() {
  const user_index = useCookie('user_index');
  if(!user_index.value){
    user_index.value = Math.ceil(Math.random() * (99999999999999999999 - 10000000000000000000) + 10000000000000000000);
  }
  return user_index.value;
}

function errorsAlert(response, i18n) {
  const message = response?.data?.message || response?.statusText || 'API error';
  console.error('[apiRequest] API response error:', message, response);
}

function netwokErrorAlert(error, i18n) {
  const message = 'Network error';
  console.error(`[apiRequest] ${message}:`, error);
}
