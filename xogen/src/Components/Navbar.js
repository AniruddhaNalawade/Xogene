import React ,{useState} from 'react'

const Navbar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (query.trim()) {
        onSearch(query);
      }
    };
  
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img src='Xogene_logo_color-2.png' alt='xogene_logo' style={{ height: "4rem", width: "13rem" }} />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <form class="d-flex" onSubmit={handleSearch}>
                        <input
                            className='form-control me-2'
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter drug name"
                        />
                        <button className='btn btn-outline-success' type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar