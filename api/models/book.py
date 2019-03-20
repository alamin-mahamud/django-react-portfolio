from django.db import models
import datetime


YEARS = [
    (year, year)
    for year in range(2000, datetime.datetime.now().year + 1)[::-1]
]

BOOK_STATUS = [
    (0, "To Read"),
    (1, "Currently Reading"),
    (2, 'Already Read')
]


class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    image = models.CharField(max_length=255)

    year = models.IntegerField(
        choices=YEARS,
        default=datetime.datetime.now().year
    )

    status = models.IntegerField(
        max_length=1,
        choices=BOOK_STATUS,
        default=0
    )

    class Meta:
        ordering = ['-year']

    def __str__(self):
        return self.title
