export default defineEventHandler(async (event) => {
    const body = await readMultipartFormData(event);

    if (!body) return false;

    const formData = new FormData()
    formData.append('npm', body[0].data.toString())
    formData.append('password', body[1].data.toString())

    let statusCode;

    interface APIBody {
        message: string
        user: any
    }

    const response = await $fetch<APIBody>("http://127.0.0.1:8080/login", {
        method: "POST",
        body: formData,
        async onResponse({ request, response, options }) {
            statusCode = response.status
        }
    })
    .catch((error) => error.data)

    if (statusCode !== 200) {
        setResponseStatus(event, 400)
        return {
            message: response.message,
        }
    }

    event.context.session.isLoggedIn = true
    event.context.session.user = response.user
    event.context.session.apiKey = response.apiKey

    return {
        message: "Success"
    }
})
