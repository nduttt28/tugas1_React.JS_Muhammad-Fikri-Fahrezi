import './App.css'

function App() {
  return (
    <>
      <div className="container">

        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          <div className="col-md-3">
            <a href="#" className="d-inline-flex align-items-center text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4 fw-bold">BookStore</span>
            </a>
          </div>

          <ul className="nav">
            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#books" className="nav-link">Book</a></li> {/* diubah */}
            <li><a href="#team" className="nav-link">Team</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div>
            <button className="btn btn-outline-primary me-2">Login</button>
            <button className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* HERO */}
          <div className="row align-items-center border rounded-3 shadow-lg p-4 mb-5">
            <div className="col-lg-7">
              <h1 className="fw-bold">
                Filosofi Teras
              </h1>
              <p className="lead">
                Buku karya Henry Manampiring yang mengajarkan cara berpikir stoik untuk menghadapi masalah hidup dengan lebih tenang dan bijak.
              </p>

              <button className="btn btn-primary me-2">Buy Now</button>
              <button className="btn btn-outline-secondary">Detail</button>
            </div>

            <div className="col-lg-5">
              <img
                src="https://loremflickr.com/500/400/book?lock=100"
                className="img-fluid rounded"
                alt="Filosofi Teras"
              />
            </div>
          </div>

        {/* BEST SELLER */}
<section id="books" className="text-center mb-5">
  <h2 className="fw-bold">Best Seller Books</h2>
  <p className="text-muted">
    Koleksi buku populer karya penulis Indonesia
  </p>
</section>

<div className="row g-4">
  {[
    "Filosofi Teras",
    "Laut Bercerita",
    "Bumi",
    "Negeri 5 Menara",
    "Perahu Kertas",
    "Dilan 1990"
  ].map((book, i) => (
    <div className="col-md-4" key={i}>
      <div className="card shadow-sm h-100 border-0">

        {/* gambar auto tapi beda-beda */}
        <img 
          src={`https://loremflickr.com/300/200/book?lock=${i}`} 
          className="card-img-top" 
          alt={book} 
        />

        <div className="card-body text-center">
          <h5 className="fw-semibold">{book}</h5>
          <p className="text-muted">
            Buku populer karya penulis Indonesia yang wajib kamu baca.
          </p>
          <button className="btn btn-sm btn-outline-primary">
            View
          </button>
        </div>

      </div>
    </div>
  ))}
</div>

{/* TEAM */}
<section id="team" className="text-center mt-5">
  <h2 className="fw-bold">Our Team</h2>
  <p className="text-muted">Tim kreatif di balik BookStore</p>

  <div className="row mt-4 g-4">
    {["Fikri", "Valentino", "Hafiz"].map((name, i) => (
      <div className="col-md-4" key={i}>
        <div className="card border-0 shadow-sm p-4 h-100">

          <img
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`}
          className="rounded-circle mx-auto mb-3"
          alt={name}
          style={{ width: "120px", height: "120px" }}
        />

          <h5 className="fw-semibold">{name}</h5>
          <p className="text-muted mb-2">Web Developer</p>

          <div>
            <i className="fa-brands fa-instagram me-2"></i>
            <i className="fa-brands fa-linkedin me-2"></i>
            <i className="fa-brands fa-github"></i>
          </div>

        </div>
      </div>
    ))}
  </div>
</section>

        {/* CONTACT */}
<section id="contact" className="mt-5">
  <div className="text-center mb-5">
    <h2 className="fw-bold">Contact Us</h2>
    <p className="text-muted">Hubungi kami melalui informasi berikut</p>
  </div>

  <div className="row text-center g-4">

    <div className="col-md-4">
      <div className="card border-0 shadow-sm p-4 h-100">
        <i className="fa-solid fa-location-dot fa-2x mb-3 text-primary"></i>
        <h5 className="fw-semibold">Alamat</h5>
        <p className="text-muted">
          Bekasi, Indonesia
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card border-0 shadow-sm p-4 h-100">
        <i className="fa-solid fa-envelope fa-2x mb-3 text-primary"></i>
        <h5 className="fw-semibold">Email</h5>
        <p className="text-muted">
          storebook@email.com
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card border-0 shadow-sm p-4 h-100">
        <i className="fa-solid fa-phone fa-2x mb-3 text-primary"></i>
        <h5 className="fw-semibold">Telepon</h5>
        <p className="text-muted">
          +62 89722-1738273
        </p>
      </div>
    </div>

  </div>
</section>

        {/* Footer */}
        <div className="b-example-divider"></div>

        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li><a href="#books" className="nav-link px-2 text-body-secondary">Book</a></li>
            <li className="nav-item">
              <a href="#team" className="nav-link px-2 text-body-secondary">Team</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a>
            </li>
          </ul>

          <p className="text-center text-body-secondary">&copy; 2026 UBHARA</p>
        </footer>

      </div>

      {/* Smooth scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}

export default App