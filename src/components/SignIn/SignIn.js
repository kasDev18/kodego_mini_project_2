import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export class SignIn extends React.Component {
  homepage = () => {
    setTimeout(() => {
      window.location = '/tagaytay';
    }, 1500);
  };

  render() {
    return (
      <div>
        <div class=" tab-content">
          <div
            class="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              <div class="text-center mb-3">
                <p>Sign in with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>

              <p class="text-center">or:</p>

              <div class="form-outline mb-4">
                <input type="email" id="loginName" class="form-control" />
                <label class="form-label" for="loginName">
                  Email or username
                </label>
              </div>
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  class="form-control"
                />
                <label class="form-label" for="loginPassword">
                  Password
                </label>
              </div>

              <div class="row mb-4">
                <div class="col-md-6 d-flex justify-content-center">
                  <div class="form-check mb-3 mb-md-0">
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> Remember me
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </div>
                </div>

                <div class="col-md-6 d-flex justify-content-center">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button
                onClick={this.homepage}
                type="submit"
                class="btn btn-primary btn-block mb-4"
              >
                Sign in
              </button>

              <div class="text-center">
                <p>
                  Not a member?
                  <a href="/register">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
