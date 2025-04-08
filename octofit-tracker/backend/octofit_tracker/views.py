from django.http import JsonResponse
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def api_root(request, format=None):
    base_url = settings.BASE_URL  # Use the base URL from settings
    return Response({
        'users': base_url + 'api/users/?format=api',
        'teams': base_url + 'api/teams/?format=api',
        'activities': base_url + 'api/activities/?format=api',
        'leaderboard': base_url + 'api/leaderboard/?format=api',
        'workouts': base_url + 'api/workouts/?format=api'
    })

def api_endpoint(request):
    # Replace with the codespace URL and localhost for testing
    return JsonResponse({
        "message": "Welcome to the Octofit API!",
        "codespace_url": "https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev",
        "localhost_url": "http://localhost:8000"
    })
