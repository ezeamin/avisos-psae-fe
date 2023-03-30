import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack alignItems="center" component="footer" sx={{ my: 2 }}>
      <Typography component="p" variant="body1" textAlign="center">
        This is a footer, reason why I want <code>display:flex</code> on my page
        <br />
        v1.0.0
      </Typography>
    </Stack>
  );
};

export default Footer;
