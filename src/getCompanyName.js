export const getCompanyName = (exportStorageWs, blIdCell) => {
    const headers = exportStorageWs.getRow(1);

    let blNoHeaderCell;
    let prodavecHeaderCell;
    headers.eachCell((cell) => {
        if (cell.value === 'BL No') blNoHeaderCell = cell;
        if (cell.value === 'Продавец') prodavecHeaderCell = cell;
    });

    const blCol = exportStorageWs.getColumn(blNoHeaderCell.col);

    let foundBlCell;
    blCol.eachCell((cell) => {
        if (cell.value === blIdCell.value) {
            foundBlCell = cell;
        }
    });

    const companyName = exportStorageWs.getCell(foundBlCell.row, prodavecHeaderCell.col);

    return companyName.value;
};
