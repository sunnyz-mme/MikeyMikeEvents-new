import { Row } from "react-bootstrap";
import { useState } from "react";
import SwiperGallerySection from "../SwiperGallerySection";
import HorizontalLayout from "../HorizontalLayout";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { events_swiper } from "../data";

export default function MilestoneView() {
  const [data, setData] = useState(
    events_swiper.filter((e) => e.name === "milestone celebrations")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Milestone Celebrations - Mikey Mike Events</title>
          <meta
            name="description"
            content="We specialize in creating highly personalized milestone events that celebrate, honor, thank and applaud life's most momentous occasions."
          />
        </Helmet>

        <section className="eventHeader">Milestone Celebrations</section>
        <h2 className="eventSubheader">
          We have all the services you need for your celebration
        </h2>
        <SwiperGallerySection data={data.category} />
        <HorizontalLayout data={data} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
