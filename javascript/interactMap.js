function interactMap(svgObj, svgContainer){
	this.svg = svgObj;
	this.svgContainer = svgContainer;

	this.getParentSVGContainer = function(){
		return document.getElementById(this.svgContainer);
	};

	this.updateBackground = function(img){
		this.backgroundImgSrc = img;
		this.backgroundImg = this.svg.image(img.src);
		this.backgroundImg.size(img.naturalWidth, img.naturalHeight).move(0, 0);
		this.svg.viewbox({ x: 0, y: 0, width: img.naturalWidth, height: img.naturalHeight });
	};
};