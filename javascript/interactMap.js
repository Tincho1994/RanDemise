function interactMap(svgObj, svgContainer){
	this.svg = svgObj;
	this.svgContainer = svgContainer;
	this.tokens = new Map([]);

	this.getParentSVGContainer = function(){
		return document.getElementById(this.svgContainer);
	};

	this.getSVGobj = function(){
		return this.svg;
	};

	this.assignGrid = function(grid){
		this.grid = grid;
	};

	this.assignBackground = function(img){
		this.backgroundImgSrc = img;
	};

	this.updateBackground = function(){
		if(this.backgroundImg){
			this.backgroundImg.remove();
		};
		this.backgroundImg = this.svg.image(this.backgroundImgSrc.src);
		this.backgroundImg.size(this.backgroundImgSrc.naturalWidth, this.backgroundImgSrc.naturalHeight).move(0, 0);
		this.svg.viewbox({ x: 0, y: 0, width: this.backgroundImgSrc.naturalWidth, height: this.backgroundImgSrc.naturalHeight });
	};

	this.updateGrid = function(){
		this.grid.scale(this.backgroundImgSrc.naturalWidth,this.backgroundImgSrc.naturalHeight);
		this.grid.drawGridSVG(svgView);
	};

	this.addToken = function(token,size){
		if (this.grid.cellWidth<this.grid.cellHeight){
      		var tokensize = this.grid.cellWidth*size;
    	} else {
      		var tokensize = this.grid.cellHeight*size;
    	};
    	// Draw image on main SVG
    	tokenSVGimg = this.svg.image(token.img.src); // draw image
    	tokenSVGimg.size(tokensize, tokensize).move(0, 0); //set image size and set image to 0,0
    	tokenSVGimg.draggable();
    	token.addSVG(tokenSVGimg);
    	this.tokens.set(token.name,token);
    	console.log(this.tokens);
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
		token.svg.remove();
		this.tokens.delete(token.name);
	};
};

function token(tokenImg, mapObj, tokenName){
	this.img = tokenImg;
	this.name = tokenName;
	this.selected = 0;
	this.parentMapSVG = mapObj.getSVGobj();

	this.addSVG = function(tokenSvgObj){
		this.svg = tokenSvgObj;
		let parent = this;
		this.svg.on('click', function(e){
			parent.selected = ~parent.selected;
		});
	};

	this.addInitSVG = function(tokenSvgObj){
		this.initsvg = tokenSvgObj;
	};

	this.removeFromSVG = function(){
		this.svg.remove();
	};
};

function interactPreview(svgObj, svgContainer){
	this.svg = svgObj;
	this.svgContainer = svgContainer;

	this.getParentSVGContainer = function(){
		return document.getElementById(this.svgContainer);
	};

	this.getSVGobj = function(){
		return this.svg;
	};

	this.assignBackground = function(img){
		this.backgroundImgSrc = img;
	};

	this.updateBackground = function(viewX = null, viewY = null){
		console.log(this.backgroundImg)
		if(this.backgroundImg){
			console.log("removing old image")
			this.backgroundImg.remove();
		};
		this.backgroundImg = this.svg.image(this.backgroundImgSrc.src);
		this.backgroundImg.size(this.backgroundImgSrc.naturalWidth, this.backgroundImgSrc.naturalHeight).move(0, 0).back();
		if (viewX & viewY){
			this.svg.viewbox({ x: 0, y: 0, width: viewX, height: viewY });
		}
		else {
			this.svg.viewbox({ x: 0, y: 0, width: this.backgroundImgSrc.naturalWidth, height: this.backgroundImgSrc.naturalHeight });
		};
	};
};