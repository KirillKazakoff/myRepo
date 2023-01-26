export const getCompanyEngName = (dictionaryBook, companyName) => {
    const prodavecWs = dictionaryBook.getWorksheet('Prodavec');
    const headers = prodavecWs.getRow(1);

    let companyNameHeaderCell;
    let companyNameEngHeaderCell;
    headers.eachCell((cell) => {
        if (cell.value === 'Компания') companyNameHeaderCell = cell;
        if (cell.value === 'Company Name') companyNameEngHeaderCell = cell;
    });

    const companyNameCol = prodavecWs.getColumn(companyNameHeaderCell.col);

    let foundCompanyNameCell;
    companyNameCol.eachCell((cell) => {
        if (cell.value === companyName) {
            foundCompanyNameCell = cell;
        }
    });

    const companyNameEng = prodavecWs.getCell(
        foundCompanyNameCell.row,
        companyNameEngHeaderCell.col,
    );

    return companyNameEng.value;
};
