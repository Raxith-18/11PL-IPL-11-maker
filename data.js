const teams = [

    // 🔴 RCB
    {
        name: "RCB",
        bg: "./images/rcb.jpg",
        logo: "./images/rcb.png",
        players: [
            { id: 1, name: "Virat Kohli", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/4I.png", overseas: false },//
            { id: 2, name: "Rajat Patidar", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/5S3.png", overseas: false },//
            { id: 3, name: "Tim David", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/2WT.png", overseas: true },//
            { id: 4, name: "Devdutt Padikkal", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/EI.png", overseas: false },//
            { id: 5, name: "Jordan Cox", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/19S.png", overseas: true },//
            { id: 6, name: "Satvik Deswal", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/KI0.png", overseas: false },//

            { id: 7, name: "Phil Salt", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/1CU.png", overseas: true },//
            { id: 8, name: "Jitesh Sharma", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/CY.png", overseas: false },//

            { id: 9, name: "Krunal Pandya", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/CW.png", overseas: false },//
            { id: 10, name: "Romario Shepherd", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/1CR.png", overseas: true },//
            { id: 11, name: "Jacob Bethell", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/6K0.png", overseas: true },//
            { id: 12, name: "Swapnil Singh", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/CT.png", overseas: false },//
            { id: 13, name: "Mangesh Yadav", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/DSI.png", overseas: false },//
            { id: 14, name: "Vihaan Malhotra", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/BZD.png", overseas: false },//
            { id: 15, name: "Venkatesh Iyer", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/5S8.png", overseas: false },//

            { id: 16, name: "Josh Hazlewood", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/95.png", overseas: true },//
            { id: 17, name: "Bhuvneshwar Kumar", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/36.png", overseas: false },//
            { id: 18, name: "Yash Dayal", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/66U.png", overseas: false },//
            { id: 19, name: "Nuwan Thushara", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/5GC.png", overseas: true },//
            { id: 20, name: "Rasikh Salam", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/EO.png", overseas: false },//
            { id: 21, name: "Abhinandan Singh", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/ERN.png", overseas: false },//
            { id: 22, name: "Suyash Sharma", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/B2H.png", overseas: false },//
            { id: 23, name: "Vicky Ostwal", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/7JR.png", overseas: false },//
            { id: 24, name: "Kanishk Chouhan", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/KBV.png", overseas: false },//
            { id: 25, name: "Jacob Duffy", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/4X4.png", overseas: true }//
        ]
    },

    // 🟡 CSK
    {
        name: "CSK",
        bg: "./images/csk.jpg",
        logo: "./images/csk.png",
        players: [
            { id: 1, name: "Ruturaj Gaikwad", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/ES.png", overseas: false },//
            { id: 2, name: "Ayush Mhatre", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/FCM.png", overseas: false },//
            { id: 3, name: "Urvil Patel", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/5NI.png", overseas: false },//
            { id: 4, name: "Kartik Sharma", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/FSM.png", overseas: false },//
            { id: 5, name: "Aman Khan", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/274.png", overseas: false },//
            { id: 6, name: "Sarfaraz Khan", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/B2.png", overseas: false },//

            { id: 7, name: "MS Dhoni", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/JO.png", overseas: false },//
            { id: 8, name: "Sanju Samson", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/72.png", overseas: false },//

            { id: 9, name: "Dewald Brevis", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/769.png", overseas: true },//
            { id: 10, name: "Shivam Dube", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/EJ.png", overseas: false },//
            { id: 11, name: "Ramakrishna Ghosh", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/A0E.png", overseas: false },//
            { id: 12, name: "Jamie Overton", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/1J4.png", overseas: true  },//
            { id: 13, name: "Prashant Veer", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/C9N.png", overseas: false },//
            { id: 14, name: "Matthew Short", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/1YC.png", overseas: true  },//

            { id: 15, name: "Khaleel Ahmed", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/CH.png", overseas: false },//
            { id: 16, name: "Anshul Kamboj", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/8C5.png", overseas: false },//
            { id: 17, name: "Gurjapneet Singh", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/6PW.png", overseas: false },//
            { id: 18, name: "Mukesh Choudhary", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/5RX.png", overseas: false },//
            { id: 19, name: "Matt Henry", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/AS.png", overseas: true  },//
            { id: 20, name: "Zak Foulkes", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/7NY.png", overseas: true  },//

            { id: 21, name: "Noor Ahmad", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/174.png", overseas: true },//
            { id: 22, name: "Rahul Chahar", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/DE.png", overseas: false },//
            { id: 23, name: "Akeal Hosein", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/21J.png", overseas: true },//
            { id: 24, name: "Shreyas Gopal", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/BJ.png", overseas: false }//
        ]
    },

    // 🟣 KKR
    {
        name: "KKR",
        bg: "./images/kkr.jpg",
        logo: "./images/kkr.png",
        players: [
            { id: 1, name: "Rinku Singh", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/DR.png", overseas: false },//
            { id: 2, name: "Ajinkya Rahane", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/3P.png", overseas: false },//
            { id: 3, name: "Rovman Powell", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/D8.png", overseas: true  },//
            { id: 4, name: "Manish Pandey", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/3D.png", overseas: false },//
            { id: 5, name: "Ramandeep Singh", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/5JX.png", overseas: false },//
            { id: 6, name: "Angkrish Raghuvanshi", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/7JC.png", overseas: false },//
            { id: 7, name: "Tejasvi Dahiya", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/EOT.png", overseas: false },//
            { id: 8, name: "Rahul Tripathi", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/DZ.png", overseas: false },//
            { id: 9, name: "Finn Allen", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/4W4.png", overseas: true  },//
            { id: 10, name: "Sarthak Ranjan", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/EN7.png", overseas: false },//

            { id: 11, name: "Tim Seifert", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/JX.png", overseas: true  },//

            { id: 12, name: "Sunil Narine", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/5K.png", overseas: true  },//
            { id: 13, name: "Anukul Roy", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/DG.png", overseas: false },//
            { id: 14, name: "Cameron Green", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/20P.png", overseas: true  },//
            { id: 15, name: "Daksh Kamra", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/MHV.png", overseas: false },//
            { id: 16, name: "Rachin Ravindra", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/4W3.png", overseas: true  },//

            { id: 17, name: "Varun Chakravarthy", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/EK.png", overseas: false },//
            { id: 18, name: "Prashant Solanki", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/63G.png", overseas: false },//

            { id: 19, name: "Umran Malik", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/60D.png", overseas: false },//
            { id: 20, name: "Vaibhav Arora", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/5IL.png", overseas: false },//
            { id: 21, name: "Kartik Tyagi", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/15B.png", overseas: false },//
            { id: 22, name: "Matheesha Pathirana", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/18E.png", overseas: true  },//
            { id: 23, name: "Akash Deep", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/5KW.png", overseas: false },//
            { id: 24, name: "Blessing Muzarabani", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/29Z.png", overseas: true  }//
        ]
    },


    {
        name: "RR",
        bg: "./images/rr.jpg",
        logo: "./images/rr.png",
        players: [

            // 🏏 BATTERS
            { id: 1, name: "Yashasvi Jaiswal", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/15K.png", overseas: false },
            { id: 2, name: "Vaibhav Suryavanshi", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/DBT.png", overseas: false },
            { id: 3, name: "Shubham Dubey", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/650.png", overseas: false },
            { id: 4, name: "Shimron Hetmyer", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/B7.png", overseas: true },
            { id: 5, name: "Riyan Parag", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/E2.png", overseas: false },
            { id: 6, name: "Aman Rao", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/G7C.png", overseas: false },

            // 🧤 WICKET KEEPERS
            { id: 7, name: "Dhruv Jurel", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/16J.png", overseas: false },
            { id: 8, name: "Lhuan-Dre Pretorius", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/CFT.png", overseas: true  },
            { id: 9, name: "Ravi Singh", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/G35.png", overseas: false },

            // 🔄 ALL ROUNDERS
            { id: 10, name: "Donovan Ferreira", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/2OT.png", overseas: true  },
            { id: 11, name: "Ravindra Jadeja", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/7.png", overseas: false },
            { id: 12, name: "Yash Raj Punja", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/BO7.png", overseas: false },

            // 🎯 BOWLERS
            { id: 13, name: "Jofra Archer", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/D9.png", overseas: true  },
            { id: 14, name: "Kwena Maphaka", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/82M.png", overseas: true  },
            { id: 15, name: "Nandre Burger", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/2OW.png", overseas: true  },
            { id: 16, name: "Sandeep Sharma", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/A8.png", overseas: false },
            { id: 17, name: "Tushar Deshpande", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/4O1.png", overseas: false },
            { id: 18, name: "Yudhvir Singh", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/5K7.png", overseas: false },
            { id: 19, name: "Adam Milne", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/8B.png", overseas: true  },
            { id: 20, name: "Sushant Mishra", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/16Y.png", overseas: false },
            { id: 21, name: "Kuldeep Sen", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/5S9.png", overseas: false },
            { id: 22, name: "Brijesh Sharma", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/K80.png", overseas: false },

            { id: 23, name: "Ravi Bishnoi", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/16E.png", overseas: false },
            { id: 24, name: "Vignesh Puthur", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/G3U.png", overseas: false }

        ]
    },

    {
        name: "LSG",
        bg: "./images/lsg.jpg",
        logo: "./images/lsg.png",
        players: [

            // 🏏 BATTERS
            { id: 1, name: "Abdul Samad", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/4P7.png", overseas: false },//
            { id: 2, name: "Ayush Badoni", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/5P9.png", overseas: false },//
            { id: 3, name: "Himmat Singh", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/EL.png", overseas: false },//
            { id: 4, name: "Matthew Breetzke", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/1DQ.png", overseas: true  },//
            { id: 5, name: "Mukul Choudhary", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/B82.png", overseas: false },//
            { id: 6, name: "Akshat Raghuvanshi", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/8DV.png", overseas: false },//

            // 🧤 WICKET KEEPERS
            { id: 7, name: "Rishabh Pant", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/CL.png", overseas: false },//
            { id: 8, name: "Nicholas Pooran", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/B6.png", overseas: true  },//
            { id: 9, name: "Josh Inglis", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/20O.png", overseas: true  },//

            // 🔄 ALL ROUNDERS
            { id: 10, name: "Aiden Markram", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/EY.png", overseas: true  },//
            { id: 11, name: "Mitchell Marsh", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/62.png", overseas: true  },//
            { id: 12, name: "Shahbaz Ahmed", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/1D8.png", overseas: false },//
            { id: 13, name: "Arshin Kulkarni", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/BQW.png", overseas: false },//
            { id: 14, name: "Wanindu Hasaranga", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/10N.png", overseas: true  },//

            // 🎯 BOWLERS
            { id: 15, name: "Mohammed Shami", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/2K.png", overseas: false },//
            { id: 16, name: "Avesh Khan", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/AZ.png", overseas: false },//
            { id: 17, name: "Mayank Yadav", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/7RU.png", overseas: false },//
            { id: 18, name: "Mohsin Khan", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/1DG.png", overseas: false },//
            { id: 19, name: "Prince Yadav", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/DCZ.png", overseas: false },//
            { id: 20, name: "Akash Singh", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/16W.png", overseas: false },//
            { id: 21, name: "Anrich Nortje", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/YI.png", overseas: true  },//
            { id: 22, name: "Arjun Tendulkar", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/5PQ.png", overseas: false },//
            { id: 23, name: "Naman Tiwari", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/C9P.png", overseas: false },//

            { id: 24, name: "M Siddharth", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/4PA.png", overseas: false },//
            { id: 25, name: "Digvesh Singh Rathi", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/EOS.png", overseas: false }//

        ]
    },

    {
        name: "GT",
        bg: "./images/gt.jpg",
        logo: "./images/gt.png",
        players: [

            // 🏏 BATTERS
            { id: 1, name: "Shubman Gill", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/O5.png", overseas: false },
            { id: 2, name: "Sai Sudharsan", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/6M2.png", overseas: false },
            { id: 3, name: "Shahrukh Khan", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/3VF.png", overseas: false },
            { id: 4, name: "Tom Banton", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/1DM.png", overseas: true  },

            // 🧤 WICKET KEEPERS
            { id: 5, name: "Kumar Kushagra", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/177.png", overseas: false },
            { id: 6, name: "Anuj Rawat", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/1DA.png", overseas: false },
            { id: 7, name: "Jos Buttler", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/8J.png", overseas: true  },

            // 🔄 ALL ROUNDERS
            { id: 8, name: "Nishant Sindhu", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/7JM.png", overseas: false },
            { id: 9, name: "Washington Sundar", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/LQ.png", overseas: false },
            { id: 10, name: "Arshad Khan", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/5SH.png", overseas: false },
            { id: 11, name: "Rahul Tewatia", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/BK.png", overseas: false },
            { id: 12, name: "Rashid Khan", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/CE.png", overseas: true  },
            { id: 13, name: "Manav Suthar", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/7OY.png", overseas: false },
            { id: 14, name: "Jason Holder", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/9P.png", overseas: true  },
            { id: 15, name: "Glenn Phillips", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/MP.png", overseas: true  },

            // 🎯 BOWLERS
            { id: 16, name: "Kagiso Rabada", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/B4.png", overseas: true  },
            { id: 17, name: "Mohammed Siraj", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/E1.png", overseas: false },
            { id: 18, name: "Prasidh Krishna", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/EF.png", overseas: false },
            { id: 19, name: "Ishant Sharma", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/10.png", overseas: false },
            { id: 20, name: "Gurnoor Brar", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/7O3.png", overseas: false },
            { id: 21, name: "Jayant Yadav", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/BB.png", overseas: false },
            { id: 22, name: "Sai Kishore", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/284.png", overseas: false },
            { id: 23, name: "Ashok Sharma", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/8FU.png", overseas: false },
            { id: 24, name: "Yarra Prithvi Raj", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/2WP.png", overseas: false },
            { id: 25, name: "Luke Wood", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/1C3.png", overseas: true  }

        ]
    },

    {
        name: "MI",
        bg: "./images/mi.jpg",
        logo: "./images/mi.png",
        players: [

            // 🏏 BATTERS
            { id: 1, name: "Rohit Sharma", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/2X.png", overseas: false },
            { id: 2, name: "Suryakumar Yadav", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/2Y.png", overseas: false },
            { id: 3, name: "Robin Minz", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/D9S.png", overseas: false },
            { id: 4, name: "Ryan Rickelton", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/1FG.png", overseas: true  },
            { id: 5, name: "Will Jacks", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/1I5.png", overseas: true  },
            { id: 6, name: "Atharva Ankolekar", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/175.png", overseas: false },

            // 🧤 WICKET KEEPERS
            { id: 7, name: "Quinton de Kock", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/92.png", overseas: true  },

            // 🔄 ALL ROUNDERS
            { id: 8, name: "Tilak Varma", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/15Q.png", overseas: false },
            { id: 9, name: "Hardik Pandya", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/C3.png", overseas: false },
            { id: 10, name: "Mitchell Santner", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/BR.png", overseas: true  },
            { id: 11, name: "Raj Angad Bawa", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/7JH.png", overseas: false },
            { id: 12, name: "Mayank Rawat", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/7AS.png", overseas: false },
            { id: 13, name: "Sherfane Rutherford", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/EH.png", overseas: true  },
            { id: 14, name: "Naman Dhir", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/AXL.png", overseas: false },
            { id: 15, name: "Corbin Bosch", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/1EN.png", overseas: true  },
            { id: 16, name: "Danish Malewar", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/FGK.png", overseas: false },

            // 🎯 BOWLERS
            { id: 17, name: "Jasprit Bumrah", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/AJ.png", overseas: false },
            { id: 18, name: "Trent Boult", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/9M.png", overseas: true  },
            { id: 19, name: "Deepak Chahar", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/3U.png", overseas: false },
            { id: 20, name: "Shardul Thakur", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/BG.png", overseas: false },
            { id: 21, name: "Ashwani Kumar", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/7D1.png", overseas: false },
            { id: 22, name: "Mohammed Izhar", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/M8K.png", overseas: false },

            { id: 23, name: "Mayank Markande", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/EA.png", overseas: false },
            { id: 24, name: "Raghu Sharma", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/5VO.png", overseas: false },
            { id: 25, name: "A M Ghazanfar", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/93C.png", overseas: true  }

        ]
    },

    {
        name: "SRH",
        bg: "./images/srh.jpg",
        logo: "./images/srh.png",
        players: [

            // 🏏 BATTERS
            { id: 1, name: "Travis Head", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/9O.png", overseas: true  },
            { id: 2, name: "Aniket Verma", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/DSE.png", overseas: false },
            { id: 3, name: "Smaran Ravichandran", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/96H.png", overseas: false },
            { id: 4, name: "Salil Arora", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/7D0.png", overseas: false },
            { id: 5, name: "Krains Fuletra", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/GJY.png", overseas: false },

            // 🧤 WICKET KEEPERS
            { id: 6, name: "Heinrich Klaasen", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/K0.png", overseas: true  },
            { id: 7, name: "Ishan Kishan", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/CM.png", overseas: false },

            // 🔄 ALL ROUNDERS
            { id: 8, name: "Abhishek Sharma", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/1DH.png", overseas: false },
            { id: 9, name: "Nitish Kumar Reddy", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/7OV.png", overseas: false },
            { id: 10, name: "Harsh Dubey", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/62Y.png", overseas: false },
            { id: 11, name: "Kamindu Mendis", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/LN.png", overseas: true  },
            { id: 12, name: "Brydon Carse", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/1IF.png", overseas: true  },
            { id: 13, name: "Zeeshan Ansari", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/7OG.png", overseas: false },
            { id: 14, name: "Shivang Kumar", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/DRL.png", overseas: false },
            { id: 15, name: "Amit Kumar", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/MB3.png", overseas: false },
            { id: 16, name: "Liam Livingstone", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/DB.png", overseas: true  },

            // 🎯 BOWLERS
            { id: 17, name: "Pat Cummins", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/8F.png", overseas: true  },
            { id: 18, name: "Harshal Patel", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/4B.png", overseas: false },
            { id: 19, name: "Jaydev Unadkat", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/2C.png", overseas: false },
            { id: 20, name: "Eshan Malinga", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/BUC.png", overseas: true  },
            { id: 21, name: "Onkar Tarmale", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/JWY.png", overseas: false },
            { id: 22, name: "Praful Hinge", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/8DF.png", overseas: false },
            { id: 23, name: "Shivam Mavi", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/DH.png", overseas: false },
            { id: 24, name: "Sakib Hussain", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/A44.png", overseas: false }

        ]
    },

    {
        name: "PBKS",
        bg: "./images/pbks.jpg",
        logo: "./images/pbks.png",
        
        players: [

            // 🏏 BATTERS
            { id: 1, name: "Shreyas Iyer", role: "RH Bat ", img: "https://cricketvectors.akamaized.net/players/org/B1.png", overseas: false },
            { id: 2, name: "Nehal Wadhera", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/7D4.png", overseas: false },
            { id: 3, name: "Shashank Singh", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/D5.png", overseas: false },
            { id: 4, name: "Pyla Avinash", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/8Z0.png", overseas: false },
            { id: 5, name: "Harnoor Singh", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/7JB.png", overseas: false },
            { id: 6, name: "Vishnu Vinod", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/2WK.png", overseas: false },

            // 🧤 WICKET KEEPERS
            { id: 7, name: "Prabhsimran Singh", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/EN.png", overseas: false },

            // 🔄 ALL ROUNDERS
            { id: 8, name: "Priyansh Arya", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/7AR.png", overseas: false },
            { id: 9, name: "Musheer Ahmed Khan", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/8U6.png", overseas: false },
            { id: 10, name: "Marcus Stoinis", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/9J.png", overseas: true  },
            { id: 11, name: "Marco Jansen", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/2OR.png", overseas: true  },
            { id: 12, name: "Azmatullah Omarzai", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/1CG.png", overseas: true  },
            { id: 13, name: "Suryansh Shedge", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/A23.png", overseas: false },
            { id: 14, name: "Mitchell Owen", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/5FA.png", overseas: true  },
            { id: 15, name: "Cooper Connolly", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/168.png", overseas: true  },

            // 🎯 BOWLERS
            { id: 16, name: "Arshdeep Singh", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/E5.png", overseas: false },
            { id: 17, name: "Vyshak Vijaykumar", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/24M.png", overseas: false },
            { id: 18, name: "Yash Thakur", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/5UZ.png", overseas: false },
            { id: 19, name: "Xavier Bartlett", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/4UY.png", overseas: true  },
            { id: 20, name: "Lockie Ferguson", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/DC.png", overseas: true  },
            { id: 21, name: "Yuzvendra Chahal", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/31.png", overseas: false },
            { id: 22, name: "Harpreet Brar", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/ER.png", overseas: false },
            { id: 23, name: "Praveen Dubey", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/D1.png", overseas: false },
            { id: 24, name: "Ben Dwarshuis", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/1YH.png", overseas: true  },
            { id: 25, name: "Vishal Nishad", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/EYQ.png", overseas: false }

        ]
    },

    {
        name: "DC",
        bg: "./images/dc.jpg",
        logo: "./images/dc.png",
        players: [

            // 🏏 BATTERS
            { id: 1, name: "Tristan Stubbs", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/5ZT.png", overseas: true  },
            { id: 2, name: "Sameer Rizvi", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/135.png", overseas: false },
            { id: 3, name: "Karun Nair", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/7K.png", overseas: false },
            { id: 4, name: "Ashutosh Sharma", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/5SI.png", overseas: false },
            { id: 5, name: "Nitish Rana", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/C1.png", overseas: false },
            { id: 6, name: "David Miller", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/54.png", overseas: true  },
            { id: 7, name: "Ben Duckett", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/ZZ.png", overseas: true  },
            { id: 8, name: "Pathum Nissanka", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/65I.png", overseas: true  },
            { id: 9, name: "Sahil Parakh", role: "LH Bat", img: "https://cricketvectors.akamaized.net/players/org/BRL.png", overseas: false },
            { id: 10, name: "Prithvi Shaw", role: "RH Bat", img: "https://cricketvectors.akamaized.net/players/org/DF.png", overseas: false },

            // 🧤 WICKET KEEPERS
            { id: 11, name: "KL Rahul", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/AK.png", overseas: false },
            { id: 12, name: "Abishek Porel", role: "WK-Bat", img: "https://cricketvectors.akamaized.net/players/org/87L.png", overseas: false },

            // 🔄 ALL ROUNDERS
            { id: 13, name: "Axar Patel", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/A9.png", overseas: false },
            { id: 14, name: "Vipraj Nigam", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/CCQ.png", overseas: false },
            { id: 15, name: "Madhav Tiwari", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/DSH.png", overseas: false },
            { id: 16, name: "Ajay Jadav Mandal", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/5LM.png", overseas: false },
            { id: 17, name: "Auqib Nabi", role: "All Rounder", img: "https://cricketvectors.akamaized.net/players/org/60B.png", overseas: false },

            // 🎯 BOWLERS
            { id: 18, name: "Tripurana Vijay", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/7RQ.png", overseas: false },
            { id: 19, name: "Kuldeep Yadav", role: "Spinner", img: "https://cricketvectors.akamaized.net/players/org/75.png", overseas: false },
            { id: 20, name: "Mitchell Starc", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/8G.png", overseas: true  },
            { id: 21, name: "T Natarajan", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/DS.png", overseas: false },
            { id: 22, name: "Mukesh Kumar", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/5KZ.png", overseas: false },
            { id: 23, name: "Dushmantha Chameera", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/IY.png", overseas: true  },
            { id: 24, name: "Lungi Ngidi", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/DD.png", overseas: true  },
            { id: 25, name: "Kyle Jamieson", role: "Pacer", img: "https://cricketvectors.akamaized.net/players/org/13F.png", overseas: true  }

        ]
    }

];

export default teams;