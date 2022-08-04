import React from 'react'

const SignUp = () => {
    return (
        <div className="container-signup">
            <div className="card border-0 col-sm-4">
                <div className="card-head text-center col md-4">
                    <img width='100px' src="img/lupa.png" alt="" />
                    <h2 className="card-title h4 mb-1">Soy <strong>coleccionista</strong></h2>
                    <p>Crea una cuenta para comprar y<br /> conocer las obras de diferentes<br /> artistas.</p>
                </div>
                <form className="needs-validation" novalidate>
                    <div className="input-group mb-3"><i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                        <div className="row form-group mb-2 col-md-10">
                            <label className="form-title">Nombre completo</label>
                            <input
                                className="form-control"
                                type="email"
                              
                                //{...register("email")}
                                required
                            />
                        </div>
                        <div className="row form-group mb-2 col-md-10">
                            <label className="form-title">Tu correo</label>
                            <input
                                className="form-control"
                                type="email"
                    
                                //{...register("email")}
                                required
                            />
                        </div>
                        <div className="row form-group mb-2 col-md-10">
                            <label className="form-title">Contraseña</label>
                            <input
                                className="form-control"
                                type="email"
                            
                                //{...register("email")}
                                required
                            />
                        </div>
                        <div className="row form-group mb-2 col-md-10">
                            <label className="form-title">Repetir contraseña</label>
                            <input
                                className="form-control"
                                type="email"
                    
                                //{...register("email")}
                                required
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="form-check form-check-terms">
                            <input type="checkbox" checked id="remember_me" />
                            <label className="form-check-label terms-conditions" for="remember_me">Al registrarme, acepto las <a className='a-link'>Políticas de<br /> privacidad</a> y los <a className="a-link">Términos y Condiciones.</a></label>
                        </div><a className="nav-link-inline fs-sm" href="account-password-recovery.html">Forgot password?</a>
                    </div>
                    <div className="btn-form-1">
                        <button /*onSubmit={handleSubmit(submit)}*/ className="button-form second-btn" type="submit"><i className="ci-sign-in me-2 ms-n21"></i>Crear cuenta</button>
                    </div>
                </form>
            </div>
            <div className="vertical"><hr /></div>
            <div className="card-2 row justify-content-center align-items-center">
                <div className="card-body col-auto text-center">
                    <div className="img-container">
                        <img src="img/pnicel.png" alt="pincel-photo" />
                    </div>
                    <h2 className="h4 mb-3">Soy un <strong>artista</strong></h2>
                    <p className="fs-sm text-muted mb-4">Crea una cuenta para mostrar tus<br /> trabajos y darte a conocer como<br /> artísta.</p>
                    <div className="col-12">
                        <button className="button-form" type="submit"><i className="ci-user me-2 ms-n1"></i>Aplicar ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp