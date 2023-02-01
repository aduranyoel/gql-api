import { User } from './user.entity';

const MOCK_USERS = [
  {
    'id': 1,
    'firstname': 'Lurleen',
    'lastname': 'Bolderson',
    'email': 'lbolderson0@simplemachines.org',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/115x100.png/5fa2dd/ffffff',
    'createdAt': '6/11/2022'
  },
  {
    'id': 2,
    'firstname': 'Sophie',
    'lastname': 'Dragonette',
    'email': 'sdragonette1@ca.gov',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/114x100.png/ff4444/ffffff',
    'createdAt': '2/20/2022'
  },
  {
    'id': 3,
    'firstname': 'Nickie',
    'lastname': 'Mosedill',
    'email': 'nmosedill2@reddit.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/170x100.png/dddddd/000000',
    'createdAt': '3/14/2022'
  },
  {
    'id': 4,
    'firstname': 'Mile',
    'lastname': 'Graves',
    'email': 'mgraves3@latimes.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/218x100.png/ff4444/ffffff',
    'createdAt': '3/27/2022'
  },
  {
    'id': 5,
    'firstname': 'Boniface',
    'lastname': 'Persitt',
    'email': 'bpersitt4@google.co.jp',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/118x100.png/cc0000/ffffff',
    'createdAt': '5/8/2022'
  },
  {
    'id': 6,
    'firstname': 'Adelina',
    'lastname': 'Fillon',
    'email': 'afillon5@ucoz.ru',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/191x100.png/cc0000/ffffff',
    'createdAt': '2/25/2022'
  },
  {
    'id': 7,
    'firstname': 'Guntar',
    'lastname': 'Bullers',
    'email': 'gbullers6@people.com.cn',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/134x100.png/ff4444/ffffff',
    'createdAt': '8/27/2022'
  },
  {
    'id': 8,
    'firstname': 'Yorgos',
    'lastname': 'Hansman',
    'email': 'yhansman7@alibaba.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/194x100.png/5fa2dd/ffffff',
    'createdAt': '9/17/2022'
  },
  {
    'id': 9,
    'firstname': 'Urban',
    'lastname': 'Scarsbrook',
    'email': 'uscarsbrook8@google.nl',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/243x100.png/5fa2dd/ffffff',
    'createdAt': '3/23/2022'
  },
  {
    'id': 10,
    'firstname': 'Roi',
    'lastname': 'Clurow',
    'email': 'rclurow9@nature.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/113x100.png/cc0000/ffffff',
    'createdAt': '10/5/2022'
  },
  {
    'id': 11,
    'firstname': 'Hank',
    'lastname': 'Matschoss',
    'email': 'hmatschossa@ifeng.com',
    'gender': 'Bigender',
    'imageUrl': 'http://dummyimage.com/102x100.png/cc0000/ffffff',
    'createdAt': '7/11/2022'
  },
  {
    'id': 12,
    'firstname': 'Charmane',
    'lastname': 'Colquitt',
    'email': 'ccolquittb@weather.com',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/198x100.png/cc0000/ffffff',
    'createdAt': '3/21/2022'
  },
  {
    'id': 13,
    'firstname': 'Modesta',
    'lastname': 'Jados',
    'email': 'mjadosc@theglobeandmail.com',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/188x100.png/ff4444/ffffff',
    'createdAt': '10/22/2022'
  },
  {
    'id': 14,
    'firstname': 'Stavros',
    'lastname': 'Mearns',
    'email': 'smearnsd@prlog.org',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/107x100.png/5fa2dd/ffffff',
    'createdAt': '9/4/2022'
  },
  {
    'id': 15,
    'firstname': 'Prentiss',
    'lastname': 'Lean',
    'email': 'pleane@dell.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/216x100.png/ff4444/ffffff',
    'createdAt': '4/29/2022'
  },
  {
    'id': 16,
    'firstname': 'Nero',
    'lastname': 'Cuss',
    'email': 'ncussf@census.gov',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/139x100.png/5fa2dd/ffffff',
    'createdAt': '2/17/2022'
  },
  {
    'id': 17,
    'firstname': 'Everett',
    'lastname': 'Faircliff',
    'email': 'efaircliffg@feedburner.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/133x100.png/cc0000/ffffff',
    'createdAt': '8/29/2022'
  },
  {
    'id': 18,
    'firstname': 'Sammie',
    'lastname': 'Burdell',
    'email': 'sburdellh@buzzfeed.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/193x100.png/cc0000/ffffff',
    'createdAt': '8/6/2022'
  },
  {
    'id': 19,
    'firstname': 'Roman',
    'lastname': 'Cavanagh',
    'email': 'rcavanaghi@china.com.cn',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/144x100.png/ff4444/ffffff',
    'createdAt': '9/13/2022'
  },
  {
    'id': 20,
    'firstname': 'Kacey',
    'lastname': 'Halladay',
    'email': 'khalladayj@boston.com',
    'gender': 'Genderqueer',
    'imageUrl': 'http://dummyimage.com/211x100.png/dddddd/000000',
    'createdAt': '3/16/2022'
  },
  {
    'id': 21,
    'firstname': 'Alanson',
    'lastname': 'De Bischof',
    'email': 'adebischofk@virginia.edu',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/190x100.png/dddddd/000000',
    'createdAt': '1/25/2022'
  },
  {
    'id': 22,
    'firstname': 'Dorella',
    'lastname': 'Masedon',
    'email': 'dmasedonl@cam.ac.uk',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/176x100.png/dddddd/000000',
    'createdAt': '12/11/2022'
  },
  {
    'id': 23,
    'firstname': 'Giovanna',
    'lastname': 'Monson',
    'email': 'gmonsonm@unblog.fr',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/240x100.png/cc0000/ffffff',
    'createdAt': '9/6/2022'
  },
  {
    'id': 24,
    'firstname': 'Jennee',
    'lastname': 'Scrivenor',
    'email': 'jscrivenorn@sun.com',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/142x100.png/cc0000/ffffff',
    'createdAt': '5/31/2022'
  },
  {
    'id': 25,
    'firstname': 'Aloisia',
    'lastname': 'Waterstone',
    'email': 'awaterstoneo@discovery.com',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/168x100.png/cc0000/ffffff',
    'createdAt': '7/7/2022'
  },
  {
    'id': 26,
    'firstname': 'Cherice',
    'lastname': 'Filasov',
    'email': 'cfilasovp@rediff.com',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/176x100.png/dddddd/000000',
    'createdAt': '5/7/2022'
  },
  {
    'id': 27,
    'firstname': 'Cinderella',
    'lastname': 'Iacivelli',
    'email': 'ciacivelliq@state.gov',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/121x100.png/ff4444/ffffff',
    'createdAt': '5/15/2022'
  },
  {
    'id': 28,
    'firstname': 'Edvard',
    'lastname': 'Cobby',
    'email': 'ecobbyr@dell.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/125x100.png/ff4444/ffffff',
    'createdAt': '10/25/2022'
  },
  {
    'id': 29,
    'firstname': 'Lesley',
    'lastname': 'Bugs',
    'email': 'lbugss@theguardian.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/216x100.png/cc0000/ffffff',
    'createdAt': '9/30/2022'
  },
  {
    'id': 30,
    'firstname': 'Dela',
    'lastname': 'McLaughlan',
    'email': 'dmclaughlant@barnesandnoble.com',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/160x100.png/dddddd/000000',
    'createdAt': '4/23/2022'
  },
  {
    'id': 31,
    'firstname': 'Briano',
    'lastname': 'Seckom',
    'email': 'bseckomu@hc360.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/192x100.png/ff4444/ffffff',
    'createdAt': '11/19/2022'
  },
  {
    'id': 32,
    'firstname': 'Gwendolen',
    'lastname': 'Welham',
    'email': 'gwelhamv@mashable.com',
    'gender': 'Bigender',
    'imageUrl': 'http://dummyimage.com/243x100.png/dddddd/000000',
    'createdAt': '7/7/2022'
  },
  {
    'id': 33,
    'firstname': 'Ferdinand',
    'lastname': 'Swetman',
    'email': 'fswetmanw@i2i.jp',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/186x100.png/cc0000/ffffff',
    'createdAt': '12/9/2022'
  },
  {
    'id': 34,
    'firstname': 'Ancell',
    'lastname': 'Lowless',
    'email': 'alowlessx@devhub.com',
    'gender': 'Bigender',
    'imageUrl': 'http://dummyimage.com/161x100.png/5fa2dd/ffffff',
    'createdAt': '3/7/2022'
  },
  {
    'id': 35,
    'firstname': 'Kesley',
    'lastname': 'Huster',
    'email': 'khustery@un.org',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/161x100.png/ff4444/ffffff',
    'createdAt': '2/11/2022'
  },
  {
    'id': 36,
    'firstname': 'Ezra',
    'lastname': 'Moulding',
    'email': 'emouldingz@last.fm',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/170x100.png/cc0000/ffffff',
    'createdAt': '9/16/2022'
  },
  {
    'id': 37,
    'firstname': 'Martainn',
    'lastname': 'Reily',
    'email': 'mreily10@vinaora.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/168x100.png/dddddd/000000',
    'createdAt': '1/30/2022'
  },
  {
    'id': 38,
    'firstname': 'Gavrielle',
    'lastname': 'Dawks',
    'email': 'gdawks11@techcrunch.com',
    'gender': 'Agender',
    'imageUrl': 'http://dummyimage.com/109x100.png/cc0000/ffffff',
    'createdAt': '12/22/2022'
  },
  {
    'id': 39,
    'firstname': 'Orelie',
    'lastname': 'Southard',
    'email': 'osouthard12@irs.gov',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/158x100.png/5fa2dd/ffffff',
    'createdAt': '12/20/2022'
  },
  {
    'id': 40,
    'firstname': 'Cullie',
    'lastname': 'Whittlesea',
    'email': 'cwhittlesea13@hibu.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/162x100.png/dddddd/000000',
    'createdAt': '5/26/2022'
  },
  {
    'id': 41,
    'firstname': 'Jorgan',
    'lastname': 'McKinlay',
    'email': 'jmckinlay14@ifeng.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/195x100.png/cc0000/ffffff',
    'createdAt': '8/27/2022'
  },
  {
    'id': 42,
    'firstname': 'Hastie',
    'lastname': 'Duggon',
    'email': 'hduggon15@tuttocitta.it',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/194x100.png/cc0000/ffffff',
    'createdAt': '2/17/2022'
  },
  {
    'id': 43,
    'firstname': 'Carmelia',
    'lastname': 'Pollicatt',
    'email': 'cpollicatt16@patch.com',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/130x100.png/dddddd/000000',
    'createdAt': '11/12/2022'
  },
  {
    'id': 44,
    'firstname': 'Ashlee',
    'lastname': 'McCraine',
    'email': 'amccraine17@upenn.edu',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/238x100.png/5fa2dd/ffffff',
    'createdAt': '11/15/2022'
  },
  {
    'id': 45,
    'firstname': 'Pembroke',
    'lastname': 'Leaver',
    'email': 'pleaver18@reddit.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/168x100.png/dddddd/000000',
    'createdAt': '8/9/2022'
  },
  {
    'id': 46,
    'firstname': 'Iseabal',
    'lastname': 'Easby',
    'email': 'ieasby19@a8.net',
    'gender': 'Female',
    'imageUrl': 'http://dummyimage.com/164x100.png/ff4444/ffffff',
    'createdAt': '9/15/2022'
  },
  {
    'id': 47,
    'firstname': 'Micki',
    'lastname': 'Pinyon',
    'email': 'mpinyon1a@i2i.jp',
    'gender': 'Agender',
    'imageUrl': 'http://dummyimage.com/121x100.png/cc0000/ffffff',
    'createdAt': '5/7/2022'
  },
  {
    'id': 48,
    'firstname': 'Jacob',
    'lastname': 'Alliston',
    'email': 'jalliston1b@dropbox.com',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/142x100.png/dddddd/000000',
    'createdAt': '4/16/2022'
  },
  {
    'id': 49,
    'firstname': 'Zebadiah',
    'lastname': 'Bravey',
    'email': 'zbravey1c@ebay.co.uk',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/172x100.png/cc0000/ffffff',
    'createdAt': '11/30/2022'
  },
  {
    'id': 50,
    'firstname': 'Olly',
    'lastname': 'Scawton',
    'email': 'oscawton1d@desdev.cn',
    'gender': 'Male',
    'imageUrl': 'http://dummyimage.com/129x100.png/5fa2dd/ffffff',
    'createdAt': '2/4/2022'
  },
];

export function bulkUsers(): Promise<void> {
  return User.bulkCreate(MOCK_USERS, { ignoreDuplicates: true })
    .then(() => console.log('Users created successfully'));
}
