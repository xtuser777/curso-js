import app from './app';

app.listen(process.env.APP_PORT, () => console.log(`\nListen in port ${process.env.APP_PORT}.`));
