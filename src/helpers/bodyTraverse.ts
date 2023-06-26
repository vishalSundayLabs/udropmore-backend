export const bodyTraverse = (data, body) => {

    for (let key in body) {

        if (body[key] && key != "_id" && key != "__v" && key != "createdAt" && key != "updatedAt") {
            data[key] = body[key]
        }
        
    }

}