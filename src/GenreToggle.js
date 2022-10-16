import React from "react";

export default function GenreToggle() {
    return (
        <nav class="navbar navbar-expand-lg bg-light w-50 mx-auto">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">ALL</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">DOCUMENTARY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">COMEDY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">HORROR</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">CRIME</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                SORT BY
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">Action</a></li>
                                <li><a class="dropdown-item" href="/">Another action</a></li>
                                <li><a class="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}