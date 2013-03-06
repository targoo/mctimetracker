/**
 *
 * Color Field
 * 
 */
(function ($) {

jQuery.fn.addColorPicker = function( props ) {
  if( ! props ) { props = []; }
    props = jQuery.extend({
		currentColor:'',
		blotchElemType: 'span',
		blotchClass:'ColorBlotch',
		clickCallback: function(ignoredColor) {},
		iterationCallback: null,
		fillString: '&nbsp;',
		fillStringX: '?',
		colors: [
			'#AC725E','#D06B64','#F83A22', '#FA573C', '#FF7537', '#FFAD46', //reds
			'#42D692','#16A765', '#7BD148','#B3DC6C','#FBE983', // green
			'#92E1C0', '#9FE1E7', '#9FC6E7', '#4986E7','#9A9CFF', // browns/oranges/yellows
			'#B99AFF','#C2C2C2','#CABDBF','#CCA6AC','#F691B2', // greens
			'#CD74E6','#A47AE2', // blues
			]
	}, props);
	var count = props.colors.length;
	for( var i = 0; i < count; ++i ) {
		var color = props.colors[i];
		var elem = jQuery('<'+props.blotchElemType+'/>')
			.addClass( props.blotchClass )
			.attr('color',color)
			.css( 'background-color',color); // jq bug: chaining here fails if color is null b/c .css() returns (new String('transparent'))!
		if( props.currentColor == color ) elem.addClass( 'active');
		if( props.clickCallback ) {
			elem.click( function() { jQuery('.ColorBlotch').removeClass('active'); ; jQuery(this).addClass( 'active'); props.clickCallback(jQuery(this).attr('color')); });
		}
		this.append( elem );
		if( props.iterationCallback ) props.iterationCallback( this, elem, color, i );
	}
	return this;
};

})(jQuery);