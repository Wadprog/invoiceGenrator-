const App = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col '>
            <h5 className='h5'>Crear Facturas</h5>
          </div>
          <div className='col d-flex justify-content-end mb-2'>
            <button type='button' className='btn mr-1 btn-info'>
              <i className='mr-1 fa fa-save'></i> Guardar
            </button>
            <button type='button' className='btn mr-1 btn-primary'>
              <i className='mr-1 fa fa-print'></i>Imprimir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const domContainer = document.querySelector("#root");
ReactDOM.render(<App />, document.getElementById("root"));
