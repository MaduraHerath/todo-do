import React from 'react';


function Header(props) {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Ansible Portal (m1-USCP)</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav navbar-nav navbar-center">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Restart Server</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Stop All Services</a>
                    </li>
                    {/*<li class="nav-item">*/}
                        {/*<a class="nav-link disabled" href="#">Disabled</a>*/}
                    {/*</li>*/}
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <form class="form-inline ">
                        {/*<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>*/}
                        {/*<button class="btn btn-primary my-2 my-sm-0" type="submit">Login</button>*/}
                    </form>
                </ul>
            </div>
        </nav>
    );
}

export default Header