import ReactDOM from 'react-dom/client';

const Home = () => {
  return <>
    <h1>Welcome to my website!</h1>
    <p>Hello, my name is Sanket and I live in Jersey City, NJ</p>
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home />
);

