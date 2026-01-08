// src/components/Pricing/styles.ts
import styled from "styled-components";

export const PricingSection = styled("section")`
  padding: 5rem 0;
  background: #fff;

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
  margin: 0 auto;
  color: #6b7280;
`;

export const PricingCard = styled("div")<{ popular?: boolean }>`
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 8px;
  border: 1px solid ${(p) => (p.popular ? "#18216d" : "#e5e7eb")};
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #18216d;
  }
`;

export const PlanName = styled("h3")<{ popular?: boolean }>`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(p) => (p.popular ? "#18216d" : "#374151")};
  margin: 0 0 1.5rem 0;
`;

export const PriceWrapper = styled("div")`
  margin-bottom: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const Price = styled("div")`
  font-size: 2.5rem;
  font-weight: 700;
  color: #18216d;
  line-height: 1;
  margin-bottom: 0.25rem;

  @media only screen and (max-width: 414px) {
    font-size: 2rem;
  }
`;

export const PriceUnit = styled("span")`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 400;
`;

export const FeatureList = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 2rem 0;
  flex: 1;
`;

export const FeatureItem = styled("li")<{ included: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem 0;
  color: ${(p) => (p.included ? "#374151" : "#9ca3af")};
  font-size: 0.95rem;
`;

export const CheckIcon = styled("span")<{ included: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  flex-shrink: 0;
  margin-top: 2px;
  color: ${(p) => (p.included ? "#18216d" : "#d1d5db")};
`;

export const ButtonWrapper = styled("div")`
  margin-top: auto;
`;