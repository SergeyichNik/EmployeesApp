import './search-panel.css';
import React from "react";
import {DataType} from "../employees-list/employees-list";

type PropsType = {
    setSearchPanel: (searchPanel: string) => void
    searchPanel: string,
    onEmpSearch: () => void;
}

const SearchPanel = (props: PropsType) => {



    const onValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearchPanel(e.currentTarget.value)
        props.onEmpSearch()
    }

    return (
        <input type="text"
               value={props.searchPanel}
               onChange={onValueChangeHandler}
                className="form-control search-input"
                placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;