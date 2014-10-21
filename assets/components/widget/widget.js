var allChapters = [
  { author: 'Bugs', prompt: 'choose this to go there', episode: 'you\'re there' },
  { author: 'Donut', prompt: 'choose this to get here', episode: 'you\'re here' },
  { author: 'Bart', prompt: 'you have a cow', episode: 'doh.' }
];

component.exports = {
	oninit: function() {
		this.on('select', event => {
			alert('hey')
		}),
		this.on('post', event => {
		  var chapter;
		  event.original.preventDefault();
		  chapter = {
		    author: this.get( 'author' ),
		    episode: this.get( 'episode' ),
		    prompt: this.get( 'prompt')
		  };

		  allChapters.push(chapter);
		  document.activeElement.blur();
		  this.set({ author: '', episode: '', prompt: '' });
		})
	},
	data: {chapters: allChapters} 
}
