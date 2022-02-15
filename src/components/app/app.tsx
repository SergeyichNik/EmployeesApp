import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import {v1} from "uuid";
import React, {useState} from "react";

function App() {

    const incData = [
        {name: 'Aohn A.', salary: 800, increase: false, promo: false, id: '1'},
        {name: 'Bohn B.', salary: 3000, increase: false, promo: false, id: '2'},
        {name: 'Cohn C.', salary: 5000, increase: false, promo: false, id: '3'}
    ]

    const [data, setData] = useState(incData)
    const [filterBtnValue, setFilterBtnValue] = useState('all')
    const [searchPanel, setSearchPanel] = useState('')
    console.log(searchPanel)
    let filteredData = data;

    const onEmpSearch = () => {
        if(searchPanel) {
            setData(data.filter((item) => (item.name.indexOf(searchPanel, 0) > -1)));
        } else {
            setData(incData)
        }
    }

    if (filterBtnValue === 'promo') {
        filteredData = data.filter((item) => item.promo)
    } else if (filterBtnValue === 'more-than-1000') {
        filteredData = data.filter((item) => item.salary > 1000)
    }

    const onEmpAdd = (name: string, salary: number | string) => {
        let newEmp = {name: name, salary: +salary, increase: false, promo: false, id: v1()}
        setData(prevState => [...prevState, newEmp])
    }

    const isOnIncrease = (name: string | undefined, id: string) => {
        setData(data.map<any>(item => {
            if (item.id === id) {
                switch (name) {
                    case 'increase':
                        return {...item, increase: !item.increase};
                    case 'promo':
                        return {...item, promo: !item.promo};
                }
            }
            return item;
        }))

    }

    const empIncreaseNum = () => {
        let newData = data.filter((item) => item.increase);
        return newData.length;
    }

    const onRemoveEmp = (id: string) => {
        setData(data.filter((item) => item.id !== id))
    }

    return (
        <div className="app">
            <AppInfo empNum={data.length}
                     empIncreaseNum={empIncreaseNum}
            />

            <div className="search-panel">
                <SearchPanel
                    searchPanel={searchPanel}
                    setSearchPanel={setSearchPanel}
                    onEmpSearch={onEmpSearch}
                />
                <AppFilter setFilterBtnValue={setFilterBtnValue}/>
            </div>

            <EmployeesList
                data={filteredData}
                onRemoveEmp={onRemoveEmp}
                isOnIncrease={isOnIncrease}
            />
            <EmployeesAddForm onEmpAdd={onEmpAdd}/>
        </div>
    );
}

export default App;
