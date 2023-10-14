const Content = (props) => {
    return (
      <div>
        {
          props.parts.map((part, index) => (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          ))
        }
      </div>
    );
  }

const Header = ({course}) => {
    return (
    <h2>{course}</h2>
    );
}

const Total = (props) => {
    return (
    <p><b>Number of exercises {props.parts.reduce((s, p) => 
          s + p.exercises, 0
        )}
    </b></p>
    );
}

const Course = ({id, name, parts}) => {
    return (
        <div key={id}>
            <Header course={name} />
            <Content parts={parts}/>
            <Total parts={parts} />
        </div>
    );
}

export default Course