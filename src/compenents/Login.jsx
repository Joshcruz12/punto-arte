import React from 'react'

const Login = () => {
    return (
        <div className="login-content">
            <div className="col-sm-4 container-login-form">
                <form className="container-form">
                    <div className="container-form">
                        <h2 className='title-login h4 mb-3 text-center'>Iniciar <strong>sesión</strong></h2>
                        <div className="form-group row form-group mb-2 col-md-15">
                            <label className='form-title' for="exampleInputEmail1">Nombre</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group row form-group mb-2 col-md-15">
                            <label className='form-title' for="exampleInputPassword1">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-check text-password">
                            <a className='label-forget-password'>Olvidé mi contraseña</a>
                        </div>
                        <button className="button-form" type="submit">Entrar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login