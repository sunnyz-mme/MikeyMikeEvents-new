import { Row } from "react-bootstrap";
import { useState } from "react";
import SwiperGallerySection from "../SwiperGallerySection";
import HorizontalLayout from "../HorizontalLayout";
import VideoSection from "../VideoSection";
import FooterView from "../FooterView";
import "../css/services-aboutuspage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { events_swiper } from "../data";

export default function WeddingsView() {
  const [data, setData] = useState(
    events_swiper.filter((e) => e.name === "weddings")[0]
  );
  return (
    <HelmetProvider>
      <Row>
        <Helmet>
          <title>Weddings - Mikey Mike Events</title>
          <meta
            name="description"
            content="Our experienced team of event planners and designers will help you plan and orchestrate your Wedding from start to finish."
          />
        </Helmet>

        <section className="eventHeader">Weddings</section>
        <h2 className="eventSubheader">
          We have all the services you need for your big day
        </h2>
        <SwiperGallerySection data={data.category} />
        {data.video && (
          <VideoSection
            videoCover={data.video_cover}
            video={data.video}
            video_title={data.video_title}
          />
        )}
        <HorizontalLayout data={data} />
        <FooterView />
      </Row>
    </HelmetProvider>
  );
}
