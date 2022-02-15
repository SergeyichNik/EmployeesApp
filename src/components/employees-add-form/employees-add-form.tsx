import './employees-add-form.css';
import React, {useState} from "react";

type PropsType = {
    onEmpAdd: (name: string, salary: number | string) => void
}
type StateType = {
    name: string,
    salary: string | number
}
const EmployeesAddForm = (props: PropsType) => {

    const [newEmp, setNewEmp] = useState<StateType>({name: '', salary: ''})

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let {name, value} = e.currentTarget
        setNewEmp({...newEmp, [name]: value})
    }

    const onAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (newEmp.name === '' || newEmp.salary === '' ) {
            return
        } else {
            props.onEmpAdd(newEmp.name, newEmp.salary)
            setNewEmp({name: '', salary: ''})
        }
    }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       value={newEmp.name}
                       name={'name'}
                       onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />
                <input type="number"
                       value={newEmp.salary}
                       name={'salary'}
                       onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="З/П в $?" />

                <button type="submit"
                        onClick={onAdd}
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;