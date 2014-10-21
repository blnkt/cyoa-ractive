var allChapters = [
  { id: 12, parentId: 100000000, author: 'Bugs', prompt: 'choose this to go there', episode: 'you\'re there' },
  { id: 4, parentId: 12, author: 'Donut', prompt: 'choose this to get here', episode: 'you\'re here' },
  { id: 3, parentId: 12, author: 'Bart', prompt: 'you have a cow', episode: 'doh.' }
];

component.exports = {
	oninit: function() {
		this.on('select', event => {
			console.log(event.node)
			console.log(this.data.chapters[1].id)
		}),
		this.on('post', event => {
		  var chapter;
		  event.original.preventDefault();
		  chapter = {
		  	id: new Date().getTime(),
		  	parentId: this.get('id'),
		    author: this.get( 'author' ),
		    episode: this.get( 'episode' ),
		    prompt: this.get( 'prompt')
		  };

		  this.get('chapters').push(chapter);
		  document.activeElement.blur();
		  this.set({ author: '', episode: '', prompt: '' });
		}),
		this.on('addPrompt', event => {
		  var chapter;
		  event.original.preventDefault();
		  chapter = {
		  	id: new Date().getTime(),
		  	parentId: this.get('id'),
		    author: this.get( 'author' ),
		    episode: this.get( 'episode' ),
		    prompt: this.get( 'prompt')
		  }

		  this.get('chapters').push(chapter);
		  document.activeElement.blur();
		  this.set({ author: '', episode: '', prompt: '' });
		}),
		this.on('addEpisode', function ( event, id, episode ) {
		  var targetChapter;
		  event.original.preventDefault();
		  allChapters.forEach(function(chapter) {
		  	if (chapter.id === id){
		  		targetChapter === chapter
		  	}
		  })
		  targetChapter.episode = episode,
		  document.activeElement.blur();
		  this.set({episode: ''});
		})
	},
	data: {
		chapters: allChapters,
		currentChapter: allChapters[0],
	},
	computed: {
		choices: function() {
			var current = this.get('currentChapter')
			var newChoices = []
			var chapters = this.get('chapters')
			console.log(chapters[1].id);
			console.log(current.id);
			chapters.forEach(function(chapter){
				newChoices.push(chapter.id)
			})
			return newChoices;
		}
  }
}