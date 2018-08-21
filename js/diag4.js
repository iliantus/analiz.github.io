google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Profit'],
          ['2014', 200],
          ['2015', 250],
          ['2016', 300],
          ['2017', 350]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('air4'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Profit'],
          ['2014', 200],
          ['2015', 250],
          ['2016', 300],
          ['2017', 350],
            ['2018', 250],
          ['2019', 300],
          ['2020', 350]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('air41'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Profit'],
          ['2014', 200],
          ['2015', 250],
          ['2016', 300],
          ['2017', 350],
            ['2018', 250],
          ['2019', 300],
          ['2020', 350]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('air42'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }