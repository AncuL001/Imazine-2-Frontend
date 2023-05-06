export default defineNuxtRouteMiddleware(async (to, from) => {
  const {
    session,
    refresh,
    remove,
    reset,
    update,
    overwrite
  } = await useSession()
  
  const isLoggedIn = session.value?.isLoggedIn || false

  if (!isLoggedIn && to.path != '/') {
    return navigateTo('/', { redirectCode: 401 })
  }

  if (isLoggedIn && to.path == '/login') {
    return navigateTo('/', { redirectCode: 401 })
  }
})
  