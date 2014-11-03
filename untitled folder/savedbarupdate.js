bar = svgL.selectAll(".barResults")
                .data(barsdata, function(d){return d.type});
                    
            bar.enter().append("rect")
                .attr("class","barResults")

            bar.transition().duration(1000).attr("width", function(d) { return x(d.D); })
                .attr("height", barHeight - 1).attr("y",function(d,i){return (i*barHeight) + 5}).attr("x", offsetBar)

            barT = svgL.selectAll(".barResultsT")
                .data(barsdata, function(d){return d.type});

            barT.enter()
                .append("text").attr("class","barResultsT")

            barT.transition().duration(1000).attr("x", function(d) { return x(d.D) + 3 + offsetBar; })
                .attr("y",function(d,i){return (i*barHeight) + 5 + (barHeight/2)})
                .attr("dy", ".35em")
                .text(function(d) { return (d.D + '%'); });

            bar.exit().remove();
            barT.exit().remove();*/