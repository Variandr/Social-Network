export const ChangeArrayData = (items, itemName, actionData, updatedData) => {
    return items.map(item => {
        if (item[itemName] === actionData) {
            return {...item, ...updatedData}
        }
        return item;
    })
}