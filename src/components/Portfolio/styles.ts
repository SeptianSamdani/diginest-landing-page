// src/components/Portfolio/styles.ts
import styled from "styled-components";

export const PortfolioSection = styled("section")`
  padding: 5rem 0;

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

export const PortfolioCard = styled("div")<{ clickable?: boolean }>`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: ${(p) => (p.clickable ? "pointer" : "default")};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageWrapper = styled("div")`
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #f3f4f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${PortfolioCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const CardContent = styled("div")`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled("h3")`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #18216d;
`;

export const CardDescription = styled("p")`
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 1rem;
  flex: 1;
  line-height: 1.6;
`;

export const TagWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const CardTag = styled("span")`
  background-color: rgb(255, 130, 92);
  color: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
`;