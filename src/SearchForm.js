import React from "react";
import './searchForm.css';
export default function SearchForm() {

    function alertSearch() {
        alert('Searching...')
    }
    return (
        <div className="SearchForm w-50 mx-auto">
            <p className="brand text-danger">netflixroulette</p>
            <h2 className="text-white">FIND YOUR MOVIE</h2>
            <form className="form-search">
                <div class="input-group mb-3">
                    <input type="text" className="form-control" placeholder="What do you want to watch?" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-danger" onClick={alertSearch} type="button">SEARCH</button>
                    </div>
                </div>
            </form>
        </div>
    )
}