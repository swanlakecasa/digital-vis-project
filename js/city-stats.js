/* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */

  ////////////////////////////////////////////////////////////// 
  //////////////////////// Set-Up ////////////////////////////// 
  ////////////////////////////////////////////////////////////// 

  var margin = {
      top: 100,
      right: 150,
      bottom: 200,
      left: 100
    },
    width = (window.innerWidth * 0.5) - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;

  ////////////////////////////////////////////////////////////// 
  ////////////////////////// Data ////////////////////////////// 
  ////////////////////////////////////////////////////////////// 
  var cityStats = [
    [{
      axis: "City",
      value: "Beijing"
    }, {
      axis: "Greater Population ('000)",
      value: 20186
    }, {
      axis: "Greater Area (km2)",
      value: 16411
    }, {
      axis: "Greater Density (Persons/km 2)",
      value: 1230
    }, {
      axis: "City Population (‘000)",
      value: 12014
    }, {
      axis: "City Area (km2)",
      value: 1368
    }, {
      axis: "City Density (Persons/km 2)",
      value: 8780
    }, {
      axis: "Rail length (km)",
      value: 456
    }, {
      axis: "Public bus fleet size",
      value: 21628
    }, {
      axis: "Rail length (km) per million persons",
      value: 38
    }, {
      axis: "No. of rail stations per km 2 of land area",
      value: 0
    }, {
      axis: "Public buses per million persons",
      value: 1071
    }, {
      axis: "Daily ridership ('000) Rail and LRT)",
      value: 6008
    }, {
      axis: "Daily ridership ('000) Public bus",
      value: 13788
    }, {
      axis: "Road density (km of km2)",
      value: 2
    }, {
      axis: "Motor Vehicles (‘000)",
      value: 4983
    }, {
      axis: "Private cars (‘000)",
      value: 2862
    }, {
      axis: "Private cars per 100 persons",
      value: 14
    }],
    [{
      axis: "City",
      value: "London"
    }, {
      axis: "Greater Population ('000)",
      value: 8302
    }, {
      axis: "Greater Area (km2)",
      value: 1572
    }, {
      axis: "Greater Density (Persons/km 2)",
      value: 5281
    }, {
      axis: "City Population (‘000)",
      value: 8302
    }, {
      axis: "City Area (km2)",
      value: 1572
    }, {
      axis: "City Density (Persons/km 2)",
      value: 5281
    }, {
      axis: "Rail length (km)",
      value: 436
    }, {
      axis: "Public bus fleet size",
      value: 7500
    }, {
      axis: "Rail length (km) per million persons",
      value: 53
    }, {
      axis: "No. of rail stations per km 2 of land area",
      value: 0
    }, {
      axis: "Public buses per million persons",
      value: 903
    }, {
      axis: "Daily ridership ('000) Rail and LRT)",
      value: 3641
    }, {
      axis: "Daily ridership ('000) Public bus",
      value: 6397
    }, {
      axis: "Road density (km of km2)",
      value: 9
    }, {
      axis: "Motor Vehicles (‘000)",
      value: 2934
    }, {
      axis: "Private cars (‘000)",
      value: 2535
    }, {
      axis: "Private cars per 100 persons",
      value: 31
    }],
    [{
      axis: "City",
      value: "Madrid"
    }, {
      axis: "Greater Population ('000)",
      value: 3249
    }, {
      axis: "Greater Area (km2)",
      value: 604
    }, {
      axis: "Greater Density (Persons/km 2)",
      value: 5377
    }, {
      axis: "City Population (‘000)",
      value: 3249
    }, {
      axis: "City Area (km2)",
      value: 604
    }, {
      axis: "City Density (Persons/km 2)",
      value: 5377
    }, {
      axis: "Rail length (km)",
      value: 292
    }, {
      axis: "Public bus fleet size",
      value: 2095
    }, {
      axis: "Rail length (km) per million persons",
      value: 90
    }, {
      axis: "No. of rail stations per km 2 of land area",
      value: 0
    }, {
      axis: "Public buses per million persons",
      value: 645
    }, {
      axis: "Daily ridership ('000) Rail and LRT)",
      value: 1644
    }, {
      axis: "Daily ridership ('000) Public bus",
      value: 1169
    }, {
      axis: "Road density (km of km2)",
      value: 5
    }, {
      axis: "Motor Vehicles (‘000)",
      value: 1687
    }, {
      axis: "Private cars (‘000)",
      value: 1330
    }, {
      axis: "Private cars per 100 persons",
      value: 41
    }],
    [{
      axis: "City",
      value: "New York"
    }, {
      axis: "Greater Population ('000)",
      value: 8337
    }, {
      axis: "Greater Area (km2)",
      value: 790
    }, {
      axis: "Greater Density (Persons/km 2)",
      value: 10553
    }, {
      axis: "City Population (‘000)",
      value: 8337
    }, {
      axis: "City Area (km2)",
      value: 790
    }, {
      axis: "City Density (Persons/km 2)",
      value: 10553
    }, {
      axis: "Rail length (km)",
      value: 373
    }, {
      axis: "Public bus fleet size",
      value: 4344
    }, {
      axis: "Rail length (km) per million persons",
      value: 45
    }, {
      axis: "No. of rail stations per km 2 of land area",
      value: 1
    }, {
      axis: "Public buses per million persons",
      value: 521
    }, {
      axis: "Daily ridership ('000) Rail and LRT)",
      value: 4521
    }, {
      axis: "Daily ridership ('000) Public bus",
      value: 1825
    }, {
      axis: "Road density (km of km2)",
      value: 13
    }, {
      axis: "Motor Vehicles (‘000)",
      value: 1978
    }, {
      axis: "Private cars (‘000)",
      value: 1777
    }, {
      axis: "Private cars per 100 persons",
      value: 21
    }],
    [{
      axis: "City",
      value: "Shanghai"
    }, {
      axis: "Greater Population ('000)",
      value: 23475
    }, {
      axis: "Greater Area (km2)",
      value: 6341
    }, {
      axis: "Greater Density (Persons/km 2)",
      value: 3702
    }, {
      axis: "City Population (‘000)",
      value: 14679
    }, {
      axis: "City Area (km2)",
      value: 1871
    }, {
      axis: "City Density (Persons/km 2)",
      value: 7847
    }, {
      axis: "Rail length (km)",
      value: 454
    }, {
      axis: "Public bus fleet size",
      value: 16235
    }, {
      axis: "Rail length (km) per million persons",
      value: 31
    }, {
      axis: "No. of rail stations per km 2 of land area",
      value: 0
    }, {
      axis: "Public buses per million persons",
      value: 692
    }, {
      axis: "Daily ridership ('000) Rail and LRT)",
      value: 5756
    }, {
      axis: "Daily ridership ('000) Public bus",
      value: 7592
    }, {
      axis: "Road density (km of km2)",
      value: 3
    }, {
      axis: "Motor Vehicles (‘000)",
      value: 3280
    }, {
      axis: "Private cars (‘000)",
      value: 989
    }, {
      axis: "Private cars per 100 persons",
      value: 4
    }],
    [{
      axis: "City",
      value: "Singapore"
    }, {
      axis: "Greater Population ('000)",
      value: 5312
    }, {
      axis: "Greater Area (km2)",
      value: 716
    }, {
      axis: "Greater Density (Persons/km 2)",
      value: 7422
    }, {
      axis: "City Population (‘000)",
      value: 5312
    }, {
      axis: "City Area (km2)",
      value: 716
    }, {
      axis: "City Density (Persons/km 2)",
      value: 7422
    }, {
      axis: "Rail length (km)",
      value: 178
    }, {
      axis: "Public bus fleet size",
      value: 4212
    }, {
      axis: "Rail length (km) per million persons",
      value: 34
    }, {
      axis: "No. of rail stations per km 2 of land area",
      value: 0
    }, {
      axis: "Public buses per million persons",
      value: 793
    }, {
      axis: "Daily ridership ('000) Rail and LRT)",
      value: 2649
    }, {
      axis: "Daily ridership ('000) Public bus",
      value: 3481
    }, {
      axis: "Road density (km of km2)",
      value: 5
    }, {
      axis: "Motor Vehicles (‘000)",
      value: 970
    }, {
      axis: "Private cars (‘000)",
      value: 535
    }, {
      axis: "Private cars per 100 persons",
      value: 10
    }],
    [{
      axis: "City",
      value: "Sydney"
    }, {
      axis: "Greater Population ('000)",
      value: 4667
    }, {
      axis: "Greater Area (km2)",
      value: 12368
    }, {
      axis: "Greater Density (Persons/km 2)",
      value: 377
    }, {
      axis: "City Population (‘000)",
      value: 1721
    }, {
      axis: "City Area (km2)",
      value: 594
    }, {
      axis: "City Density (Persons/km 2)",
      value: 2899
    }, {
      axis: "Rail length (km)",
      value: 329
    }, {
      axis: "Public bus fleet size",
      value: 2213
    }, {
      axis: "Rail length (km) per million persons",
      value: 71
    }, {
      axis: "No. of rail stations per km 2 of land area",
      value: 0
    }, {
      axis: "Public buses per million persons",
      value: 474
    }, {
      axis: "Daily ridership ('000) Rail and LRT)",
      value: 829
    }, {
      axis: "Daily ridership ('000) Public bus",
      value: 625
    }, {
      axis: "Road density (km of km2)",
      value: 0
    }, {
      axis: "Motor Vehicles (‘000)",
      value: 2626
    }, {
      axis: "Private cars (‘000)",
      value: 2626
    }, {
      axis: "Private cars per 100 persons",
      value: 56
    }],
    [{
      axis: "City",
      value: "Tokyo"
    }, {
      axis: "Greater Population ('000)",
      value: 13277
    }, {
      axis: "Greater Area (km2)",
      value: 2189
    }, {
      axis: "Greater Density (Persons/km 2)",
      value: 6066
    }, {
      axis: "City Population (‘000)",
      value: 9050
    }, {
      axis: "City Area (km2)",
      value: 622
    }, {
      axis: "City Density (Persons/km 2)",
      value: 14550
    }, {
      axis: "Rail length (km)",
      value: 304
    }, {
      axis: "Public bus fleet size",
      value: 1462
    }, {
      axis: "Rail length (km) per million persons",
      value: 34
    }, {
      axis: "No. of rail stations per km 2 of land area",
      value: 0
    }, {
      axis: "Public buses per million persons",
      value: 162
    }, {
      axis: "Daily ridership ('000) Rail and LRT)",
      value: 8715
    }, {
      axis: "Daily ridership ('000) Public bus",
      value: 554
    }, {
      axis: "Road density (km of km2)",
      value: 19
    }, {
      axis: "Motor Vehicles (‘000)",
      value: 2117
    }, {
      axis: "Private cars (‘000)",
      value: 1641
    }, {
      axis: "Private cars per 100 persons",
      value: 18
    }],
    [{
      axis: "City",
      value: "Vienna"
    }, {
      axis: "Greater Population ('000)",
      value: 1757
    }, {
      axis: "Greater Area (km2)",
      value: 415
    }, {
      axis: "Greater Density (Persons/km 2)",
      value: 4235
    }, {
      axis: "City Population (‘000)",
      value: 1757
    }, {
      axis: "City Area (km2)",
      value: 415
    }, {
      axis: "City Density (Persons/km 2)",
      value: 4235
    }, {
      axis: "Rail length (km)",
      value: 74
    }, {
      axis: "Public bus fleet size",
      value: 496
    }, {
      axis: "Rail length (km) per million persons",
      value: 42
    }, {
      axis: "No. of rail stations per km 2 of land area",
      value: 0
    }, {
      axis: "Public buses per million persons",
      value: 282
    }, {
      axis: "Daily ridership ('000) Rail and LRT)",
      value: 1608
    }, {
      axis: "Daily ridership ('000) Public bus",
      value: 323
    }, {
      axis: "Road density (km of km2)",
      value: 7
    }, {
      axis: "Motor Vehicles (‘000)",
      value: 838
    }, {
      axis: "Private cars (‘000)",
      value: 679
    }, {
      axis: "Private cars per 100 persons",
      value: 39
    }],
    [{
      axis: "City",
      value: "Warsaw"
    }, {
      axis: "Greater Population ('000)",
      value: 1709
    }, {
      axis: "Greater Area (km2)",
      value: 517
    }, {
      axis: "Greater Density (Persons/km 2)",
      value: 3303
    }, {
      axis: "City Population (‘000)",
      value: 1709
    }, {
      axis: "City Area (km2)",
      value: 517
    }, {
      axis: "City Density (Persons/km 2)",
      value: 3303
    }, {
      axis: "Rail length (km)",
      value: 23
    }, {
      axis: "Public bus fleet size",
      value: 1561
    }, {
      axis: "Rail length (km) per million persons",
      value: 14
    }, {
      axis: "No. of rail stations per km 2 of land area",
      value: 0
    }, {
      axis: "Public buses per million persons",
      value: 914
    }, {
      axis: "Daily ridership ('000) Rail and LRT)",
      value: 362
    }, {
      axis: "Daily ridership ('000) Public bus",
      value: 1346
    }, {
      axis: "Road density (km of km2)",
      value: 4
    }, {
      axis: "Motor Vehicles (‘000)",
      value: 1187
    }, {
      axis: "Private cars (‘000)",
      value: 957
    }, {
      axis: "Private cars per 100 persons",
      value: 56
    }]
  ];
  ////////////////////////////////////////////////////////////// 
  //////////////////// Draw the Chart ////////////////////////// 
  ////////////////////////////////////////////////////////////// 
  var names = [];
  var activated = [0,1];
  var color = d3.scale.category10();
  var lis = cityStats.map(function(city, i) {
    return '<li class="active" id="menu-' + i + '"><span class="icon" style="background:' + color(i) + '"></span>' + city[0].value + '</li>';
  }).join('');
  d3.select('.key').append('ul').html(lis);
  d3.select('.key').selectAll('ul').selectAll('li').on('mouseover', function() {
    if(activated.length > 0) {
    } else {
      var id = d3.select(this).attr('id').replace('menu-', '');
      d3.selectAll('path').style('fill-opacity', 0.1);
      d3.selectAll('#path-' + id).style('fill-opacity', 1);
      d3.selectAll('.key ul li').attr('class', '');
      d3.select(this).attr('class', 'active');
    }
    // displayInfo(id);
  }).on('mouseout', function() {
    if(activated.length > 0) {
      
    } else {
      d3.selectAll('path').style('fill-opacity', 0.3);
      d3.selectAll('.key ul li').attr('class', 'active');
    }
    // hideInfo();
  }).on('click', function() {
    var id = d3.select(this).attr('id').replace('menu-', '');
    // activated?
    if(activated.indexOf(id) > -1) {
      // yes - turn off
      activated.splice(activated.indexOf(id), 1);
    } else {
      // no - turn on, hide those that aren't activated      
      activated.push(id);
    }
    if(activated.length > 0) {
      d3.selectAll('path').style('fill-opacity', 0);
    } else {
      d3.selectAll('path').style('fill-opacity', 0.3);
    }
    d3.selectAll('.key ul li').attr('class', '');
    activated.forEach(function(aid){
      d3.selectAll('#path-' + aid).style('fill-opacity', 0.7);
      d3.selectAll('#menu-' + aid).attr('class', 'activated');
    }); 
  });

  function displayInfo(id) {
    var html = '';
    c = cityStats[id];
    // console.log(c);
    html = '<h3>' + names[id].value + '</h3>';
    c.forEach(function(attr) {
      html += '<p><span class="one">' + attr.axis + '</span><span class="two">' + attr.originalValue + '</span></p>';
    })
    d3.select('.info').html(html);
    //c.originalValue
  }

  function hideInfo() {

  }

  var radarChartOptions = {
    w: width,
    h: height,
    margin: margin,
    maxValue: 1.0,
    levels: 10,
    roundStrokes: false
  };

  var data = cityStats.map(function(city) {
    names.push(city.shift());
    return city;
  });

  var stats = {};
  cityStats[0].forEach(function(attr, i) {
    // console.log(attr.axis, attr.value);
    stats[attr.axis] = [];
    cityStats.forEach(function(city) {
      stats[attr.axis].push(city[i].value)
    })
  });
  cityStats[0].forEach(function(attr, i) {
    cityStats.forEach(function(city) {
      city[i].originalValue = city[i].value;
      city[i].value = city[i].value / _.max(stats[city[i].axis]);
    })
  });
  // console.log(data);
  //Call function to draw the Radar chart
  RadarChart(".radarChart", data, radarChartOptions);
  d3.selectAll('.radarStroke').style('stroke-opacity', 0);
  d3.selectAll('.radarCircle').style('fill-opacity', 0.3);
  // d3.selectAll('path').style('fill-opacity', 0.3);
  d3.selectAll('path').style('fill-opacity', 0);
  d3.selectAll('.key ul li').attr('class', '');
  activated.forEach(function(aid){
    d3.selectAll('#path-' + aid).style('fill-opacity', 0.7);
    d3.selectAll('#menu-' + aid).attr('class', 'activated');
  }); 