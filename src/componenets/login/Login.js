import React from 'react'
import { Link } from 'react-router-dom'
import '../login/login.css'
export const Login = () => {
  return (
    <section class="login-block">
      <div class="row">
        <div class="col-md-4 login-sec">
          <h2 class="text-center">Login Now</h2>
          <form class="login-form">
            <div class="form-group">
              <label for="exampleInputEmail1" class="text-uppercase">Username</label>
              <input type="text" class="form-control" placeholder="" />

            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="text-uppercase">Password</label>
              <input type="password" class="form-control" placeholder="" />
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" />
                <small>Remember Me</small>
              </label>
              <Link to='/'><button type="submit" class="btn btn-login float-right">Submit</button></Link>
              
            </div>

          </form>
          <div class="copy-text">Created with <i class="fa fa-heart"></i> by Grafreez</div>
        </div>
        <div class="col-md-8 banner-sec">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
