
//names of candidates earlier years
//yellow on the independent page.
//Async?/queuing
//mobile

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

var sWins = {
    Georgia:'R',
    Kansas:'R',
    Iowa:'R',
    Carolina:'R',
    Kentucky:'R' };

var resultsIn = {
    Georgia:'90',
    Kansas:'94',
    Iowa:'95',
    Carolina:'99',
    Kentucky:'99' 
}

var resultsRV = {
    Georgia:'52.8',
    Kansas:'53.3',
    Iowa:'52.2',
    Carolina:'49.0',
    Kentucky:'56.2' }

var resultsDV = {
    Georgia:'45.3',
    Kansas:'42.5',
    Iowa:'43.7',
    Carolina:'47.3',
    Kentucky:'40.7' }

var turnoutText = {
    Georgia:'Election day is over, and the Republicans have taken control of the Senate for the first time since 2006. From the young to racial minorities, here is a look at the changing faces of voters and what it could mean for 2016 and beyond.',
    Kansas:'Election day is over, and the Republicans have taken control of the Senate for the first time since 2006. From the young to racial minorities, here is a look at the changing faces of voters and what it could mean for 2016 and beyond.',
    Iowa:'Election day is over, and the Republicans have taken control of the Senate for the first time since 2006. From the young to racial minorities, here is a look at the changing faces of voters and what it could mean for 2016 and beyond.',
    Carolina:'Election day is over, and the Republicans have taken control of the Senate for the first time since 2006. From the young to racial minorities, here is a look at the changing faces of voters and what it could mean for 2016 and beyond.',
    Kentucky:'Election day is over, and the Republicans have taken control of the Senate for the first time since 2006. From the young to racial minorities, here is a look at the changing faces of voters and what it could mean for 2016 and beyond.'
}


var InT2010 = {
    Kentucky:{0:"50",1:"6",2:"2"},
    Kansas:{0:"51",1:"4",2:"10"},
    Iowa:{0:"49",1:"3",2:"6"},
    Carolina:{0:"54",1:"19",2:"9"},
    Georgia:{0:"52",1:"3",2:"7"},
}

var InT2014 = {
    Kentucky:{0:"49",1:"8",2:"6"},
    Kansas:{0:"51",1:"6",2:"6"},
    Iowa:{0:"51",1:"2",2:"6"},
    Carolina:{0:"53",1:"21",2:"6"},
    Georgia:{0:"52",1:"4",2:"5"},
}


var Poll1Names = {
    Kentucky:{0:"Female",1:"Black",2:"Age 18-24"},
    Kansas:{0:"Female",1:"Hispanic or Latino",2:"Age 18-24"},
    Iowa:{0:"Female",1:"Black",2:"Age 18-24"},
    Carolina:{0:"Female",1:"Black",2:"Age 18-24"},
    Georgia:{0:"Female",1:"Hispanic or Latino",2:"Age 18-24"},
}

var PollChoices = {
    0:"Foreign Policy",
    1:"Health Care",
    2:"The Economy",
    3:"Illegal Immigration",
    4:"Other/No Response" 
}

var prioritiesColors ={
    1:"#cbc9e2",
    2:"#7d77b7",
    3:"#b1add4",
    4:"#5e5989",
    5:"#555"

}

var pollYear = {
     Georgia: "2008",
    Iowa: "2008",
    Kansas: "2010",
    Carolina: "2010",
    Kentucky: "2008"
}

var windowwidth = $( window ).width();
var totalwidth = 0.8 * windowwidth;
var totalheight = 'tk';

var introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var box = d3.select("body").append("div").attr("id","box").style("width",totalwidth + 'px').style("margin-left",totalwidth*0.1 + 'px');

        var leftwidth = totalwidth*.40;
        var svgleftwidth = leftwidth;

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
        //var turnouthead = d3.select("#box").append("div").attr("id","turnouthead").style("width",totalwidth + 'px');
        var turnoutboxl = d3.select("#box").append("div").attr("id","turnoutboxl").style("width",totalwidth*.30 + 'px');
        var turnoutboxr = d3.select("#box").append("div").attr("id","turnoutboxr").style("width",turnoutW + 'px').html("&nbsp");
            var svgTurnout = d3.select("#turnoutboxr").append("svg")
                .attr("width",turnoutW)
                .attr("height","300px")

            svgTurnout.append("rect")
                    .attr("width", "99%")
                    .attr("height", "99%")
                    .attr("fill", "#333333");

    var main = d3.select("#box").append("div").attr("id","main").style("width",totalwidth + 'px');
    var width = 0.60 * totalwidth,
                height = 250;
    var boxwidth = 325;
    var boxcolorwidth = 42;
    var boxtextwidth = 100;
    var boxtextwidth2 = 42;
     var boxtextwidth3 = 20;
    var mainright = d3.select("#main").append("div").attr("id","mainright").style("width",width + 'px');
        var mainrightt = d3.select("#mainright").append("div").attr("id","mainrightt").style("width",width + 'px');
            var mainrighttbox = d3.select("#mainrightt").append("div").attr("id","mainrighttbox").style("width",boxwidth + 'px');
                d3.select("#mainrighttbox").append("div").attr("class","boxwhitetext").style("width",boxtextwidth + 'px').text('Democrats');
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#acceea");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#66a2df");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#3385d5");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#0066cc");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#004d99");

                d3.select("#mainrighttbox").append("div").attr("class","boxwhitetext").style("width",boxtextwidth + 'px').text('Republicans');
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#ec9fb5");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#e16f8d");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#d74167");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#ce1140");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#ae1e37");

                d3.select("#mainrighttbox").append("div").attr("class","boxwhitetext").style("width",boxtextwidth + 'px').text('Independents');
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#fdde92");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#f7cd66");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#f4bc33");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#f0ac00");
                d3.select("#mainrighttbox").append("div").attr("class","boxcolors").style("width",boxcolorwidth + 'px').style("background-color","#ee9200");

                d3.select("#mainrighttbox").append("div").attr("class","boxgreytext1").style("width",boxtextwidth + 'px').text('Vote Share of Winner');
                d3.select("#mainrighttbox").append("div").attr("class","boxgreytext1").style("width",boxtextwidth3 + 'px');
                d3.select("#mainrighttbox").append("div").attr("class","boxgreytext").style("width",1+boxtextwidth2 + 'px').text('50%');
                d3.select("#mainrighttbox").append("div").attr("class","boxgreytext").style("width",1+boxtextwidth2 + 'px').text('60%');
                d3.select("#mainrighttbox").append("div").attr("class","boxgreytext").style("width",1+boxtextwidth2 + 'px').text('70%');
                d3.select("#mainrighttbox").append("div").attr("class","boxgreytext").style("width",1+boxtextwidth2 + 'px').text('80%');
                
        var mainrightb = d3.select("#mainright").append("div").attr("id","mainrightb").style("width",width + 'px');
            var svg = d3.select("#mainrightb").append("svg")
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

        var barW = totalwidth *.80;
        var legendW = totalwidth *.20;
        var key1head = d3.select("#box").append("div").attr("id","key1head").style("width",totalwidth + 'px');

        var key1legend = d3.select("#box").append("div").attr("id","key1legend").style("width",legendW + 'px').html("<img src=\"./data/legend.png\" height=\"90px\"\">");
            

        d3.select("#box").append("div").attr("id","key1bars").style("width",barW + 'px');
            var svgKeys = d3.select("#key1bars").append("svg")
                .attr("width",barW)
                .attr("height","120px")

                svgKeys.append("text").attr("class","barpct1").attr("x","1").attr("y",54).text('0%')
                svgKeys.append("text").attr("class","barpct2").attr("x",barW - 30).attr("y",54).text('100%')

    d3.select("#box").append("div").attr("id","key1text").style("width",totalwidth + 'px').text("Source: NBC Election");
    
//globals
    var barHeight = 22;
    var offsetBar = 160;

    var offsetCircle2014 = 40;
    var turnoutLeftPad = turnoutW * 0.10;
    var turnoutSpacing = (turnoutW - 20 + (turnoutLeftPad)) / 3;


    var parseDate = d3.time.format("%d-%b-%y").parse;
    
    var rateByIdD = d3.map();
    var rateByIdPct = d3.map();

    var map,
        filePath,
        featurePath,
        dataCSV,
        winningParty,
        stateAb,
        senD,
        senR,
        winningCan,
        winningPercent,prefData,
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
        line2,
        foundD,
        foundR,
        pollYear,
        nestedByState, barStack, barsSGroup, a2, b2, c2, d2, e2;


function updateState(stateChoice){

   



    var tipNameSpan, tipPctSpan;
             if(stateChoice == "Kansas"){
               tipNameSpan = "tipCanNameI";
               tipPctSpan = "tipPctI";
            }  else {
        tipNameSpan = "tipCanNameD"; tipPctSpan = "tipPctD";}

    var starD = "";
    var starR = "";

    filePath = sData[stateChoice];
    winningParty = sWins[stateChoice];

    RP = resultsRV[stateChoice];
    DP = resultsDV[stateChoice];
    barsArray = [RP,DP];

    stateAb = stAb[stateChoice];
    senD = sDCans[stateChoice];

    senDLast = sDCansLast[stateChoice];
    senR = sRCans[stateChoice]; 
    senRLast = sRCansLast[stateChoice];
    In = resultsIn[stateChoice]

    if (winningParty == 'R') {
        winningCan = sRCans[stateChoice]; 
        winningPercent = resultsRV[stateChoice];
        senW = senR;
    } else {
        winningPercent = resultsDV[stateChoice];
        winningCan = sDCans[stateChoice];
        senW = senD;
    }
      var dataCSVf;

    (function updateKeyPoints() {
        
        //update pattern
        d3.csv("./data/senatew.csv", 
            function(keyDataset) {

                dataCSV = keyDataset;
                dataCSVf = dataCSV.filter(function(d){return d.state == stateAb});
                //console.log(keyDataset);

                nestedByState = d3.nest()
                    .key((function (d) {
                        return d.key;
                    }))
                    .map(dataCSVf, d3.map);
        });

        d3.json("./data/preferences.json", function(preference){

            prefData = preference.filter(function(d){return d.state == stateChoice});

            //make legend
            //update text below
            var scale = d3.scale.linear()
                    .domain([0, 100])
                    .range([0, barW]);

            barStack = svgKeys.selectAll("g")
                .data(prefData, function(d){return d.type});

            barsSGroup = barStack.enter().append("g");
            barsSGroup.append("rect").attr("class","bar1");
            barsSGroup.append("rect").attr("class","bar2");
            barsSGroup.append("rect").attr("class","bar3");
            barsSGroup.append("rect").attr("class","bar4");
            barsSGroup.append("rect").attr("class","bar5");

            tipStack0 = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,z) { return ("<div id=\"priorityTip\"><div id=\"turntipLeft\"><span class=\"tipFeature\">" + PollChoices[z] + "</span></div><div id=\"turntipRight\"><span class=\"tipPercentGrey\">"  + d.Option1 + "%</span></div></div>")});
            tipStack1 = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,z) { return ("<div id=\"priorityTip\"><div id=\"turntipLeft\"><span class=\"tipFeature\">" + PollChoices[z] + "</span></div><div id=\"turntipRight\"><span class=\"tipPercentGrey\">"  + d.Option2 + "%</span></div></div>")});  
            tipStack2 = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,z) { return ("<div id=\"priorityTip\"><div id=\"turntipLeft\"><span class=\"tipFeature\">" + PollChoices[z] + "</span></div><div id=\"turntipRight\"><span class=\"tipPercentGrey\">"  + d.Option3 + "%</span></div></div>")});      
            tipStack3 = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,z) { return ("<div id=\"priorityTip\"><div id=\"turntipLeft\"><span class=\"tipFeature\">" + PollChoices[z] + "</span></div><div id=\"turntipRight\"><span class=\"tipPercentGrey\">"  + d.Option4 + "%</span></div></div>")});
            tipStack4 = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,z) { return ("<div id=\"priorityTip\"><div id=\"turntipLeft\"><span class=\"tipFeature\">" + PollChoices[z] + "</span></div><div id=\"turntipRight\"><span class=\"tipPercentGrey\">"  + d.Option5 + "%</span></div></div>")});
                      
            a2 = barStack.select(".bar1") 

            a2.call(tipStack0);

            a2.attr("fill","#cbc9e2").transition().duration(1000).attr("x", "1")
                .attr("y","20").attr("width",function(d){return scale(d.Option1)}).attr("height","20px");

            a2.on("mouseover", function(d,i){
                tipStack0.show(d,0); 
                d3.select(this).style("fill-opacity",.7)
            })

            a2.on("mouseout", function(){tipStack0.hide()})

            b2 = barStack.select(".bar2")


            b2.call(tipStack1);

            b2.attr("fill","#7d77b7").transition().duration(1000).attr("x", function(d){ return (1 + scale(d.Option1))})
                .attr("y","20").attr("width",function(d){return scale(d.Option2)}).attr("height","20px");

            b2.on("mouseover", function(d,i){
                tipStack1.show(d,1); 
                d3.select(this).style("fill-opacity",.7)
            })


            b2.on("mouseout", function(){tipStack1.hide()})

            c2 = barStack.select(".bar3")


            c2.call(tipStack2);

            c2.attr("fill","#b1add4").transition().duration(1000).attr("x", function(d){ return (1 + scale(d.Option2) + scale(d.Option1))})
                .attr("y","20").attr("width",function(d){return scale(d.Option3)}).attr("height","20px");

            c2.on("mouseover", function(d,i){
                tipStack2.show(d,2); 
                d3.select(this).style("fill-opacity",.7)
            })

            c2.on("mouseout", function(){tipStack2.hide()})

            d2 = barStack.select(".bar4")


            d2.call(tipStack3);

            d2.attr("fill","#5e5989").transition().duration(1000).attr("x", function(d){ return (1 + scale(d.Option3) + scale(d.Option2) + scale(d.Option1))})
                .attr("y","20").attr("width",function(d){return scale(d.Option4)}).attr("height","20px");

            d2.on("mouseover", function(d,i){
                tipStack3.show(d,3); 
                d3.select(this).style("fill-opacity",.7)
            })

            d2.on("mouseout", function(){tipStack3.hide()})

            e2 = barStack.select(".bar5")


            e2.call(tipStack4);

            e2.attr("fill","#555").transition().duration(1000).attr("x", function(d){ return (1 + scale(d.Option4) + scale(d.Option3) + scale(d.Option2) + scale(d.Option1))})
                .attr("y","20").attr("width",function(d){return scale(d.Option5)}).attr("height","20px");

            e2.on("mouseover", function(d,i){
                tipStack4.show(d,4); 
                d3.select(this).style("fill-opacity",.7)
            })


            e2.on("mouseout", function(){tipStack4.hide()})

            barStack.exit().remove()
        })
        
    })();

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
            barsEnter.append("text").attr("class","barResultsT3");

            if (winningParty == "D") {var senDT = "✓ " + senD; var senRT = senR; } else { var senRT = "✓ " + senR; var senDT = senD;}
          
            d = bar.select(".barResultsT3")
            d.attr("y",150)
                .attr("x",2)
                .text('As of 6:00 p.m. EDT on Nov. 5, 2014')

            c = bar.select(".barResultsT2")
            c.attr("text-anchor","end").transition().duration(1000).attr("x", function(d) { return offsetBar - 5; })
                .attr("y",function(d,i){return (i*barHeight) + (5*(i+1)) + 25 +(barHeight/2)})
                .attr("dy", ".35em")
                .text(function(d) { if (d.candidate == "R") { return senRT } else { return senDT;} });

            b = bar.select("rect").attr("class","barResults");
            b.attr("fill",function(d){
                    if(d.candidate == "D"){return "#004d99"}
                    else if(d.candidate == "I"){return "#ee9200"}
                    else {return "#ae1e37"}
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

        key1head.html("<H2>" + stateChoiceT + ": Which issue is the most important facing the country?</h2>");

            turnoutboxl.html("<h2>" + stateChoiceT + ": Then and now</h2><p>" + turnoutText[stateChoice] + "</p>");

            turnoutdata = turnoutdata.filter(function(d){return d.State == stateChoice;})

            x = d3.scale.linear()
                .range([0,40]);
            x.domain([-2, 90]);

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
                .attr("y",function(d) { return 260; })
                .text('2014')

            f.attr("text-anchor","middle")
                .attr("x",function(d,i){return (turnoutLeftPad) + (i * turnoutSpacing)})
                .attr("y",function(d) { return 260; })
                .text(pollYear[stateChoice])

            g.attr("text-anchor","middle")
                .attr("x",function(d,i){return (turnoutLeftPad + (offsetCircle2014/2)) + (i * turnoutSpacing)})
                .attr("y",function(d) { return 138; })
                .text(function(d,i){ return Poll1Names[stateChoice][i]})

            tipTa = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,i) { 
            return ("<div id=\"countyTip\"><div id=\"tipTop\"><div id=\"tipTopL\"><span class=\"tipFeature\">" + Poll1Names[stateChoice][i] + "</span></div><div id=\"tipTopR\"><span class=\"tipSample\">" + InT2010[stateChoice][i]+ "% of total</span></div></div><div id=\"tipBottom\"><div id=\"tip2BottomL\"><span class=\"tipYear\">" + pollYear[stateChoice] +"</span></div><div id=\"tip2BottomM\"><span class=\"tipCanNameD\">" + d.OffYearNameD + " (D)</span><br><span class=\"tipCanNameR\">" + d.OffYearNameR + " (R) </span></div><div id=\"tip2BottomR\"><span class=\"tipPctD\">"+d.ValueR2010+"%</span><br><span class=\"tipPctR\">"+ d.ValueD2010 +"%</span></div></div></div>")});
                
            a.call(tipTa);

            d10Fill = "#002e5b";
            d14Fill = "#004d99";

            stateChoice == "Kansas" ? d10Fill = "#002e5b" : d10Fill = "#002e5b";
            stateChoice == "Kansas" ? d14Fill = "#ee9200" : d14Fill = "#004d99";

            a.attr("stroke-width","6").attr("stroke",d10Fill).attr("stroke-opacity","1").attr("fill",d10Fill).attr("fill-opacity","0")
            a.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueD2010); })
                .attr("cy",function(d) { return 195; })
                .attr("cx",function(d,i){return (turnoutLeftPad + (i * turnoutSpacing)) });


            a.on("mouseover", function(d,i){
                tipTa.show(d,i); 
                d3.select(this).style("fill-opacity",1)})
            a.on("mouseout", function(d){
                tipTa.hide(d); 
                d3.select(this).style("fill-opacity",0)})

            tipTb = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,i) { 
            return ("<div id=\"countyTip\"><div id=\"tipTop\"><div id=\"tipTopL\"><span class=\"tipFeature\">" + Poll1Names[stateChoice][i] + "</span></div><div id=\"tipTopR\"><span class=\"tipSample\">" + InT2010[stateChoice][i]+ "% of total</span></div></div><div id=\"tipBottom\"><div id=\"tip2BottomL\"><span class=\"tipYear\">"+ pollYear[stateChoice] +"</span></div><div id=\"tip2BottomM\"><span class=\"" + tipNameSpan + "\">" + d.OffYearNameD + " (D)</span><br><span class=\"tipCanNameR\">" + d.OffYearNameR + " (R) </span></div><div id=\"tip2BottomR\"><span class=\"" + tipPctSpan + "\">"+d.ValueR2010+"%</span><br><span class=\"tipPctR\">"+d.ValueD2010+"%</span></div></div></div>")});
                
            b.call(tipTb);

            b.attr("stroke-width","6").attr("stroke","#6d1322").attr("stroke-opacity","1").attr("fill","#6d1322").attr("fill-opacity","0")
            b.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueR2010); })
                .attr("cy",function(d) { return 60; })
                .attr("cx",function(d,i){return (turnoutLeftPad + (i * turnoutSpacing)) });

            b.on("mouseover", function(d,i){
                tipTb.show(d,i); 
                d3.select(this).style("fill-opacity",1)
            })
            b.on("mouseout", function(d){
                tipTb.hide(d); 
                d3.select(this).style("fill-opacity",0)
            })

            
            tipTc = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,i) { return ("<div id=\"countyTip\"><div id=\"tipTop\"><div id=\"tipTopL\"><span class=\"tipFeature\">" + Poll1Names[stateChoice][i] + "</span></div><div id=\"tipTopR\"><span class=\"tipSample\">" + InT2014[stateChoice][i]+ "% of total</span></div></div><div id=\"tipBottom\"><div id=\"tip2BottomL\"><span class=\"tipYear\">2014</span></div><div id=\"tip2BottomM\"><span class=\"" + tipNameSpan + "\">" + senDLast + " (D)</span><br><span class=\"tipCanNameR\">" + senRLast + " (R) </span></div><div id=\"tip2BottomR\"><span class=\"" + tipPctSpan + "\">"+d.ValueD2014+"%</span><br><span class=\"tipPctR\">"+d.ValueR2014+"%</span></div></div></div>")});
                
            c.call(tipTc);

            c.attr("stroke-width","6").attr("stroke",d14Fill).attr("stroke-opacity","1").attr("fill",d14Fill).attr("fill-opacity","0")
            c.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueD2014); })
                .attr("cy",function(d) { return 195; })
                .attr("cx",function(d,i){return ((turnoutLeftPad + offsetCircle2014) + (i * turnoutSpacing)) });

            c.on("mouseover", function(d,i){
                tipTc.show(d,i); 
                d3.select(this).style("fill-opacity",1)})
            c.on("mouseout", function(d){
                tipTc.hide(d); 
                d3.select(this).style("fill-opacity",0)})

            
            tipTd = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d,i) { return ("<div id=\"countyTip\"><div id=\"tipTop\"><div id=\"tipTopL\"><span class=\"tipFeature\">" + Poll1Names[stateChoice][i] + "</span></div><div id=\"tipTopR\"><span class=\"tipSample\">" + InT2014[stateChoice][i]+ "% of total</span></div></div><div id=\"tipBottom\"><div id=\"tip2BottomL\"><span class=\"tipYear\">2014</span></div><div id=\"tip2BottomM\"><span class=\"" + tipNameSpan + "\">" + senDLast + " (D)</span><br><span class=\"tipCanNameR\">" + senRLast + " (R) </span></div><div id=\"tip2BottomR\"><span class=\"" + tipPctSpan + "\">"+d.ValueD2014+"%</span><br><span class=\"tipPctR\">"+d.ValueR2014+"%</span></div></div></div>")});
                
            d.call(tipTd);


            d.attr("stroke-width","6").attr("stroke","#ae1e37").attr("stroke-opacity","1").attr("fill","#ae1e37").attr("fill-opacity","0")
            d.transition().duration(1000)
                .attr("r", function(d) { return x(d.ValueR2014);})
                .attr("cy",function(d,i){ return 60;})
                .attr("cx",function(d,i){return ((turnoutLeftPad + offsetCircle2014) + (i * turnoutSpacing)) });

            d.on("mouseover", function(d,i){
                tipTd.show(d,i); 
                d3.select(this).style("fill-opacity",1)})
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


        if (stateChoice == 'Georgia') {  featurePath = state.objects.georgia;}
            else if (stateChoice == 'Carolina') {  featurePath = state.objects.carolina;}
            else if (stateChoice == 'Iowa') {featurePath = state.objects.iowa; }
            else if (stateChoice == 'Kansas') { featurePath = state.objects.kansas; }
            else if (stateChoice == 'Kentucky') { featurePath = state.objects.kentucky; }

        var rotationA = rotate1[stateChoice];
        var rotationB = rotate2[stateChoice];
        var rotation = [rotationA,rotationB]

        var projection = d3.geo.mercator().rotate(rotation)
            .scale(1)
            .translate([0,0]);

        var path = d3.geo.path()
            .projection(projection);

        var dMin = 0;
        var dMax = 0;

        var data = state;

        var quantizeR = d3.scale.quantize()
            .domain([.4, 1])
            .range(d3.range(9).map(function(i) { return "r" + i + "-9"; }));

        var quantizeD = d3.scale.quantize()
            .domain([.4, 1])
            .range(d3.range(9).map(function(i) { if(stateChoice != "Kansas"){return "d" + i + "-9";} else{ return "i" + i + "-9"; } }));

        var quantizeI = d3.scale.quantize()
            .domain([.4, 1])
            .range(d3.range(9).map(function(i) { return "i" + i + "-9"; }));

        var st = topojson.feature(state, featurePath);

        var b = path.bounds(st),
            s = .85 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
            t = [((width - 50) - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

        projection.scale(s).translate(t);

        tipM = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d) { var county = d.properties["NAME"]; starD = ""; starR = "";
            nestedByState.get(county)[0]['dp'] > nestedByState.get(county)[0]['rp'] ? starD = "✓ " : starR = "✓ ";
            return ("<div id=\"countyTip\"><div id=\"tipTop\"><div id=\"tipTopL\"><span class=\"tipFeature\">" + d.properties["NAMELSAD"]).toLocaleString() + "</span></div><div id=\"tipTopR\"><span class=\"tipSample\">"+nestedByState.get(county)[0]['p']+"% in</span></div></div><div id=\"tipBottom\"><div id=\"tipBottomL\"><span class=\"" + tipNameSpan + "\">" + starD + senD + " (D)</span><br><span class=\"tipCanNameR\">" + starR + senR + " (R) </span>" + "</div><div id=\"tipBottomR\"><span class=\"" + tipPctSpan + "\">" + (100*nestedByState.get(county)[0]['dp']).toFixed(1) + "%</span><br><span class=\"tipPctR\">" + (100*nestedByState.get(county)[0]['rp']).toFixed(1) + "%</span></div></div>";});
                
        svg.selectAll("path").remove();

        // each county color must be computed by its scale from 40 and up. color will be determined based on the winner.
        // winner will be computed by comparing percents of d and r
        // 

        map = svg.selectAll(".counties").data(topojson.feature(state, featurePath).features);

        map.enter().append("path")
            .attr("d", path).attr("class", function(d) {  var which; var county = d.properties["NAME"]; 
               nestedByState.get(county)[0]['rp'] > nestedByState.get(county)[0]['dp'] ? which = 'r' : which = 'd';
               if (which == 'r') { return quantizeR(nestedByState.get(county)[0]['rp']) } else {return quantizeD(nestedByState.get(county)[0]['dp'])}
           })
            .attr("fill-opacity",".5").attr("stroke-opacity",.3);

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

};

/*queue()
    .defer(d3.csv, "./data/senatex.csv", function(d){ 
        rateByIdR.set(d.key, d.rp); 
        rateByIdD.set(d.key,d.dp); 
        rateByIdPct.set(d.key,d.p);
    })
    .await(ready);*/
    
(function ready(){
    /*dataCSV = sen;
   
   rateByIdR.set(d.key, d.rp); 
        rateByIdD.set(d.key,d.dp); 
        rateByIdPct.set(d.key,d.p);
   console.log(rateByIdR.get('Adair'))
   console.log(rateByIdD.get('Adair'))
   console.log(rateByIdPct.get('Adair'))*/
    updateState('Kentucky');
})();