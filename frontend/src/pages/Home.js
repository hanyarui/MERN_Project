import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css";
import Baca1 from "../asset/baca1.jpg";
import Baca2 from "../asset/baca2.jpg";
import Baca3 from "../asset/baca3.jpg";

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "100vh" }}
          src={Baca1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="konten">
            <p className="kalimat">
              Membaca adalah kegiatan yang melibatkan proses pengambilan
              informasi melalui tulisan atau teks, yang dapat meningkatkan
              pengetahuan dan pemahaman kita tentang dunia.
            </p>
          </div>
          <Link as={Link} to="/login">
            <Button>Get Started</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "100vh" }}
          src={Baca2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="konten">
            <p className="kalimat">
              Membaca adalah kebiasaan yang penting dalam kehidupan sehari-hari,
              karena melalui membaca kita dapat memperluas wawasan, meningkatkan
              keterampilan berpikir kritis, dan mengembangkan imajinasi kita.
            </p>
          </div>
          <Link as={Link} to="/login">
            <Button>Get Started</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "100vh" }}
          src={Baca3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="konten">
            <p className="kalimat">
              Membaca adalah pintu gerbang menuju pengetahuan yang tak terbatas.
              Dengan membaca, kita dapat menjelajahi berbagai topik, memahami
              pengalaman orang lain, dan merasakan kedalaman emosi melalui
              kata-kata yang tertulis.
            </p>
          </div>
          <Link as={Link} to="/login">
            <Button>Get Started</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
