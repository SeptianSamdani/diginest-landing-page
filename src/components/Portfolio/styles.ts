// src/components/Portfolio/styles.ts
import styled from "styled-components";

export const PortfolioSection = styled("section")`
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
  margin: 0 auto;
  color: #6b7280;
`;

export const PortfolioCard = styled("div")<{ clickable?: boolean }>`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: border-color 0.2s ease;
  cursor: ${(p) => (p.clickable ? "pointer" : "default")};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #18216d;
  }
`;

export const ImageWrapper = styled("div")`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled("div")`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled("h3")`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: #18216d;
  font-weight: 600;
`;

export const CardDescription = styled("p")`
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1rem;
  flex: 1;
  line-height: 1.6;
`;

export const TagWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #f3f4f6;
`;

export const CardTag = styled("span")`
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;