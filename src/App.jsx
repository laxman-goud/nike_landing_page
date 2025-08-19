import { Routes, Route } from "react-router-dom";
import { CustomerReviews, Footer, Hero, PopularProducts, Services, Subscribe, SuperQuality, SpecialOffers } from "./sections";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => (
  <main className="relative">
    <NavBar />

    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <>
            <section className="xl:padding-l wide:padding-r padding-b ">
              <Hero />
            </section>
            <section className="padding">
              <PopularProducts />
            </section>
            <section className="padding">
              <SuperQuality />
            </section>
            <section className="padding-x py-10">
              <Services />
            </section>
            <section className="padding">
              <SpecialOffers />
            </section>
            <section className="bg-pale-blue padding">
              <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
              <Subscribe />
            </section>
            <section className="bg-black padding-x padding-t pb-8">
              <Footer />
            </section>
          </>
        }
      />

      {/* Login Page */}
      <Route path="/login" element={<Login />} />
      {/* signup Page */}
      <Route path="/register" element={<Register />} />
    </Routes>
  </main>
);

export default App;
