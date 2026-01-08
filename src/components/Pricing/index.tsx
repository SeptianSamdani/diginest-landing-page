// src/components/Pricing/index.tsx
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import {
  PricingSection,
  SectionTitle,
  SectionSubtitle,
  PricingCard,
  PlanName,
  PriceWrapper,
  Price,
  PriceUnit,
  FeatureList,
  FeatureItem,
  CheckIcon,
  ButtonWrapper
} from "./styles";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  unit: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText: string;
}

interface PricingProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  t: TFunction;
  id: string;
}

const Pricing = ({ title, subtitle, plans, id }: PricingProps) => {
  const scrollTo = (section: string) => {
    const element = document.getElementById(section) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <PricingSection id={id}>
      <Fade direction="up" triggerOnce>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
      </Fade>

      <Row gutter={[24, 24]} style={{ marginTop: "3rem" }}>
        {plans.map((plan, index) => (
          <Col key={plan.id} lg={8} md={12} sm={24} xs={24}>
            <Fade direction="up" delay={index * 100} triggerOnce>
              <PricingCard popular={plan.popular}>
                <PlanName popular={plan.popular}>{plan.name}</PlanName>
                <PriceWrapper>
                  <Price>{plan.price}</Price>
                  <PriceUnit>{plan.unit}</PriceUnit>
                </PriceWrapper>
                <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
                  {plan.description}
                </p>
                <FeatureList>
                  {plan.features.map((feature, idx) => (
                    <FeatureItem key={idx} included={feature.included}>
                      <CheckIcon included={feature.included}>
                        {feature.included ? "✓" : "✗"}
                      </CheckIcon>
                      {feature.text}
                    </FeatureItem>
                  ))}
                </FeatureList>
                <ButtonWrapper>
                  <Button onClick={() => scrollTo("contact")}>
                    {plan.buttonText}
                  </Button>
                </ButtonWrapper>
              </PricingCard>
            </Fade>
          </Col>
        ))}
      </Row>
    </PricingSection>
  );
};

export default withTranslation()(Pricing);