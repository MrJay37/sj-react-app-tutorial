
import ReactDOM from 'react-dom/client';
import DataCard from './DataCard';

const titlesAndBodies = [
  {title:' cooking', body:'chicken soup,miso soup,ramen'},
  {title:' flowerArrangement', body:' bouquet,vase arrangement,table decorations'},
  {title:' yoga' , body:' cobra pose,down dog,camel pose'}
  
];



const Home = () => {
  return <>

    <h1>Welcome to my website</h1>
    <p>Hello! I'm Chisako from Japan, I like delicious dedicated food,flower arrangement and yoga.</p>
   
    {titlesAndBodies.map((hobby) => 
    <DataCard title={hobby.title} body={hobby.body}/>)}

  </>
}







// export default index

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home />
);

