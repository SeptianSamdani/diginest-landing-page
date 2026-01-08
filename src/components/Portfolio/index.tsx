// src/components/Portfolio/index.tsx
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import {
  PortfolioSection,
  PortfolioCard,
  ImageWrapper,
  CardContent,
  CardTitle,
  CardDescription,
  CardTag,
  TagWrapper,
  SectionTitle,
  SectionSubtitle
} from "./styles";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

interface PortfolioProps {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
  t: TFunction;
  id: string;
}

const Portfolio = ({ title, subtitle, items, id }: PortfolioProps) => {
  return (
    <PortfolioSection id={id}>
      <Fade direction="up" triggerOnce>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
      </Fade>

      <Row gutter={[24, 24]} style={{ marginTop: "3rem" }}>
        {items.map((item, index) => (
          <Col key={item.id} lg={8} md={12} sm={24} xs={24}>
            <Fade direction="up" delay={index * 100} triggerOnce>
              <PortfolioCard
                onClick={() => item.link && window.open(item.link, "_blank")}
                clickable={!!item.link}
              >
                <ImageWrapper>
                  <img src={item.image} alt={item.title} />
                </ImageWrapper>
                <CardContent>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                  <TagWrapper>
                    {item.tags.map((tag, idx) => (
                      <CardTag key={idx}>{tag}</CardTag>
                    ))}
                  </TagWrapper>
                </CardContent>
              </PortfolioCard>
            </Fade>
          </Col>
        ))}
      </Row>
    </PortfolioSection>
  );
};

export default withTranslation()(Portfolio);