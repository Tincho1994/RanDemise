function interactInitiative(svgObj, svgContainer){
	this.svg = svgObj;
	this.svgContainer = svgContainer;
	this.tokens = new Map([]);

	this.addToken = function(token){
      	var tokensize = 80;
    	// Draw image on main SVG
    	tokenSVGimg = this.svg.image(token.img.src); // draw image
    	tokenSVGimg.size(tokensize, tokensize).move(this.tokens.size*90, 10); //set image size and set image to 0,0
    	token.addInitSVG(tokenSVGimg);
    	this.tokens.set(token.name,token);
	};

	this.checkforTokens = function(){
		for (let token of this.tokens.values()) {
			console.log(token)
  			if (token.selected){
  				this.removeToken(token);
  			};
		}
	};

	this.removeToken = function(token){
		token.initsvg.remove();
		this.tokens.delete(token.name);
	};

};