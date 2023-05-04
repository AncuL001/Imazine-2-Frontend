export default defineNuxtRouteMiddleware(async (to, from) => {
  const {
    session,
    refresh,
    remove,
    reset,
    update,
    overwrite
  } = await useSession()
  
  const auth = useAuth()
  auth.isLoggedIn = session.value?.isLoggedIn || false
  auth.user = session.value?.user || null

  if (!auth.isLoggedIn && to.path != '/') {
    return navigateTo('/', { redirectCode: 401 })
  }

  if (auth.isLoggedIn && to.path == '/login') {
    return navigateTo('/', { redirectCode: 401 })
  }
})
  