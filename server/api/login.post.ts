export default defineEventHandler(async (event) => {
    event.context.session.isLoggedIn = true
    event.context.session.user = {
        id: 'aaaaaa',
        name: 'Fauzan Azmi Dwicahyo',
        npm: '140810200030',
        profile_picture_link: 'https://a.ppy.sh/2449200?1624766977.jpeg',
        email: 'fauzan.azmi01@gmail.com',
        is_admin: true,
        has_article_edit_access: [
            {
                'id': 1,
                'name': 'Big Category'
            }
        ]
    }
    return event.context.session.isLoggedIn;
})