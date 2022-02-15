import "./app-info.css";

type PropsType = {
    empNum: number,
    empIncreaseNum: () => number
}

const AppInfo = (props: PropsType) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {props.empNum}</h2>
            <h2>Премию получат: {props.empIncreaseNum()}</h2>
        </div>
    )
}

export default AppInfo;