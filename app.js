// initial data
let myEmailAddress = ''
const emails = [
    {
        from: "moshe.cohen@example.com",
        to: "sarah.goldstein@example.com",
        title: "Meeting Reminder",
        body: "Shalom Sarah, I hope this email finds you well. Just a friendly reminder about our team meeting tomorrow at 2 PM in Conference Room B. We'll be discussing the quarterly results and planning for the upcoming Hanukkah marketing campaign. Please bring your ideas and any relevant reports. Looking forward to seeing you there!"
    },
    {
        from: "marketing@shalomsales.com",
        to: "subscribers@shalomsales.com",
        title: "Exclusive Summer Sale!",
        body: "Dear valued customers, Get ready for an incredible summer with our exclusive sale! Enjoy up to 50% off on all summer items, from beachwear to picnic essentials. Don't miss out on our special collection of kosher BBQ supplies and sunscreen approved by Rabbi Steinberg. This limited-time offer ends soon, so hurry and start shopping now!"
    },
    {
        from: "support@techmensch.com",
        to: "customer@email.com",
        title: "Your Recent Support Ticket",
        body: "Shalom! We've received your support ticket regarding issues with your new smartphone. Our team of expert technicians, led by Avi Rosenberg, is working diligently to resolve your problem. We understand how important your device is and assure you we're treating this with utmost priority. Expect an update within the next 24 hours."
    },
    {
        from: "newsletter@jewishnews.com",
        to: "readers@email.com",
        title: "Weekly News Digest",
        body: "Dear readers, This week's top stories include: 1) New kosher restaurant opens in Brooklyn, receiving rave reviews, 2) Israeli tech startup revolutionizes water conservation efforts, 3) Local synagogue hosts interfaith dialogue event, promoting community unity, 4) Upcoming Jewish film festival announces star-studded lineup. Read more about these stories and other community events in our full newsletter."
    },
    {
        from: "rachel.levine@company.com",
        to: "employees@company.com",
        title: "Important Policy Update",
        body: "Dear colleagues, Please review the attached document for crucial updates to our company policies. These changes include new guidelines for remote work, an expanded parental leave policy, and updated procedures for requesting time off during Jewish holidays. If you have any questions, please don't hesitate to reach out to the HR department."
    },
    {
        from: "events@jewishcommunity.org",
        to: "members@jewishcommunity.org",
        title: "Upcoming Charity Gala",
        body: "Shalom community members! We're excited to announce our annual charity gala, 'A Night of Tikkun Olam,' next month. Join us for an evening of dinner, dancing, and tzedakah as we raise funds for local education initiatives. Our guest speaker will be renowned author and philanthropist, David Shapiro. RSVP required by the 15th. We can't wait to see you there!"
    },
    {
        from: "noreply@jewishconnect.com",
        to: "user@email.com",
        title: "New Friend Request",
        body: "Shalom! You have a new friend request from Esther Weinstein on JewishConnect. Esther shares your interest in Kabbalah studies and Jewish cooking. Why not check out her profile and consider accepting her request? Remember, building connections is an important part of our community!"
    },
    {
        from: "billing@kosherservice.com",
        to: "customer@email.com",
        title: "Your Monthly Invoice",
        body: "Dear valued customer, Your monthly invoice for KosherService is now available. This month's statement includes your regular subscription fee and the additional charge for the special Passover package you ordered. You can view the detailed breakdown and pay your bill by logging into your account. Thank you for your continued support of our service!"
    },
    {
        from: "team@mitzvahproject.com",
        to: "collaborators@mitzvahproject.com",
        title: "Project Update: Milestone Reached",
        body: "Shalom team! Great news! We've successfully completed phase 1 of the Mitzvah Project. Thanks to everyone's hard work, we've already helped 100 families in need. Special thanks to Deborah Fishman for coordinating the food drive and to Isaac Levy for organizing the volunteer schedule. Let's keep up this amazing momentum as we move into phase 2!"
    },
    {
        from: "notifications@torahforum.com",
        to: "member@email.com",
        title: "New Reply to Your Post",
        body: "Shalom! There's been a new reply to your post in the 'Weekly Torah Portion' discussion forum. Rabbi Adina Goldberg has shared some insightful comments on your interpretation of last week's parshah. Head over to the forum to continue this enlightening discussion and deepen your understanding of the Torah."
    },
    {
        from: "sales@menschmarket.com",
        to: "leads@email.com",
        title: "Exclusive Offer for New Customers",
        body: "Shalom! As a new customer of MenschMarket, you're eligible for our special introductory offer. Enjoy 20% off your first order of our premium kosher products, including our award-winning challah and artisanal gefilte fish. Plus, sign up for our loyalty program and receive a free set of Shabbat candles with your next purchase. Start shopping now and taste the difference!"
    },
    {
        from: "system@jewishapp.com",
        to: "user@email.com",
        title: "Security Alert: New Login",
        body: "Shalom, we detected a new login to your JewishApp account from an unfamiliar device. The login occurred from Tel Aviv, Israel at 3:45 PM local time. If this was you, no further action is needed. If you don't recognize this activity, please change your password immediately and contact our support team. Your account security is our top priority."
    },
    {
        from: "courses@yeshivauniversity.edu",
        to: "students@yeshivauniversity.edu",
        title: "Course Registration Open",
        body: "Dear students, Registration for next semester's courses is now open. We're excited to offer new classes including 'Modern Hebrew Literature,' 'Jewish Ethics in Business,' and 'The History of Kabbalah.' Remember, popular courses like 'Introduction to Talmudic Law' with Professor Shlomo Goldberg fill up quickly, so register early! Contact your academic advisor if you need any assistance with course selection."
    },
    {
        from: "support@shalomsoftware.com",
        to: "user@email.com",
        title: "Your Subscription is Expiring",
        body: "Shalom valued customer, This is a reminder that your subscription to ShalomSoftware will expire in 7 days. To ensure uninterrupted access to our suite of Jewish learning tools, including our popular Torah study app and Hebrew language software, please renew your subscription now. As a loyal customer, we're offering you a 15% discount on your renewal. Don't miss out on this offer!"
    },
    {
        from: "travel@kosherjourney.com",
        to: "traveler@email.com",
        title: "Your Upcoming Trip Itinerary",
        body: "Shalom! We're excited about your upcoming kosher tour of Israel. Here's your detailed itinerary: Day 1: Arrival in Tel Aviv, welcome dinner at Shuk HaCarmel. Day 2: Tour of Jerusalem's Old City, including the Western Wall and Yad Vashem. Day 3: Float in the Dead Sea and visit Masada. Remember to pack comfortable walking shoes and modest clothing for holy sites. Safe travels!"
    },
    {
        from: "library@jewishculture.org",
        to: "patron@email.com",
        title: "Overdue Book Reminder",
        body: "Shalom! This is a friendly reminder that you have an overdue book: 'The Jews of New York' by Deborah Dash Moore. Please return it to the Jewish Cultural Center Library at your earliest convenience. Remember, other patrons may be waiting to read this popular title. If you need more time, you can renew the book online or by calling us. Thank you for supporting our community library!"
    },
    {
        from: "recruiter@cohentechnologies.com",
        to: "applicant@email.com",
        title: "Interview Invitation",
        body: "Dear applicant, We're pleased to invite you for an interview for the position of Software Engineer at Cohen Technologies. Your experience with both programming and Judaic studies caught our attention. The interview will be conducted by our CTO, Zev Rosenberg, and will include a technical assessment and discussion about our company's mission to integrate technology with Jewish values. Please let us know your availability for next week."
    },
    {
        from: "survey@jewishresearch.org",
        to: "participant@email.com",
        title: "Feedback Request: Recent Synagogue Event",
        body: "Shalom! We hope you enjoyed the recent Purim celebration at Beth Israel Synagogue. Your feedback is crucial in helping us improve future events. Please take a moment to complete our survey, covering aspects such as the Megillah reading, the children's costume contest, and the quality of the hamantaschen. Your input will help us make next year's celebration even more joyous and meaningful. Thank you for your participation!"
    },
    {
        from: "info@magentzedek.org",
        to: "donors@email.com",
        title: "Thank You for Your Donation",
        body: "Dear generous supporter, Your recent donation to Magen Tzedek is truly making a difference. Thanks to your contribution, we've been able to provide kosher meals to 50 homebound seniors and support 10 families with emergency financial assistance this month. Your commitment to tikkun olam is inspiring. We've attached a detailed report showing how your donation is being used to bring light to our community. Todah rabah for your continued support!"
    },
    {
        from: "updates@torahsoftware.com",
        to: "users@email.com",
        title: "New Features Available",
        body: "Shalom TorahSoftware users! We're excited to announce new features in our latest update. You can now customize your daily Torah study schedule, access an expanded library of commentaries, and use our new Hebrew-English translation tool. We've also improved the interface for mobile users. Update your app now to enjoy these enhancements and deepen your Torah learning experience!"
    },
    {
        from: "noreply@hebrewnationalbank.com",
        to: "account@email.com",
        title: "Important: Account Statement",
        body: "Dear valued customer, Your monthly account statement for Hebrew National Bank is now available for review. This month's statement includes your recent transactions, including your donation to the local synagogue and purchases from Goldberg's Kosher Market. Please log in to your online banking portal to view the full statement. If you notice any discrepancies, please contact our customer service team immediately."
    },
    {
        from: "editor@jewishlifemagazine.com",
        to: "subscriber@email.com",
        title: "Your Digital Magazine is Here",
        body: "Shalom subscriber! The latest issue of Jewish Life Magazine is now available in your digital library. This month's highlights include an exclusive interview with Israeli author Etgar Keret, a feature on the revival of Yiddish theater in New York, and a special Rosh Hashanah recipe section. Don't miss our thought-provoking article on the intersection of Jewish ethics and modern technology. Happy reading!"
    },
    {
        from: "notifications@maccabihealthcare.com",
        to: "patient@email.com",
        title: "Appointment Reminder",
        body: "Shalom! This is a reminder of your upcoming appointment with Dr. Sarah Levine at Maccabi Healthcare tomorrow at 10:00 AM. Please remember to bring your insurance card and any relevant medical records. If you need to reschedule, please give us at least 24 hours notice. We look forward to providing you with excellent care!"
    },
    {
        from: "alerts@israelweather.com",
        to: "user@email.com",
        title: "Heat Wave Alert for Tel Aviv",
        body: "Shalom! A severe heat wave warning has been issued for the Tel Aviv area over the next three days. Temperatures are expected to reach 38°C (100°F). Please take necessary precautions: stay hydrated, avoid prolonged sun exposure, and check on elderly neighbors. Remember, many public buildings and synagogues offer air-conditioned refuge during peak hours. Stay safe and cool!"
    },
    {
        from: "noreply@jewishjobs.com",
        to: "seeker@email.com",
        title: "New Job Matches",
        body: "Shalom job seeker! We've found new job listings that match your search criteria. These include a position for a Hebrew teacher at Beth Shalom Day School, a marketing manager role at Manischewitz, and a community outreach coordinator at the local JCC. Log in to your account to view full job descriptions and apply. May you find success in your job search!"
    },
    {
        from: "support@koshermart.com",
        to: "customer@email.com",
        title: "Order Confirmation #12345",
        body: "Todah rabah for your order from KosherMart! Here's a summary of your purchase: 1 box of Shabbat candles, 2 bottles of Kedem grape juice, 1 challah cover, and assorted Hanukkah gelt. Your order will be delivered before sundown on Friday. We've also included a free sample of our new kosher-for-Passover cake mix. Enjoy your products and Shabbat Shalom!"
    },
    {
        from: "newsletter@rabbinicwisdom.com",
        to: "subscriber@email.com",
        title: "Weekly Parshah Insights",
        body: "Shalom friends of Torah! This week's parshah is Bereishit, the very beginning of our Torah. Rabbi Steinberg explores the concept of creation and our role as partners with Hashem in continuing the work of creation. We also have a beautiful midrash on the creation of light and a discussion on the ethical implications of Adam and Eve's choices. May these insights enrich your Shabbat table discussions!"
    },
    {
        from: "noreply@jewflix.com",
        to: "viewer@email.com",
        title: "New Jewish Content Added",
        body: "Shalom JewFlix subscribers! We've added exciting new content to our streaming library. Don't miss the award-winning Israeli drama 'Shtisel,' a new documentary on the history of Yiddish cinema, and 'Keeping Up with the Steins,' a hilarious comedy about Bar Mitzvah planning. For the kids, we've added new episodes of 'Shalom Sesame.' Start watching now and enjoy the best in Jewish and Israeli entertainment!"
    },
    {
        from: "updates@maccabifitness.com",
        to: "member@email.com",
        title: "Your Fitness Progress Report",
        body: "Shalom health enthusiast! Here's your monthly fitness report from Maccabi Fitness Center. You've attended 12 classes this month, including 5 Krav Maga sessions and 7 Israeli folk dance workouts. Your average heart rate has improved by 5%, and you've increased your strength training weights by 10%. Keep up the great work! Remember, a healthy body houses a healthy soul. Looking forward to seeing you at the gym!"
    },
    {
        from: "notifications@jewishsocial.com",
        to: "user@email.com",
        title: "You have 5 new notifications",
        body: "Shalom! You have new activity on your JewishSocial account: 3 people liked your post about your synagogue's recent charity drive, Rachel Cohen commented on your Shabbat dinner photo, and you have a new connection request from the 'Young Jewish Professionals' group. Check your account to stay updated with your community. Remember, building and maintaining kehillah is a mitzvah!"
    }
];

// get set of unique emails
const getUniqueEmailsList = () => [...new Set(emails.flatMap(email => [email.from, email.to]))]

// populate emails select 
const populatedEmailsSelecet = selectElm => {
    selectElm.innerHTML = ''
    for (const opt of getUniqueEmailsList()) {
        const optElm = document.createElement('option')
        optElm.value = opt
        optElm.textContent = opt
        optElm.selected = opt === myEmailAddress
        selectElm.appendChild(optElm)
    }
}

// elements
const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('nav>*')
const [inboxSec, sentSec, draftsSec, settingsSec, noAddressSec] = sections
const [inboxLnk, dentLnk, draftsLnk, settingsLnk] = links
const newMailBtn = document.querySelector('.new-email-btn')
const newEmailSec = document.querySelector('.new-email-modal')
const settingsRedirect = document.querySelector('.href')
const sendEmailBtn = document.querySelector('.send-btn')
const currentAddress = document.querySelector('.current')

// routing
const navigateTo = page => {
    for (const sec of sections) {
        sec.style.display = sec.className === page ? 'flex' : 'none'
    }
    populatePage(page)
}

// populate page
const noAddressGoToSettingsView = () => {
    for (const sec of sections) {
        sec.style.display = 'none'
    }
    noAddressSec.style.display = "flex"
}

const populateEmailList = (pageElm, emailList, isInbox = false) => {
    pageElm.innerHTML = ''
    for (const email of emailList) {
        const wrapper = document.createElement('div')
        wrapper.classList.add('email-wrapper')
        const title = document.createElement('p')
        title.textContent = email.title
        const adrs = document.createElement('p')
        adrs.classList.add('adrs-in-list')
        adrs.textContent = isInbox ? email.from : email.to
        wrapper.appendChild(title)
        wrapper.appendChild(adrs)
        pageElm.appendChild(wrapper)
    }
}

const populatePage = page => {
    switch (page) {
        case "inbox":
            if (!myEmailAddress) {
                noAddressGoToSettingsView()
            } else {
                const inboxEmails = emails.filter(em => em.to === myEmailAddress)
                populateEmailList(inboxSec, inboxEmails, true)
            }
            break;
        case "sent":
            if (!myEmailAddress) {
                noAddressGoToSettingsView()
            } else {
                const inboxEmails = emails.filter(em => em.from === myEmailAddress)
                populateEmailList(sentSec, inboxEmails)
            }
            break;
        case "settings":
            populatedEmailsSelecet(currentAddress)
            break;
        default:
            break;
    }
}

// attach listener to each link
for (const lnk of links) {
    lnk.addEventListener('click', e => {
        navigateTo(e.target.className.replace('-lnk', ''))
        for (const l of links) {
            l.classList.remove('selected-page')
        }
        e.currentTarget.classList.add('selected-page')
    })
}
inboxLnk.classList.add('selected-page')

// new email
const toggleNewEmailModal = e => {
    newEmailSec.classList.toggle("open")
    populatedEmailsSelecet(document.querySelector('.from'))
    populatedEmailsSelecet(document.querySelector('.to'))
}

newMailBtn.addEventListener('click', toggleNewEmailModal)

const sendEmail = () => {
    const from = document.querySelector('.from').value
    const to = document.querySelector('.to').value
    const title = document.querySelector('.title').value
    const body = document.querySelector('.mail-body').value
    if (from && to && title && body) {
        emails.push({ from, to, title, body })
        toggleNewEmailModal()
        refreshView()
    } else {
        alert("Missing some important data")
    }
}

sendEmailBtn.addEventListener('click', sendEmail)
currentAddress.addEventListener('change', e => myEmailAddress = e.target.value)
settingsRedirect.addEventListener('click', () => navigateTo('settings'))
populatePage('inbox')

// data work

// dom refresh
const refreshView = () => { }