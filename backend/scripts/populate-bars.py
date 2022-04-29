
import csv
import pkgutil
# from ..h4tcsacapp.models.bar import Bar

print([name for _, name, _ in pkgutil.iter_modules(['.'])])

if __name__ == "__main__":
    with open("scripts/data/bars.csv") as f:
        reader = csv.reader(f)
        for row in reader:

            safebar, name, website, street_address, city, \
                _, zip_code, phone, email, certification_date, \
                contact_name, image, latitude, longitude, \
                description, joined_date = row

            # _, created = Bar.objects.create(
            #     is_safebar=bool(safebar),
            #     is_approved=True,
            #     name=name,
            #     contact_name=contact_name,
            #     phone_number=re.findall('[0-9]+', phone),
            #     street_address=street_address,
            #     city=city,
            #     zip_code=zip_code,
            #     latitude=latitude,
            #     longitude=longitude,
            #     certification_date=certification_date,
            #     email=email,
            #     image=image,
            #     description=description,
            #     website=website,
            # )
