require('dotenv').config();
const geocoder = require('geocoder');

const redis = require('redis');
const {
  REDIS_PORT,
  REDIS_ENDPOINT,
  LOCAL_DEV
} = process.env;
const client = LOCAL_DEV ? redis.createClient() : redis.createClient(REDIS_PORT, REDIS_ENDPOINT);

const ListOfHospitals = [
  {
    "name": "Southwest Urgent Care",
    "address": "2955 W 95th St, Evergreen Park, IL 60805"
  }, {
    "name": "Ingalls Memorial Hospital",
    "address": "1 Ingalls Dr, Harvey, IL 60426"
  }, {
    "name": "Northwestern Memorial Hospital",
    "address": "251 E Huron St, Chicago, IL 60611"
  }, {
    "name": "Presence Saint Joseph Hospital - Chicago",
    "address": "2900 N Lake Shore Dr, Chicago, IL 60657"
  }, {
    "name": "Rush University Medical Center",
    "address": "1653 W Congress Pkwy, Chicago, IL 60612"
  }, {
    "name": "Swedish Covenant Hospital",
    "address": "5140 N California Ave, Chicago, IL 60625"
  }, {
    "name": "Weiss Memorial Hospital",
    "address": "4646 N Marine Dr, Chicago, IL 60640"
  }, {
    "name": "Prentice Women’s Hospital",
    "address": "250 E Superior St, Chicago, IL 60610"
  }, {
    "name": "Mercy Hospital and Medical Center",
    "address": "2525 S Michigan Ave, Chicago, IL 60616"
  }, {
    "name": "St Joseph’s Hospital",
    "address": "711 W North Ave, Chicago, IL 60610"
  }, {
    "name": "University of Illinois Hospital & Clinics",
    "address": "1740 W Taylor St, Chicago, IL 60612"
  }, {
    "name": "NorthShore Evanston Hospital",
    "address": "2650 Ridge Ave, Evanston, IL 60201"
  }, {
    "name": "Rush Oak Park Hospital",
    "address": "520 S Maple Ave, Oak Park, IL 60304"
  }, {
    "name": "Thorek Memorial Hospital",
    "address": "850 W Irving Park Rd, Chicago, IL 60613"
  }, {
    "name": "Holy Cross Hospital",
    "address": "2701 W 68th St, Chicago, IL 60629"
  }, {
    "name": "Mount Sinai Hospital",
    "address": "1500 S Fairfield Ave, Chicago, IL 60608"
  }, {
    "name": "John H Stroger Jr Hospital of Cook County",
    "address": "1901 W Harrison St, Chicago, IL 60612"
  }, {
    "name": "Methodist Hospital of Chicago",
    "address": "5025 N Paulina St, Chicago, IL 60640"
  }, {
    "name": "Norwegian American Hospital",
    "address": "1044 N Francisco Ave, Chicago, IL 60622"
  }, {
    "name": "Presence Saint Francis Hospital",
    "address": "355 Ridge Ave, Evanston, IL 60202"
  }, {
    "name": "Northwestern Memorial Physicians Group",
    "address": "2835 N Sheffield Ave, Chicago, IL 60657"
  }, {
    "name": "MacNeal Hospital",
    "address": "3249 S Oak Park Ave, Berwyn, IL 60402"
  }, {
    "name": "Rush University Medical Center: Living Donor Transplant",
    "address": "1725 W Harrison St, Chicago, IL 60612"
  }, {
    "name": "University of Chicago Comer Children’s Hospital",
    "address": "1301A E 47th St, Chicago, IL 60653"
  }, {
    "name": "Adventist La Grange Memorial Hospital",
    "address": "5101 S Willow Springs Rd, La Grange, IL 60525"
  }, {
    "name": "Advocate Lutheran General Hospital",
    "address": "1775 Dempster St, Park Ridge, IL 60068"
  }, {
    "name": "Presence Saints Mary and Elizabeth Medical Center",
    "address": "1431 N Claremont Ave, Chicago, IL 60622"
  }, {
    "name": "Loretto Hospital",
    "address": "645 S Central Ave, Chicago, IL 60644"
  }, {
    "name": "Jackson Park Hospital",
    "address": "7531 S Stony Island Ave, Chicago, IL 60649"
  }, {
    "name": "The University Of Chicago’s Medical Center",
    "address": "5841 S Maryland Ave, Chicago, IL 60637"
  }, {
    "name": "Chicago Lakeshore Hospital",
    "address": "4840 N Marine Dr, Chicago, IL 60640"
  }, {
    "name": "Kindred Chicago Central Hospital",
    "address": "4058 West Melrose St, Chicago, IL 60641"
  }, {
    "name": "Physicians Immediate Care - South Loop",
    "address": "811 S State St, Chicago, IL 60605"
  }, {
    "name": "University of Chicago Emergency Room",
    "address": "901 E 58th St, Chicago, IL 60637"
  }, {
    "name": "Northwest Community Hospital",
    "address": "800 W Central Rd, Arlington Heights, IL 60005"
  },  {
    "name": "Adventist Hinsdale Hospital",
    "address": "120 N Oak St, Hinsdale, IL 60521"
  },  {
    "name": "Mercy Hospital & Medical Center",
    "address": "5635 S Pulaski Rd, Chicago, IL 60629"
  }, {
    "name": "Saint Anthony Hospital",
    "address": "2875 W 19th St, Chicago, IL 60623"
  }, {
    "name": "Bernard Mitchell Hospital",
    "address": "5815 S Maryland Ave, Chicago, IL 60637"
  }, {
    "name": "Kindred Chicago Lakeshore",
    "address": "6130 North Sheridan Rd, Chicago, IL 60660"
  }, {
    "name": "Roseland Community Hospital",
    "address": "67 W 111th St, Chicago, IL 60628"
  }, {
    "name": "Northwestern Memorial Olson Pavilion - Ambulatory Surgery Center",
    "address": "710 N Fairbanks Ct, Chicago, IL 60611"
  }, {
    "name": "Gottlieb Memorial Hospital",
    "address": "701 W North Ave, Melrose Park, IL 60160"
  }, {
    "name": "Elmhurst Hospital - Main Campus",
    "address": "155 E Brush Hill Rd, Elmhurst, IL 60126"
  }, {
    "name": "Advocate Children’s Hospital",
    "address": "4440 W 95th St, Oak Lawn, IL 60453"
  }, {
    "name": "Garfield Park Hospital",
    "address": "520 N Ridgeway Ave, Chicago, IL 60624"
  }, {
    "name": "Advocate Health Center",
    "address": "2511 N Kedzie Ave, Chicago, IL 60647"
  }, {
    "name": "Northwestern Medical Faculty Foundation",
    "address": "259 E Erie St, Chicago, IL 60611"
  }, {
    "name": "Thorek Memorial Hospital",
    "address": "2155 S China Pl, Chicago, IL 60616"
  }, {
    "name": "NorthShore University HealthSystem - Skokie Hospital",
    "address": "9600 Gross Point Rd, Skokie, IL 60076"
  }, {
    "name": "Alexian Brothers Medical Center",
    "address": "800 Biesterfield Rd, Elk Grove Village, IL 60007"
  }, {
    "name": "Provident Hospital of Cook County",
    "address": "500 E 51st St, Chicago, IL 60615"
  }, {
    "name": "Ann and Robert H. Lurie",
    "address": "2515 N Clark St, Chicago, IL 60614"
  }, {
    "name": "University of Chicago Center for Care and Discovery",
    "address": "5700 S Maryland Ave, Chicago, IL 60637"
  }, {
    "name": "Saint Mary of Nazareth Doctor’s Office",
    "address": "1127 N Oakley Blvd, Chicago, IL 60622"
  }, {
    "name": "St Elizabeth’s Hospital",
    "address": "1431 N Claremont Ave, Chicago, IL 60622"
  }, {
    "name": "Kindred Hospital Chicago North",
    "address": "2544 West Montrose Ave, Chicago, IL 60618"
  }, {
    "name": "South Shore Hospital",
    "address": "8012 S Crandon Ave, Chicago, IL 60617"
  }, {
    "name": "Highland Park Hospital",
    "address": "777 Park Ave W, Highland Park, IL 60035"
  }, {
    "name": "Advocate Bethany Hospital",
    "address": "3435 W Van Buren St, Chicago, IL 60624"
  }, {
    "name": "The Center for Cancer Care of Saint Joseph Hospital",
    "address": "2900 N Lake Shore Dr, Chicago, IL 60657"
  }, {
    "name": "Innovative Express Care",
    "address": "2400 N Ashland Ave, Chicago, IL 60614"
  }, {
    "name": "Provident Hospital",
    "address": "500 E 51st St, Chicago, IL 60615"
  }, {
    "name": "Glenbrook Hospital",
    "address": "2100 Pfingsten Rd, Glenview, IL 60026"
  }, {
    "name": "Northwestern Memorial Physicians Group",
    "address": "680 N Lake Shore Dr, Chicago, IL 60611"
  }, {
    "name": "Advocate Trinity Hospital",
    "address": "2320 E 93rd St, Chicago, IL 60617"
  }, {
    "name": "Ann and Robert H Lurie",
    "address": "467 W Deming Pl, Chicago, IL 60614"
  }, {
    "name": "Northwestern Memorial Imaging Center, X-Ray/Ultrasound",
    "address": "676 N St Clair, Ste 200, Chicago, IL 60611"
  }, {
    "name": "Joehl Raymond MD",
    "address": "675 N Saint Clair St, Chicago, IL 60611"
  }, {
    "name": "Adventist Bolingbrook Hospital",
    "address": "500 Remington Blvd, Bolingbrook, IL 60440"
  }, {
    "name": "Bryar Paul MD",
    "address": "675 N Saint Clair St, Chicago, IL 60611"
  }, {
    "name": "Lutheran General’s Center for Advanced Care",
    "address": "1700 Luther Ln, Park Ridge, IL 60068"
  }, {
    "name": "Dumanian Gregory MD",
    "address": "675 N Saint Clair St, Chicago, IL 60611"
  }, {
    "name": "Swedish Covenant Hospital",
    "address": "6200 N Hiawatha Ave, Chicago, IL 60646"
  }, {
    "name": "Elmhurst Memorial Hospital",
    "address": "4111 W 26th St, Chicago, IL 60623"
  }, {
    "name": "Northwestern Memorial Hospital",
    "address": "201 E Huron St, Chicago, IL 60611"
  }, {
    "name": "University of Chicago Hospitals",
    "address": "5758 S Maryland Ave, Chicago, IL 60637"
  }, {
    "name": "RML Specialty Hospital",
    "address": "3435 W Van Buren St, Chicago, IL 60624"
  }, {
    "name": "Provident Hospital of Cook County",
    "address": "500 E 51st St, Chicago, IL 60615"
  }, {
    "name": "Little Company of Mary Hospital and Health Care Centers",
    "address": "2800 W 95th St, Evergreen Park, IL 60805"
  }, {
    "name": "Palos Community Hospital",
    "address": "12251 S 80th Ave, Palos Heights, IL 60463"
  }, {
    "name": "Northwestern Memorial Hospital",
    "address": "46 E Chicago Ave, Chicago, IL 60611"
  }, {
    "name": "Northwestern Memorial Hospital Feinberg Pavilion",
    "address": "251 E Huron St, Chicago, IL 60611"
  }, {
    "name": "Northwestern Memorial Hospital Galter Pavilion",
    "address": "675 N Saint Clair St, Chicago, IL 60611"
  }, {
    "name": "Chronic Care Management Northwestern Memorial Hospital",
    "address": "675 N Caint Clair St, Chicago, IL 60611"
  }, {
    "name": "NorthShore University HealthSystem",
    "address": "777 Park Ave W, Highland Park, IL 60035"
  }, {
    "name": "Confino Edmond MD",
    "address": "675 N Saint Clair St, Chicago, IL 60611"
  }, {
    "name": "University of Illinois Hospitals and Health Science System",
    "address": "1740 W Taylor St, Chicago, IL 60612"
  }, {
    "name": "Rush Institute On Aging",
    "address": "1645 W Jackson Blvd, Chicago, IL 60612"
  }, {
    "name": "St Anthony Health Affiliates",
    "address": "2875 W 19th St, Chicago, IL 60623"
  }, {
    "name": "Mercy Hospital & Medical Center",
    "address": "2837 S Halsted St, Chicago, IL 60608"
  }, {
    "name": "University of Texas MD Anderson Cancer Center",
    "address": "Houston, TX 77030-4000"
  }, {
    "name": "Memorial Sloan Kettering Cancer Center",
    "address": "New York, NY 10065-6007"
  }, {
    "name": "Mayo Clinic",
    "address": "Rochester, MN 55902-1906"
  }, {
    "name": "Dana-Farber/Brigham and Women's Cancer Center",
    "address": "Boston, MA 02215-5418"
  }, {
    "name": "Seattle Cancer Alliance/University of Washington Medical Center",
    "address": "Seattle, WA 98109-4405"
  }, {
    "name": "Johns Hopkins Hospital",
    "address": "Baltimore, MD 21205-1832"
  }, {
    "name": "Cleveland Clinic",
    "address": "Cleveland, OH 44195-5108"
  }, {
    "name": "Hospitals of the University of Pennsylvania-Penn Presbyterian",
    "address": "Philadelphia, PA 19104-4206"
  }, {
    "name": "Moffitt Cancer Center and Research Institute",
    "address": "Tampa, FL 33612-9497"
  }, {
    "name": "UCSF Medical Center",
    "address": "San Francisco, CA 94143-0296"
  }, {
    "name": "Stanford Health Care-Stanford Hospital",
    "address": "Stanford, CA 94304-2203"
  }, {
    "name": "Massachusetts General Hospital",
    "address": "Boston, MA 02114-2696"
  }, {
    "name": "UCLA Medical Center",
    "address": "Los Angeles, CA 90095-8358"
  }, {
    "name": "University of Michigan Hospitals and Health Centers",
    "address": "Ann Arbor, MI 48109"
  }, {
    "name": "USC Norris Cancer Hospital-Keck Medical Center of USC",
    "address": "Los Angeles, CA 90089-0112"
  }, {
    "name": "Northwestern Memorial Hospital",
    "address": "Chicago, IL 60611-2908"
  }, {
    "name": "Mayo Clinic-Phoenix",
    "address": "Phoenix, AZ 85054-4502"
  }, {
    "name": "Mayo Clinic Jacksonville",
    "address": "Jacksonville, FL 32224-1865"
  }, {
    "name": "Barnes-Jewish Hospital",
    "address": "Saint Louis, MO 63110-1003"
  }, {
    "name": "Thomas Jefferson University Hospitals",
    "address": "Philadelphia, PA 19107-5084"
  }
]
const TempHospitalHolder = [];

const GetGeoPointLater = (hos, i) => {
  setTimeout(() => {

    geocoder.geocode(`${hos.name} ${hos.address}`,  ( err, data ) => {
      if(!err) {
        let hosOb = {source: hos, results: data.results};
        TempHospitalHolder.push(hosOb)
        console.log('\n i', i);
        console.log('hos', hosOb);
      }
      if (TempHospitalHolder.length === ListOfHospitals.length) {
          console.log('\n array Filled ', TempHospitalHolder.length);
        client.set("hospitalAddresses", JSON.stringify(TempHospitalHolder), redis.print);
      }
    });
  }, 1500 * i)
}


clientTwo.get("hospitalList", function(err, reply) {
    console.log(reply);
});

.results[0].geometry.location
.results[0].formatted_address
.results[0].place_id
.results[0].types
.source

var FormatedList = newOBJ.map(record => ({
  location: record.results[0].geometry.location,
  formatted_address: record.results[0].formatted_address,
  place_id: record.results[0].place_id,
  types: record.results[0].types,
  name: record.source.name,
  address: record.source.address
}))

clientTwo.set("hospitalList", JSON.stringify(FormatedList), redis.print);
//ListOfHospitals.forEach(GetGeoPointLater)

//console.log('ListOfHospitals', ListOfHospitals)
