import React from "react";
import './App.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Fuse from "fuse.js";




function App() {
const books = [
  {
    title: 'Don Quixote',
    author: 'Miguel De Cervantes',
  },
  {
    title: 'Pilgrim\'s Progress',
    author: 'John Bunyan',
  },
  {
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe',
  },
  {
    title: 'Gulliver\'s Travels',
    author: 'Jonathan Swift',
  },
  {
    title: 'Tom Jones',
    author: 'Henry Fielding',
  },
  {
    title: 'Clarissa',
    author: 'Samuel Richardson',
  },
  {
    title: 'Tristram Shandy',
    author: 'Laurence Sterne',
  },
]


  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

 

  return (
    
    <div className="center">
      <h1>React Autocompelete Demo By Steve</h1>
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={books}
            fuseOptions={{ keys: ["title", "author"] }}
            resultStringKeyName="title"
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </header>
    </div>
    </div>
  );
}

export default App;
