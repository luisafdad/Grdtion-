import React from "react";
import { useParams } from "react-router";

class EditarPredial extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            infoPredio: {},
        })
        this.onUpdate = props.onUpdate;
        this.onChangeValue = this.onChangeValue.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    componentDidMount() {
        const codigo = this.props.params.codigo;
        this.setState({codigo: codigo});
        fetch("http://localhost:3001/predios/" + codigo)
        .then((res) => res.json())
        .then((info) => {
            console.log(info);
            this.setState({infoPredio: info});
        });
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const codigo = this.state.codigo;
        console.log(this.state.infoPredio);
        this.onUpdate(codigo, this.state.infoPredio);
    }

    onChangeValue(campo, valor) {
        let datos = Object.assign(this.state.infoPredio, {
            [campo]: valor
        })
        this.setState({infoPredio: datos})
        console.log(this.state);
    }

    render() {
        return (
            <>
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Editar Predio</h1>
                </div>
                <form className="user" onSubmit={this.handleOnSubmit}>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                            type="number"
                            className="form-control form-control-user"
                            id="codigo"
                            name="codigo"
                            placeholder="Codigo"
                            value={this.state?.infoPredio?.codigo}
                            onChange={e => this.onChangeValue(e.target.name, e.target.value)}
                        />
                        </div>
                        <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control form-control-user"
                            id="cedula"
                            name="cedula"
                            placeholder="Cedula del Propietario"
                            value={this.state?.infoPredio?.cedula}
                            onChange={e => this.onChangeValue(e.target.name, e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-user"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre del Propietario"
                        value={this.state?.infoPredio?.nombre}
                        onChange={e => this.onChangeValue(e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                            type="text"
                            className="form-control form-control-user"
                            id="direccion"
                            name="direccion"
                            placeholder="Direccion del Predio"
                            value={this.state?.infoPredio?.direccion}
                            onChange={e => this.onChangeValue(e.target.name, e.target.value)}
                        />
                        </div>
                        <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control form-control-user"
                            id="barrio"
                            name="barrio"
                            placeholder="Barrio del Predio"
                            value={this.state?.infoPredio?.barrio}
                            onChange={e => this.onChangeValue(e.target.name, e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                            type="text"
                            className="form-control form-control-user"
                            id="aconstruida"
                            name="aconstruida"
                            placeholder="Área Construida"
                            value={this.state?.infoPredio?.aconstruida}
                            onChange={e => this.onChangeValue(e.target.name, e.target.value)}
                        />
                        </div>
                        <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control form-control-user"
                            id="atotal"
                            name="atotal"
                            placeholder="Área Total"
                            value={this.state?.infoPredio?.atotal}
                            onChange={e => this.onChangeValue(e.target.name, e.target.value)}
                        />
                        </div>
                    </div>
                    <button onSubmit={this.handleOnSubmit}
                        className="btn btn-primary btn-user btn-block"
                    > Editar
                    </button>
                    <hr />
                    <button 
                        href="index.html"
                        className="btn btn-danger btn-user btn-block"
                    > Cancelar
                    </button>
                </form>
            <hr/>
        
            </>
        );
    }
}

export default (props) => {
    const params = useParams();
    return (
        <EditarPredial {...props} params={params} />
    );
}