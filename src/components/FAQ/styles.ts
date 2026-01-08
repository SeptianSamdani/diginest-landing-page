// src/components/FAQ/styles.ts
import styled from "styled-components";

export const FAQSection = styled("section")`
  padding: 5rem 0;
  background: #f9fafb;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const SectionTitle = styled("h2")`
  text-align: center;
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled("p")`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: #6b7280;
`;

export const FAQContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FAQItem = styled("div")<{ active: boolean }>`
  background: #fff;
  border-radius: 12px;
  border: 2px solid ${(p) => (p.active ? "#2e186a" : "#e5e7eb")};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: #2e186a;
    box-shadow: 0 4px 12px rgba(46, 24, 106, 0.1);
  }
`;

export const QuestionButton = styled("button")<{ active: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: ${(p) => (p.active ? "#f3f4f6" : "#fff")};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background: #f3f4f6;
  }
`;

export const QuestionText = styled("span")`
  font-size: 1.125rem;
  font-weight: 600;
  color: #18216d;
  padding-right: 1rem;

  @media only screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const IconWrapper = styled("div")<{ active: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(p) => (p.active ? "#2e186a" : "#e5e7eb")};
  color: ${(p) => (p.active ? "#fff" : "#374151")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 300;
  flex-shrink: 0;
  transition: all 0.3s ease;
`;

export const Answer = styled("div")<{ active: boolean }>`
  max-height: ${(p) => (p.active ? "500px" : "0")};
  opacity: ${(p) => (p.active ? "1" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  padding: ${(p) => (p.active ? "0 1.5rem 1.5rem" : "0 1.5rem")};

  p {
    color: #6b7280;
    line-height: 1.7;
    margin: 0;
    font-size: 1rem;
  }
`;