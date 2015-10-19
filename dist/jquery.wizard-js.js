/*
 *  jquery-wizard-js - v1.0.0
 *  WizardJS is a ridiculously easy jQuery plugin to create wizards.
 *  https://github.com/fabiosoggia/wizard-js
 *
 *  Made by Fabio Soggia
 *  Under MIT License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

	"use strict";

		// Create the defaults once
		var pluginName = "WizardJS",
			defaults = {
				next: ".next",
				previous: ".previous",
				steps: ".wizard-step",
				activeClass: "active",
				onNext: function () {},
				onPrevious: function () {},
				onChange: function () {}
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;
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

				this.stepElements = $element.find(this.settings.steps);
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

				// TO DO: You don't have to hide all the "tabs" everytime
				this.stepElements.removeClass(this.settings.activeClass).hide();
				this.currentStep = index;
				$(this.stepElements[index]).addClass(this.settings.activeClass).show();
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
