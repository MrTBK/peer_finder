const students = [
    {
        id: 7,
        name: "Iyed Nasra",
        initials: "IN",
        level: "L1",
        skills: ["Design", "Research", "Marketing"],
        projectInterest: "Introduction à l'Économie",
        email: "iyed@example.com",
        facebook: "https://www.facebook.com/iyednasra"
    },
    {
        id: 8,
        name: "Roudayna Hazgui",
        initials: "RH",
        level: "L1",
        skills: ["Programation", "Presenting", "Statistics"],
        projectInterest: "Économie Numérique",
        email: "roudayna@example.com",
        facebook: "https://www.facebook.com/roudayna.hazgui.71"
    },
    {
        id: 1,
        name: "Mohamed Aziz Tabakh",
        initials: "MAT",
        level: "L2BI",
        skills: ["Programation", "Data Analysis", "Math"],
        projectInterest: "Statistiques Inférentielles",
        email: "aziz@example.com",
        facebook: "https://www.facebook.com/aziz.tabakh.58/"
    },
    {
        id: 2,
        name: "Wissal Jaafer",
        initials: "WJ",
        level: "L2BI",
        skills: ["Marketing", "Presenting", "Communication"],
        projectInterest: "Marketing Digital",
        email: "wissal@example.com",
        facebook: "https://www.facebook.com/wissal.jaafer.3"
    },
    {
        id: 3,
        name: "Mortadha Yakoubi",
        initials: "MY",
        level: "L2BI",
        skills: ["Marketing", "Content", "Communication"],
        projectInterest: "Digital Branding",
        email: "mortadha@example.com",
        facebook: "https://www.facebook.com/yakoubi.mortadha"
    },
    {
        id: 4,
        name: "Ridha Melouki",
        initials: "RM",
        level: "L2BI",
        skills: ["Statistics", "Analysis", "Research"],
        projectInterest: "Market Analysis",
        email: "ridha@example.com",
        facebook: "https://www.facebook.com/mohamed.ridha.melouki.2025"
    },
    {
        id: 5,
        name: "Mariem Zouaoui",
        initials: "MZ",
        level: "L2BI",
        skills: ["Design", "Marketing", "Presenting"],
        projectInterest: "Advertising Strategy",
        email: "mariem@example.com",
        facebook: "https://www.facebook.com/brown.marven"
    },
    {
        id: 6,
        name: "Roudaina Miledi",
        initials: "RM",
        level: "L2BI",
        skills: ["Communication", "Social Media", "Marketing"],
        projectInterest: "Community Management",
        email: "roudaina@example.com",
        facebook: "https://www.facebook.com/roudaina.m.i.2025"
    },
    {
        id: 7,
        name: "Zayneb Mekni",
        initials: "ZM",
        level: "L2BI",
        skills: ["Presenting", "Research", "Marketing"],
        projectInterest: "Consumer Behavior",
        email: "zayneb@example.com",
        facebook: "https://www.facebook.com/profile.php?id=61582275415939"
    },
    {
        id: 8,
        name: "Arij Ben Ahmed",
        initials: "ABA",
        level: "L2BI",
        skills: ["Marketing", "Writing", "Communication"],
        projectInterest: "Digital Content",
        email: "arij@example.com",
        facebook: "https://www.facebook.com/arij.ben.ahmed.551976"
    },
    {
        id: 9,
        name: "Aziza Jerbi",
        initials: "AJ",
        level: "L2BI",
        skills: ["Marketing", "Analysis", "Presenting"],
        projectInterest: "Market Research",
        email: "aziza@example.com",
        facebook: "https://www.facebook.com/aziza"
    },
    {
        id: 10,
        name: "Yassine Rachdi",
        initials: "YR",
        level: "L2BIS",
        skills: ["Design", "UI/UX", "Programation"],
        projectInterest: "Web Programming 1",
        email: "yassine@example.com",
        facebook: "https://www.facebook.com/yassine.rachdi.18"
    },
    {
        id: 11,
        name: "Brahmy Hiba",
        initials: "BH",
        level: "L2BIS",
        skills: ["Research", "Marketing", "Analysis"],
        projectInterest: "Community Management",
        email: "hiba@example.com",
        facebook: "https://www.facebook.com/brahmy.hiba"
    },
    {
        id: 12,
        name: "Ayoub Farhat",
        initials: "AF",
        level: "L2EB",
        skills: ["Math", "Statistics", "Research"],
        projectInterest: "Analyse Financière",
        email: "ayoub@example.com",
        facebook: "https://www.facebook.com/profile.php?id=100085445067524"
    },
    {
        id: 13,
        name: "Amine Harbaoui",
        initials: "AH",
        level: "L2EB",
        skills: ["Marketing", "Communication", "Presenting"],
        projectInterest: "Entrepreneuriat",
        email: "amine@example.com",
        facebook: "https://www.facebook.com/amine.harbaoui.988"
    },
    {
        id: 14,
        name: "Akrem Ben Zaoui",
        initials: "ABZ",
        level: "L3EB",
        skills: ["Marketing", "Negotiation", "Communication"],
        projectInterest: "Startup Management",
        email: "akrem@example.com",
        facebook: "https://www.facebook.com/Akrem.Benezzewii"
    },
    {
        id: 15,
        name: "Amine Missaoui",
        initials: "AM",
        level: "L3BI",
        skills: ["Programation", "Databases", "Dev"],
        projectInterest: "Web Applications",
        email: "amine.m@example.com",
        facebook: "https://www.facebook.com/amine.harbaoui.988"
    },
    {
        id: 16,
        name: "Yahya Ben Abdallah",
        initials: "YBA",
        level: "L3BIS",
        skills: ["Algorithms", "Problem Solving", "Dev"],
        projectInterest: "Advanced Programming",
        email: "yahya@example.com",
        facebook: "https://www.facebook.com/MOlizeR26"
    },
    {
        id: 17,
        name: "Benzarti Amir",
        initials: "BA",
        level: "M1",
        skills: ["Dev", "Programation", "Databases"],
        projectInterest: "OOP Programming",
        email: "amir@example.com",
        facebook: "https://www.facebook.com/benzartiamir30"
    },
    {
        id: 18,
        name: "Khaled Abdellatif",
        initials: "KA",
        level: "M1",
        skills: ["System Design", "Dev", "Programation"],
        projectInterest: "Conception OO des SI",
        email: "khaled@example.com",
        facebook: "https://www.facebook.com/khaled.abdellatif.37604"
    },
    {
        id: 19,
        name: "Rayen Jemli",
        initials: "RJ",
        level: "M2",
        skills: ["Dev", "Algorithms", "Problem Solving"],
        projectInterest: "Advanced Algorithms",
        email: "rayen@example.com",
        facebook: "https://www.facebook.com/rayen.jemli.2025"
    },
    {
        id: 20,
        name: "Aziz Mzoughi",
        initials: "AM",
        level: "M2",
        skills: ["Software Architecture", "Dev", "Leadership"],
        projectInterest: "Distributed Systems",
        email: "aziz.m@example.com",
        facebook: "https://www.facebook.com/aziz.mzoughi.9237"
    }
];
