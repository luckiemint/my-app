import Comp from "./Comp"
import propTypes from "prop-types"

const Student = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <Comp name={props.name} />
        </>
    )
}

Student.propType = {
    name: propTypes.string,
    age: propTypes.number
}

Student.defaultProps = {
    name: "Name",
    age: 0 
}

//object parameter
// const Student = ({ name, age }) => {
//     return (
//         <>
//             <h1>{name}</h1>
//             <h1>{age}</h1>
//         </>
//     )
// }

export default Student