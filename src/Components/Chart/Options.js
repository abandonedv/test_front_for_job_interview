export const default_options = {
    data: [],
    series: [
        {
            type: 'line',
            xKey: 'date',
            yKey: 'cost',
        },
    ],
    axes: [
        {
            type: 'category',
            position: 'bottom',
        },
        {
            type: 'number',
            position: 'left',
            label: {
                format: '.0f',
            },
            tick: {
                count: 10,
            },
        },
    ],
    legend: {
        enabled: false,
    },
};
