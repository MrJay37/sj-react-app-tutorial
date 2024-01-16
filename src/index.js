import ReactDOM from 'react-dom/client';
import Anything from './datacard'

const names = [
  'New York',
  'Burgers',
  'Skating',
  'Software',
  'Pizza',
  'Boats'
]

const Home = () => {
  return <>
    <h1>Welcome to my website!</h1>
    <p>Hello, my name is Sanket and I live in Jersey City, NJ</p>
    {names.map(arrayName => <Anything name={arrayName} />)}
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home />
);

