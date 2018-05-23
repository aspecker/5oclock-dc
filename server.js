import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import routes from './routes';
import db from './models';
import typeDefs from './graphQL/schema';
import resolvers from './graphQL/resolvers';
import Bars from './models/Bars';

const app = express();
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

mongoose.Promise = global.Promise;
// mongoose boilerplate
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/5oClock');

// graphQL route
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { Bars } }),
);

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// express.use boilerplate
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use(express.static('client/build'));
app.use(routes);
// require the routes
require('./config/passport.js')(app);
require('./routes/api/user-api-routes.js')(app);
// require("./routes/bar-api-routes.js")(app);


const PORT = process.env.PORT || 3001;
app.listen(PORT);

console.log(`Listening on port: ${PORT}`);

