import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const Course = ({course}) => {
  return(
    <div>
      {
        course.map((item) => {
          return(
            <div>
              <Header name={item.name} />
              <Content parts={item.parts} />
              <Total parts={item.parts} />
            </div>
          )
        })
      }
      
    </div>
  )
}

export default Course;