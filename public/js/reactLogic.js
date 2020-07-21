class Comprobantes extends React.Component {
  render() {
    const { comprobantes } = this.props;
    return (
      <div className='row'>
        <React.Fragment>
          <div className='col-sm-6'>
            <div className='form-group'>
              <label className='mb-0' htmlFor='clientName'>
                Comprobante Comprador
              </label>
              <input
                onChange={this.props.handleChange}
                name='comprobanteComprador'
                value={this.props.comprobanteComprador}
                type='text'
                className='form-control'
                aria-label='Small'
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <label className='mb-0' htmlFor='clientName'>
                Comprobante Empresa
              </label>
              <input
                readOnly={true}
                value={this.props.comprobantes[0].number}
                type='text'
                className='form-control'
                aria-label='Small'
              />
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

class Summary extends React.Component {
  render() {
    const { selectedProducts } = this.props;
    var Subtotal =
      selectedProducts.length > 0
        ? selectedProducts.reduce(
            (acc, prod) => acc + prod.price * prod.amount,
            0
          )
        : 0;
    var ITBis = Subtotal > 0 ? Subtotal * 0.18 : 0;

    return (
      <div className='row'>
        <div className='col-sm-6'></div>
        <div className='col-sm-6'>
          <div className='row'>
            <div className='col-sm-6'></div>
            <div className='col-sm-6'></div>
          </div>

          <div className='row mt-2 '>
            <div className='col-sm-6'>Subtotal</div>
            <div className='col-sm-6'>{Subtotal}</div>
          </div>

          <div className='row'>
            <div className='col-sm-6'>ITBis 18%</div>
            <div className='col-sm-6'>{ITBis}</div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>Total</div>
            <div className='col-sm-6'>{ITBis + Subtotal}</div>
          </div>
        </div>
      </div>
    );
  }
}

class Product extends React.Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
  }
  delete() {
    this.props.deleteSelectedProduct(this.props._id);
  }
  render() {
    return (
      <li className=' py-0 mt-1 list-group-item '>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='form-group'>
              <label className='mb-0' htmlFor='clientName'>
                Nombre
              </label>
              <input
                readOnly={true}
                value={this.props.name}
                type='text'
                className='form-control'
                aria-label='Small'
              />
            </div>
          </div>
          <div className='col-sm-2'>
            <div className='form-group'>
              <label className='mb-0' htmlFor='clientName'>
                precio
              </label>
              <input
                readOnly={true}
                value={this.props.price}
                type='number'
                className='form-control'
                aria-label='Small'
              />
            </div>
          </div>
          <div className='col-sm-2'>
            <div className='form-group'>
              <label className='mb-0' htmlFor='clientName'>
                QTY
              </label>
              <input
                readOnly={true}
                value={this.props.amount}
                type='number'
                className='form-control'
                aria-label='Small'
              />
            </div>
          </div>
          <div className='col-sm-2'>
            <div className='form-group'>
              <label className='mb-0' htmlFor='clientName'>
                Total
              </label>
              <input
                value={this.props.price * this.props.amount}
                readOnly={true}
                type='number'
                className='form-control'
                aria-label='Small'
              />
            </div>
          </div>
          <div className='col-sm-2'>
            <div className='form-group'>
              <label className=' text-muted mb-0'>Accion</label>
              <button onClick={this.delete} className=' d-block btn btn-danger'>
                <i className='fa fa-trash'></i>
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
class ProductAdder extends React.Component {
  render() {
    return (
      <div className=' bg-info py-0 mt-1 list-group-item '>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='form-group'>
              <label className='mb-0' htmlFor='clientName'>
                Nombre
              </label>
              <select
                className='form-control'
                onChange={this.props.handleSelectProduct}
              >
                <option selected disabled></option>
                {this.props.products.map(product => (
                  <option key={product._id} value={product._id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='col-sm-2'>
            <div className='form-group'>
              <label className='mb-0' htmlFor='clientName'>
                precio
              </label>
              <input
                min={1}
                onChange={this.props.changePrice}
                name='price'
                value={this.props.selectedProduct.price}
                type='number'
                className='form-control'
                aria-label='Small'
              />
            </div>
          </div>
          <div className='col-sm-2'>
            <div className='form-group'>
              <label className='mb-0' htmlFor='clientName'>
                QTY
              </label>
              <input
                min={1}
                onChange={this.props.changeQty}
                name='amount'
                value={this.props.selectedProduct.amount}
                type='number'
                className='form-control'
                aria-label='Small'
              />
            </div>
          </div>
          <div className='col-sm-2'>
            <div className='form-group'>
              <label className='mb-0' htmlFor='clientName'>
                Total
              </label>
              <input
                readOnly={true}
                value={
                  this.props.selectedProduct.price *
                  this.props.selectedProduct.amount
                }
                type='number'
                className='form-control'
                aria-label='Small'
              />
            </div>
          </div>
          <div className='col-sm-2'>
            <div className='form-group'>
              <label className=' text-muted mb-0'>Accion</label>
              <button
                onClick={this.props.addNewSelectedProduct}
                className=' d-block btn btn-success'
              >
                <i className='fa fa-plus'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Products extends React.Component {
  render() {
    return (
      <div className='border p-1'>
        <label className='badge badge-secondary p-2'>Servicios</label>

        <ul className='list-group'>
          {this.props.selectedProducts.map(product => (
            <Product
              deleteSelectedProduct={this.props.deleteSelectedProduct}
              key={product._id}
              {...product}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class ClientDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='form-group'>
          <label className='badge badge-secondary p-2'>
            Informacion del cliente
          </label>
          <div className='form-group'>
            <label className='mb-0' htmlFor='clientName'>
              Nombre
            </label>
            <select
              className='form-control'
              name='clientName'
              onChange={this.props.handleSelectClient}
            >
              <option selected disabled></option>
              {this.props.clients.map(client => (
                <option key={client._id} value={client._id}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='form-group'>
          <label className='mb-0'>Telephono</label>
          <input
            readOnly={true}
            value={this.props.selectedClient.phone}
            type='text'
            className='form-control mt-0'
          />
        </div>

        <div className='form-group'>
          <label className='mb-0' htmlFor='email'>
            Correo
          </label>
          <input
            readOnly={true}
            value={this.props.selectedClient.email}
            type='text'
            className='form-control mt-0'
          />
        </div>

        <div className='form-group'>
          <label className='mb-0' htmlFor='address'>
            Dirreccion
          </label>
          <textarea
            readOnly={true}
            id='addess'
            className='form-control'
            rows='2'
            value={this.props.selectedClient.address}
          ></textarea>
        </div>
      </React.Fragment>
    );
  }
}

class InvoiceDetails extends React.Component {
  render() {
    return (
      <div className='  border-dotted border-info p-2 my-3'>
        <div>
          <div className='row border-dotted border-top-0 border-right-0 border-left-0 p-3 mb-5'>
            <div className='col-md-6 col-sm-12'>
              <ClientDetails
                clients={this.props.clients}
                selectedClient={this.props.selectedClient}
                handleSelectClient={this.props.handleSelectClient}
              />
            </div>

            <div className='col-md-6 col-sm-12'>
              <VoucherDetails {...this.props} />
            </div>
          </div>
          <div className='containsAddr'>
            <ProductAdder
              changePrice={this.props.changePrice}
              changeQty={this.props.changeQty}
              addNewSelectedProduct={this.props.addNewSelectedProduct}
              handleChangeSelectProduct={this.props.handleChangeSelectProduct}
              handleSelectProduct={this.props.handleSelectProduct}
              {...this.props}
            />
          </div>
          <div className='px-1 py-2'>
            <Products
              deleteSelectedProduct={this.props.deleteSelectedProduct}
              {...this.props}
            />
          </div>
        </div>
        <Summary selectedProducts={this.props.selectedProducts} />
      </div>
    );
  }
}

class VoucherDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='form-group'>
          <label htmlFor='Iformacion' className='badge badge-secondary p-2'>
            Informacion de la factura
          </label>
        </div>

        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label className='mb-0' htmlFor='inputEmail4'>
              Fecha
            </label>
            <div className='input-group mb-3'>
              <input
                name='date'
                type='date'
                onChange={this.props.handleChange}
                className='form-control'
                aria-describedby='basic-addon2'
              />
              <div className='input-group-append'>
                <span className='input-group-text' id='basic-addon2'>
                  <i
                    className='fa fa-calendar
                            '
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>Tipo de factura</div>
          <div className='card-body'>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='type'
                    onChange={this.props.handleChange}
                    id='Factura'
                    value='Factura'
                    checked={this.props.type == "Factura" ? true : false}
                  />
                  <label className='form-check-label' htmlFor='inlineRadio1'>
                    Factura
                  </label>
                </div>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='type'
                  id='Cotizacion'
                  value='Cotizacion'
                  onChange={this.props.handleChange}
                  checked={this.props.type == "Cotizacion" ? true : false}
                />
                <label className='form-check-label' htmlFor='inlineRadio2'>
                  Cotizacion
                </label>
              </div>
              {this.props.comprobantes.length > 0 ? (
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='comprobante'
                    checked={this.props.comprobante}
                    onChange={this.props.handleChange}
                  />
                  <label className='form-check-label' htmlFor='comprobante'>
                    Con comprobante
                  </label>
                </div>
              ) : (
                <h6> No hay mas comprobantes disponible</h6>
              )}
              {this.props.comprobante && (
                <Comprobantes
                  {...this.props}
                  handleChange={this.props.handleChange}
                />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const App = () => {
  const [state, setState] = React.useState({
    clients: [],
    products: [],
    selectedProducts: [],
    selectedProduct: { _id: 0, name: "", price: 0, amount: 0 },
    selectedClient: {},
    date: "",
    type: "Cotizacion",
    comprobante: false,
    comprobanteComprador: "",
    comprobantes: [],
  });

  React.useEffect(() => {
    let one = "http://localhost:4000/api/service";
    let two = "http://localhost:4000/api/client";
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const serviceResp = responses[0].data;
          const ClientResp = responses[1].data;
          console.log(serviceResp, ClientResp);
          setState({ ...state, clients: ClientResp, products: serviceResp });
        })
      )
      .catch(errors => {
        handleError(errors);
      });
  }, []);

  const handleError = error => {
    console.error(error);
  };

  const handleChangeSelectProduct = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleChange = e => {
    if (e.target.type == "checkbox")
      setState({ ...state, [e.target.name]: e.target.checked });
    else setState({ ...state, [e.target.name]: e.target.value });

    //console.log("here is the date we have " + state.date);
  };
  const addNewSelectedProduct = e => {
    const { selectedProduct } = state;
    if (selectedProduct.name != "") {
      var all = [...state.selectedProducts, selectedProduct];
      setState({ ...state, selectedProducts: all }, () => {
        var empty = { _id: 0, name: "", price: 0, amount: 0 };

        setState({ selectedProduct: empty });
      });
    }
  };

  const deleteSelectedProduct = id => {
    var goodProducts = state.selectedProducts.filter(
      product => product._id != id
    );

    setState({ ...state, selectedProducts: goodProducts });
  };

  const changePrice = e => {
    var newProd = state.selectedProduct;
    newProd.price = e.target.value;

    setState({ ...state, selectedProduct: newProd });
  };
  const changeQty = e => {
    var newProd = state.selectedProduct;
    newProd.amount = e.target.value;

    setState({ ...state, selectedProduct: newProd });
  };

  const handleSelectProduct = e => {
    var select = state.products.filter(
      product => product._id == e.target.value
    );
    setState({ ...state, selectedProduct: select[0] });
  };
  const handleSelectClient = e => {
    var select = state.clients.filter(client => client._id == e.target.value);
    setState({ ...state, selectedClient: select[0] });
  };

  const handleSave = async () => {
    //gettin the information that we need;
    const {
      selectedClient: { _id: clientId },
      selectedProducts,
      type,
      date,
    } = state;

    const f = { clientId, selectedProducts, type, date };

    console.log(type);
    const body = JSON.stringify({ f });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post("/invoices", body, config);
    window.location.replace("/invoices");
  };
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col '>
            <h5 className='h5'>Crear Facturas</h5>
          </div>
          <div className='col d-flex justify-content-end mb-2'>
            <button
              type='button'
              className='btn mr-1 btn-info'
              onClick={handleSave}
            >
              <i className='mr-1 fa fa-save'></i>
            </button>
            <button type='button' className='btn mr-1 btn-primary'>
              <i className='mr-1 fa fa-print'></i>
            </button>
          </div>
        </div>
        <InvoiceDetails
          {...state}
          changeQty={changeQty}
          changePrice={changePrice}
          handleChangeSelectProduct={handleChangeSelectProduct}
          handleSelectProduct={handleSelectProduct}
          handleChange={handleChange}
          handleSelectClient={handleSelectClient}
          addNewSelectedProduct={addNewSelectedProduct}
          deleteSelectedProduct={deleteSelectedProduct}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
