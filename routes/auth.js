// Démarre l'authentification Google
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback après l'authentification Google
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Redirige l'utilisateur après la connexion
        res.redirect('/dashboard');
    }
);

// Route pour se déconnecter
app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect('/');
    });
});

// Exemple de route protégée
app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`Bienvenue, ${req.user.displayName}`);
    } else {
        res.redirect('/auth/google');
    }
});
