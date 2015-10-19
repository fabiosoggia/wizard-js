// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

	"use strict";

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variable rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var pluginName = "WizardJS",
			defaults = {
				next: ".next",
				previous: ".previous",
				steps: ".wizard-step"
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;
			// jQuery has an extend method which merges the contents of two or
			// more objects, storing the result in the first object. The first object
			// is generally empty as we don't want to alter the default options for
			// future instances of the plugin
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend(Plugin.prototype, {
			init: function () {
				// jQuery Wrapper for element
				var $element = $(this.element);

				this.stepElements = $element.find(".wizard-step");
				this.stepsCount = this.stepElements.length;
				this.setStep(0);

				var self = this;

				// Set listeners
				$element.find(this.settings.next).click(function () {
					self.nextStep.call(self);
				});
				$element.find(this.settings.previous).click(function () {
					self.previousStep.call(self);
				});

			},
			nextStep: function () {
				this.setStep(this.currentStep + 1);
			},
			previousStep: function () {
				this.setStep(this.currentStep - 1);
			},
			setStep: function (index) {
				if (index < 0 || index > this.stepsCount - 1) {
					return;
				}

				this.stepElements.hide();
				this.currentStep = index;

				$(this.stepElements[index]).show();
			},
			getCurrentStep: function () {
				return this.stepsCount;
			},
			getStepsCount: function () {
				return this.stepsCount;
			}
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
			return this.each(function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
				}
			});
		};

})(jQuery, window, document);
