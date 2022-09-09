import React from 'react';
import ReactDom from 'react-dom/client';

// ** CSS
import './index.css';

// importing books object
import { books } from './books';

// importing Book component
import Book from './Book';

import { greeting } from './testing/testing';

// ** JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// function Greeting() {
//     return (
//         <div>
//             <h1>hello people</h1>
//             <ul>
//                 <li>
//                     <a href='#'>hello world</a>
//                 </li>
//             </ul>
//         </div>
//     );
// }

// const Greeting = () => {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'hello world')
//     );
// };

// ** Nested Components, React Tools

// function Greeting() {
//     return (
//         <div>
//             <Person />
//             <Message />
//         </div>
//     );
// }

// const Person = () => {
//     return <h2>john doe</h2>;
// };

// function Message() {
//     return <p>this is my message</p>;
// }

// ** Mini BookList

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

// ReactJS 17.x
// ReactDom.render(<BookList />, document.getElementById('root'));

// ReactJS 18.x
const container = document.getElementById('root');
const root = ReactDom.createRoot(container);

// rendering root
root.render(<BookList />);
