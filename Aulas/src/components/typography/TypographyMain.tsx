import Typography from "./Typography";

export function TypographyApp() {
  return (
    <div>
      <Typography variant="h1" fontSize="2.5rem" fontWeight="bold" color="#2c3e50">
        Título Principal (H1)
      </Typography>

      <Typography variant="h3" fontSize="1.5rem" fontWeight="600" color="darkblue" textAlign="center">
        Subtítulo Centralizado (H3)
      </Typography>

      <Typography variant="h5" fontSize="1rem" fontWeight="400" color="gray" margin="20px 0">
        Texto Secundário (H5)
      </Typography>
    </div>
  );
}