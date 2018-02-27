const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB server.');
	// database.db('TodoApp').collection('Todos').find({
	// 	_id: new ObjectID("5a8bcf4d33d1763a90868c49")
	// 	}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// }, (err) => {
	// 	console.log('Unable to fetch the docs', err);
	// });

	database.db('TodoApp').collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch the docs', err);
	});

	database.db('TodoApp').collection('Users').find({name: 'Jheel'}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	}, (err) => {
		console.log('Unable to getch the docs', err);
	})

	database.close();

})