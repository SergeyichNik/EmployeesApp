import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';
type DataType = {
    name: string,
    salary: number,
    increase: boolean,
    promo: boolean,
    id: string
}
type PropsType = {
    data: DataType[]
    onRemoveEmp: (id: string) => void
}

const EmployeesList = (props: PropsType) => {
    const {data, onRemoveEmp} = props
    return (
        <ul className="app-list list-group">
            {data.map((item) => {
                return <EmployeesListItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            salary={item.salary}
                            increase={item.increase}
                            promo={item.promo}
                            onRemoveEmp={onRemoveEmp}/>})
            }

        </ul>
    )
}

export default EmployeesList;