import React from 'react'


export default function Header() {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="javascript:void(0)">logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">Tours</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">Destinations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">pages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">contact</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="text" placeholder="Search" />
                        <button class="btn btn-primary" type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
