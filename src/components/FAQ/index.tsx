// src/components/FAQ/index.tsx
import { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import {
  FAQSection,
  SectionTitle,
  SectionSubtitle,
  FAQContainer,
  FAQItem,
  QuestionButton,
  QuestionText,
  IconWrapper,
  Answer
} from "./styles";

interface FAQItemType {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  subtitle: string;
  items: FAQItemType[];
  t: TFunction;
  id: string;
}

const FAQ = ({ title, subtitle, items, id }: FAQProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <FAQSection id={id}>
      <Row justify="center">
        <Col lg={16} md={20} sm={24} xs={24}>
          <Fade direction="up" triggerOnce>
            <SectionTitle>{title}</SectionTitle>
            <SectionSubtitle>{subtitle}</SectionSubtitle>
          </Fade>

          <FAQContainer>
            {items.map((item, index) => (
              <Fade key={item.id} direction="up" delay={index * 50} triggerOnce>
                <FAQItem active={activeId === item.id}>
                  <QuestionButton
                    onClick={() => toggleFAQ(item.id)}
                    active={activeId === item.id}
                  >
                    <QuestionText>{item.question}</QuestionText>
                    <IconWrapper active={activeId === item.id}>
                      {activeId === item.id ? "−" : "+"}
                    </IconWrapper>
                  </QuestionButton>
                  <Answer active={activeId === item.id}>
                    <p>{item.answer}</p>
                  </Answer>
                </FAQItem>
              </Fade>
            ))}
          </FAQContainer>
        </Col>
      </Row>
    </FAQSection>
  );
};

export default withTranslation()(FAQ);