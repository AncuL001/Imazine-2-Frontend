export default defineEventHandler(async (event) => {
    event.context.session.isLoggedIn = false
    event.context.session.user = null
    return event.context.session.isLoggedIn;
})
