import React from 'react';

// creating the navigation bar for the website
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-brand">Joel Hilton's Movies</ul>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Podcast">
            Podcast
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Movies">
            Movie List
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
