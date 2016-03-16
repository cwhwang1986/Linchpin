from django.conf.urls import url
from . import views
# The last part name='' is the name of the URL that will be used to 
# identify the view. This can be the same as the name of the view but it can 
# also be something completely different. We will be using the named URLs later 
# in the project so it is important to name each URL in the app.
urlpatterns = [
    url(r'^$', views.handler, name='index'),
]