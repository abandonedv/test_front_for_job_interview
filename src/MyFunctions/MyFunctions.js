export function fillOptions(chartList, options) {

    for (let row of chartList) {
        options.data.push(
            {
                date: row[0] + ". " + row[1],
                cost: row[2]
            });
    }
    return options;
}