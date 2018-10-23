// This is a Boilerplate file from the initial installation
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
