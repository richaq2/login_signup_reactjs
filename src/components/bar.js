import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const bar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" to="/">Home</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" to="/login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" to="/signup">Signup</a>
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}

export default bar
