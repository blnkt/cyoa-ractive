import App from './app';
import Ractive from 'ractive';

Ractive.components.widget = require('./chapter');

var ractive = new App({
        el: document.body,
        data: []
    })
