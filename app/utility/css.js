/** 
* @projectDescription  CSS Utility Class.
*
* @version  1.0 
*/


var CssUtils = {

	/**
	 * Create rule from arguments and return it as string.
	 * 
	 * @alias createRule
	 * @alias CssUtils.createRule
	 * @param {String} elementSelector Rule definition - example: "#myDiv".
	 * @param {String} ruleDefinition Rule definition string - example "width:40px; color: #FFF;".
	 * @return {String} Constructed css rule
	 */
	createRule : function(elementSelector, ruleDefinition) {
		var ruleArray = new StringBuilder();
		ruleArray.append(elementSelector, "{", ruleDefinition, "}");
		return ruleArray.toString();
	},

	/**
	 * Insert rule into existing stylesheet defined by sheetTitle.
	 * 
	 * @alias insertRule
	 * @alias CssUtils.insertRule
	 * @param {String, Array, Object} ruleDefinition Rule definition - example: "#myDiv {width:40px; color: #FFF;}".
	 * @param {String} sheetTitle Stylesheet title.
	 * @return {Boolean} inserted 
	 */
	insertRule : function(ruleDefinition, sheetTitle) {
		var inserted = false;
		var multiple = !(typeof ruleDefiniton === "string");
		var styles = document.styleSheets;
		for ( var style = 0, stylesLength = styles.length; style < stylesLength; style++) {
			if (styles[style].title == sheetTitle) {
				if(multiple){
					for(var ruleIndex in ruleDefinition){
						syles[style].insertRule(ruleDefinition[ruleIndex]);
					}
				}
				else{
					syles[style].insertRule(ruleDefinition);
				}
				inserted = true;
			}
		}
		return inserted;
	},

	/**
	 * Deletes css rule defined by ruleSelector in stylesheet defined by sheetTitle.
	 * 
	 * @alias deleteRule
	 * @alias CssUtils.deleteRule
	 * @param {String} ruleSelector Rule name.
	 * @param {String} sheetTitle Stylesheet title.
	 */
	deleteRule : function(ruleSelector, sheetTitle) {
		var styles = document.styleSheets;
		// search for styleSheet defined by title
		for ( var styleIndex = 0, stylesLength = styles.length; styleIndex < stylesLength; styleIndex++) {
			// if styleSheet exists, find and remove rule
			if (styles[styleIndex].title == sheetTitle) {
				var rules = syles[styleIndex].cssRules;
				for ( var ruleIndex = 0, rulesLength = rules.length; ruleIndex < rulesLength; ruleIndex++) {
					if (rules[ruleIndex].selectorText == ruleSelector) {
						syles[styleIndex].deleteRule(ruleIndex);
					}
				}
			}
		}
	},
	
	/**
	 * Create new stylesheet.
	 * 
	 * @alias createStyleSheet
	 * @alias CssUtils.createStyleSheet
	 * @param {String} sheetTitle
	 * @param {String} cssRules String containing css rules.
	 * @param {Object} location Element to append stylesheet.
	 */
	createStyleSheet : function(sheetTitle, cssRules, location) {
		var styleSheet = document.createElement('style');
		if(cssRules){
			styleSheet.innerHTML = cssRules;
		}
		if(location){
			location.appendChild(styleSheet);
		}
		return styleSheet;
	}

};