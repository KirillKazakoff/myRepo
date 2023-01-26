// import { read } from './src/read';
import { getCompanyEngName } from './src/getCompanyEngName';
import { getCompanyName } from './src/getCompanyName';
import { createWb } from './src/myCreate';

import { read } from './src/read';

async function app() {
    const { movementBook, dictionaryBook } = await read();

    const blWs = movementBook.getWorksheet('BL');
    const exportStorageWs = movementBook.getWorksheet('export_storage');
    const blIdCell = blWs.getCell('I2');

    const companyName = getCompanyName(exportStorageWs, blIdCell);
    const companyEngName = getCompanyEngName(dictionaryBook, companyName);
    // console.log(companyEngName);
    createWb(movementBook, dictionaryBook);
}

app();
