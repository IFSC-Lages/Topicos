import type { FC, ReactNode } from "react";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // nível do título
  children: ReactNode;
  fontSize?: string; // exemplo: "24px" ou "2rem"
  fontWeight?: string; // exemplo: "bold", "400"
  color?: string; // exemplo: "#333", "red"
  textAlign?: "left" | "center" | "right" | "justify";
  margin?: string; // exemplo: "10px 0"
}

const Typography: FC<TypographyProps> = ({
  // utiliza estrutura de desconstrução
  variant = "h1",
  children,
  fontSize,
  fontWeight,
  color,
  textAlign,
  margin,
}) => {
  const Tag = variant; // define dinamicamente o tipo de heading

  return (
    <Tag
      style={{
        fontSize,
        fontWeight,
        color,
        textAlign,
        margin,
      }}
    >
      {children}
    </Tag>
  );
};
export default Typography;
