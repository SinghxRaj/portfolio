import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IntroCard from './IntroCard';

export default function Intro() {
  return (
    <>
      <div id="intro"></div>
      <Grid
        container spacing={10} justifyContent="center" alignItems="center" bgcolor={"#252525"} marginTop={1} paddingBottom={10}>
        <Grid item xs={10} md={6} lg={4} xl={3}>
          <IntroCard />
        </Grid>
        <Grid item xs={10} md={4} fontFamily='Noto Sans JP, sans-serif' color={'white'}>
          <Typography minWidth={300}>
            <h1 className="title">Who am I?</h1>
            <div className="body">
              <p>Hi! I'm Rajvir, a Software Engineer based in Seattle, WA who has experience
                in developing fullstack applications from scratch to production.
              </p>
              <p>
                I am a recent graduate from the University of Washington Seattle with a Bachelor's degree
                in Computer Science.
              </p>
              <p>
                Over the last 4 years, I've had the opportunity to work on building various projects.
                These projects include web applications and back-end services.
              </p>
            </div>
          </Typography>
        </Grid>
      </Grid >
    </>
  );
}