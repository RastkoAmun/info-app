const Part = ({partName, exercises, id}) => {
    return<p> {partName} {exercises} </p>
}

function Content({parts}) {
    return(
        <div>
            {parts.map((part) => 
                <Part partName={part.name} exercises={part.exercises} key={part.id}/>
            )}
        </div>
    )
}

export default Content;

