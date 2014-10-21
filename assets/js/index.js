import App from './app';
import Ractive from 'ractive';

Ractive.components.widget = require('./widget');
Ractive.components.chapter = require('./chapter');

var ractive = new App({
  el: document.body,
  data: []
})