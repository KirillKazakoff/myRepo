import ExcelJS from 'exceljs';

export const read = async () => {
    const movement = new ExcelJS.Workbook();
    const dictionary = new ExcelJS.Workbook();

    await movement.xlsx.readFile('../../Excel/Движение продукции(Асача30).xlsm');
    await dictionary.xlsx.readFile(
        '../../../Library/Mobile Documents/com~apple~CloudDocs/Конспираторы/ОВЭД/БД Производство/Справочники.xlsx'
    );
    const bl = movement.getWorksheet('BL');

    const name = bl.getCell('A2');
    console.log(name);
};
