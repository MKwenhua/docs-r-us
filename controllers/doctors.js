


app.get('/', isLoggedIn, IndexRoute);
app.get(/\/(patients|appointments|profile)/, isLoggedIn, IndexRoute);
