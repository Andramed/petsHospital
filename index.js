import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';


const __dirname = path.resolve();
const app = express();

const hbs = exphbs.create({
	extname: 'hbs',
	
	
})
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');



app.get('/', (req, res) => {
	res.render('home', {
		title: 'Pets Hospital'
	})
})

app.get('/aboutUs', (req, res) => {
	res.render('aboutUs', {
		title: 'About Us'
	})
})

app.get('/contactUs', (req, res) => {
	res.render('contactUs', {
		title: 'Contact Us'
	})
})

app.get('/gallery', (req, res) => {
	res.render('gallery', {
		title: 'Galery'
	})
})

app.get('/services', (req, res) => {
	res.render('services', {
		title: 'Services'
	})
})

app.get('/team', (req, res) => {
	res.render('team', {
		title: 'Team'
	})
})



app.use(express.static(path.join(__dirname, 'css')))
app.use(express.static(path.join(__dirname, 'dist')))
app.use("/image", express.static(path.join(__dirname, 'image')));


app.listen(3000, () => {
	console.log('aplicatia ruleaza');
})