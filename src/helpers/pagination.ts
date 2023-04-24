export const pagination = (query) => {

    const page = Number(query.page) || 1
    const limit = Number(query.limit) || Infinity
    const skips = (page - 1) * limit

    return { page, limit, skips }
    
}