function interactMap(svgObj, svgContainer){
	this.svg = svgObj;
	this.svgContainer = svgContainer;
	this.tokens = new Map([]);

	this.getParentSVGContainer = function(){
		return document.getElementById(this.svgContainer);
	};

	this.assignGrid = function(grid){
		this.grid = grid;
	};

	this.assignBackground = function(img){
		this.backgroundImgSrc = img;
	};

	this.updateBackground = function(){
		this.backgroundImg = this.svg.image(this.backgroundImgSrc.src);
		this.backgroundImg.size(this.backgroundImgSrc.naturalWidth, this.backgroundImgSrc.naturalHeight).move(0, 0);
		this.svg.viewbox({ x: 0, y: 0, width: this.backgroundImgSrc.naturalWidth, height: this.backgroundImgSrc.naturalHeight });
	};

	this.updateGrid = function(){
		this.grid.scale(this.backgroundImgSrc.naturalWidth,this.backgroundImgSrc.naturalHeight);
		this.grid.drawGridSVG(svgView);
	};

	this.addToken = function(tokenImg){
		if (this.grid.cellWidth<this.grid.cellHeight){
      		var tokensize = this.grid.cellWidth;
    	} else {
      		var tokensize = this.grid.cellHeight;
    	};
    	// Draw image on main SVG
    	tokenSVGimg = this.svg.image(tokenImg.src); // draw image
    	tokenSVGimg.size(tokensize, tokensize).move(0, 0); //set image size and set image to 0,0
    	tokenSVGimg.draggable();

    	this.tokens.set(1,tokenSVGimg);
    	console.log(this.tokens);
	};
};