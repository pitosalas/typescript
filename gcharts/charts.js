google.load('visualization', '1', {
    packages: ['corechart', 'line']
});
google.setOnLoadCallback(drawLogScales);

function drawLogScales() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'X');
    data.addColumn('number', 'Object Oriented Design');
    data.addColumn('number', 'Source Control');
    data.addColumn('number', 'Ruby on Rails');
    data.addColumn('number', 'Debugging');


    data.addRows([
        [new Date(2015, 2, 11), 2.5, 1.0, 3.5, 4.5],
        [new Date(2015, 3, 11), 4.1, 1.1, 4.2, 4.7],
        [new Date(2015, 4, 11), 5.0, 2.1, 4.5, 4.7],
        [new Date(2015, 5, 11), 5.0, 3.5, 4.5, 4.9],

    ]);

    var options = {
        chartArea: {left:"20%",top: '10%',width:'55%',height:'70%'},
        hAxis: {
            title: 'Survey Number',
            ticks: [new Date(2015, 1, 11),  
                    new Date(2015, 2, 11), 
                    new Date(2015, 3, 11), 
                    new Date(2015, 4, 11), 
                    new Date(2015, 5, 11), 
                    new Date(2015, 6, 11)
                    ],
            gridlines: {color: 'none'}
        },
        vAxis: {
            ticks: [
                {v: 0, f: ""},
                {v: 1, f: "No idea"},
                {v: 2, f: "Can guess"},
                {v: 3, f: "Studied it"},
                {v: 4, f: "understand it"},
                {v: 5, f: "An expert"},
                {v: 6, f: ""}],
            title: 'Mastery',
            gridlines: {color: 'none'},
            width: '100%',
            height: '100%'        },
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}