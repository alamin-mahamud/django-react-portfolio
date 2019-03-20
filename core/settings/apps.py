BUILT_IN_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

THIRD_PARTY_APPS = [
    'whitenoise.runserver_nostatic',
    'rest_framework',
]

MY_APPS = [
    'api'
]

INSTALLED_APPS = BUILT_IN_APPS + THIRD_PARTY_APPS + MY_APPS
