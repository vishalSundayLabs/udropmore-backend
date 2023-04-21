export const bodyTraverse = (data, body) => {
    for (let key in body) {
        if (body[key]) {
           data[key] = body[key]
        }
    }
}