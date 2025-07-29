export const Unidad = ({valor, count}) => {

    return (
        <div className="col-2 md-2 bg-secondary mx-auto m-1 text-light border justify-content-center align-items-center d-flex" style={{ width: "200px", height: "200px" }}>
            <div className="digit " style={{ fontSize: "130px" }}>{count}</div>
        </div>

    )
}