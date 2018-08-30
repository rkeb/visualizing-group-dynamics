var filter;

/**
 * DOM utility functions
 */
var _ = {
  $: function (id) {
    return document.getElementById(id);
  },

  all: function (selectors) {
    return document.querySelectorAll(selectors);
  },

  removeClass: function(selectors, cssClass) {
    var nodes = document.querySelectorAll(selectors);
    var l = nodes.length;
    for ( i = 0 ; i < l; i++ ) {
      var el = nodes[i];
      // Bootstrap compatibility
      el.className = el.className.replace(cssClass, '');
    }
  },

  addClass: function (selectors, cssClass) {
    var nodes = document.querySelectorAll(selectors);
    var l = nodes.length;
    for ( i = 0 ; i < l; i++ ) {
      var el = nodes[i];
      // Bootstrap compatibility
      if (-1 == el.className.indexOf(cssClass)) {
        el.className += ' ' + cssClass;
      }
    }
  },

  show: function (selectors) {
    this.removeClass(selectors, 'hidden');
  },

  hide: function (selectors) {
    this.addClass(selectors, 'hidden');
  },

  toggle: function (selectors, cssClass) {
    var cssClass = cssClass || "hidden";
    var nodes = document.querySelectorAll(selectors);
    var l = nodes.length;
    for ( i = 0 ; i < l; i++ ) {
      var el = nodes[i];
      //el.style.display = (el.style.display != 'none' ? 'none' : '' );
      // Bootstrap compatibility
      if (-1 !== el.className.indexOf(cssClass)) {
        el.className = el.className.replace(cssClass, '');
      } else {
        el.className += ' ' + cssClass;
      }
    }
  }
};





function updatePane (graph, filter) {
  // get max degree
  var maxDegree = 0,
      categories = {};
  
  // read nodes
  graph.nodes().forEach(function(n) {
    maxDegree = Math.max(maxDegree, graph.degree(n.id));
    categories[n.attributes.c] = true;
  })

  // min degree
  _.$('min-degree').max = maxDegree;
  _.$('max-degree-value').textContent = maxDegree;
  
  // node category
  var nodecategoryElt = _.$('node-category');
  nodecategoryElt.innerHTML = "";

  var optionElt = document.createElement("option");
  optionElt.text = "All";
  nodecategoryElt.add(optionElt);

  Object.keys(categories).forEach(function(c) {
    var optionElt = document.createElement("option");
    optionElt.text = c;
    nodecategoryElt.add(optionElt);
  });

  // reset button
  _.$('reset-btn').addEventListener("click", function(e) {
    _.$('min-degree').value = 0;
    _.$('min-degree-val').textContent = '0';
    _.$('node-category').selectedIndex = 0;
    filter.undo().apply();
    _.$('dump').textContent = '';
    _.hide('#dump');
  });

  // export button
  /*_.$('export-btn').addEventListener("click", function(e) {
    var chain = filter.export();
    console.log(chain);
    _.$('dump').textContent = JSON.stringify(chain);
    _.show('#dump');
  });*/
}

// Initialize the Filter API
  filter = new sigma.plugins.filter(s);

  

  function applyMinDegreeFilter(e) {
    var v = _.$("min-degree").value

    _.$('min-degree-val').textContent = v;

    filter
      .undo('min-degree')
      .nodesBy(function(n) {
        return this.degree(n.id) >= v;
      }, 'min-degree')
      .apply();
  }

  function applyCategoryFilter(e) {
    //console.log(s.graph.nodes()[0])
    //console.log(s.graph.nodes()["0"])

    /*console.log(filter.nodesBy(function(n) {
        return !c.length || n.attributes.c == c;
      }, 'node-category'))*/

    var c = _.$("node-category")[_.$("node-category").selectedIndex].value;

    //var c = e.target[e.target.selectedIndex].value;
    filter
      .undo('node-category')
      .nodesBy(function(n) {
        return !c.length || ((c=="All") ? true : n.attributes.c == c);
      }, 'node-category')
      .apply();
  }

  _.$('min-degree').addEventListener("input", applyMinDegreeFilter);  // for Chrome and FF
  _.$('min-degree').addEventListener("change", applyMinDegreeFilter); // for IE10+, that sucks
  _.$('node-category').addEventListener("change", applyCategoryFilter);
