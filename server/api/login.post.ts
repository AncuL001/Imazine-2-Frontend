export default defineEventHandler(async (event) => {
    event.context.session.isLoggedIn = true
    return event.context.session.isLoggedIn;
})