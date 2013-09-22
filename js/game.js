function Game(){
	this.Initialize = function(){
		// initialize all game variables
	}

	this.LoadContent = function(){
		// load content - graphics, sound etc.

		var self = this;
		$(document).bind('keyup', function(event){
			self.Update(event);
			self.Draw();
		});
		//this.GameLoop = setInterval(this.RunGameLoop, this.DrawInterval);
	}

	this.RunGameLoop = function(){
		this.Update();
		this.Draw();
	}

	this.Update = function(){
		// update game variables, handle user input, perfrom calculations etc.
	}

	this.Draw = function(){
		// draw game frame
	}
}

var _canvas = document.getElementById('canvas');
var _canvasContext = null;
if(_canvas && _canvas.getContext){
	_canvasContext = _canvas.getContext('2d');
}