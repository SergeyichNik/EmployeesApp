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
        {name: 'John A.', salary: 800, increase: false, promo: false, id: '1'},
        {name: 'John B.', salary: 3000, increase: false, promo: false, id: '2'},
        {name: 'John C.', salary: 5000, increase: false, promo: false, id: '3'}
    ]
    const [data, setData] = useState(incData)

    const onEmpAdd = (name: string, salary: number | string) => {
        let newEmp = {name: name, salary: +salary, increase: false, promo: false, id: v1()}
        setData(prevState => [...prevState, newEmp])
    }

    const isOnIncrease = (name: string | undefined, id: string) => {
        setData(data.map<any>(item => {
            if (item.id === id) {
                switch (name) {
                    case 'increase':
                        return  {...item, increase: !item.increase};
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

    console.log(empIncreaseNum())



    const onRemoveEmp = (id: string) => {
        setData(data.filter((item) => item.id !== id))
    }
  return (
    <div className="app">
        <AppInfo empNum={data.length}
                 empIncreaseNum={empIncreaseNum}
        />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList
            data={data}
            onRemoveEmp={onRemoveEmp}
            isOnIncrease={isOnIncrease }
        />
        <EmployeesAddForm onEmpAdd={onEmpAdd}/>
    </div>
  );
}

export default App;
