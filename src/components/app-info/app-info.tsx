import "./app-info.css";

type PropsType = {
    empNum: number
}

const AppInfo = (props: PropsType) => {
    console.log(props.empNum)
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {props.empNum}</h2>
            <h2>Премию получат:</h2>
        </div>
    )
}

export default AppInfo;