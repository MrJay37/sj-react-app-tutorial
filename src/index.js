import React from 'react';
import ReactDOM from 'react-dom/client';
import DataCard from './DataCard'
import Counter from './Counter'

const content = [
  {
    title: 'Hobbies',
    body: "Cooking, dancing, singing",
    author: ''
  },
  {
    title: 'Studies',
    body: "Math, science, history",
    author: ''
  },
  {
    title: 'Work',
    body: "Software, management, construction",
    author: ''
  }
]

// If a component does not need props
// You can provide empty argument list
const Home = () => <div>
  <h1>Welcome to my website!</h1>
  {content.map((obj, idx) => <DataCard 
    // Dynamically rendered React components must have a
    // unique identifier to distinguish them from
    // other components. For this, they take the 
    // key prop. One way to make sure that the value
    // for key prop is unique is by using iterator index
    // from the map function
    key={idx}
    // Actual props
    title={obj.title} 
    body={obj.body}
    // If the object has EXACT SAME keys as component props
    // You can spread the object to provide props
    // {...obj} => title={obj.title} body={obj.body}
    {...obj}
    
  />)}
  {/**
   * Using all shorthands mentioned above, 
   * effectively the code becomes the line below 
   * 
   * content.map((article, idx) => <DataCard key={idx} {...article}/>)
   * 
   * */}
  {<Counter />}
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

