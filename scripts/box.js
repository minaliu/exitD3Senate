
//create the logic
//make the results area
//make the key + update pattern work.. + the max/min for colorization/filtering.
//turnout section
//mouseovers/tool tips galore

//state value object literals
var stAb = {
    Georgia:'GA',
    Kansas:'KS',
    Iowa:'IA',
    Carolina:'NC',
    Kentucky:'KY' };

var headcutURL = {
    Georgia:'./image/georgia.png',
    Kansas:'./image/kansas.png',
    Iowa:'./image/iowa.png',
    Carolina:'./image/carolina.png',
    Kentucky:'./image/kentucky.png' };

var sData = {
    Georgia:'./data/georgia.json',
    Kansas:'./data/kansas.json',
    Iowa:'./data/iowa.json',
    Carolina:'./data/carolina.json',
    Kentucky:'./data/kentucky.json' };

var sDCans = {
    Georgia:'Michelle Nunn',
    Kansas:'Greg Orman',
    Iowa:'Bruce Braley',
    Carolina:'Sen. Kay Hagan',
    Kentucky:'Alison Lundergan Grimes' };

var sRCans = {
    Georgia:'David Perdue',
    Kansas:'Sen. Pat Roberts',
    Iowa:'Joni Ernst',
    Carolina:'Thom Tillis',
    Kentucky:'Sen. Mitch McConnell' };

//some results hardcoded for non-constant updates
var sWins = {
    Georgia:'D',
    Kansas:'I',
    Iowa:'R',
    Carolina:'D',
    Kentucky:'R' };

var resultsRV = {
    Georgia:'47.2',
    Kansas:'49.3',
    Iowa:'45.3',
    Carolina:'38.9',
    Kentucky:'42.2' }

var resultsDV = {
    Georgia:'48.2',
    Kansas:'49.5',
    Iowa:'41.2',
    Carolina:'49.3',
    Kentucky:'53.3' }


var windowwidth = $( window ).width();
var totalwidth = 0.8 * windowwidth;
var totalheight = 'tk';

var introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var box = d3.select("body").append("div").attr("id","box").style("width",totalwidth + 'px').style("margin-left",totalwidth*0.1 + 'px');

    var header = d3.select("#box").append("div").attr("id","header").style("width",totalwidth + 'px').html("<h1><center>Battle for the Senate</center></h1><br><h3>" + introText + "</h3>");

    var head = d3.select("#box").append("div").attr("id","head").style("width",totalwidth + 'px');
        var button1 = d3.select("#head").append("input").attr("type","button").attr("class","button").attr('value','Kansas')
            .on("click", function() { updateState(this.value); });
        var button2 = d3.select("#head").append("input").attr("type","button").attr("class","button").attr('value','Iowa')
            .on("click", function() { updateState(this.value); });
        var button3 = d3.select("#head").append("input").attr("type","button").attr("class","button").attr('value','Kentucky')
            .on("click", function() { updateState(this.value); });
        var button4 = d3.select("#head").append("input").attr("type","button").attr("class","button").attr('value','Georgia')
            .on("click", function() { updateState(this.value); });
        var button5 = d3.select("#head").append("input").attr("type","button").attr("class","button").attr('value','North Carolina')
            .on("click", function() { updateState('Carolina'); });

            var leftwidth = totalwidth*.55;
            var svgleftwidth = leftwidth;

    var main = d3.select("#box").append("div").attr("id","main").style("width",totalwidth + 'px');
        var mainleft = d3.select("#main").append("div").attr("id","mainleft").style("width",leftwidth + 'px');
        var mainlefthead = d3.select("#mainleft").append("div").attr("id","mainlefthead").style("width",leftwidth + 'px');
            var mainleftheadl = d3.select("#mainlefthead").append("div").attr("id","mainleftheadl").style("width",totalwidth*.18 + 'px');
            var mainleftheadr = d3.select("#mainlefthead").append("div").attr("id","mainleftheadr").style("width",totalwidth*.32 + 'px');
        var mainleftcanvas = d3.select("#mainleft").append("div").attr("id","mainleftcanvas").style("width",leftwidth + 'px');
             var svgL = d3.select("#mainleftcanvas").append("svg")
                .attr("width", svgleftwidth + 'px')
                .attr("height", "170px");
                svgL.append("rect")
                    .attr("width", "99%")
                    .attr("height", "99%")
                    .attr("fill", "#414141");
            //var    ;

        var mainright = d3.select("#main").append("div").attr("id","mainright").style("width",width + 'px');
            var width = 0.45 * totalwidth,
                height = 320;
            var svg = d3.select("#mainright").append("svg")
                .attr("width", width)
                .attr("height", height);
            svg.append("rect")
                .attr("width", "99%")
                .attr("height", "99%")
                .attr("fill", "#333333");

        var turnouthead = d3.select("#box").append("div").attr("id","turnouthead").style("width",totalwidth + 'px').html("<h1>Turnout Highlights</h1>");
        var turnoutboxl = d3.select("#box").append("div").attr("id","turnoutboxl").style("width",totalwidth*.30 + 'px').html("<h2>" + introText + "</h2>");
        var turnoutboxr = d3.select("#box").append("div").attr("id","turnoutboxr").style("width",totalwidth*.70 + 'px').html("&nbsp");

        var key1head = d3.select("#box").append("div").attr("id","key1head").style("width",totalwidth + 'px').html("<H1>Keys to the Race</h1>");
        var key1boxl = d3.select("#box").append("div").attr("id","key1boxl").style("width",totalwidth*.50 + 'px').html("<h2>Women</h2>" + "<h3>" + introText + "</h3>");
        var key1boxr = d3.select("#box").append("div").attr("id","key1boxr").style("width",totalwidth*.50 + 'px').html("&nbsp");

        var key2boxl = d3.select("#box").append("div").attr("id","key2boxl").style("width",totalwidth*.50 + 'px').html("<h2>Outside Spending</h2>" + "<h3>" + introText + "</h3>");
        var key2boxr = d3.select("#box").append("div").attr("id","key2boxr").style("width",totalwidth*.50 + 'px').html("&nbsp");

    //var keys = d3.select("#box").append("div").attr("id","keys").style("width",totalwidth + 'px');

    var map,
        filePath,
        featurePath,
        dataCSV,
        winningParty,
        stateAb,
        senD,
        senR,
        winningCan,
        winningPercent,
        losingCan,
        losingPercent,
        barsArray,
        RP,
        DP;


function updateState(stateChoice){

    filePath = sData[stateChoice];
    winningParty = sWins[stateChoice];

    RP = resultsRV[stateChoice];
    DP = resultsDV[stateChoice];
    barsArray = [RP,DP];

    stateAb = stAb[stateChoice];
    senD = sDCans[stateChoice];
    senR = sRCans[stateChoice];

    if (winningParty == 'R') {
        winningCan = sRCans[stateChoice]; 
        winningPercent = resultsRV[stateChoice];
        losingCan = sDCans[stateChoice];
        losingPercent = resultsDV[stateChoice];
    } else {
        winningPercent = resultsDV[stateChoice];
        winningCan = sDCans[stateChoice];
        losingCan = sRCans[stateChoice];
        losingPercent = resultsRV[stateChoice];
    }


    var dataCSVf = dataCSV.filter(function(d){return d.state == stateAb})
    console.log(dataCSVf[2]);

    //make the results area
    (function updateResults(){
        //mainleftheadl.html(image);
        mainleftheadr.html("<h2>" + winningCan + "&nbsp(" + winningParty + ")</h2><h1>" + winningPercent + "%</h1>");
/*  // call the JSON
         var barHeight = 20;
        //create an array filter
            var x = d3.scale.linear()
                .range([0, leftwidth]);

            var chart = d3.select(".chart")
                .attr("width", leftwidth);
            
              x.domain([0, d3.max(data, function(d) { return d.value; })]);

              chart.attr("height", barHeight * data.length);

              var bar = chart.selectAll("g")
                  .data(data)
                .enter().append("g")
                  .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

              bar.append("rect")
                  .attr("width", function(d) { return x(d.value); })
                  .attr("height", barHeight - 1);

              bar.append("text")
                  .attr("x", function(d) { return x(d.value) - 3; })
                  .attr("y", barHeight / 2)
                  .attr("dy", ".35em")
                  .text(function(d) { return d.value; });

            x*/

    })()

    //draw the map
    d3.json(filePath, function (error, state) {

        var projection = d3.geo.mercator()
            .scale(1)
            .translate([0,0]);

        var path = d3.geo.path()
            .projection(projection);

        if (stateChoice == 'Georgia') { featurePath = state.objects.georgia}
            else if (stateChoice == 'Carolina') { featurePath = state.objects.carolina}
            else if (stateChoice == 'Iowa') {featurePath = state.objects.iowa; }
            else if (stateChoice == 'Kansas') {featurePath = state.objects.kansas; }
            else if (stateChoice == 'Kentucky') {featurePath = state.objects.kentucky; }

        var dMin = 0;
        var dMax = 0;

        var data = state;

        var quantizeL = d3.scale.quantize()
            .domain([0, 250])
            .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

        var quantizeW = d3.scale.quantize()
            .domain([0, 250])
            .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

        var st = topojson.feature(state, featurePath);

        var b = path.bounds(st),
            s = .75 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
            t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

        projection.scale(s).translate(t);

        var tip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d) { return ("<div id=\"countyTip\">" + d.properties["NAMELSAD"]).toLocaleString() + "<Br>D " + senD + "<br>R " + senR + "</div>";});
                
        svg.selectAll("path").remove();

        map = svg.selectAll(".counties").data(topojson.feature(state, featurePath).features);

        map.enter().append("path")
            .attr("d", path).attr("class", function(d) { return quantizeW(d.properties["COUNTYFP"]) } ).attr("fill-opacity",".3").attr("stroke-opacity",.3);

        map.call(tip);

        //map.transition()
          //  .attr("class", function(d) { return quantizeL(d.properties["COUNTYFP"]) } ).attr("fill-opacity",".5").attr("stroke-opacity",".8");

        map.transition().delay(function(d,i){return i * 4.5;}).duration(400)
            .attr("fill-opacity",".9").attr("stroke-opacity","1");

          map.on("mouseover",tip.show);

       // map.on("mouseover", function(){ d3.select(this).style({stroke:"#7bd362"}); tip.show(); });

        map.on("mouseout", tip.hide);
                
    });

    //update keypoints
    function updateKeyPoints() {};
};

d3.csv("./data/senatex.csv", function(sen){
    dataCSV = sen;
    updateState('Kentucky');
})