export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('access_token');
  if (!token.value && to?.path.indexOf('/auth/login') < 0) {
    abortNavigation();
    const localePath = useLocalePath();
    const toLogin = localePath('/auth/login');
    return navigateTo(toLogin);
  }
});