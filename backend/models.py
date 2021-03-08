from djongo import models

class CommandModel(models.Model):


class ComputerModel(models.Model):
    name = models.CharField(blank=False,null=False)
    ip = models.GenericIPAddressField(protocol="IPv4",blank=False,null=False)
    