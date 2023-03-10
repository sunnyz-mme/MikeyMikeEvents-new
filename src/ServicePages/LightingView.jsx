import { Row } from "react-bootstrap";
import { useState } from "react";
import SwiperWizVideos from "../SwiperWizVideos";
import VerticalLayout from "../VerticalLayout";
import GallerySection from "../GallerySection";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { services } from "../data";
export default function LightingView() {
  const [data, setData] = useState(
    services.filter((e) => e.name === "Lighting")[0]
  );
  console.log(data.gallery);
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Lighting - Mikey Mike Events</title>
          <meta
            name="description"
            content="Our team of lighting designers will set the mood and ambiance for your event by guiding you through our selection of lighting services."
          />
        </Helmet>
        <section className="eventHeader">Lighting</section>
        <VerticalLayout data={data} />
        <SwiperWizVideos data={data.subheader} />
        <section
          style={{ width: "80%", maxWidth: "1200px", margin: "2rem auto" }}
        >
          <GallerySection gallery={data.gallery} />
        </section>

        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
