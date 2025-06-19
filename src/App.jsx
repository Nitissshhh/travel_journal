import Nav from './compents/Nav'
import Entry from "./compents/entry"
import Data from "./compents/data"
import './App.css'

function App() {

  const entryElement=  Data.map((entry)=>{
    return <Entry
         key={entry.id}
        //  entry={entry}  // passing the whole object 
        
        // and another syntax of writing the code give below is to just use the spread oparator
        
        {...entry}
        //  pass props individually 
        //  img={entry.img}  // these are the props 
        //  title={entry.title}
        //  country={entry.country}
        //  googlemapslink={entry.googleMapsLink}
        //  dates={entry.dates}
        //  text={entry.text}

    />
  })
 

  return (
    <>
      <Nav/>
      <main className='container'>

        {entryElement}
     
      
      </main>
    </>
  )
}

export default App
