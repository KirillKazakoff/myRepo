import _ from 'lodash';

export const initCopy = (movementBook) => {
    const copy = _.cloneDeep(movementBook);
    copy.eachSheet((ws) => {
        if (ws.name !== 'BL') copy.removeWorksheet(ws.name);
    });

    return copy;
};
