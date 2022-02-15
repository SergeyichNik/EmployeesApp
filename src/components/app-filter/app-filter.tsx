import "./app-filter.css";
import {DataType} from "../employees-list/employees-list";
import React from "react";

type PropsType = {
    setFilterBtnValue: (prop: string) => void
}

const AppFilter = (props: PropsType) => {

    const onBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        let {name} = e.currentTarget
        props.setFilterBtnValue(name)
    }

    return (
        <div className="btn-group">
            <button type="button"
                    onClick={onBtnClick}
                    name={'all'}
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button type="button"
                    onClick={onBtnClick}
                    name={'promo'}
                    className="btn btn-outline-light">
                    На повышение
            </button>
            <button type="button"
                    onClick={onBtnClick}
                    name={'more-than-1000'}
                    className="btn btn-outline-light">
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;