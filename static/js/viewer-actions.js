//TEMP GLOBALS
var nodeColour = '#FF0000'
	nodeSize = 4
	nodeX = 0
	nodeY = 0
	edgeColour = '#CACACA'
	edgeWeight = .1

	//colorSpace = ["#bae1ff","#ff9cee","#ffffba","#baffc9","#ffb3ba","#222", "#b28dff", "#ffdfba", "#6EB5FF", "#ffabab", "#7DB200", "#ffcc00"]

	//colorSpace = ["#1e1033","#321260","#4f2196","#6e32c9","#924cfc","#a970ff", "#bb8eff", "#d0b0ff", "#e6d6ff", "#f7f1ff", "#fCf6ff"]

	colorSpace = ["#8dd3c7", "#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#bc80bd","#ccebc5","#ffed6f"]

function addNode2(s, id, attrs){
	//console.log(attrs.c, colorSpace[attrs.c])

	if (s.graph.nodes()[id]) {
		//console.log(id, "exists")
		return
	}
	
	//console.log(id, 'does not exist')
		s.graph.addNode({
			id: id,
			//label: id,
			x: Math.random() * 100, //nodeX,
			y: Math.random() * 100, //nodeY,
			size: 1+attrs.t, //2+ (Math.random() * 10 | 0),
			color: colorSpace[attrs.c],
			//true_color: colorSpace[attrs.c]

			attributes: {
				c : attrs.c,
				t : attrs.t
			},

			label:  JSON.stringify({"id":id, "attrs":attrs, "size":attrs.t})
		})
}
function updateNode(s, id, attrs){
	nd = s.graph.nodes()[id]

	if (attrs.hasOwnProperty('t')){
		nd.size = 1+attrs.t
		//nd.size = attrs.t
		nd.attributes.t = attrs.t
	}

	if (attrs.hasOwnProperty('c')){
		nd.color = colorSpace[attrs.c]
		nd.attributes.c = attrs.c

		//if (id == 62 || id == "62"){
			//console.log(id+" changing c to "+attrs.c)
		//}
	}

	nd.label = JSON.stringify({"id":nd.id, "attrs":nd.attributes, "size":nd.size})



}
function removeNode(s, id){
	//TODO
}


function addEdge(s, fid, tid, attrs){
	if (s.graph.edges(fid+"/"+tid) != undefined) return
		s.graph.addEdge({
			id: fid+"/"+tid,
			source: fid,
			target: tid,
			type: 'arrow',
			size: attrs.w,
			color: edgeColour,
		});
}
function updateEdge(s, fid, tid, attrs){

}
function removeEdge(s, fid, tid){
	if (s.graph.edges(fid+"/"+tid) == undefined){
		//console.log("no edge to remove")
		return
	}
	//console.log("edge exists", s.graph.edges()[fid+"/"+tid])
	s.graph.dropEdge(fid+"/"+tid)
	//console.log("edge exists", s.graph.edges()[fid+"/"+tid])
}
