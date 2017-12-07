d3.csv("trial.csv", function (error, data) {
	if (error) throw error;
	console.log(data);
	// Parses the csv and creates data as csvParse.
	data.forEach(x=>console.log(x));
})

// SVG dimensions
var height = 200;
var width = 120;

function createSvg(sel) {
	sel.append("svg")
		.attr("width", 10*width)
		.attr("height", height)
		.attr("id", "svgPlot")
};

d3.selection.prototype.callReturn = function (callable) {
	return callable(this);
};

// For creating 10 rects
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


d3.select("#linearSVM")
	.callReturn(createSvg)

// Instead of rectangles we will be appending multiple squares in place of each rect
d3.selectAll("#svgPlot")
	.selectAll(".rect")
	.data(num)
	.enter()
	.append("g")
	.append("rect")
	.attr("x", function(d) {
			return d*width;
		})
	.attr("y", 0)
	.attr("width", width)
	.attr("height", height)
	.attr("fill", "black");
