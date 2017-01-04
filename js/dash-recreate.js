//All text box are teal and when you click on others turn grey.

// function animation {
//     $(function () {
//         var renderer = new Highcharts.Renderer(
//                 $('#container')[0],
//                 400, //width
//                 300 //height
//             ),
//             rect = renderer.rect(100, 100, 100, 100, 5)
//                 .attr({
//                     'stroke-width': 2,
//                     stroke: 'gray',
//                     fill: 'silver',
//                     zIndex: 3
//                 })
//                 .on('click', function () {
//                     rect.animate({
//                         x: 50,
//                         y: 50,
//                         width: 200,
//                         height: 20,
//                         'stroke-width': 10
//                     });
//                 })
//                 .add();
//     })
// };


// var load_data = function(config, data){ //he said this is their signiature
// 	console.log(JSON.parse(data)); //something like this...
// }

//ask him for that js example chart he showed me.

// $(document).ready(function() {

//     var options = {
//         chart: {
//             renderTo: 'container',
//             type: 'spline'
//         },
//         series: [{}]
//     };



//     $.getJSON('data/csudh_freshman.json', function(data) {
//         var json_ = JSON.parse("")
//         console.log(json_.trendData.year)
        
//         options.series[0].data = data;
//         var chart = new Highcharts.Chart(options);
//     });

// });

 $(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'line' //spline to line?
        },
        legend: {
                title: {
                    text: "(Click to show/hide items.)",
                style: {
                        "fontStyle":"italic",
                    "fontWeight":"light"
                }
            }
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
        },
        yAxis: {
                title: {
                    text: null
            },
            labels: {
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            line: {
                marker: {
                    radius: 4,
                    lineColor: '#FFFFFF'
                },
                color: '#555555'
            }
        },
        series: [{
            name: '4 Year Grad Major',
            color: '#8ED8F7',
            marker: {
                symbol: 'circle'
            },
            data:[null,null,null,null,null,null,null,null,null,null,null,14,null,null,null]}, {

            name: '4 Year Grad Campus',
            dashStyle: 'Dot',
            color: '#8ED8F7',
            marker: {
                symbol: 'diamond'
            },
            data:[6,5,4,5,5,6,4,4,5,6,5,6,null,null,null]}, {

            name: '6 Year Grad Major',
            marker: {
                symbol: 'square'
            },
            data:[35,38,34,28,35,22,29,31,30,37,28,null,null,null]}, {

            name: '6 Year Grad Campus',
            dashStyle: 'Dot',
            marker: {
                symbol: 'triangle'
            },
            data:[33,28,34,35,31,24,28,30,32,35,27,null,null,null]}
        ]
    });
});


