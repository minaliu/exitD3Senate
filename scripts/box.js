
//choropleth
//+data update for tooltips
//legend

//research
//chart

//mobile
//text
//Indpendent candidate
//put up 'as of date' info

//state value object literals
var stAb = {
    Georgia:'GA',
    Kansas:'KS',
    Iowa:'IA',
    Carolina:'NC',
    Kentucky:'KY' };

var headcutURL = {
    Georgia:'georgia.png',
    Kansas:'kansas.png',
    Iowa:'iowa.png',
    Carolina:'carolina.png',
    Kentucky:'kentucky.png' };

var sData = {
    Georgia:'./data/georgia.json',
    Kansas:'./data/kansas.json',
    Iowa:'./data/iowa.json',
    Carolina:'./data/carolina.json',
    Kentucky:'./data/kentucky.json' };

var rotate1 = {
    Georgia:1,
    Kansas:-0.1,
    Iowa:0,
    Carolina:1,
    Kentucky:1
}

var rotate2 = {
    Georgia:1,
    Kansas:-0.1,
    Iowa:0,
    Carolina:1,
    Kentucky:1
}

var sDCans = {
    Georgia:'Michelle Nunn',
    Kansas:'Greg Orman',
    Iowa:'Bruce Braley',
    Carolina:'Kay Hagan',
    Kentucky:'Alison Lundergan Grimes' };

var sRCans = {
    Georgia:'David Perdue',
    Kansas:'Pat Roberts',
    Iowa:'Joni Ernst',
    Carolina:'Thom Tillis',
    Kentucky:'Mitch McConnell' };

var sDCansLast = {
    Georgia:'Nunn',
    Kansas:'Orman',
    Iowa:'Braley',
    Carolina:'Hagan',
    Kentucky:'Grimes' };

var sRCansLast = {
    Georgia:'Perdue',
    Kansas:'Roberts',
    Iowa:'Ernst',
    Carolina:'Tillis',
    Kentucky:'McConnell' };

//some results hardcoded for non-constant updates
var sWins = {
    Georgia:'D',
    Kansas:'R',
    Iowa:'R',
    Carolina:'D',
    Kentucky:'R' };

var resultsIn = {
    Georgia:'90.1',
    Kansas:'90.2',
    Iowa:'90.3',
    Carolina:'90.4',
    Kentucky:'90.5' 
}

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

var Poll1Names = {
    Kentucky:{0:"Seniors",1:"Christians",2:"Gun Rights Advocates"},
    Kansas:{0:"Poll 1 KS",1:"Poll 2 KS",2:"Poll 3 KS"},
    Iowa:{0:"Poll 1 IA",1:"Poll 2 IA",2:"Poll 3 IA"},
    Carolina:{0:"Poll 1 NC",1:"Poll 2 NC",2:"Poll 3 NC"},
    Georgia:{0:"Women",1:"Seniors",2:"Hispanics"},
}

var InT = {
    Kentucky:{0:"10",1:"24",2:"50"},
    Kansas:{0:"11",1:"28",2:"32"},
    Iowa:{0:"14",1:"34",2:"65"},
    Carolina:{0:"18",1:"45",2:"74"},
    Georgia:{0:"22",1:"42",2:"75"},
}

var Poll3Names = {
    Georgia:"Poll 3 GA",
    Kansas:"Poll 3 KS",
    Iowa:"Poll 3 IA",
    Carolina:"Poll 3 CA",
    Kentucky:"Poll 3 KY"
}

var Poll2Names = {
    Georgia:"Poll 2 GA",
    Kansas:"Poll 2 KS",
    Iowa:"Poll 2 IA",
    Carolina:"Poll 2 CA",
    Kentucky:"Poll 2 KY"
}


var windowwidth = $( window ).width();
var totalwidth = 0.8 * windowwidth;
var totalheight = 'tk';

var introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var box = d3.select("body").append("div").attr("id","box").style("width",totalwidth + 'px').style("margin-left",totalwidth*0.1 + 'px');

    var headline = d3.select("#box").append("div").attr("id","headline").style("width",totalwidth + 'px').html("<h1>Battle for the Senate</h1>");
    var header = d3.select("#box").append("div").attr("id","header").html("<p>" + introText + "</p>");


            var leftwidth = totalwidth*.40;
            var svgleftwidth = leftwidth;

    var main = d3.select("#box").append("div").attr("id","main").style("width",totalwidth + 'px');


    var mainright = d3.select("#main").append("div").attr("id","mainright").style("width",width + 'px');
            var width = 0.60 * totalwidth,
                height = 280;
            var svg = d3.select("#mainright").append("svg")
                .attr("width", width)
                .attr("height", height);
            svg.append("rect")
                .attr("width", "100%")
                .attr("height", "99%")
                .attr("fill", "#333333");

        var mainleft = d3.select("#main").append("div").attr("id","mainleft").style("width",leftwidth + 'px');
        var mainlefthead = d3.select("#mainleft").append("div").attr("id","mainlefthead").style("width",leftwidth + 'px');
            var mainleftheadl = d3.select("#mainlefthead").append("div").attr("id","mainleftheadl").style("width",95 + 'px');
            var mainleftheadr = d3.select("#mainlefthead").append("div").attr("id","mainleftheadr").style("width",((totalwidth*.40)-95) + 'px');
        var mainleftcanvas = d3.select("#mainleft").append("div").attr("id","mainleftcanvas").style("width",leftwidth + 'px');
             var svgL = d3.select("#mainleftcanvas").append("svg")
                .attr("width", svgleftwidth + 'px')
                .attr("height", "170px");
                svgL.append("rect")
                    .attr("width", "99%")
                    .attr("height", "99%")
                    .attr("fill", "#333333");
            //var    ;

        

    var head = d3.select("#box").append("div").attr("id","head").style("width",totalwidth + 'px');
        var button1 = d3.select("#head").append("input").attr("type","button").attr("class","button").attr('value','Georgia')
            .on("click", function() { updateState(this.value); });
        var button2 = d3.select("#head").append("input").attr("type","button").attr("class","button").attr('value','Iowa')
            .on("click", function() { updateState(this.value); });
        var button3 = d3.select("#head").append("input").attr("type","button").attr("class","button").attr('value','Kansas')
            .on("click", function() { updateState(this.value); });
        var button4 = d3.select("#head").append("input").attr("type","button").attr("class","button").attr('value','Kentucky').attr('autofocus','autofocus')
            .on("click", function() { updateState(this.value); });
        var button5 = d3.select("#head").append("input").attr("type","button").attr("class","button").attr('value','North Carolina')
            .on("click", function() { updateState('Carolina'); });

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
        var key1head = d3.select("#box").append("div").attr("id","key1head").style("width",totalwidth + 'px').html("<H1>TK</h1>");
        /*var key1boxl = d3.select("#box").append("div").attr("id","key1boxl").style("width",totalwidth*.50 + 'px');
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
                    .attr("fill", "black");*/

    //var keys = d3.select("#box").append("div").attr("id","keys").style("width",totalwidth + 'px');
    var barHeight = 22;
    var offsetBar = 160;

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


    var starD = "";
    var starR = "";

    filePath = sData[stateChoice];
    winningParty = sWins[stateChoice];

    RP = resultsRV[stateChoice];
    DP = resultsDV[stateChoice];
    barsArray = [RP,DP];

    stateAb = stAb[stateChoice];
    senD = sDCans[stateChoice];
    winningParty == "D" ? starD = "* " : starR = "* ";

    senDLast = sDCansLast[stateChoice];
    senR = sRCans[stateChoice]; 
    senRLast = sRCansLast[stateChoice];
    In = resultsIn[stateChoice]

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
        mainleftheadr.html("<span class=\"resultsCan\">" + winningCan + "&nbsp(" + winningParty + ")</span><br><br><span class=\"resultsPercent\">" + winningPercent + "%</span>");
        mainleftheadl.html("<div class=\"headshotImg\"><img src=\"./headshots/"+headcutURL[stateChoice]+"\" class=\"headshotImg\"></img></div>")

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
           
            stateChoiceT = stateChoice;
            if (stateChoiceT == "Carolina") {stateChoiceT = "North Carolina";}

            turnouthead.html("<h2>" + stateChoiceT + " Turnout Highlights</h2>");
            turnoutboxl.html("<p>" + turnoutText[stateChoice] + turnoutText[stateChoice] + "</p>");
            //key1boxl.html("<h2>Women</h2>" + "<h3>" + keyText1[stateChoice] + "</h3>");
            //key2boxl.html("<h2>Seniors</h2>" + "<h3>" + keyText1[stateChoice] + "</h3>");

            turnoutdata = turnoutdata.filter(function(d){return d.State == stateChoice;})

            x = d3.scale.linear()
                .range([0,40]);
            x.domain([5, 90]);

            circle = svgTurnout.selectAll("g")
                .data(turnoutdata, function(d){return d.Poll});

            circleEnter = circle.enter().append("g");
            
            circleEnter.append("circle").attr("class","turnoutCircles10D");
            circleEnter.append("circle").attr("class","turnoutCircles10R");

            circleEnter.append("circle").attr("class","turnoutCircles14D");
            circleEnter.append("circle").attr("class","turnoutCircles14R");


            circleEnter.append("text").attr("class","turnoutYearsText1");
            circleEnter.append("text").attr("class","turnoutYearsText2");
            circleEnter.append("text").attr("class","turnoutPollsText");

            a = circle.select(".turnoutCircles10D");
            b = circle.select(".turnoutCircles10R");
            c = circle.select(".turnoutCircles14D");
            d = circle.select(".turnoutCircles14R");
            e = circle.select(".turnoutYearsText1");
            f = circle.select(".turnoutYearsText2");
            g = circle.select(".turnoutPollsText");

            e.attr("text-anchor","middle")
                .attr("x",function(d,i){return (turnoutLeftPad + offsetCircle2014) + (i * turnoutSpacing)})
                .attr("y",function(d) { return 250; })
                .text('2014')

            f.attr("text-anchor","middle")
                .attr("x",function(d,i){return (turnoutLeftPad) + (i * turnoutSpacing)})
                .attr("y",function(d) { return 250; })
                .text('2010')

            g.attr("text-anchor","middle")
                .attr("x",function(d,i){return (turnoutLeftPad + (offsetCircle2014/2)) + (i * turnoutSpacing)})
                .attr("y",function(d) { return 118; })
                .text(function(d,i){ return Poll1Names[stateChoice][i]})

            tipTa = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,i) { return ("<div id=\"countyTip\"><div id=\"tipTop\"><div id=\"tipTopL\"><span class=\"tipFeature\">" + Poll1Names[stateChoice][i] + "</span></div><div id=\"tipTopR\"><span class=\"tipSample\">" + InT[stateChoice][i]+ "% of total</span></div></div><div id=\"tipBottom\"><div id=\"tip2BottomL\"><span class=\"tipYear\">2010</span></div><div id=\"tip2BottomM\"><span class=\"tipCanNameD\">" + senDLast + " (D)</span><br><span class=\"tipCanNameR\">" + senRLast + " (R) </span></div><div id=\"tip2BottomR\"><span class=\"tipPctD\">TK</span><br><span class=\"tipPctR\">TK</span></div></div></div>")});
                
            a.call(tipTa);

            a.attr("stroke-width","4").attr("stroke","#004d99").attr("stroke-opacity",".6").attr("fill","#4e4e4e").attr("fill-opacity","0")
            a.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueD2010); })
                .attr("cy",function(d) { return 180; })
                .attr("cx",function(d,i){return (turnoutLeftPad + (i * turnoutSpacing)) });


            a.on("mouseover", function(d,i){
                tipTa.show(d,i); 
                d3.select(this).style("fill-opacity",.4)})
            a.on("mouseout", function(d){
                tipTa.hide(d); 
                d3.select(this).style("fill-opacity",0)})

            tipTb = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,i) { return ("<div id=\"countyTip\"><div id=\"tipTop\"><div id=\"tipTopL\"><span class=\"tipFeature\">" + Poll1Names[stateChoice][i] + "</span></div><div id=\"tipTopR\"><span class=\"tipSample\">" + InT[stateChoice][i]+ "% of total</span></div></div><div id=\"tipBottom\"><div id=\"tip2BottomL\"><span class=\"tipYear\">2010</span></div><div id=\"tip2BottomM\"><span class=\"tipCanNameD\">" + senDLast + " (D)</span><br><span class=\"tipCanNameR\">" + senRLast + " (R) </span></div><div id=\"tip2BottomR\"><span class=\"tipPctD\">TK</span><br><span class=\"tipPctR\">TK</span></div></div></div>")});
            b.call(tipTb);

            b.attr("stroke-width","4").attr("stroke","#ae1e37").attr("stroke-opacity",".6").attr("fill","#4e4e4e").attr("fill-opacity","0")
            b.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueR2010); })
                .attr("cy",function(d) { return 45; })
                .attr("cx",function(d,i){return (turnoutLeftPad + (i * turnoutSpacing)) });

            b.on("mouseover", function(d,i){
                tipTb.show(d,i); 
                d3.select(this).style("fill-opacity",.4)})
            b.on("mouseout", function(d){
                tipTb.hide(d); 
                d3.select(this).style("fill-opacity",0)})

            tipTc = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,i) { return ("<div id=\"countyTip\"><div id=\"tipTop\"><div id=\"tipTopL\"><span class=\"tipFeature\">" + Poll1Names[stateChoice][i] + "</span></div><div id=\"tipTopR\"><span class=\"tipSample\">" + InT[stateChoice][i]+ "% of total</span></div></div><div id=\"tipBottom\"><div id=\"tip2BottomL\"><span class=\"tipYear\">2014</span></div><div id=\"tip2BottomM\"><span class=\"tipCanNameD\">" + senDLast + " (D)</span><br><span class=\"tipCanNameR\">" + senRLast + " (R) </span></div><div id=\"tip2BottomR\"><span class=\"tipPctD\">TK</span><br><span class=\"tipPctR\">TK</span></div></div></div>")});
            c.call(tipTc);

            c.attr("stroke-width","4").attr("stroke","#004d99").attr("stroke-opacity",".9").attr("fill","#4e4e4e").attr("fill-opacity","0")
            c.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueD2014); })
                .attr("cy",function(d) { return 180; })
                .attr("cx",function(d,i){return ((turnoutLeftPad + offsetCircle2014) + (i * turnoutSpacing)) });

            c.on("mouseover", function(d,i){
                tipTc.show(d,i); 
                d3.select(this).style("fill-opacity",.4)})
            c.on("mouseout", function(d){
                tipTc.hide(d); 
                d3.select(this).style("fill-opacity",0)})


            tipTd = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,i) { return ("<div id=\"countyTip\"><div id=\"tipTop\"><div id=\"tipTopL\"><span class=\"tipFeature\">" + Poll1Names[stateChoice][i] + "</span></div><div id=\"tipTopR\"><span class=\"tipSample\">" + InT[stateChoice][i]+ "% of total</span></div></div><div id=\"tipBottom\"><div id=\"tip2BottomL\"><span class=\"tipYear\">2014</span></div><div id=\"tip2BottomM\"><span class=\"tipCanNameD\">" + senDLast + " (D)</span><br><span class=\"tipCanNameR\">" + senRLast + " (R) </span></div><div id=\"tip2BottomR\"><span class=\"tipPctD\">TK</span><br><span class=\"tipPctR\">TK</span></div></div></div>")});
            d.call(tipTd);


            d.attr("stroke-width","4").attr("stroke","#ae1e37").attr("stroke-opacity",".9").attr("fill","#4e4e4e").attr("fill-opacity","0")
            d.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueR2014);})
                .attr("cy",function(d,i){ return 45;})
                .attr("cx",function(d,i){return ((turnoutLeftPad + offsetCircle2014) + (i * turnoutSpacing)) });

            d.on("mouseover", function(d,i){
                tipTd.show(d,i); 
                d3.select(this).style("fill-opacity",.4)})
            d.on("mouseout", function(d){
                    tipTd.hide(d); 
                d3.select(this).style("fill-opacity",0)})


            //e = circle.select

            //e.append("text").attr("x","100").attr("y","150").attr("fill","white").text("test");


            circle.exit().remove();


        });
       

    })()

    //draw the map
    d3.json(filePath, function (error, state) {

        var rotationA = rotate1[stateChoice];
        var rotationB = rotate2[stateChoice];
        var rotation = [rotationA,rotationB]

        var projection = d3.geo.mercator().rotate(rotation)
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
            .range(d3.range(9).map(function(i) { return "r" + i + "-9"; }));

        var quantizeD = d3.scale.quantize()
            .domain([0, 250])
            .range(d3.range(9).map(function(i) { return "d" + i + "-9"; }));

        var st = topojson.feature(state, featurePath);

        var b = path.bounds(st),
            s = .85 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
            t = [((width - 50) - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

        projection.scale(s).translate(t);

        tipM = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d) { return ("<div id=\"countyTip\"><div id=\"tipTop\"><div id=\"tipTopL\"><span class=\"tipFeature\">" + d.properties["NAMELSAD"]).toLocaleString() + "</span></div><div id=\"tipTopR\"><span class=\"tipSample\">"+In+"% in</span></div></div><div id=\"tipBottom\"><div id=\"tipBottomL\"><span class=\"tipCanNameD\">" + starD + senD + " (D)</span><br><span class=\"tipCanNameR\">" + starR + senR + " (R) </span>" + "</div><div id=\"tipBottomR\"><span class=\"tipPctD\">" + DP + "%</span><br><span class=\"tipPctR\">" + RP + "%</span></div></div>";});
                
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
            .attr("d", path).attr("class", function(d) { return quantizeR(d.properties["COUNTYFP"]) } ).attr("fill-opacity",".5").attr("stroke-opacity",.3);

        map.call(tipM);

        //delay(function(d,i){return i * .5;})
        //map.transition()
          //  .attr("class", function(d) { return quantizeL(d.properties["COUNTYFP"]) } ).attr("fill-opacity",".5").attr("stroke-opacity",".8");
          
        map.transition().duration(350)
            .attr("fill-opacity","1").attr("stroke-opacity","1");


        map.on("mouseover", function(d){ 
            tipM.show(d); 
              d3.select(this.parentNode.appendChild(this)).transition().duration(90)
             .style("stroke-width","1").style("stroke","white");
        })

        map.on("mouseout", function(d){
            tipM.hide(d);
            d3.select(this).transition().duration(90).style("stroke-width","0.5").style("stroke","#333333")             
        });
                
    });

    //update keypoints
    (function updateKeyPoints() {
        
        //remove the previous charts

        // create two selections

        d3.csv("./data/keypoints.csv", function(keyDataset) {

            keyDataset = keyDataset.filter(function(d){return d.state == stateChoice}); // filter that b to the state.
            keyData1 = keyDataset.filter(function(d){return d.key1a !== ""});//filter that b to key1
            keyData2 = keyDataset.filter(function(d){return d.key2a !== null});;// filter that b to key2
            
            //d3.selectAll("#chart1").remove();
            //d3.selectAll("#chart2").remove();
    
            

        });
        
    })();
};

queue()
    .defer(d3.csv, "./data/senatex.csv")
    .await(ready);
    

function ready(error, sen){
    dataCSV = sen;
    rateById.set(function(d){d.id, +d.rate});
    updateState('Kentucky');
};