var data = [5, 10, 15, 46];

var svg_width = 500;
var svg_height = 320;

var svg = d3.selectAll("svg")
  .attr("width", svg_width)
  .attr("height", svg_height);

var groups = svg.selectAll("g");

var r = d3.scale.linear().domain([0, d3.max(data)]).range([0, 50]);
var x = d3.scale.linear().domain([0, d3.max(data)]).range([10, 440]);
var font_size = d3.scale.linear().domain([0, d3.max(data)]).rangeRound([0, 50]);
var y = 150;

groups.data(data).enter().append("g");

var circles = svg.selectAll("g").append("circle")
  .attr("cy", y)
  .attr("r", 0)
  .attr("cx", x)
  .style("fill", "steelblue");

circles
  .transition()
  .duration(2000)
  .attr("r", r)
  .each('end' ,function(){
    svg.selectAll("g").append("text")
    .attr("x", function(d) { return x(d); })
    .attr("font-size", function(d){return font_size(d) + "px"; })
    .attr("y", y)
    .attr("fill", "white")
    .attr("font-family", "arial")
    .style("text-anchor", "middle")
    .style("dominant-baseline", "middle")
    .text(function(d) { return d; });
  });



var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(10," + 300 + ")")
    .call(xAxis);