export const load_categories = (data) => {
    return{
        type: 'CATEGORIES',
        data
    }
}

export const load_posts = (data) => {
    return{
        type: 'POSTS',
        data
    }
}