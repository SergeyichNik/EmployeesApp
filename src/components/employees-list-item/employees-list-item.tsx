import './employees-list-item.css';
import React, {useState} from "react";

type PropsType = {
    id: string
    name: string,
    salary: number,
    increase: boolean
    promo: boolean
    onRemoveEmp: (id: string) => void
    isOnIncrease: (name: string | undefined, id: string) => void
}

const EmployeesListItem = (props: PropsType) => {
    const {id, name, salary, increase, promo, onRemoveEmp, isOnIncrease} = props

    const onIncreaseChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        let {name} = e.currentTarget.dataset
        isOnIncrease(name, id)
    }

    let increaseClass = "list-group-item d-flex justify-content-between"

    if (promo) {
        increaseClass += ' like'
    }

    if (increase) {
        increaseClass = "list-group-item d-flex justify-content-between increase"
    }

    const onRemove = () => {
        onRemoveEmp(id)
    }

    return (
        <li className={increaseClass}>
            <span data-name={"promo"} onClick={onIncreaseChange} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    type="button"
                    data-name={"increase"}
                    className="btn-cookie btn-sm "
                    onClick={onIncreaseChange}>
                    <i className="fas fa-cookie"/>
                </button>

                <button type="button"
                        onClick={onRemove}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"/>
                </button>
                <i className="fas fa-star"/>
            </div>
        </li>
    )
}

export default EmployeesListItem;