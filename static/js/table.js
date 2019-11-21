//#population-table

/*queue()
    .defer(d3.csv, "data/population-total/popTotalCountry.csv")
    .await(makeGraphs);

function makeGraphs(error, popData) {
    var ndx = crossfilter(popData);

    tablePopulationByCountry(ndx);

    dc.renderAll();

}



function tablePopulationByCountry(ndx) {
    document.getElementById('#population_table').DataTable();
}


var popTotalCountryData = [
    [{
            country: "Aruba",
            popTotal: 105845,
            percentPopFemale: 52.5,
            percentPopMale: 47.4
        },
        {
            country: "Afghanistan",
            popTotal: 37172386,
            percentPopFemale: 48.6,
            percentPopMale: 51.3
        },
        {
            country: "Angola",
            popTotal: 30809762,
            percentPopFemale: 50.3,
            percentPopMale: 49.4
        },
        {
            country: "Albania",
            popTotal: 2866376,
            percentPopFemale: 49,
            percentPopMale: 50.9
        },
        {
            country: "United Arab Emirates",
            popTotal: 9630959,
            percentPopFemale: 30.6,
            percentPopMale: 69.3
        },
        {
            country: "Argentina",
            popTotal: 44494502,
            percentPopFemale: 51.2,
            percentPopMale: 48.7
        },
        {
            country: "Armenia",
            popTotal: 2951776,
            percentPopFemale: 52.9,
            percentPopMale: 47
        },
        {
            country: "Antigua and Barbuda",
            popTotal: 96286,
            percentPopFemale: 51.7,
            percentPopMale: 48.2
        },
        {
            country: "Australia",
            popTotal: 24992369,
            percentPopFemale: 50.1,
            percentPopMale: 49.8
        },
        {
            country: "Austria",
            popTotal: 8847037,
            percentPopFemale: 50.8,
            percentPopMale: 49.1
        },
        {
            country: "Azerbaijan",
            popTotal: 9942334,
            percentPopFemale: 50.1,
            percentPopMale: 49.8
        },
        {
            country: "Burundi",
            popTotal: 11175378,
            percentPopFemale: 50.4,
            percentPopMale: 49.5
        },
        {
            country: "Belgium",
            popTotal: 11422068,
            percentPopFemale: 50.5,
            percentPopMale: 49.4
        },
        {
            country: "Benin",
            popTotal: 11485048,
            percentPopFemale: 50,
            percentPopMale: 49.9
        },
        {
            country: "Burkina Faso",
            popTotal: 19751535,
            percentPopFemale: 50,
            percentPopMale: 49.9
        },
        {
            country: "Bangladesh",
            popTotal: 161356039,
            percentPopFemale: 49.3,
            percentPopMale: 50.6
        },
        {
            country: "Bulgaria",
            popTotal: 7024216,
            percentPopFemale: 51.4,
            percentPopMale: 48.5
        },
        {
            country: "Bahrain",
            popTotal: 1569439,
            percentPopFemale: 36.3,
            percentPopMale: 63.6
        },
        {
            country: "Bahamas, The",
            popTotal: 385640,
            percentPopFemale: 51.4,
            percentPopMale: 48.5
        },
        {
            country: "Bosnia and Herzegovina",
            popTotal: 3323929,
            percentPopFemale: 51,
            percentPopMale: 48.9
        },
        {
            country: "Belarus",
            popTotal: 9485386,
            percentPopFemale: 53.4,
            percentPopMale: 46.5
        },
        {
            country: "Belize",
            popTotal: 383071,
            percentPopFemale: 50.1,
            percentPopMale: 49.8
        },
        {
            country: "Bolivia",
            popTotal: 11353142,
            percentPopFemale: 49.7,
            percentPopMale: 50.2
        },
        {
            country: "Brazil",
            popTotal: 209469333,
            percentPopFemale: 50.8,
            percentPopMale: 49.1
        },
        {
            country: "Barbados",
            popTotal: 286641,
            percentPopFemale: 51.6,
            percentPopMale: 48.2
        },
        {
            country: "Brunei Darussalam",
            popTotal: 428962,
            percentPopFemale: 48,
            percentPopMale: 51.9
        },
        {
            country: "Bhutan",
            popTotal: 754394,
            percentPopFemale: 47,
            percentPopMale: 52.9
        },
        {
            country: "Botswana",
            popTotal: 2254126,
            percentPopFemale: 51.7,
            percentPopMale: 48.2
        },
        {
            country: "Central African Republic",
            popTotal: 4666377,
            percentPopFemale: 50.4,
            percentPopMale: 49.5
        },
        {
            country: "Canada",
            popTotal: 37058856,
            percentPopFemale: 50.3,
            percentPopMale: 49.6
        },
        {
            country: "Switzerland",
            popTotal: 8516543,
            percentPopFemale: 50.4,
            percentPopMale: 49.5
        },
        {
            country: "Channel Islands",
            popTotal: 170499,
            percentPopFemale: 50.5,
            percentPopMale: 49.4
        },
        {
            country: "Chile",
            popTotal: 18729160,
            percentPopFemale: 50.7,
            percentPopMale: 49.2
        },
        {
            country: "China",
            popTotal: 1392730000,
            percentPopFemale: 48.6,
            percentPopMale: 51.3
        },
        {
            country: "Cote d'Ivoire",
            popTotal: 25069229,
            percentPopFemale: 49.5,
            percentPopMale: 50.4
        },
        {
            country: "Cameroon",
            popTotal: 25216237,
            percentPopFemale: 50,
            percentPopMale: 49.9
        },
        {
            country: "Congo, Dem. Rep.",
            popTotal: 84068091,
            percentPopFemale: 50,
            percentPopMale: 49.9
        },
        {
            country: "Congo, Rep.",
            popTotal: 5244363,
            percentPopFemale: 50,
            percentPopMale: 49.9
        },
        {
            country: "Colombia",
            popTotal: 49648685,
            percentPopFemale: 50.9,
            percentPopMale: 49
        },
        {
            country: "Comoros",
            popTotal: 832322,
            percentPopFemale: 49.5,
            percentPopMale: 50.4
        },
        {
            country: "Cabo Verde",
            popTotal: 543767,
            percentPopFemale: 49.8,
            percentPopMale: 50.1
        },
        {
            country: "Costa Rica",
            popTotal: 4999441,
            percentPopFemale: 50,
            percentPopMale: 49.9
        },
        {
            country: "Cuba",
            popTotal: 11338138,
            percentPopFemale: 50.3,
            percentPopMale: 49.6
        },
        {
            country: "Curacao",
            popTotal: 159849,
            percentPopFemale: 54,
            percentPopMale: 45.9
        },
        {
            country: "Cyprus",
            popTotal: 1189265,
            percentPopFemale: 49.9,
            percentPopMale: 50
        },
        {
            country: "Czech Republic",
            popTotal: 10625695,
            percentPopFemale: 50.8,
            percentPopMale: 49.1
        },
        {
            country: "Germany",
            popTotal: 82927922,
            percentPopFemale: 50.6,
            percentPopMale: 49.3
        },
        {
            country: "Djibouti",
            popTotal: 958920,
            percentPopFemale: 47.3,
            percentPopMale: 52.6
        },
        {
            country: "Denmark",
            popTotal: 5797446,
            percentPopFemale: 50.2,
            percentPopMale: 49.7
        },
        {
            country: "Dominican Republic",
            popTotal: 10627165,
            percentPopFemale: 50,
            percentPopMale: 49.9
        },
        {
            country: "Algeria",
            popTotal: 42228429,
            percentPopFemale: 49.4,
            percentPopMale: 50.5
        },
        {
            country: "Ecuador",
            popTotal: 17084357,
            percentPopFemale: 49.9,
            percentPopMale: 50
        },
        {
            country: "Egypt, Arab Rep.",
            popTotal: 98423595,
            percentPopFemale: 49.4,
            percentPopMale: 50.5
        },
        {
            country: "Spain",
            popTotal: 46723749,
            percentPopFemale: 50.8,
            percentPopMale: 49.1
        },
        {
            country: "Estonia",
            popTotal: 1320884,
            percentPopFemale: 52.8,
            percentPopMale: 47.1
        },
        {
            country: "Ethiopia",
            popTotal: 109224559,
            percentPopFemale: 49.9,
            percentPopMale: 50
        },
        {
            country: "Finland",
            popTotal: 5518050,
            percentPopFemale: 50.7,
            percentPopMale: 49.2
        },
        {
            country: "Fiji",
            popTotal: 883483,
            percentPopFemale: 49.3,
            percentPopMale: 50.6
        },
        {
            country: "France",
            popTotal: 66987244,
            percentPopFemale: 51.5,
            percentPopMale: 48.4
        },
        {
            country: "Micronesia, Fed. Sts.",
            popTotal: 112640,
            percentPopFemale: 49.1,
            percentPopMale: 50.8
        },
        {
            country: "Gabon",
            popTotal: 2119275,
            percentPopFemale: 49,
            percentPopMale: 50.9
        },
        {
            country: "United Kingdom",
            popTotal: 66488991,
            percentPopFemale: 50.6,
            percentPopMale: 49.3
        },
        {
            country: "Georgia",
            popTotal: 3731000,
            percentPopFemale: 52.2,
            percentPopMale: 47.7
        },
        {
            country: "Ghana",
            popTotal: 29767108,
            percentPopFemale: 49.3,
            percentPopMale: 50.6
        },
        {
            country: "Guinea",
            popTotal: 12414318,
            percentPopFemale: 51.8,
            percentPopMale: 48.1
        },
        {
            country: "Gambia, The",
            popTotal: 2280102,
            percentPopFemale: 50.4,
            percentPopMale: 49.5
        },
        {
            country: "Guinea-Bissau",
            popTotal: 1874309,
            percentPopFemale: 51.1,
            percentPopMale: 48.8
        },
        {
            country: "Equatorial Guinea",
            popTotal: 1308974,
            percentPopFemale: 44.4,
            percentPopMale: 55.5
        },
        {
            country: "Greece",
            popTotal: 10727668,
            percentPopFemale: 50.9,
            percentPopMale: 49
        },
        {
            country: "Grenada",
            popTotal: 111454,
            percentPopFemale: 49.6,
            percentPopMale: 50.3
        },
        {
            country: "Guatemala",
            popTotal: 17247807,
            percentPopFemale: 50.7,
            percentPopMale: 49.2
        },
        {
            country: "Guam",
            popTotal: 165768,
            percentPopFemale: 49.4,
            percentPopMale: 50.5
        },
        {
            country: "Guyana",
            popTotal: 779004,
            percentPopFemale: 49.8,
            percentPopMale: 50.1
        },
        {
            country: "Hong Kong SAR, China",
            popTotal: 7451000,
            percentPopFemale: 53.9,
            percentPopMale: 46
        },
        {
            country: "Honduras",
            popTotal: 9587522,
            percentPopFemale: 50,
            percentPopMale: 49.9
        },
        {
            country: "Croatia",
            popTotal: 4089400,
            percentPopFemale: 51.8,
            percentPopMale: 48.1
        },
        {
            country: "Haiti",
            popTotal: 11123176,
            percentPopFemale: 50.6,
            percentPopMale: 49.3
        },
        {
            country: "Hungary",
            popTotal: 9768785,
            percentPopFemale: 52.4,
            percentPopMale: 47.5
        },
        {
            country: "Indonesia",
            popTotal: 267663435,
            percentPopFemale: 49.6,
            percentPopMale: 50.3
        },
        {
            country: "India",
            popTotal: 1352617328,
            percentPopFemale: 48,
            percentPopMale: 51.9
        },
        {
            country: "Ireland",
            popTotal: 4853506,
            percentPopFemale: 50.4,
            percentPopMale: 49.5
        },
        {
            country: "Iran, Islamic Rep.",
            popTotal: 81800269,
            percentPopFemale: 49.4,
            percentPopMale: 50.5
        },
        {
            country: "Iraq",
            popTotal: 38433600,
            percentPopFemale: 49.4,
            percentPopMale: 50.5
        },
        {
            country: "Iceland",
            popTotal: 353574,
            percentPopFemale: 49.8,
            percentPopMale: 50.1
        },
        {
            country: "Israel",
            popTotal: 8883800,
            percentPopFemale: 50.2,
            percentPopMale: 49.7
        },
        {
            country: "Italy",
            popTotal: 60431283,
            percentPopFemale: 51.3,
            percentPopMale: 48.6
        },
        {
            country: "Jamaica",
            popTotal: 2934855,
            percentPopFemale: 50.3,
            percentPopMale: 49.6
        },
        {
            country: "Jordan",
            popTotal: 9956011,
            percentPopFemale: 49.3,
            percentPopMale: 50.6
        },
        {
            country: "Japan",
            popTotal: 126529100,
            percentPopFemale: 51.1,
            percentPopMale: 48.8
        },
        {
            country: "Kazakhstan",
            popTotal: 18276499,
            percentPopFemale: 51.5,
            percentPopMale: 48.4
        },
        {
            country: "Kenya",
            popTotal: 51393010,
            percentPopFemale: 50.3,
            percentPopMale: 49.6
        },
        {
            country: "Kyrgyz Republic",
            popTotal: 6315800,
            percentPopFemale: 50.5,
            percentPopMale: 49.4
        },
        {
            country: "Cambodia",
            popTotal: 16249798,
            percentPopFemale: 51.1,
            percentPopMale: 48.8
        },
        {
            country: "Kiribati",
            popTotal: 115847,
            percentPopFemale: 50.8,
            percentPopMale: 49.1
        },
        {
            country: "Korea, Rep.",
            popTotal: 51635256,
            percentPopFemale: 49.9,
            percentPopMale: 50
        },
        {
            country: "Kuwait",
            popTotal: 4137309,
            percentPopFemale: 39.5,
            percentPopMale: 60.4
        },
        {
            country: "Lao PDR",
            popTotal: 7061507,
            percentPopFemale: 49.7,
            percentPopMale: 50.1
        },
        {
            country: "Lebanon",
            popTotal: 6848925,
            percentPopFemale: 49.7,
            percentPopMale: 50.2
        },
        {
            country: "Liberia",
            popTotal: 4818977,
            percentPopFemale: 49.7,
            percentPopMale: 50.2
        },
        {
            country: "Libya",
            popTotal: 6678567,
            percentPopFemale: 49.4,
            percentPopMale: 50.5
        },
        {
            country: "St. Lucia",
            popTotal: 181889,
            percentPopFemale: 50.7,
            percentPopMale: 49.2
        },
        {
            country: "Sri Lanka",
            popTotal: 21670000,
            percentPopFemale: 51.9,
            percentPopMale: 48
        },
        {
            country: "Lesotho",
            popTotal: 2108132,
            percentPopFemale: 50.7,
            percentPopMale: 49.2
        },
        {
            country: "Lithuania",
            popTotal: 2789533,
            percentPopFemale: 53.7,
            percentPopMale: 46.2
        },
        {
            country: "Luxembourg",
            popTotal: 607728,
            percentPopFemale: 49.3,
            percentPopMale: 50.4
        },
        {
            country: "Latvia",
            popTotal: 1926542,
            percentPopFemale: 54,
            percentPopMale: 45.9
        },
        {
            country: "Macao SAR, China",
            popTotal: 631636,
            percentPopFemale: 51.9,
            percentPopMale: 48
        },
        {
            country: "Morocco",
            popTotal: 36029138,
            percentPopFemale: 50.4,
            percentPopMale: 49.5
        },
        {
            country: "Moldova",
            popTotal: 3545883,
            percentPopFemale: 52,
            percentPopMale: 47.9
        },
        {
            country: "Madagascar",
            popTotal: 26262368,
            percentPopFemale: 50.1,
            percentPopMale: 49.8
        },
        {
            country: "Maldives",
            popTotal: 515696,
            percentPopFemale: 37.2,
            percentPopMale: 62.7
        },
        {
            country: "Mexico",
            popTotal: 126190788,
            percentPopFemale: 51,
            percentPopMale: 48.9
        },
        {
            country: "North Macedonia",
            popTotal: 2082958,
            percentPopFemale: 49.9,
            percentPopMale: 50
        },
        {
            country: "Mali",
            popTotal: 19077690,
            percentPopFemale: 49.9,
            percentPopMale: 50
        },
        {
            country: "Malta",
            popTotal: 483530,
            percentPopFemale: 49.8,
            percentPopMale: 50.1
        },
        {
            country: "Myanmar",
            popTotal: 53708395,
            percentPopFemale: 51.8,
            percentPopMale: 48.1
        },
        {
            country: "Montenegro",
            popTotal: 622345,
            percentPopFemale: 50.5,
            percentPopMale: 49.4
        },
        {
            country: "Mongolia",
            popTotal: 3170208,
            percentPopFemale: 50.6,
            percentPopMale: 49.3
        },
        {
            country: "Mozambique",
            popTotal: 29495962,
            percentPopFemale: 51.4,
            percentPopMale: 48.5
        },
        {
            country: "Mauritania",
            popTotal: 4403319,
            percentPopFemale: 49.8,
            percentPopMale: 50.1
        },
        {
            country: "Mauritius",
            popTotal: 1265303,
            percentPopFemale: 50.5,
            percentPopMale: 49.4
        },
        {
            country: "Malawi",
            popTotal: 18143315,
            percentPopFemale: 50.7,
            percentPopMale: 49.2
        },
        {
            country: "Malaysia",
            popTotal: 31528585,
            percentPopFemale: 48.5,
            percentPopMale: 51.4
        },
        {
            country: "Namibia",
            popTotal: 2448255,
            percentPopFemal: 51.5,
            percentPopMale: 48.4
        },
        {
            country: "New Caledonia",
            popTotal: 284060,
            percentPopFemale: 49.6,
            percentPopMale: 50.3
        },
        {
            country: "Niger",
            popTotal: 22442948,
            percentPopFemale: 49.7,
            percentPopMale: 50.2
        },
        {
            country: "Nigeria",
            popTotal: 195874740,
            percentPopFemale: 49.3,
            percentPopMale: 50.6
        },
        {
            country: "Nicaragua",
            popTotal: 6465513,
            percentPopFemale: 50.7,
            percentPopMale: 49.2
        },
        {
            country: "Netherlands",
            popTotal: 17231017,
            percentPopFemale: 50.2,
            percentPopMale: 49.7
        },
        {
            country: "Norway",
            popTotal: 5314336,
            percentPopFemale: 49.5,
            percentPopMale: 50.4
        },
        {
            country: "Nepal",
            popTotal: 28087871,
            percentPopFemale: 54.5,
            percentPopMale: 45.4
        },
        {
            country: "New Zealand",
            popTotal: 4885500,
            percentPopFemale: 50.8,
            percentPopMale: 49.1
        },
        {
            country: "Oman",
            popTotal: 4829483,
            percentPopFemale: 34,
            percentPopMale: 65.9
        },
        {
            country: "Pakistan",
            popTotal: 212215030,
            percentPopFemale: 48.5,
            percentPopMale: 51.4
        },
        {
            country: "Panama",
            popTotal: 4176873,
            percentPopFemale: 49.9,
            percentPopMale: 50
        },
        {
            country: "Peru",
            popTotal: 31989256,
            percentPopFemale: 50.3,
            percentPopMale: 49.6
        },
        {
            country: "Philippines",
            popTotal: 106651922,
            percentPopFemale: 49.7,
            percentPopMale: 50.2
        },
        {
            country: "Papua New Guinea",
            popTotal: 8606316,
            percentPopFemale: 48.9,
            percentPopMale: 51
        },
        {
            country: "Poland",
            popTotal: 37978548,
            percentPopFemale: 51.5,
            percentPopMale: 48.4
        },
        {
            country: "Puerto Rico",
            popTotal: 3195153,
            percentPopFemale: 52.4,
            percentPopMale: 47.5
        },
        {
            country: "Korea, Dem. People’s Rep.",
            popTotal: 25549819,
            percentPopFemale: 51,
            percentPopMale: 48.9
        },
        {
            country: "Portugal",
            popTotal: 10281762,
            percentPopFemale: 52.7,
            percentPopMale: 47.2
        },
        {
            country: "Paraguay",
            popTotal: 6956071,
            percentPopFemale: 49.1,
            percentPopMale: 50.8
        },
        {
            country: "West Bank and Gaza",
            popTotal: 4569087,
            percentPopFemale: 49.2,
            percentPopMale: 50.7
        },
        {
            country: "French Polynesia",
            popTotal: 277679,
            percentPopFemale: 49.3,
            percentPopMale: 50.6
        },
        {
            country: "Qatar",
            popTotal: 2781677,
            percentPopFemale: 24.4,
            percentPopMale: 75.5
        },
        {
            country: "Romania",
            popTotal: 19473936,
            percentPopFemale: 51.3,
            percentPopMale: 48.6
        },
        {
            country: "Russian Federation",
            popTotal: 144478050,
            percentPopFemale: 53.6,
            percentPopMale: 46.3
        },
        {
            country: "Rwanda",
            popTotal: 12301939,
            percentPopFemale: 50.8,
            percentPopMale: 49.1
        },
        {
            country: "Saudi Arabia",
            popTotal: 33699947,
            percentPopFemale: 42.4,
            percentPopMale: 57.5
        },
        {
            country: "Sudan",
            popTotal: 41801533,
            percentPopFemale: 50,
            percentPopMale: 49.9
        },
        {
            country: "Senegal",
            popTotal: 15854360,
            percentPopFemale: 51.2,
            percentPopMale: 48.7
        },
        {
            country: "Singapore",
            popTotal: 5638676,
            percentPopFemale: 47.6,
            percentPopMale: 52.3
        },
        {
            country: "Solomon Islands",
            popTotal: 652858,
            percentPopFemale: 49.1,
            percentPopMale: 50.8
        },
        {
            country: "Sierra Leone",
            popTotal: 7650154,
            percentPopFemale: 50.1,
            percentPopMale: 49.8
        },
        {
            country: "El Salvador",
            popTotal: 6420744,
            percentPopFemale: 53.1,
            percentPopMale: 46.8
        },
        {
            country: "Somalia",
            popTotal: 15008154,
            percentPopFemale: 50.1,
            percentPopMale: 49.8
        },
        {
            country: "Serbia",
            popTotal: 6982084,
            percentPopFemale: 51.5,
            percentPopMale: 48.9
        },
        {
            country: "South Sudan",
            popTotal: 10975920,
            percentPopFemale: 49.9,
            percentPopMale: 50
        },
        {
            country: "Sao Tome and Principe",
            popTotal: 211028,
            percentPopFemale: 49.9,
            percentPopMale: 50
        },
        {
            country: "Suriname",
            popTotal: 575991,
            percentPopFemale: 49.7,
            percentPopMale: 50.2
        },
        {
            country: "Slovak Republic",
            popTotal: 5447011,
            percentPopFemale: 51.3,
            percentPopMale: 48.6
        },
        {
            country: "Slovenia",
            popTotal: 2067372,
            percentPopFemale: 50.2,
            percentPopMale: 49.7
        },
        {
            country: "Sweden",
            popTotal: 10183175,
            percentPopFemale: 49.9,
            percentPopMale: 50
        },
        {
            country: "Eswatini",
            popTotal: 1136191,
            percentPopFemale: 51.1,
            percentPopMale: 48.8
        },
        {
            country: "Seychelles",
            popTotal: 96762,
            percentPopFemale: 48.6,
            percentPopMale: 51.3
        },
        {
            country: "Syrian Arab Republic",
            popTotal: 16906283,
            percentPopFemale: 49.8,
            percentPopMale: 50.1
        },
        {
            country: "Chad",
            popTotal: 15477751,
            percentPopFemale: 50.8,
            percentPopMale: 49.9
        },
        {
            country: "Togo",
            popTotal: 7889094,
            percentPopFemale: 50.2,
            percentPopMale: 49.7
        },
        {
            country: "Thailand",
            popTotal: 69428524,
            percentPopFemale: 51.2,
            percentPopMale: 48.7
        },
        {
            country: "Tajikistan",
            popTotal: 9100837,
            percentPopFemale: 49.5,
            percentPopMale: 50.4
        },
        {
            country: "Turkmenistan",
            popTotal: 5850908,
            percentPopFemale: 50.7,
            percentPopMale: 49.2
        },
        {
            country: "Timor-Leste",
            popTotal: 1267972,
            percentPopFemale: 49.4,
            percentPopMale: 50.5
        },
        {
            country: "Tonga",
            popTotal: 103197,
            percentPopFemale: 49.9,
            percentPopMale: 50
        },
        {
            country: "Trinidad and Tobago",
            popTotal: 1389858,
            percentPopFemale: 50.5,
            percentPopMale: 49.4
        },
        {
            country: "Tunisia",
            popTotal: 11565204,
            percentPopFemale: 50.4,
            percentPopMale: 49.5
        },
        {
            country: "Turkey",
            popTotal: 82319724,
            percentPopFemale: 50.6,
            percentPopMale: 49.3
        },
        {
            country: "Tanzania",
            popTotal: 56318348,
            percentPopFemale: 50,
            percentPopMale: 49.9
        },
        {
            country: "Uganda",
            popTotal: 42723139,
            percentPopFemale: 50.7,
            percentPopMale: 49.2
        },
        {
            country: "Ukraine",
            popTotal: 44622516,
            percentPopFemale: 53.6,
            percentPopMale: 46.3
        },
        {
            country: "Uruguay",
            popTotal: 3449299,
            percentPopFemale: 51.7,
            percentPopMale: 48.2
        },
        {
            country: "United States",
            popTotal: 327167434,
            percentPopFemale: 50.5,
            percentPopMale: 49.4
        },
        {
            country: "Uzbekistan",
            popTotal: 32955400,
            percentPopFemale: 50.1,
            percentPopMale: 49.8
        },
        {
            country: "St. Vincent and the Grenadines",
            popTotal: 110210,
            percentPopFemale: 49.2,
            percentPopMale: 50.7
        },
        {
            country: "Venezuela, RB",
            popTotal: 28870195,
            percentPopFemale: 50.6,
            percentPopMale: 49.3
        },
        {
            country: "Virgin Islands (U.S.)",
            popTotal: 106977,
            percentPopFemale: 52.4,
            percentPopMale: 47.5
        },
        {
            country: "Vietnam",
            popTotal: 95540395,
            percentPopFemale: 50,
            percentPopMale: 49.9
        },
        {
            country: "Vanuatu",
            popTotal: 292680,
            percentPopFemale: 49.2,
            percentPopMale: 50.7
        },
        {
            country: "Samoa",
            popTotal: 196130,
            percentPopFemale: 48.2,
            percentPopMale: 51.7
        },
        {
            country: "Yemen, Rep.",
            popTotal: 28498687,
            percentPopFemale: 49.6,
            percentPopMale: 50.3
        },
        {
            country: "South Africa",
            popTotal: 57779622,
            percentPopFemale: 50.6,
            percentPopMale: 49.3
        },
        {
            country: "Zambia",
            popTotal: 17351822,
            percentPopFemale: 50.4,
            percentPopMale: 49.5
        },
        {
            country: "Zimbabwe",
            popTotal: 14439018,
            percentPopFemale: 52.3,
            percentPopMale: 47.6
        }
    ]
];

document.ready(function() {
    ('#population_table').DataTable({
        data: popTotalCountryData,
        columns: [
            { title: "country" },
            { title: "popTotal" },
            { title: "percentPopFemale" },
            { title: "percentPopMale" }
        ],
        paging: false,
        scrollY: 400
    });
});

*/
function showHide_pop_table() {
    var showTable = document.getElementById("population_table");
    if (showTable.style.display === "none") {
        showTable.style.display = "block";
        document.getElementById("table-btn").innerHTML = "Show Population Today for all Countries";
    }
    else {
        showTable.style.display = "block";
        showTable.style.display = "none";
        document.getElementById("table-btn").innerHTML = "Hide Population Today for all Countries";
    }
}
