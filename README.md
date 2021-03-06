# WizardJS

WizardJS is a ridiculously easy jQuery plugin to create wizards.

## Usage

1. Create the markup:

```html
<div id="wizard">
	<h1>My wizard</h1>
	<div class="wizard-step">
		<h2>Step 1</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, optio?</p>
	</div>
	<div class="wizard-step">
		<h2>Step 2</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, temporibus.</p>
	</div>
	<div class="wizard-step">
		<h2>Step 3</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, nihil.</p>
	</div>
	<div class="wizard-step">
		<h2>Step 4</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, inventore.</p>
	</div>
	<div class="wizard-step">
		<h2>Step 5</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, necessitatibus?</p>
	</div>
	<div>
		<a href="#" class="previous">Previous</a>
		<a href="#" class="next">Next</a>
	</div>
</div>
```

2. Include jQuery and plugin's code:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script src="dist/jquery.wizard-js.min.js"></script>
```

3. Call the plugin:

```javascript
$("#wizard").defaultPluginName({
	next: ".next",
	previous: ".previous",
	steps: ".wizard-step",
	activeClass: "active",
	onNext: function () {},
	onPrevious: function () {},
	onChange: function () {}
});
```

## License

MIT License © Fabio Soggia
