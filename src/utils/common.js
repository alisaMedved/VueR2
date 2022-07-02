export const customAssign = (keysArray, sourceObject, targetObject) => {
    keysArray.map(key => {
        console.log('sourceObject[key] ', sourceObject[key]);
        console.log('key ', key);
        console.log('targetObject ', targetObject);
        if(sourceObject[key]) {
            targetObject[key] = sourceObject[key]
        }
    })
    return targetObject;
}