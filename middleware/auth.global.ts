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

  console.log(!auth.isLoggedIn)
  console.log(to.path != '/')

  if (!auth.isLoggedIn && to.path != '/') {
    console.log('test')
    return navigateTo('/', { redirectCode: 401 })
  }

  if (auth.isLoggedIn && to.path == '/login') {
    return navigateTo('/', { redirectCode: 401 })
  }
})
  