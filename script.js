let stories = [
    {
        'story-pic': 'img/user02_active.png',
        'story-name': 'Max_Mustermann'
    },
    {
        'story-pic': 'img/user03_active.png',
        'story-name': 'Kevin_P'
    },
    {
        'story-pic': 'img/user04_active.png',
        'story-name': 'Isabelle'
    },
    {
        'story-pic': 'img/user05_active.png',
        'story-name': 'Lisa_und_Stefan'
    },
    {
        'story-pic': 'img/user06_active.png',
        'story-name': 'Ramon578'
    },
    {
        'story-pic': 'img/user07_active.png',
        'story-name': 'Marie_Luise'
    },
    {
        'story-pic': 'img/user08_active.png',
        'story-name': 'Developer_Akademie'
    }
];

let posts = [
    {
        'user-pic': 'img/user02_active.png',
        'user-name': 'Max_Mustermann',
        'user-location' : 'Island',
        'posted-pic': 'img/post01.jpg',
        'amount-likes' : '76',
        'description': '<b>Max_Mustermann</b> Das Wasser war übrigens warm, wegen der vulkanischen Aktivitäten.',
        'hashtags': '#iceland #iwanttomovehere #naturalheat',
        'amount-comments': '2',
        'comments': ['<b>Ronja_Ha</b> Wow, das sieht so schön aus.', '<b>Merel</b> Wo ist das genau?']
    },
    {
        'user-pic': 'img/user03_active.png',
        'user-name': 'Kevin_P',
        'user-location' : 'Venedig',
        'posted-pic': 'img/post02.jpg',
        'amount-likes' : '397',
        'description': '<b>Kevin_P</b> Seid ihr schonmal in einer Gondola durch Venedig geschippert?',
        'hashtags': '#venice #travellife #europe',
        'amount-comments': '3',
        'comments': ['<b>Hasan</b> Was kostet denn so eine Fahrt?', '<b>Olaf</b> Komm mal lieber wieder nach Hause.', '<b>Annika</b> Wow! Super schön!']
    },
    {
        'user-pic': 'img/user04_active.png',
        'user-name': 'Isabelle',
        'user-location' : 'Irgendwo im Nirgendwo',
        'posted-pic': 'img/post03.jpg',
        'amount-likes' : '7',
        'description': '<b>Isabelle</b> Wer errät wohin ich als nächstes reise?',
        'hashtags': '#lufthansa #a320neo #aviation',
        'amount-comments': '1',
        'comments': ['<b>Lunia</b> In die Schweiz?']
    },
    {
        'user-pic': 'img/user05_active.png',
        'user-name': 'Lisa_und_Stefan',
        'user-location' : 'Indonesien',
        'posted-pic': 'img/post04.jpg',
        'amount-likes' : '11.225',
        'description': '<b>Lisa_und_Stefan</b> Hier sieht es einfach aus wie auf den Malediven.',
        'hashtags': '#indonesia #travel #bluediamonds',
        'amount-comments': '2',
        'comments': ['<b>Marek</b> Ach ihr seid in Indonesien? Viel Spaß!', '<b>Daniel</b> Würde gerne tauschen.']
    },
    {
        'user-pic': 'img/user06_active.png',
        'user-name': 'Ramon578',
        'user-location' : 'Chiemsee',
        'posted-pic': 'img/post05.jpg',
        'amount-likes' : '15',
        'description': '<b>Ramon578</b> Der Chiemsee hat auch seine schönen Seiten.',
        'hashtags': '#chiemsee',
        'amount-comments': '2',
        'comments': ['<b>Tamara</b> Was machst du denn am Chiemsee?', '<b>Lukas</b> Wow!']
    },
    {
        'user-pic': 'img/user07_active.png',
        'user-name': 'Marie_Luise',
        'user-location' : 'Cinque Terre',
        'posted-pic': 'img/post06.jpg',
        'amount-likes' : '297',
        'description': '<b>Marie_Luise</b> Manarola ist einfach der schönste Ort der Cinque Terre.',
        'hashtags': '#italy #cinqueterre #amore',
        'amount-comments': '1',
        'comments': ['<b>Bibi1015</b> Hey @Marie: Da fahren wir nächstes Mal hin.']
    },
    {
        'user-pic': 'img/user08_active.png',
        'user-name': 'Developer_Akademie',
        'user-location': 'München',
        'posted-pic': 'img/post07.jpg',
        'amount-likes' : '111',
        'description': '<b>Developer_Akademie</b> Du willst Programmieren lernen? Dann bist du bei der Developer Akademie genau richtig.',
        'hashtags': '#lerneprogrammieren #developer #dukannstdasauch',
        'amount-comments': '2',
        'comments': ['<b>Gloria</b> Bietet ihr nur Frontend-Kurse oder auch Backend?.', '<b>Marcel</b> Die machen beides.']
    },
]

function showStories() {
    document.getElementById('new-stories').innerHTML = '';

    for (let i = 0; i < stories.length; i++) {
        const story = stories[i];
        
        document.getElementById('new-stories').innerHTML += `
        <div class="story-user">
        <img src="${story['story-pic']}" alt="">
        <span>${story['story-name']}</span>
        </div>
    `
    }
    showPosts();
}

function showPosts() {
    document.getElementById('post').innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        
        document.getElementById('post').innerHTML += `
        <div class="post-top">
            <div class="post-top-left">
                <img src="${post['user-pic']}" alt="">
                <div class="post-location">
                    <h5>${post['user-name']}</h5>
                    <p>${post['user-location']}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis fa-xl"></i>
            </div>
            <div class="post-pic">
            <img src="${post['posted-pic']}" alt="">
            </div>
        </div>
        <div class="post-bottom">
            <div class="post-bottom-symbols">
                <div class="post-bottom-symbols-left">
                    <i class="fa-regular fa-heart fa-xl"></i>
                    <i class="fa-regular fa-comment fa-xl"></i>
                    <i class="fa-regular fa-envelope fa-xl"></i>
                </div>
                <div class="post-bottom-symbol-right">
                    <i class="fa-regular fa-bookmark fa-xl"></i>
                </div>
            </div>
            <div class="likes-and-description">
                <h5>Gefällt ${post['amount-likes']} Mal</h5>
                <p><b>${post['user-name']}</b> Hier ist es einfach wunderschön.</p>
                <p>${post['hashtags']}</p>
                <p>${post['amount-comments']} Kommentar(e) anzeigen</p>
            </div>
        </div>
        <div class="comment">
            <textarea name="commentsection" id="commentsection" cols="30" rows="1" placeholder="Kommentieren..."></textarea>
            <button class="comment-button">Posten</button>
        </div>
    `
    }
}