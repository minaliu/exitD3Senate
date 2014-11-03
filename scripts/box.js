

//make the key + update pattern work.. + the max/min for colorization/filtering.
//
//turnout section labels
//mouseovers/tool tips galore
//turnout
//mobile
//charts
//text
//

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
    Kansas:'R',
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
    Kansas:'42.2',
    Iowa:'41.2',
    Carolina:'49.3',
    Kentucky:'53.3' }

var turnoutText = {
    Georgia:'Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary ',
    Kansas:'Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary ',
    Iowa:'Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary ',
    Carolina:'North Carolina Turnout Summary North Carolina Turnout Summary North Carolina Turnout Summary North Carolina Turnout Summary North Carolina Turnout Summary ',
    Kentucky:'Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary '
}

var keyText1 = {
    Georgia:'Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary ',
    Kansas:'Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary ',
    Iowa:'Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary ',
    Carolina:'North Carolina Turnout Summary North Carolina Turnout Summary North Carolina Turnout Summary North Carolina Turnout Summary North Carolina Turnout Summary ',
    Kentucky:'Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary '
}
var keyText2 = {
    Georgia:'Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary Georgia Turnout Summary ',
    Kansas:'Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary Kansas Turnout Summary ',
    Iowa:'Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary Iowa Turnout Summary ',
    Carolina:'North Carolina Turnout Summary North Carolina Turnout Summary North Carolina Turnout Summary North Carolina Turnout Summary North Carolina Turnout Summary ',
    Kentucky:'Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary Kentucky Turnout Summary '
}


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
        var button3 = d3.select("#head").append("input").attr("type","button").attr("class","button").attr('value','Kentucky').attr('autofocus','autofocus')
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
            var mainleftheadl = d3.select("#mainlefthead").append("div").attr("id","mainleftheadl").style("width",totalwidth*.28 + 'px');
            var mainleftheadr = d3.select("#mainlefthead").append("div").attr("id","mainleftheadr").style("width",totalwidth*.22 + 'px');
        var mainleftcanvas = d3.select("#mainleft").append("div").attr("id","mainleftcanvas").style("width",leftwidth + 'px');
             var svgL = d3.select("#mainleftcanvas").append("svg")
                .attr("width", svgleftwidth + 'px')
                .attr("height", "170px");
                svgL.append("rect")
                    .attr("width", "99%")
                    .attr("height", "99%")
                    .attr("fill", "#333333");
            //var    ;

        var mainright = d3.select("#main").append("div").attr("id","mainright").style("width",width + 'px');
            var width = 0.45 * totalwidth,
                height = 320;
            var svg = d3.select("#mainright").append("svg")
                .attr("width", width)
                .attr("height", height);
            svg.append("rect")
                .attr("width", "100%")
                .attr("height", "99%")
                .attr("fill", "#333333");

        var turnoutW = totalwidth*.70;
        var turnouthead = d3.select("#box").append("div").attr("id","turnouthead").style("width",totalwidth + 'px');
        var turnoutboxl = d3.select("#box").append("div").attr("id","turnoutboxl").style("width",totalwidth*.30 + 'px');
        var turnoutboxr = d3.select("#box").append("div").attr("id","turnoutboxr").style("width",turnoutW + 'px').html("&nbsp");
            var svgTurnout = d3.select("#turnoutboxr").append("svg")
                .attr("width",turnoutW)
                .attr("height","300px")

            svgTurnout.append("rect")
                    .attr("width", "99%")
                    .attr("height", "99%")
                    .attr("fill", "#333333");

        var keyW = totalwidth *.5;
        var key1head = d3.select("#box").append("div").attr("id","key1head").style("width",totalwidth + 'px').html("<H1>Keys to Victory</h1>");
        var key1boxl = d3.select("#box").append("div").attr("id","key1boxl").style("width",totalwidth*.50 + 'px');
        var key1boxr = d3.select("#box").append("div").attr("id","key1boxr").style("width",keyW + 'px').html("&nbsp");
            var svgKey1 =  d3.select("#key1boxr").append("svg")
                    .attr("width",keyW)
                    .attr("height","225px");

            svgKey1.append("rect")
                .attr("width", "99%")
                .attr("height", "99%")
                .attr("fill", "black");


        var key2boxl = d3.select("#box").append("div").attr("id","key2boxl").style("width",totalwidth*.50 + 'px');
        var key2boxr = d3.select("#box").append("div").attr("id","key2boxr").style("width",keyW + 'px').html("&nbsp");
            var svgKey2 =  d3.select("#key2boxr").append("svg")
                .attr("width",keyW)
                .attr("height","225px");

             svgKey2.append("rect")
                    .attr("width", "99%")
                    .attr("height", "99%")
                    .attr("fill", "black");

    //var keys = d3.select("#box").append("div").attr("id","keys").style("width",totalwidth + 'px');
    var barHeight = 22;
    var offsetBar = leftwidth*.55;

    var pollTicks = ["Hispanics","Women","White 65+"];
    var formatTicks = function(d) {
        return pollTicks[d];      
    }

    var offsetCircle2014 = 60;
    var turnoutLeftPad = turnoutW * 0.08;
    var turnoutSpacing = (turnoutW + (turnoutLeftPad)) / 3;


    //ticks.tickSize(innerTickHeight, 0)

    var xTurn = d3.scale.ordinal()
        .domain(pollTicks)
        .rangeRoundBands([turnoutLeftPad/2, (turnoutLeftPad*2 + + offsetCircle2014 + (turnoutSpacing*2))], .1);

    var xAxis = d3.svg.axis()
        .orient("bottom").outerTickSize(0)
        .scale(xTurn);

    //console.log(turnoutSpacing);
    //console.log(turnoutLeftPad)

    var parseDate = d3.time.format("%d-%b-%y").parse;
    var rateById = d3.map();

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
        DP,
        bar,
        x,
        test,
        tip,
        a,
        b,
        c,
        d,
        senW,
        kT,
        line1,
        line2;


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
        senW = senR;
        //losingCan = sDCans[stateChoice];
        //losingPercent = resultsDV[stateChoice];
    } else {
        winningPercent = resultsDV[stateChoice];
        winningCan = sDCans[stateChoice];
        senW = senD;
        //losingCan = sRCans[stateChoice];
        //losingPercent = resultsRV[stateChoice];
    }


    var dataCSVf = dataCSV.filter(function(d){return d.state == stateAb});
    //console.log(dataCSVf[2]);

    //make the results area
    (function updateResults(){
        //mainleftheadl.html(image);
        mainleftheadr.html("<h2>" + winningCan + "&nbsp(" + winningParty + ")</h2><span class=\"resultsPercent\">" + winningPercent + "%</span>");


        d3.json("./data/bars.json", function(error, barsdata) {
         
            barsdata = barsdata.filter(function(d){return d.State == stateChoice;})
           
            x = d3.scale.linear()
                .range([(leftwidth - offsetBar)/2 - 50, ((leftwidth - offsetBar)/2) - 20]);
            x.domain([42, 56]);


            bar = svgL.selectAll("g")
                .data(barsdata, function(d){return d.candidate});

            barsEnter = bar.enter().append("g");
            barsEnter.append("rect");
            barsEnter.append("text").attr("class","barResultsT");
            barsEnter.append("text").attr("class","barResultsT2");

            if (winningParty == "D") {var senDT = "✓ " + senD; var senRT = senR; } else { var senRT = "✓ " + senR; var senDT = senD;}
          
            c = bar.select(".barResultsT2")
            c.attr("text-anchor","end").transition().duration(1000).attr("x", function(d) { return offsetBar - 5; })
                .attr("y",function(d,i){return (i*barHeight) + (5*(i+1)) + 25 +(barHeight/2)})
                .attr("dy", ".35em")
                .text(function(d) { if (d.candidate == "R") { return senRT } else { return senDT;} });

            b = bar.select("rect").attr("class","barResults");
            b.attr("fill",function(d){
                    if(d.candidate == "D"){return "#004d99"}
                    else{return "#ae1e37"}
                })
            b.transition().duration(1000)
                .attr("width", function(d) { return x(d.D); }).attr("height", barHeight - 1)
                .attr("y",function(d,i){return (i*barHeight) + 25 + (5*(i+1))}).attr("x", offsetBar);

            a = bar.select(".barResultsT")
            a.transition().duration(1000).attr("x", function(d) { return x(d.D) + 3 + offsetBar; })
                .attr("y",function(d,i){return (i*barHeight) + (5*(i+1)) + 25 +(barHeight/2)})
                .attr("dy", ".35em")
                .text(function(d) { return (d.D + '%'); });

            bar.exit().remove()

        });

        d3.json("./data/turnout.json", function(error, turnoutdata){
            //x axis
            //data file
            //
            
            stateChoiceT = stateChoice;
            if (stateChoiceT == "Carolina") {stateChoiceT = "North Carolina";}
            turnouthead.html("<h1>" + stateChoiceT + " Turnout Highlights</h1>");
            turnoutboxl.html("<h2>" + turnoutText[stateChoice] + "</h2>");
            key1boxl.html("<h2>Women</h2>" + "<h3>" + keyText1[stateChoice] + "</h3>");
            key2boxl.html("<h2>Seniors</h2>" + "<h3>" + keyText1[stateChoice] + "</h3>");

            turnoutdata = turnoutdata.filter(function(d){return d.State == stateChoice;})

            x = d3.scale.linear()
                .range([0,75]);
            x.domain([5, 90]);

            circle = svgTurnout.selectAll("g")
                .data(turnoutdata, function(d){return d.Poll});

            circleEnter = circle.enter().append("g");
            
            circleEnter.append("circle").attr("class","turnoutCircles10D");
            circleEnter.append("circle").attr("class","turnoutCircles10R");

            circleEnter.append("circle").attr("class","turnoutCircles14D");
            circleEnter.append("circle").attr("class","turnoutCircles14R");

            circle.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + 181 + ")")
                .call(xAxis);

            //circleEnter.append("text").attr("class","barResultsT");
            //circleEnter.append("text").attr("class","barResultsT2");

            a = circle.select(".turnoutCircles10D");
            b = circle.select(".turnoutCircles10R");
            c = circle.select(".turnoutCircles14D");
            d = circle.select(".turnoutCircles14R");

           
            a.attr("stroke-width","4").attr("stroke","#004d99").attr("stroke-opacity",".6").attr("fill","#4e4e4e").attr("fill-opacity","0")
            a.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueD2010); })
                .attr("cy",function(d) { return 175 - x(d.ValueD2010); })
                .attr("cx",function(d,i){return (turnoutLeftPad + (i * turnoutSpacing)) });

            b.attr("stroke-width","4").attr("stroke","#ae1e37").attr("stroke-opacity",".6").attr("fill","#4e4e4e").attr("fill-opacity","0")
            b.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueR2010); })
                .attr("cy",function(d) { return 175 - x(d.ValueR2010); })
                .attr("cx",function(d,i){return (turnoutLeftPad + (i * turnoutSpacing)) });

            c.attr("stroke-width","4").attr("stroke","#004d99").attr("stroke-opacity","1").attr("fill","#4e4e4e").attr("fill-opacity","0")
            c.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueD2014); })
                .attr("cy",function(d) { return 175 - x(d.ValueD2014); })
                .attr("cx",function(d,i){return ((turnoutLeftPad + offsetCircle2014) + (i * turnoutSpacing)) });


            d.attr("stroke-width","4").attr("stroke","#ae1e37").attr("stroke-opacity","1").attr("fill","#4e4e4e").attr("fill-opacity","0")
            d.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueR2014);})
                .attr("cy",function(d,i){ return 175 - x(d.ValueR2014); })
                .attr("cx",function(d,i){return ((turnoutLeftPad + offsetCircle2014) + (i * turnoutSpacing)) });

            circle.exit().remove();


        });
       

    })()

    //draw the map
    d3.json(filePath, function (error, state) {

        var projection = d3.geo.mercator().rotate([1,1])
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

        var quantizeR = d3.scale.quantize()
            .domain([0, 250])
            .range(d3.range(4).map(function(i) { return "r" + i + "-9"; }));

        var quantizeD = d3.scale.quantize()
            .domain([0, 250])
            .range(d3.range(4).map(function(i) { return "d" + i + "-9"; }));

        var st = topojson.feature(state, featurePath);

        var b = path.bounds(st),
            s = .80 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
            t = [(width - 40 - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

        projection.scale(s).translate(t);

        tipM = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d) { return ("<div id=\"countyTip\"><div id=\"tipTop\">" + d.properties["NAMELSAD"]).toLocaleString() + "</div><div id=\"tipMid\">" + senD + " (D) " + RP + "%<br>" + senR + " (R) " + DP + "%</div><div id=\"tipBottom\">% return</div>";});
                
        svg.selectAll("path").remove();

        // each county color must be computed by its scale from 35 to 65. color will be determined based on the winner.
        // winner will be computed by comparing percents of d and r
        // 

        /*var countries = d3.nest()
            .key(function(d) { return d.county; })
            .map(data, d3.map)
            .keys(); */

        map = svg.selectAll(".counties").data(topojson.feature(state, featurePath).features);

        map.enter().append("path")
            .attr("d", path).attr("class", function(d) { return quantizeD(d.properties["COUNTYFP"]) } ).attr("fill-opacity",".6").attr("stroke-opacity",.3);

        map.call(tipM);

        //map.transition()
          //  .attr("class", function(d) { return quantizeL(d.properties["COUNTYFP"]) } ).attr("fill-opacity",".5").attr("stroke-opacity",".8");

        map.transition().delay(function(d,i){return i * 4.5;}).duration(400)
            .attr("fill-opacity","1").attr("stroke-opacity","1");

          //map.on("mouseover",tipM.show;

        map.on("mouseover", function(d){ 
            tipM.show(d); 
            d3.select(this).style("stroke-width","5").style("stroke","white") 
        })

        map.on("mouseout", function(d){
            tipM.hide(d);
            d3.select(this).style("stroke-width","0.5").style("stroke","#333333")             
        });
                
    });

    //update keypoints
    (function updateKeyPoints() {
        
        //remove the previous charts

        // create two selections
        // make the json data call

        d3.csv("./data/keypoints.csv", function(keyDataset) {

            keyDataset = keyDataset.filter(function(d){return d.state == stateChoice}); // filter that b to the state.
            keyData1 = keyDataset.filter(function(d){return d.key1a !== ""});//filter that b to key1
            keyData2 = keyDataset.filter(function(d){return d.key2a !== null});;// filter that b to key2
            

    
            if (stateChoice == "Carolina") {

                //kT = svgKey1.append("text").attr("fill","white").attr("font-size","13").text(stateChoice)

                 /*svgKey1.append("g")
                      .attr("class", "x axis")
                      .attr("transform", "translate(0," + height + ")")
                      .call(xAxis);

                  svgKey1.append("g")
                      .attr("class", "y axis")
                      .call(yAxis)
                    .append("text")
                      .attr("transform", "rotate(-90)")
                      .attr("y", 6)
                      .attr("dy", ".71em")
                      .style("text-anchor", "end")
                      .text("Price ($)");*/


            }
            else if(stateChoice == "Kentucky") {

            }
            else if(stateChoice == "Iowa"){

            }
            else if(stateChoice == "Georgia"){

                var x = d3.time.scale()
                    .range([0, keyW]);

                var y = d3.scale.linear()
                    .range([200, 0]);


                line1 = d3.svg.line().interpolate("basis")
                    .x(function(d) { return x(d.key1a); })
                    .y(function(d) { return y(d.key1b); });



                console.log('test')


                    keyData1.forEach(function(d) {
                    
                        d.key1a = parseDate(d.key1a);
                        d.key1b = +d.key1b;
               
                      });

                  x.domain(d3.extent(keyData1, function(d) {  return d.key1a; }));
                  y.domain(d3.extent(keyData1, function(d) { return d.key1b; }));

                  console.log(keyData1);

                  svgKey1.append("path")
                      .datum(keyData1)
                      .attr("class", "key1Line")
                      .attr("d", line1);

            }
            else if(stateChoice == "Kansas") {

            }

        });
        
    })();
};

d3.csv("./data/senatex.csv", function(sen){
    dataCSV = sen;

    rateById.set(function(d){d.id, +d.rate});

    updateState('Kentucky');
})