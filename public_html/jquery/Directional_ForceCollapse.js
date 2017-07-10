$(document).ready(function () {
    var graph = {
        "nodes": [
            {"name": "Myriel", "group": 1},
            {"name": "Napoleon", "group": 1},
            {"name": "Mlle.Baptistine", "group": 1}


        ],
        "links": [
            {"source": 0, "target": 1, "value": 8},
            {"source": 1, "target": 2, "value": 10}


        ]
    };

    var width = 600,
            height = 500;

    var color = d3.scale.category20();

    var force = d3.layout.force()
            .charge(-120)
            .linkDistance(100)
            .size([width, height]);
    var markerArr = [];
    $.each(graph.links, function (i, d) {
        markerArr.push({value:d.value,
            source:d.source,
            target:d.target
        });
    });
    var svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height);

    svg.append("svg:defs").selectAll("marker")
            .data(markerArr)      // Different link/path types can be defined here
            .enter().append("svg:marker")    // This section adds in the arrows
            .attr("id", function (d) {
                console.log(d)
                return "marker_"+d.value;
            })
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 15)
            .attr("refY", -1.5)
            .attr("markerWidth", 4)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("svg:path")
            .attr("d", "M0,-5L10,0L0,5");
    force.nodes(graph.nodes)
            .links(graph.links)
            .start();

    var link = svg.selectAll(".link")
            .data(graph.links)
            .enter().append("line")
            .attr("class", "link")
            .attr("id", function (d) {
                return "link_" + (d.value);
            })
            .style("stroke-width", function (d) {
                return Math.sqrt(d.value);
            })
            .attr("marker-end", function (d,i) {
                return "url(#" + "marker_" + d.value +")";
            });
//    .on("click", function(d){
//    console.log("ss",d)
//});
    var node = svg.selectAll(".node")
            .data(graph.nodes)
            .enter().append("circle")
            .attr("class", "node")
            .attr("r", 5)
            .style("fill", function (d) {
                return color(d.group);
            })
            .call(force.drag);

    node.append("title")
            .text(function (d) {
                return d.name;
            });

    force.on("tick", function () {
        link.attr("x1", function (d) {
            return d.source.x;
        })
                .attr("y1", function (d) {
                    return d.source.y;
                })
                .attr("x2", function (d) {
                    return d.target.x;
                })
                .attr("y2", function (d) {
                    return d.target.y;
                });

        node.attr("cx", function (d) {
            return d.x;
        })
                .attr("cy", function (d) {
                    return d.y;
                });
    });
    $.each(graph.links, function (i, d) {
        $('.mySelect1')
                .append(
                        "<option value='link_" + d.value + "'>" + d.value + "</option>"
                        ),
//.attr("id", function () {
//    console.log('fff',d)
//                return "opt_" + (d.value);
//            }),

                $('.mySelect1').on('change', function () {
            var selectedVal = $(".mySelect1 :selected").val();

            d3.selectAll("line").style("stroke", "#999");

            d3.select("#" + selectedVal)
                    .style("stroke", "red");
           var newmarker = $(".mySelect1 :selected").val().split("link").join("marker");
            d3.selectAll("marker").style("fill", "blue");
             d3.select("#" + newmarker)
                    .style("fill", "red");
        });
    });
});
