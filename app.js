/* eslint-disable no-param-reassign */
import { read } from './src/read';
import { createWb } from './src/myCreate';

async function app() {
    const { movementBook, dictionaryBook } = await read();

    createWb(movementBook, dictionaryBook);
}

app();
