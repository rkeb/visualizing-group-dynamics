
var fileNavigator;
	fileCursor = 0;
	fileBuffer = []

	limit=20000

var slider = document.getElementById("simSeek")


function initFileManagerAlt(e){
	bufferIndex = 0

	console.log(fileBuffer)
	console.log(fileBuffer[bufferIndex])

	document.getElementById("titleText").innerHTML = fileBuffer[bufferIndex].name

	s.graph.clear();
	s.refresh();

	/*fileNavigator = new LineNavigator(fileBuffer[bufferIndex]);

	regex = /\}$/;
	fileNavigator.findAll(regex, 0, limit, function (err, index, limitHit, results) {
		//get number of lines
		//document.getElementById("simSeek").value = 0
		//document.getElementById("simSeek").max = results.length
		slider.MaterialSlider.change(0)
		slider.max = results.length
		
		//document.getElementById("controls").style.display = "none"

		//console.log(document.getElementById("simSeek").MaterialSlider)

		console.log(slider)
		console.log(slider.MaterialSlider)
		//console.log(slider.MaterialSlider.__proto__.change(100))
		//console.log(slider.MaterialSlider.change(1000))

		

		//slider.MaterialSlider.change.emit({ source: slider, value: slider.value });
		//document.getElementById("simSeek").MaterialSlider = results.length

		console.log("File contains "+results.length+" lines")
		

		if (paused) {
	    	onPlayPause(true)
	    }
	    else {
	    	playNextN(10)
	    }
	});*/


}


function initFileManager(inputElementId){


	fileCursor = 0
	files = document.getElementById(inputElementId).files

	if (files.length>0){
		document.getElementById("titleText").innerHTML = files[0].name

		console.log(files[0])

		//console.log(s)
		s.graph.clear();
	    s.refresh();

		fileNavigator = new LineNavigator(files[0]);


		/*
		fileBuffer.unshift(files[0])

		var fff = document.createElement("a");
		
		fff.classList.add("mdl-navigation__link")
		var innerI = document.createElement("i");
		innerI.classList.add("mdl-color-text--blue-grey-400")
		innerI.classList.add("material-icons")
		innerI.role = "presentation"
		innerI.innerHTML = "share"
		fff.appendChild(innerI)

		fff.href = "javascript:initFileManagerAlt(this)"

		fff.innerHTML += files[0].name


		document.getElementById("navv").insertBefore(fff, document.getElementById("navv").firstChild)
		*/









		//console.log(_.$('navv'))

		//.add(fff)


  		//<a class="mdl-navigation__link predataset__link" href="javascript:test11()"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">share</i>Example 1</a>

		
		
		regex = /\}$/;
		fileNavigator.findAll(regex, 0, limit, function (err, index, limitHit, results) {
			//get number of lines
			//document.getElementById("simSeek").value = 0
			//document.getElementById("simSeek").max = results.length
			slider.MaterialSlider.change(0)
			slider.max = results.length
			
			//document.getElementById("controls").style.display = "none"

			//console.log(document.getElementById("simSeek").MaterialSlider)

			console.log(slider)
			console.log(slider.MaterialSlider)
			//console.log(slider.MaterialSlider.__proto__.change(100))
			//console.log(slider.MaterialSlider.change(1000))

			slider.dataset.timestep = 0
		

			//slider.MaterialSlider.change.emit({ source: slider, value: slider.value });
			//document.getElementById("simSeek").MaterialSlider = results.length

			console.log("File contains "+results.length+" lines")
			

			if (paused) {
		    	onPlayPause(true)
		    }
		    else {
		    	playNextN(10)
		    }
		});
				

		

		//TODO change to play until timestep != 0
		
	}
}


function onAddNode(err, index, lines, isEof, progress){
	
	

	
}


function fmReadNext(n, callback){
	fileNavigator.readLines(fileCursor, n, callback)

	fileCursor += 1

	//if (fileCursor < limit)
	//	fmReadNext(1, callback)
	
}

function fmReadPrevious(n=1, callback){
	if (fileCursor > 0)
		fileNavigator.readLines(fileCursor-n, cursor, callback)
}



//

