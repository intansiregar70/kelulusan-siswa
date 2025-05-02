const students = [
  {
    "nama": "Abi Rafdi Nasrullah",
    "nisn": "72317507",
    "tempat_lahir": "Kerpai",
    "tanggal_lahir": "2007-04-16"
  },
  {
    "nama": "Adelia Suriani",
    "nisn": "76471051",
    "tempat_lahir": "Sidomukti",
    "tanggal_lahir": "2007-06-16"
  },
  {
    "nama": "AMELDA BR SEMBIRING",
    "nisn": "68882812",
    "tempat_lahir": "GERAT",
    "tanggal_lahir": "2006-11-13"
  },
  {
    "nama": "Arief Yudria Kurniawan",
    "nisn": "85305437",
    "tempat_lahir": "Semarang",
    "tanggal_lahir": "2008-04-19"
  },
  {
    "nama": "BAITTI LASTARI BR SITEPU",
    "nisn": "63910062",
    "tempat_lahir": "AMAN DAMAI",
    "tanggal_lahir": "2006-12-08"
  },
  {
    "nama": "CAHAYA TRIA MADHANI",
    "nisn": "72589381",
    "tempat_lahir": "Dumai",
    "tanggal_lahir": "2007-09-21"
  },
  {
    "nama": "DAVID WAHYU RAMADHANI",
    "nisn": "72430214",
    "tempat_lahir": "PADANG BRAHRANG",
    "tanggal_lahir": "2007-12-21"
  },
  {
    "nama": "DEA NABILA SARI",
    "nisn": "64966185",
    "tempat_lahir": "DUSUN SUKA MAJU",
    "tanggal_lahir": "2006-06-09"
  },
  {
    "nama": "DEVI NOVITA",
    "nisn": "79472686",
    "tempat_lahir": "BATU AMPAR",
    "tanggal_lahir": "2007-11-23"
  },
  {
    "nama": "DIMAS ADITYA",
    "nisn": "76447730",
    "tempat_lahir": "TANDEM",
    "tanggal_lahir": "2007-10-03"
  },
  {
    "nama": "DINA AULIYA",
    "nisn": "79361013",
    "tempat_lahir": "PAYA JAMBU ",
    "tanggal_lahir": "2007-08-05"
  },
  {
    "nama": "Dini Aulia Ilri Manurung",
    "nisn": "78620210",
    "tempat_lahir": "Dusun Afdeling III",
    "tanggal_lahir": "2007-11-30"
  },
  {
    "nama": "ELSYA AMELIA PUTRI",
    "nisn": "75708588",
    "tempat_lahir": "SIDODADI",
    "tanggal_lahir": "2007-08-28"
  },
  {
    "nama": "Febrin Aini Harahap",
    "nisn": "86505750",
    "tempat_lahir": "Sumber Rejo",
    "tanggal_lahir": "2008-02-11"
  },
  {
    "nama": "Firda Sapitri",
    "nisn": "77668268",
    "tempat_lahir": "Lubuk Sekam",
    "tanggal_lahir": "2007-06-14"
  },
  {
    "nama": "Habib Hadianta",
    "nisn": "74696872",
    "tempat_lahir": "Kuta Parit",
    "tanggal_lahir": "2007-05-15"
  },
  {
    "nama": "HASA DAUD",
    "nisn": "74691829",
    "tempat_lahir": "SELESAI",
    "tanggal_lahir": "2007-09-25"
  },
  {
    "nama": "Intan Mutiara",
    "nisn": "79857143",
    "tempat_lahir": "Kerpai",
    "tanggal_lahir": "2007-04-23"
  },
  {
    "nama": "LILY PRATIWI",
    "nisn": "75341614",
    "tempat_lahir": "KERPAI ",
    "tanggal_lahir": "2007-02-19"
  },
  {
    "nama": "Mehta Veronika Br Sitepu",
    "nisn": "72089180",
    "tempat_lahir": "Betengar",
    "tanggal_lahir": "2007-09-23"
  },
  {
    "nama": "MHD. DANIEL MA'ARIF",
    "nisn": "77550670",
    "tempat_lahir": "PADANG CERMIN",
    "tanggal_lahir": "2007-05-13"
  },
  {
    "nama": "Muhammad Iqbal Siregar",
    "nisn": "75489384",
    "tempat_lahir": "Selayang",
    "tanggal_lahir": "2007-12-04"
  },
  {
    "nama": "NABILA SYAHRANI",
    "nisn": "003077375834",
    "tempat_lahir": "SELAYANG BARU",
    "tanggal_lahir": "2007-05-22"
  },
  {
    "nama": "NUR UMMIYAH HASANAH",
    "nisn": "82405682",
    "tempat_lahir": "PERHIASAN ",
    "tanggal_lahir": "2008-02-02"
  },
  {
    "nama": "Octaria Bilqis Ramadani Br. Pasaribu",
    "nisn": "72674374",
    "tempat_lahir": "Sidomukti",
    "tanggal_lahir": "2007-10-05"
  },
  {
    "nama": "PENTI GADIS JUWITA",
    "nisn": "78037810",
    "tempat_lahir": "KEBUN LADA ",
    "tanggal_lahir": "2007-10-25"
  },
  {
    "nama": "Raditya Pramana",
    "nisn": "73863066",
    "tempat_lahir": "Lau Mulgap dsn 1",
    "tanggal_lahir": "2007-04-21"
  },
  {
    "nama": "RAIHANDA HAIKAL",
    "nisn": "83241168",
    "tempat_lahir": "TANJUNG KASIH",
    "tanggal_lahir": "2008-01-01"
  },
  {
    "nama": "RAJA PRATAMA",
    "nisn": "76506454",
    "tempat_lahir": "KAMPUNG BARU",
    "tanggal_lahir": "2007-11-07"
  },
  {
    "nama": "Rehan Alvaro Nasution",
    "nisn": "78789839",
    "tempat_lahir": "Ara Tunggal",
    "tanggal_lahir": "2007-07-27"
  },
  {
    "nama": "RIAN AFRIZA",
    "nisn": "77702654",
    "tempat_lahir": "LANGKAT",
    "tanggal_lahir": "2007-03-04"
  },
  {
    "nama": "Sela Aulia",
    "nisn": "73038347",
    "tempat_lahir": "Kerpai",
    "tanggal_lahir": "2007-04-30"
  },
  {
    "nama": "SINTIA FEBRIANI",
    "nisn": "85659999",
    "tempat_lahir": "BANDAR SAKTI",
    "tanggal_lahir": "2008-05-17"
  },
  {
    "nama": "SRI MAYANG",
    "nisn": "74044127",
    "tempat_lahir": "KERPAI ",
    "tanggal_lahir": "2007-08-01"
  },
  {
    "nama": "Yudisha Deloys Tarigan",
    "nisn": "75482061",
    "tempat_lahir": "Binjai",
    "tanggal_lahir": "2007-01-27"
  },
  {
    "nama": "Zahratun Janna",
    "nisn": "72990119",
    "tempat_lahir": "Binjai ",
    "tanggal_lahir": "2007-09-06"
  },
  {
    "nama": "ZIDAN FEBRIAN",
    "nisn": "79766713",
    "tempat_lahir": "MANCANG",
    "tanggal_lahir": "2006-10-08"
  },
  {
    "nama": "ZIKRIA ASYIFA",
    "nisn": "67615476",
    "tempat_lahir": "BATU BARA ",
    "tanggal_lahir": "2006-02-20"
  },
  {
    "nama": "ADAM DEPENDRA",
    "nisn": "79801322",
    "tempat_lahir": "SUKATANI",
    "tanggal_lahir": "2007-03-23"
  },
  {
    "nama": "AIDIL SYAHPUTRA BANGUN",
    "nisn": "78864688",
    "tempat_lahir": "MEDAN",
    "tanggal_lahir": "2007-04-15"
  },
  {
    "nama": "Aldo Revansyah",
    "nisn": "87701478",
    "tempat_lahir": "Lau Mulgap",
    "tanggal_lahir": "2008-04-01"
  },
  {
    "nama": "ARINDA NATASYA",
    "nisn": "62983875",
    "tempat_lahir": "SIKAPAS",
    "tanggal_lahir": "2006-12-29"
  },
  {
    "nama": "DEWI",
    "nisn": "86712319",
    "tempat_lahir": "PD.BRAHRANG",
    "tanggal_lahir": "2008-04-24"
  },
  {
    "nama": "dwi ayu anjani",
    "nisn": "71693003",
    "tempat_lahir": "muliorejo",
    "tanggal_lahir": "2007-09-16"
  },
  {
    "nama": "Elda Piana",
    "nisn": "79382500",
    "tempat_lahir": "AMAN DAMAI",
    "tanggal_lahir": "2007-01-25"
  },
  {
    "nama": "ERICA AULIA HASIBUAN",
    "nisn": "79393498",
    "tempat_lahir": "LAU MULGAP",
    "tanggal_lahir": "2007-06-15"
  },
  {
    "nama": "Feby Laurensia",
    "nisn": "82672400",
    "tempat_lahir": "Sidomukti",
    "tanggal_lahir": "2008-03-17"
  },
  {
    "nama": "Gladis Navira",
    "nisn": "72637788",
    "tempat_lahir": "Sidomukti",
    "tanggal_lahir": "2007-11-27"
  },
  {
    "nama": "ICA SANTIA",
    "nisn": "75498212",
    "tempat_lahir": "SEI TAMPAH",
    "tanggal_lahir": "2007-08-01"
  },
  {
    "nama": "KHAIRUN NISSA",
    "nisn": "66028205",
    "tempat_lahir": "Sidomulyo",
    "tanggal_lahir": "2006-11-24"
  },
  {
    "nama": "M.ANDIKA TAMBUNAN",
    "nisn": "75229857",
    "tempat_lahir": "BINJAI",
    "tanggal_lahir": "2007-10-20"
  },
  {
    "nama": "MAYAWI",
    "nisn": "61657482",
    "tempat_lahir": "SEI RAMPAH",
    "tanggal_lahir": "2006-07-14"
  },
  {
    "nama": "Melsyana",
    "nisn": "63461782",
    "tempat_lahir": "Sei Limbat",
    "tanggal_lahir": "2006-08-30"
  },
  {
    "nama": "MHD. FADLI",
    "nisn": "003065779159",
    "tempat_lahir": "BINJAI",
    "tanggal_lahir": "2006-01-13"
  },
  {
    "nama": "MHD.RIZKI AL HAFIZ",
    "nisn": "78175895",
    "tempat_lahir": "LAU MULGAP",
    "tanggal_lahir": "2007-06-19"
  },
  {
    "nama": "Muhammad Afriansyah",
    "nisn": "68492208",
    "tempat_lahir": "Aman Damai",
    "tanggal_lahir": "2006-04-10"
  },
  {
    "nama": "naysilla putri",
    "nisn": "78471187",
    "tempat_lahir": "LANGKAT",
    "tanggal_lahir": "2007-01-05"
  },
  {
    "nama": "Nike Enjelika",
    "nisn": "72705340",
    "tempat_lahir": "Bekulap",
    "tanggal_lahir": "2007-07-03"
  },
  {
    "nama": "PANDU RIZKI ALAMSYAH",
    "nisn": "77623160",
    "tempat_lahir": "DUMAI",
    "tanggal_lahir": "2007-05-18"
  },
  {
    "nama": "RADIT DWI ALFINO",
    "nisn": "138519094",
    "tempat_lahir": "SEI LIMBAT",
    "tanggal_lahir": "2007-02-28"
  },
  {
    "nama": "SANTIA BR GINTING",
    "nisn": "76052729",
    "tempat_lahir": "LAU MULGAP",
    "tanggal_lahir": "2007-03-29"
  },
  {
    "nama": "SINTA DWI ANGGRAINI",
    "nisn": "72887375",
    "tempat_lahir": "BINJAI",
    "tanggal_lahir": "2007-07-06"
  },
  {
    "nama": "Sintia Sara Depi",
    "nisn": "78179094",
    "tempat_lahir": "Medan",
    "tanggal_lahir": "2007-04-13"
  },
  {
    "nama": "Sri Reski",
    "nisn": "72504073",
    "tempat_lahir": "Pd.Brahrang",
    "tanggal_lahir": "2007-02-12"
  },
  {
    "nama": "SYAHBANI SALSABILA",
    "nisn": "76166943",
    "tempat_lahir": "PADANG CERMIN",
    "tanggal_lahir": "2007-09-08"
  },
  {
    "nama": "Syahrizal Lubis",
    "nisn": "64337006",
    "tempat_lahir": "Binjai",
    "tanggal_lahir": "2006-04-14"
  },
  {
    "nama": "Agustri Tamba",
    "nisn": "68678553",
    "tempat_lahir": "Berastagi",
    "tanggal_lahir": "2006-08-21"
  },
  {
    "nama": "ANGGA PRAMUDIANTORO",
    "nisn": "78367337",
    "tempat_lahir": "SUMBEREJO",
    "tanggal_lahir": "2007-06-30"
  },
  {
    "nama": "BELT SAZAR",
    "nisn": "77052157",
    "tempat_lahir": "SELAYANG",
    "tanggal_lahir": "2007-04-04"
  },
  {
    "nama": "Deni Ramadhan",
    "nisn": "86629769",
    "tempat_lahir": "Mancang",
    "tanggal_lahir": "2008-09-08"
  },
  {
    "nama": "DESTA PRANANTA TARIGAN",
    "nisn": "76247604",
    "tempat_lahir": "NAMU UKUR",
    "tanggal_lahir": "2007-12-25"
  },
  {
    "nama": "Dewi Kesuma",
    "nisn": "66064090",
    "tempat_lahir": "Cinta Dapat",
    "tanggal_lahir": "2006-08-08"
  },
  {
    "nama": "ELVIRA",
    "nisn": "71340471",
    "tempat_lahir": "SIDODADI",
    "tanggal_lahir": "2007-07-21"
  },
  {
    "nama": "FIKRIAN SAMUDRA",
    "nisn": "66474142",
    "tempat_lahir": "PERHIASAN",
    "tanggal_lahir": "2006-06-03"
  },
  {
    "nama": "GITA AULIA PUTRI",
    "nisn": "73110737",
    "tempat_lahir": "CINTA DAPAT",
    "tanggal_lahir": "2007-09-09"
  },
  {
    "nama": "ISNAINI ZAHRA",
    "nisn": "76695932",
    "tempat_lahir": "MEDAN",
    "tanggal_lahir": "2007-03-26"
  },
  {
    "nama": "JUNIARTA Br HUTASOIT",
    "nisn": "44154590",
    "tempat_lahir": "TALANG LAKAT",
    "tanggal_lahir": "2004-06-05"
  },
  {
    "nama": "KEVIN HIDAYAT",
    "nisn": "77462064",
    "tempat_lahir": "LANGKAT",
    "tanggal_lahir": "2007-01-09"
  },
  {
    "nama": "M. ZIDAN FAHRUQI",
    "nisn": "75861429",
    "tempat_lahir": "LAU MULGAP",
    "tanggal_lahir": "2007-09-06"
  },
  {
    "nama": "Mhd.Ridho I",
    "nisn": "84545782",
    "tempat_lahir": "Sumber Rejo",
    "tanggal_lahir": "2008-02-18"
  },
  {
    "nama": "Muhammad Fadil",
    "nisn": "93182799",
    "tempat_lahir": "Perhiasan",
    "tanggal_lahir": "2009-03-23"
  },
  {
    "nama": "MUTIARA NJILEKENSA BR GINTING",
    "nisn": "51678655",
    "tempat_lahir": "SUKA RAME",
    "tanggal_lahir": "2005-01-07"
  },
  {
    "nama": "NADIYA SAFIRA",
    "nisn": "77129649",
    "tempat_lahir": "PERHIASAN",
    "tanggal_lahir": "2007-04-21"
  },
  {
    "nama": "NOVITA",
    "nisn": "78502288",
    "tempat_lahir": "SEI LIMBAT",
    "tanggal_lahir": "2007-04-19"
  },
  {
    "nama": "PANJI AL AYUBBI",
    "nisn": "88978590",
    "tempat_lahir": "BINJAI",
    "tanggal_lahir": "2008-01-11"
  },
  {
    "nama": "Putri Aulia Pratiwi",
    "nisn": "62163241",
    "tempat_lahir": "Binjai",
    "tanggal_lahir": "2006-05-22"
  },
  {
    "nama": "Rendy Prasetia",
    "nisn": "89973486",
    "tempat_lahir": "Lau Mulgap",
    "tanggal_lahir": "2008-01-15"
  },
  {
    "nama": "RINI ADELIA",
    "nisn": "77183265",
    "tempat_lahir": "TANJUNG JATI",
    "tanggal_lahir": "2007-09-09"
  },
  {
    "nama": "RISKA AMELIA",
    "nisn": "79522799",
    "tempat_lahir": "TANJUNG JATI",
    "tanggal_lahir": "2007-06-04"
  },
  {
    "nama": "SANDI SIAHAAN",
    "nisn": "46931206",
    "tempat_lahir": "BATAS",
    "tanggal_lahir": "2004-06-17"
  },
  {
    "nama": "STEPANUS RANTE SITEPU",
    "nisn": "75205051",
    "tempat_lahir": "PERHIASAN",
    "tanggal_lahir": "2008-04-19"
  },
  {
    "nama": "Sufriyanti Br Napitupulu",
    "nisn": "78121245",
    "tempat_lahir": "Selayang",
    "tanggal_lahir": "2007-08-10"
  },
  {
    "nama": "SUHADA",
    "nisn": "56484860",
    "tempat_lahir": "SUMBER REJO",
    "tanggal_lahir": "2007-05-29"
  },
  {
    "nama": "TANIA AUREL",
    "nisn": "77750007",
    "tempat_lahir": "BINJAI",
    "tanggal_lahir": "2007-08-08"
  },
  {
    "nama": "WAHYU SRI NINGSIH BR SIHOTANG",
    "nisn": "72832172",
    "tempat_lahir": "UKUI",
    "tanggal_lahir": "2007-11-28"
  },
  {
    "nama": "Winata Fraga Tarigan",
    "nisn": "83619727",
    "tempat_lahir": "Binjai",
    "tanggal_lahir": "2008-01-17"
  },
  {
    "nama": "Winata Fraja Tarigan",
    "nisn": "88103073",
    "tempat_lahir": "Binjai",
    "tanggal_lahir": "2008-01-17"
  },
  {
    "nama": "Yusuf Fransisco Situmorang",
    "nisn": "76434568",
    "tempat_lahir": "Selayang",
    "tanggal_lahir": "2007-07-14"
  },
  {
    "nama": "Zahra Varissya AK",
    "nisn": "79360023",
    "tempat_lahir": "Langsa",
    "tanggal_lahir": "2007-09-17"
  }
];