const Total = ({parts}) =>{
    const total = parts.reduce((sum, item) => {
        return sum = sum + item.exercises
    }, 0)

    return(
        <h4>
            total of {total} exercises
        </h4>
    )
}

export default Total;