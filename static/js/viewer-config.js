function init(container, attrs){
	s = _initSigma(container, attrs)

	_initLayout(s)
	_initDrag(s)

	return s
}

function refreshGraph(s){
	s.refresh()
	//s.startNoverlap();

	
}

function _initSigma(container, attrs){
	return new sigma({
	  graph: new sigma.classes.graph({nodes:[], edges:[]}),
	  renderers: [
	    {
	      container: document.getElementById('graph-container'),
	      type: 'sigma.renderers.webgl' // sigma.renderers.canvas works as well
	    }
	  ],
	  settings: { //to become attrs
	  	minNodeSize : 1,
	  	minEdgeSize : 0.25,
	  	maxEdgeSize : 2,
	  	maxNodeSize : 11,
	  	//drawLabels: false,
	  	labelThreshold: 1000
	  }
	});
}

function _initDrag(s){
	var dragListener = sigma.plugins.dragNodes(s, s.renderers[0]);

	dragListener.bind('startdrag', function(event) {
	  console.log(event);
	});
	dragListener.bind('drag', function(event) {
	  console.log(event);
	});
	dragListener.bind('drop', function(event) {
	  console.log(event);
	});
	dragListener.bind('dragend', function(event) {
	  console.log(event);
	});
}

function _initLayout(s){
	// Configure the noverlap layout:
	/*var noverlapListener = s.configNoverlap({
	  nodeMargin: 100,
	  scaleNodes: 0,
	  permittedExpansion: 3,
	  gridSize: 100,
	  easing: 'quadraticInOut', // animation transition function
	  duration: 350   // animation duration. Long here for the purposes of this example only
	});
	// Bind the events:
	noverlapListener.bind('start stop interpolate', function(e) {
	  console.log(e.type);
	  if(e.type === 'start') {
	    console.time('noverlap');
	  }
	  if(e.type === 'interpolate') {
	    console.timeEnd('noverlap');
	  }
	});*/
	// Start the layout:


	
	
}
