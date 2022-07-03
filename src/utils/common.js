export const customAssign = (keysArray, sourceObject, targetObject) => {
    keysArray.map(key => {
        if(sourceObject[key]) {
            targetObject[key] = sourceObject[key]
        }
    })
    return targetObject;
}