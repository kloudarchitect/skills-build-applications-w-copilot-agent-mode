# Add 'djongo' to the INSTALLED_APPS list to enable MongoDB support
INSTALLED_APPS = [
    # ...existing apps...
    'djongo',
    'rest_framework',
    'corsheaders',
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'dj_rest_auth',
    'octofit_tracker',
]

# Configure the database to use MongoDB
DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'octofit_db',
        'HOST': 'localhost',
        'PORT': 27017,
    }
}

# Add CORS headers middleware
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # ...existing middleware...
]

# Allow all origins for now (adjust as needed for production)
CORS_ALLOW_ALL_ORIGINS = True

# Add localhost and other hosts to ALLOWED_HOSTS
ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    '[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev'
]

# Set the site ID for django-allauth
SITE_ID = 1