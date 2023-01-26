/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import _ from 'lodash';

export const createWb = async (movementBook, dictionaryBook) => {
    // const blWs = movementBook.getWorksheet('BL');

    const copy = _.cloneDeep(movementBook);
    copy.eachSheet((ws) => {
        if (ws.name !== 'BL') copy.removeWorksheet(ws.name);
    });

    const blWs = copy.getWorksheet('BL');

    blWs.eachRow((row) => row.eachCell((cell) => {
        const { formula } = cell.value;
        if (formula) cell.value = cell.value.result;
    }));
};
