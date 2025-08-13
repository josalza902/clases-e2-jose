use acme_school_jose; // crear base de datos
db.createCollection("students"); // crear coleccion 
db.students.insertMany([{
    "code": 8302,
    "name": "Alison Hubbard",
    "email": "alisonhubbard@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.5
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.4
      }
    ],
    "hobbies": [
      "Fútbol",
      "Música"
    ],
    "place": {
      "address": "Cll 174A # 58 - 36",
      "city": "Bucaramanga"
    },
    "age": 17
  },
  {
    "code": 6503,
    "name": "Laura Freeman",
    "email": "laurafreeman@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.6
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.4
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.4
      }
    ],
    "hobbies": [
      "Fútbol",
      "Senderismo"
    ],
    "place": {
      "address": "Cll 133A # 151B - 84",
      "city": "Bucaramanga"
    },
    "age": 21
  },
  {
    "code": 3312,
    "name": "Sexton Rice",
    "email": "sextonrice@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.8
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.3
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.6
      }
    ],
    "hobbies": [
      "Senderismo",
      "Volleyball"
    ],
    "place": {
      "address": "Cra 186A # 191A - 17",
      "city": "Barranquilla"
    },
    "age": 16
  },
  {
    "code": 3897,
    "name": "Brittney Christian",
    "email": "brittneychristian@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.6
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 3.5
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.1
      }
    ],
    "hobbies": [],
    "place": {
      "address": "Cll 23C # 168D - 22",
      "city": "Bogotá"
    },
    "age": 19
  },
  {
    "code": 5112,
    "name": "Flynn Moran",
    "email": "flynnmoran@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.6
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.4
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 4.2
      }
    ],
    "hobbies": [
      "Fútbol",
      "Ciclismo"
    ],
    "place": {
      "address": "Cra 30A # 16D - 40",
      "city": "Barranquilla"
    },
    "age": 19
  },
  {
    "code": 8194,
    "name": "Saunders Kline",
    "email": "saunderskline@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.8
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.8
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.1
      }
    ],
    "hobbies": [
      "Volleyball",
      "Música"
    ],
    "place": {
      "address": "Cll 55C # 59A - 21",
      "city": "Barranquilla"
    },
    "age": 28
  },
  {
    "code": 7555,
    "name": "Golden Mitchell",
    "email": "goldenmitchell@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.5
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.1
      }
    ],
    "hobbies": [
      "Lectura",
      "Música"
    ],
    "place": {
      "address": "Cra 40A # 183 - 51",
      "city": "Barranquilla"
    },
    "age": 19
  },
  {
    "code": 6714,
    "name": "Hilary Lee",
    "email": "hilarylee@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.4
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 3
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.5
      }
    ],
    "hobbies": [
      "Fútbol",
      "Música"
    ],
    "place": {
      "address": "Cll 154A # 13D - 50",
      "city": "Bucaramanga"
    },
    "age": 16
  },
  {
    "code": 3099,
    "name": "Tyler York",
    "email": "tyleryork@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.3
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.3
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.9
      }
    ],
    "hobbies": [
      "Fútbol",
      "Senderismo"
    ],
    "place": {
      "address": "Cra 161A # 69C - 83",
      "city": "Bogotá"
    },
    "age": 16
  },
  {
    "code": 5949,
    "name": "Jaclyn Camacho",
    "email": "jaclyncamacho@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.9
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 4
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.7
      }
    ],
    "hobbies": [
      "Lectura"
    ],
    "place": {
      "address": "Cll 135A # 58A - 54",
      "city": "Barranquilla"
    },
    "age": 22
  },
  {
    "code": 6397,
    "name": "Calhoun Randolph",
    "email": "calhounrandolph@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.9
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.5
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.3
      }
    ],
    "hobbies": [
      "Fútbol",
      "Música",
      "Senderismo",
      "Lectura"
    ],
    "place": {
      "address": "Cra 56A # 102A - 45",
      "city": "Bucaramanga"
    },
    "age": 26
  },
  {
    "code": 2105,
    "name": "Lindsey Ferguson",
    "email": "lindseyferguson@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.4
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 4.3
      }
    ],
    "hobbies": [
      "Fútbol",
      "Música"
    ],
    "place": {
      "address": "Cra 179C # 119D - 26",
      "city": "Barranquilla"
    },
    "age": 28
  },
  {
    "code": 8826,
    "name": "Sullivan Boyd",
    "email": "sullivanboyd@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.5
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.2
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3
      }
    ],
    "hobbies": [
      "Ciclismo",
      "Volleyball"
    ],
    "place": {
      "address": "Cra 114C # 45D - 24",
      "city": "Bogotá"
    },
    "age": 23
  },
  {
    "code": 4080,
    "name": "Ford Clemons",
    "email": "fordclemons@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.6
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.3
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.5
      }
    ],
    "hobbies": [
      "Fútbol",
      "Música"
    ],
    "place": {
      "address": "Cra 80C # 188A - 8",
      "city": "Barranquilla"
    },
    "age": 18
  },
  {
    "code": 3634,
    "name": "Malinda Lindsey",
    "email": "malindalindsey@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.2
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 3.4
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.3
      }
    ],
    "hobbies": [
      "Fútbol",
      "Senderismo"
    ],
    "place": {
      "address": "Cra 146D # 199A - 8",
      "city": "Bogotá"
    },
    "age": 20
  },
  {
    "code": 3730,
    "name": "Baker Chandler",
    "email": "bakerchandler@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.1
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 2.9
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.1
      }
    ],
    "hobbies": [
      "Fútbol",
      "Lectura"
    ],
    "place": {
      "address": "Cra 150B # 81 - 55",
      "city": "Bogotá"
    },
    "age": 27
  },
  {
    "code": 8861,
    "name": "Mercedes Santana",
    "email": "mercedessantana@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.3
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.4
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.7
      }
    ],
    "hobbies": [
      "Fútbol",
      "Ajedréz"
    ],
    "place": {
      "address": "Cra 41B # 156 - 63",
      "city": "Barranquilla"
    },
    "age": 18
  },
  {
    "code": 9241,
    "name": "Robbins Bishop",
    "email": "robbinsbishop@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.3
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.6
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.8
      }
    ],
    "hobbies": [
      "Música"
    ],
    "place": {
      "address": "Cll 187 # 6B - 91",
      "city": "Barranquilla"
    },
    "age": 19
  },
  {
    "code": 1548,
    "name": "Pugh Morin",
    "email": "pughmorin@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.3
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.8
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 4.3
      }
    ],
    "hobbies": [
      "Fútbol",
      "Música"
    ],
    "place": {
      "address": "Cra 185B # 152D - 98",
      "city": "Bogotá"
    },
    "age": 19
  },
  {
    "code": 3875,
    "name": "Whitley Shields",
    "email": "whitleyshields@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.4
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 4.2
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.6
      }
    ],
    "hobbies": [
      "Lectura",
      "Senderismo"
    ],
    "place": {
      "address": "Cll 198 # 50A - 55",
      "city": "Bogotá"
    },
    "age": 23
  },
  {
    "code": 5267,
    "name": "Summers Beck",
    "email": "summersbeck@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.6
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.2
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 4.2
      }
    ],
    "hobbies": [
      "Lectura",
      "Música"
    ],
    "place": {
      "address": "Cll 195 # 14B - 58",
      "city": "Bucaramanga"
    },
    "age": 23
  },
  {
    "code": 8207,
    "name": "Le Baker",
    "email": "lebaker@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.7
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 4
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 4.3
      }
    ],
    "hobbies": [
      "Música"
    ],
    "place": {
      "address": "Cll 7B # 11B - 24",
      "city": "Barranquilla"
    },
    "age": 27
  },
  {
    "code": 2479,
    "name": "Gabriela Flowers",
    "email": "gabrielaflowers@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.3
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 3.9
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.1
      }
    ],
    "hobbies": [
      "Lectura",
      "Música"
    ],
    "place": {
      "address": "Cll 84 # 123B - 91",
      "city": "Bucaramanga"
    },
    "age": 28
  },
  {
    "code": 6721,
    "name": "Frances Alexander",
    "email": "francesalexander@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.6
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.2
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.9
      }
    ],
    "hobbies": [
      "Fútbol",
      "Música"
    ],
    "place": {
      "address": "Cll 33D # 64B - 35",
      "city": "Barranquilla"
    },
    "age": 20
  },
  {
    "code": 3064,
    "name": "Rose Riggs",
    "email": "roseriggs@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.3
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.5
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.3
      }
    ],
    "hobbies": [
      "Ciclismo",
      "Música"
    ],
    "place": {
      "address": "Cra 99 # 127 - 9",
      "city": "Bucaramanga"
    },
    "age": 25
  },
  {
    "code": 5026,
    "name": "Delores Bond",
    "email": "deloresbond@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.3
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 3
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3
      }
    ],
    "hobbies": [
      "Fútbol",
      "Volleyball"
    ],
    "place": {
      "address": "Cll 129 # 207B - 16",
      "city": "Bogotá"
    },
    "age": 21
  },
  {
    "code": 3143,
    "name": "Walter Benson",
    "email": "walterbenson@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.6
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.6
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.9
      }
    ],
    "hobbies": [
      "Ajedréz"
    ],
    "place": {
      "address": "Cll 134B # 113 - 118",
      "city": "Bucaramanga"
    },
    "age": 22
  },
  {
    "code": 3815,
    "name": "Ophelia Cohen",
    "email": "opheliacohen@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.2
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 4
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 2.9
      }
    ],
    "place": {
      "address": "Cra 180B # 3B - 73",
      "city": "Bucaramanga"
    },
    "age": 20
  },
  {
    "code": 7066,
    "name": "Walsh Hernandez",
    "email": "walshhernandez@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.3
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 2.8
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.6
      }
    ],
    "place": {
      "address": "Cll 135 # 20C - 99",
      "city": "Bucaramanga"
    },
    "age": 27
  },
  {
    "code": 2354,
    "name": "Atkinson Bolton",
    "email": "atkinsonbolton@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.1
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.5
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 4.4
      }
    ],
    "hobbies": [
      "Ciclismo"
    ],
    "place": {
      "address": "Cll 137C # 204A - 106",
      "city": "Barranquilla"
    },
    "age": 22
  },
  {
    "code": 3946,
    "name": "Dodson Oneal",
    "email": "dodsononeal@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.5
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 4.1
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3
      }
    ],
    "hobbies": [
      "Senderismo",
      "Música"
    ],
    "place": {
      "address": "Cra 71A # 177A - 78",
      "city": "Bogotá"
    },
    "age": 16
  },
  {
    "code": 3031,
    "name": "Kemp Kaufman",
    "email": "kempkaufman@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.4
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 4
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.5
      }
    ],
    "hobbies": [
      "Senderismo"
    ],
    "place": {
      "address": "Cll 183D # 136B - 85",
      "city": "Barranquilla"
    },
    "age": 16
  },
  {
    "code": 7668,
    "name": "Angeline Burks",
    "email": "angelineburks@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.1
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.9
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 4
      }
    ],
    "hobbies": [
      "Fútbol",
      "Ciclismo"
    ],
    "place": {
      "address": "Cll 90 # 92A - 108",
      "city": "Bucaramanga"
    },
    "age": 19
  },
  {
    "code": 1300,
    "name": "Baldwin Leonard",
    "email": "baldwinleonard@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.4
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 4
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.3
      }
    ],
    "hobbies": [
      "Ajedréz"
    ],
    "place": {
      "address": "Cra 96C # 63C - 27",
      "city": "Bogotá"
    },
    "age": 17
  },
  {
    "code": 2702,
    "name": "Augusta Horton",
    "email": "augustahorton@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.3
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.4
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 4.1
      }
    ],
    "hobbies": [
      "Fútbol",
      "Senderismo"
    ],
    "place": {
      "address": "Cll 119C # 174C - 103",
      "city": "Bucaramanga"
    },
    "age": 22
  },
  {
    "code": 8365,
    "name": "Black Raymond",
    "email": "blackraymond@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.3
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.7
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.3
      }
    ],
    "hobbies": [
      "Fútbol"
    ],
    "place": {
      "address": "Cll 68D # 75 - 1",
      "city": "Barranquilla"
    },
    "age": 26
  },
  {
    "code": 1146,
    "name": "Mariana Weber",
    "email": "marianaweber@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.5
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.7
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.5
      }
    ],
    "hobbies": [
      "Fútbol",
      "Música"
    ],
    "place": {
      "address": "Cll 13 # 124D - 6",
      "city": "Bucaramanga"
    },
    "age": 24
  },
  {
    "code": 6273,
    "name": "Hewitt Peters",
    "email": "hewittpeters@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.1
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.6
      }
    ],
    "hobbies": [
      "Senderismo"
    ],
    "place": {
      "address": "Cll 118D # 77C - 31",
      "city": "Bogotá"
    },
    "age": 20
  },
  {
    "code": 9232,
    "name": "Norris Pace",
    "email": "norrispace@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.4
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.9
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 4.4
      }
    ],
    "hobbies": [
      "Fútbol"
    ],
    "place": {
      "address": "Cll 128A # 136C - 118",
      "city": "Bucaramanga"
    },
    "age": 19
  },
  {
    "code": 5319,
    "name": "Dixie Petersen",
    "email": "dixiepetersen@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.2
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 2.8
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.3
      }
    ],
    "hobbies": [],
    "place": {
      "address": "Cll 198 # 6B - 17",
      "city": "Bucaramanga"
    },
    "age": 21
  },
  {
    "code": 9920,
    "name": "Gillespie Pearson",
    "email": "gillespiepearson@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.5
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 3.6
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.2
      }
    ],
    "place": {
      "address": "Cll 166 # 163D - 62",
      "city": "Bucaramanga"
    },
    "age": 18
  },
  {
    "code": 5228,
    "name": "Ellen Compton",
    "email": "ellencompton@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.3
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.2
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.7
      }
    ],
    "hobbies": [
      "Ciclismo"
    ],
    "place": {
      "address": "Cll 131A # 187B - 53",
      "city": "Bucaramanga"
    },
    "age": 19
  },
  {
    "code": 8540,
    "name": "Twila Woodward",
    "email": "twilawoodward@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.2
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 3.6
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.7
      }
    ],
    "hobbies": [
      "Música"
    ],
    "place": {
      "address": "Cll 47B # 171C - 30",
      "city": "Bucaramanga"
    },
    "age": 26
  },
  {
    "code": 7749,
    "name": "Moon Moss",
    "email": "moonmoss@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.4
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.4
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 4.1
      }
    ],
    "hobbies": [
      "Lectura",
      "Música",
      "Ajedréz"
    ],
    "place": {
      "address": "Cll 154B # 91B - 57",
      "city": "Bucaramanga"
    },
    "age": 17
  },
  {
    "code": 9972,
    "name": "Clarissa Hall",
    "email": "clarissahall@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.4
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.1
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.6
      }
    ],
    "hobbies": [
      "Ajedréz",
      "Música"
    ],
    "place": {
      "address": "Cra 21A # 126C - 54",
      "city": "Bucaramanga"
    },
    "age": 19
  },
  {
    "code": 6993,
    "name": "Nell Singleton",
    "email": "nellsingleton@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.7
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 3.9
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.4
      }
    ],
    "hobbies": [
      "Lectura",
      "Volleyball"
    ],
    "place": {
      "address": "Cll 63B # 96A - 95",
      "city": "Barranquilla"
    },
    "age": 23
  },
  {
    "code": 3809,
    "name": "Jennie Giles",
    "email": "jenniegiles@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.2
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.5
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.4
      }
    ],
    "hobbies": [
      "Ajedréz",
      "Lectura"
    ],
    "place": {
      "address": "Cra 22B # 153C - 46",
      "city": "Bucaramanga"
    },
    "age": 24
  },
  {
    "code": 5373,
    "name": "Bertie Macias",
    "email": "bertiemacias@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.8
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.2
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 4.1
      }
    ],
    "hobbies": [
      "Fútbol",
      "Ciclismo"
    ],
    "place": {
      "address": "Cll 130 # 2A - 92",
      "city": "Bucaramanga"
    },
    "age": 16
  },
  {
    "code": 7593,
    "name": "Ethel Slater",
    "email": "ethelslater@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.6
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 4.3
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.8
      }
    ],
    "hobbies": [
      "Fútbol"
    ],
    "place": {
      "address": "Cra 160D # 198 - 40",
      "city": "Bucaramanga"
    },
    "age": 23
  },
  {
    "code": 4266,
    "name": "Holt Hodge",
    "email": "holthodge@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.5
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 3.5
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 4.1
      }
    ],
    "hobbies": [
      "Lectura",
      "Música"
    ],
    "place": {
      "address": "Cll 186B # 129 - 42",
      "city": "Bogotá"
    },
    "age": 18
  },
  {
    "code": 3305,
    "name": "Tessa Abbott",
    "email": "tessaabbott@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.6
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 4
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.6
      }
    ],
    "hobbies": [
      "Fútbol",
      "Lectura"
    ],
    "place": {
      "address": "Cll 84B # 10D - 15",
      "city": "Bucaramanga"
    },
    "age": 25
  },
  {
    "code": 6656,
    "name": "Sheppard Hanson",
    "email": "sheppardhanson@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.8
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 4.1
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.6
      }
    ],
    "hobbies": [
      "Lectura"
    ],
    "place": {
      "address": "Cra 93A # 131B - 63",
      "city": "Bucaramanga"
    },
    "age": 28
  },
  {
    "code": 7992,
    "name": "Shannon Valdez",
    "email": "shannonvaldez@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.8
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 3.9
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3
      }
    ],
    "hobbies": [],
    "place": {
      "address": "Cra 26D # 72A - 84",
      "city": "Barranquilla"
    },
    "age": 24
  },
  {
    "code": 7195,
    "name": "Janet Lloyd",
    "email": "janetlloyd@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4.6
      },
      {
        "code": "02",
        "name": "Python",
        "grade": 4
      },
      {
        "code": "03",
        "name": "HTML + CSS",
        "grade": 3.2
      }
    ],
    "hobbies": [
      "Volleyball"
    ],
    "place": {
      "address": "Cra 76D # 194A - 25",
      "city": "Barranquilla"
    },
    "age": 21
  },
  {
    "code": 3361,
    "name": "Wood Joseph",
    "email": "woodjoseph@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.2
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 3.8
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.3
      }
    ],
    "place": {
      "address": "Cra 16C # 10D - 20",
      "city": "Bucaramanga"
    },
    "age": 27
  },
  {
    "code": 1849,
    "name": "Mendez Jacobson",
    "email": "mendezjacobson@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.9
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.1
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.7
      }
    ],
    "hobbies": [
      "Ajedréz",
      "Volleyball"
    ],
    "place": {
      "address": "Cll 38B # 23 - 28",
      "city": "Bucaramanga"
    },
    "age": 17
  },
  {
    "code": 5550,
    "name": "Bartlett Mcleod",
    "email": "bartlettmcleod@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 4
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.2
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.2
      }
    ],
    "hobbies": [
      "Fútbol",
      "Música"
    ],
    "place": {
      "address": "Cll 142 # 121C - 60",
      "city": "Bucaramanga"
    },
    "age": 27
  },
  {
    "code": 6630,
    "name": "Lelia Wright",
    "email": "leliawright@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.2
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 3.2
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 4.7
      }
    ],
    "hobbies": [
      "Ajedréz",
      "Música"
    ],
    "place": {
      "address": "Cll 98 # 197 - 68",
      "city": "Bucaramanga"
    },
    "age": 19
  },
  {
    "code": 9545,
    "name": "Reyes Shepherd",
    "email": "reyesshepherd@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.5
      },
      {
        "code": "04",
        "name": "Github",
        "grade": 3.3
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4.5
      }
    ],
    "hobbies": [
      "Lectura"
    ],
    "place": {
      "address": "Cll 7A # 174D - 118",
      "city": "Bogotá"
    },
    "age": 16
  },
  {
    "code": 3254,
    "name": "Short Byers",
    "email": "shortbyers@pearlessa.com",
    "courses": [
      {
        "code": "01",
        "name": "Introducción a la programación",
        "grade": 3.6
      },
      {
        "code": "05",
        "name": "Scrum",
        "grade": 4
      },
      {
        "code": "06",
        "name": "Javascript",
        "grade": 3.3
      }
    ],
    "hobbies": [
      "Lectura",
      "Música"
    ],
    "place": {
      "address": "Cll 179A # 128C - 20",
      "city": "Barranquilla"
    },
    "age": 18
  }]);
  db.students.insertOne({"code": 3823,
  "name": "Chapman Tillman",
  "email": "chapmantillman@zaj.com",
  "courses": [
  {
  "code": 1,
  "name": "Introducción a la programación",
  "grade": 4.1
  },
  {
  "code": 5,
  "name": "Scrum",
  "grade": 3.4
  },
  {
  "code": 6,
  "name": "Javascript",
  "grade": 3.5
  }
  ],
  "place": {
  "address": "Cra 170B # 94 - 58",
  "city": "Bogotá"
  },
  "age": 20});
  db.students.updateMany({},{$push:{active:true,modalidad:"virtual"}});
  db.students.updateMany({code:6503},{$set:{age:"20"}});//4.Actualizar los datos de los siguientes estudiantes:
  db.students.updateMany({code:6714},{$set:{"place.city":"barranquilla"}});
  db.students.updateOne({code:8302},{$addToSet:{hobbies:"Volleyball"}});
  db.students.updateMany({code:2354},{$addToSet:{hobbies:"lectura"}});
  db.students.updateMany({code:2354},{$addToSet:{hobbies:"musica"}});
  db.students.updateMany({code:7066},{$addToSet:{hobbies:"futbol"}});
  db.students.updateMany({code:7066},{$addToSet:{hobbies:"lectura"}});
  db.students.updateMany({name:Hilary Lee},{$set:{email:"hilarylee09@pearlessa.com"}});
  db.students.updateMany({},{$rename:{modalidad:"modality"}});//5.Renombrar la propiedad modalidad a modality.
  db.students.updateMany({"place.city":"Bucaramanga"},{$set:{modalidad:"on site"}});//6.Cambiar la modalidad (modality) de los estudiantes que viven en Bucaramanga a “On Site”
  //7.Crear las siguientes consultas:
  db.students.countDocuments({"place.city":"Barranquilla"});
  db.students.countDocuments({age:{$gt:18}});
  db.students.countDocuments({"place.city":{$ne:"Bogotá"}});
  db.students.find({age:{$gt:18}},{code:1,name:1,hobbies:1});
  db.students.find({age:{$lt:18}},{code:1,name:1,hobbies:1});
  //8.Elimina la propiedad active de todos los documentos.
  db.update.updateMany({},{$unset:{active:""}})
  //9.Eliminar el hobby Ciclismo del estudiante con código 2354.
  db.students.updateOne({code:"2354"},{$pull:{hobbies:"Ciclismo"}})
  //10Eliminar los hobbies Lectura y Senderismo del estudiante con código 3875.
  db.students.updateOne({code:"3875"},{$pullAll:{hobbies:"Ciclismo",hobbies:"Senderismo"}})
  //11.Eliminar al estudiante con código 9241.
  db.students.deleteOne({code:"9241"});
  //12 Eliminar todos los estudiantes de la ciudad de Barranquilla.
  db.students.deleteMany({"place.city":"Barranquilla"});

