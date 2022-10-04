from locale import currency
from django.db import models

# Create your models here.
class  Value(models.Model):
    id=models.CharField(max_length=6,null=False,blank=False,primary_key=True)
    name=models.CharField(blank=True,max_length=30,null=True)
    ticker=models.CharField(blank=True,max_length=30,null=True)
    description=models.TextField(blank=True,max_length=30,null=True)
    start_date=models.DateField(blank=True,max_length=30,null=True)
    end_date=models.DateField(blank=True,max_length=30,null=True)
    sector=models.CharField(blank=True,max_length=30,null=True)
    industry=models.CharField(blank=True,max_length=30,null=True)
    employees_count=models.CharField(blank=True,max_length=30,null=True)
    sic_no=models.CharField(blank=True,max_length=30,null=True)
    location=models.TextField(blank=True,max_length=30,null=True)
    exchange_id=models.CharField(blank=True,max_length=30,null=True)
    cik_no=models.CharField(blank=True,max_length=30,null=True)
    cusip=models.CharField(blank=True,max_length=30,null=True)
    currency_id=models.CharField(blank=True,max_length=30,null=True)
    data_source_id=models.CharField(blank=True,max_length=30,null=True)
    ckr_log=models.CharField(blank=True,max_length=30,null=True)
    similar_fund_log=models.CharField(blank=True,max_length=30,null=True)
    address=models.TextField(blank=True,max_length=30,null=True)
    company_name=models.CharField(blank=True,max_length=30,null=True)
    phone_no=models.CharField(blank=True,max_length=30,null=True)
    website=models.CharField(blank=True,max_length=30,null=True)
    is_Active=models.CharField(blank=True,max_length=30,null=True)
    url_slug=models.CharField(blank=True,max_length=30,null=True)
    delisted_date=models.DateField(blank=True,max_length=30,null=True)
    delisted_reason=models.TextField(blank=True,max_length=30,null=True)
    image_name=models.CharField(blank=True,max_length=30,null=True)
    image_aspect_ratio=models.CharField(blank=True,max_length=30,null=True)
    cumulative_return=models.DateTimeField(blank=True,max_length=30,null=True)

    def __str__(self):
        return self.name



# class  Return(models.Model):
#     equity_id=models.AutoField(max_length=6,null=False,blank=False,primary_key=True)
#     start_date=models.DateField(null=False,blank=False)
#     returns=models.DecimalField(max_digits=19,decimal_places=10,null=False,blank=False)
#     equity_id=models.CharField(max_length=6,null=False,blank=False)
#     open=models.DecimalField(max_digits=19,decimal_places=10,null=False,blank=False)
#     high=models.DecimalField(max_digits=19,decimal_places=10,null=False,blank=False)
#     low=models.DecimalField(max_digits=19,decimal_places=10,null=False,blank=False)
#     close=models.DecimalField(max_digits=19,decimal_places=10,null=False,blank=False)
#     adj_close=models.DecimalField(max_digits=19,decimal_places=10,null=False,blank=False)
#     def __str__(self):
#         return self.equity_id

class  Returns(models.Model):
    equity_id=models.AutoField(max_length=6,null=False,blank=False,primary_key=True)
    date=models.DateField(null=True,blank=True)
    returns=models.DecimalField(max_digits=20,decimal_places=20,null=True,blank=True)
    equity_id=models.CharField(max_length=6,null=True,blank=True)
    open=models.DecimalField(max_digits=19,decimal_places=10,null=True,blank=True)
    high=models.DecimalField(max_digits=19,decimal_places=10,null=True,blank=True)
    low=models.DecimalField(max_digits=19,decimal_places=10,null=True,blank=True)
    close=models.DecimalField(max_digits=19,decimal_places=10,null=True,blank=True)
    adj_close=models.DecimalField(max_digits=19,decimal_places=10,null=True,blank=True)
    def __str__(self):
        return self.equity_id



# id=models.CharField(max_length=6,null=False,blank=False,primary_key=True)
#     name=models.CharField(max_length=30,null=False,blank=False)
#     ticker=models.CharField(max_length=6,null=False,blank=False)
#     description=models.TextField(max_length=500,null=False,blank=False)
#     start_date=models.DateField(null=False,blank=False)
#     end_date=models.DateField(blank=True,max_length=30,null=True)
#     sector=models.CharField(max_length=30,null=False,blank=False)
#     industry=models.CharField(max_length=30,null=False,blank=False)
#     employees_count=models.CharField(blank=True,max_length=30,null=True)
#     sic_no=models.CharField(blank=True,max_length=30,null=True)
#     location=models.TextField(blank=True,max_length=30,null=True)
#     exchange_id=models.CharField(max_length=5,null=False,blank=False)
#     cik_no=models.CharField(blank=True,max_length=30,null=True)
#     cusip=models.CharField(blank=True,max_length=30,null=True)
#     currency_id=models.CharField(max_length=5,null=False,blank=False)
#     data_source_id=models.CharField(max_length=5,null=False,blank=False)
#     ckr_log=models.CharField(max_length=5,null=False,blank=False)
#     similar_fund_log=models.CharField(max_length=5,null=False,blank=False)
#     address=models.TextField(max_length=100,null=False,blank=False)
#     company_name=models.CharField(max_length=30,null=False,blank=False)
#     phone_no=models.CharField(max_length=15,null=False,blank=False)
#     website=models.CharField(max_length=30,null=False,blank=False)
#     is_Active=models.CharField(max_length=5,null=False,blank=False)
#     url_slug=models.CharField(max_length=30,null=False,blank=False)
#     delisted_date=models.DateField(blank=True,max_length=30,null=True)
#     delisted_reason=models.TextField(blank=True,max_length=30,null=True)
#     image_name=models.CharField(blank=True,max_length=30,null=True)
#     image_aspect_ratio=models.CharField(max_length=10,null=False,blank=False)
#     cumulative_return=models.DateTimeField(max_length=10,null=False,blank=False)