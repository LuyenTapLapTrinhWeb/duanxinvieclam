$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
    // Create the chart
    Highcharts.stockChart('container', {
        chart: {
            type: 'bar',
            renderTo:'container' 
        },
        rangeSelector: {
            selected: 1
        },
        
        series: [{
            name: 'temperature',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
    
});

