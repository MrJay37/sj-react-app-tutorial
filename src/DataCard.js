// React components are JavaScript functions
// They take one argument i.e. props

/**
 * 
 * Props allows dynamic rendering in the React component
 * Props is how a parent component sends 
 * data to a child component
 * 
 * Component1
 *  Component2 with data1 (must send props to Component2)
 *  Component2 with data2 (must send props to Component2)
 *  Component2 with data3 (must send props to Component2)
 * 
 */

// Destructured object argument defintion helps developers
// to recognize what props are needed
const DataCard = ({title, body}) => <div>
  <h1>{title}</h1>
  {body}
</div>

// JavaScript modules must export the react function
// to use in other files
export default DataCard


