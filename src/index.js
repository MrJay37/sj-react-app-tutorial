
import ReactDOM from 'react-dom/client';



const Home = () => {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <p>こんにちは！I'm from Japan, I like delicious dedicated food,flower arrangement and yoga.</p>
    </div>
  )
}

// export default index

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Home/>
);

