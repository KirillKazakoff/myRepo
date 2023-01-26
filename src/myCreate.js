import _ from 'lodash';

export const createWb = async (movementBook, dictionaryBook) => {
    const blWs = movementBook.getWorksheet('BL');

    const copy = _.cloneDeep(movementBook);
    // console.log(copy);
    await copy.xlsx.writeFile('exported.xlsx');
};
