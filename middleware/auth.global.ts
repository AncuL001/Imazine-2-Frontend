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

  if (isLoggedIn) {
    const response = await $fetch("https://21337.live.reon.my.id/me", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${session.value?.apiKey}`
      },
      async onResponse({ request, response, options }) {}
    })
    .catch((error) => error.data)

    update({user: response})
  }

  if (isLoggedIn && to.path == '/login') {
    return navigateTo('/', { redirectCode: 401 })
  }
})
  