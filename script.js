let currentUser = 'Max_Mustermann';

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
        'user-location': 'Island',
        'posted-pic': 'img/post01.jpg',
        'amount-likes': '76',
        'description': 'Eine heiße Quelle mitten in den Bergen.',
        'hashtags': '#iceland #wannamovehere #naturalheat',
        'amount-comments': '2',
        'followers': ['<b>Ronja_Ha</b>', '<b>Merel</b>'],
        'comments': ['Wow, das sieht so schön aus.', 'Wo ist das genau?'],
        'new-comment': [],
        'guest': '<i class="fa-regular fa-face-smile"></i>',
        'isLiked': false
    },
    {
        'user-pic': 'img/user03_active.png',
        'user-name': 'Kevin_P',
        'user-location': 'Venedig',
        'posted-pic': 'img/post02.jpg',
        'amount-likes': '397',
        'description': 'Seid ihr schonmal in einer Gondola durch Venedig geschippert?',
        'hashtags': '#venice #travellife #europe',
        'amount-comments': '3',
        'followers': ['<b>Hasan</b>', '<b>Olaf</b>', '<b>Annika</b>'],
        'comments': ['Was kostet denn so eine Fahrt?', 'Komm mal lieber wieder nach Hause.', 'Wow! Super schön!'],
        'new-comment': [],
        'isLiked': false
    },
    {
        'user-pic': 'img/user04_active.png',
        'user-name': 'Isabelle',
        'user-location': 'Irgendwo im Nirgendwo',
        'posted-pic': 'img/post03.jpg',
        'amount-likes': '7',
        'description': 'Wer errät wohin ich als nächstes reise?',
        'hashtags': '#lufthansa #a320neo #aviation',
        'amount-comments': '1',
        'followers': ['<b>Lunia</b>'],
        'comments': ['Vielleicht in die Schweiz?'],
        'new-comment': [],
        'isLiked': false
    },
    {
        'user-pic': 'img/user05_active.png',
        'user-name': 'Lisa_und_Stefan',
        'user-location': 'Indonesien',
        'posted-pic': 'img/post04.jpg',
        'amount-likes': '11225',
        'description': 'Hier sieht es einfach aus wie auf den Malediven.',
        'hashtags': '#indonesia #travel #bluediamonds',
        'amount-comments': '2',
        'followers': ['<b>Marek</b>', '<b>Daniel</b>'],
        'comments': ['Ach ihr seid in Indonesien? Viel Spaß!', 'Würde gerne tauschen mit euch.'],
        'new-comment': [],
        'isLiked': false
    },
    {
        'user-pic': 'img/user06_active.png',
        'user-name': 'Ramon578',
        'user-location': 'Chiemsee',
        'posted-pic': 'img/post05.jpg',
        'amount-likes': '15',
        'description': 'Der Chiemsee hat auch seine schönen Seiten.',
        'hashtags': '#chiemsee',
        'amount-comments': '2',
        'followers': ['<b>Tamara</b>', '<b>Lukas</b>'],
        'comments': ['Was machst du denn am Chiemsee?', 'Wow!'],
        'new-comment': [],
        'isLiked': false
    },
    {
        'user-pic': 'img/user07_active.png',
        'user-name': 'Marie_Luise',
        'user-location': 'Cinque Terre',
        'posted-pic': 'img/post06.jpg',
        'amount-likes': '297',
        'description': 'Manarola ist einfach der schönste Ort der Cinque Terre.',
        'hashtags': '#italy #cinqueterre #amore',
        'amount-comments': '1',
        'followers': ['<b>Bibi1015</b> '],
        'comments': ['Hey @Marie: Da fahren wir nächstes Mal hin.'],
        'new-comment': [],
        'isLiked': false
    },
    {
        'user-pic': 'img/user08_active.png',
        'user-name': 'Developer_Akademie',
        'user-location': 'München',
        'posted-pic': 'img/post07.jpg',
        'amount-likes': '111',
        'description': 'Du willst Programmieren lernen? Dann bist du bei der Developer Akademie genau richtig.',
        'hashtags': '#lerneprogrammieren #developer #dukannstdasauch',
        'amount-comments': '2',
        'followers': ['<b>Gloria</b>', '<b>Marcel</b>'],
        'comments': ['Bietet ihr nur Frontend-Kurse oder auch Backend?.', 'Du kannst dort beides machen. Also Fullstack...'],
        'new-comment': [],
        'isLiked': false
    },
]

loadAsText();

function showStories() {
    document.getElementById('new-stories').innerHTML = '';

    for (let i = 0; i < stories.length; i++) {
        const story = stories[i];
        document.getElementById('new-stories').innerHTML += generateStoriesHTML(story);
    }
    showPosts();
}

function showPosts() {
    document.getElementById('post').innerHTML = '';

    for (let j = 0; j < posts.length; j++) {
        const post = posts[j];
        document.getElementById('post').innerHTML += generatePostHTML(post, j);
    }
}

function generateComments(j) {
    let htmlText = "";

    for (let k = 0; k < posts[j]['followers'].length; k++) {
        let follower = posts[j]['followers'][k];
        let comment = posts[j]['comments'][k];
        htmlText += `<p><b>${follower}:</b> ${comment}</p>`;
    }
    return htmlText;
}

// Variablen werden ab hier in den Funktionen in (``) übergeben, da sie in HTML-Text eingefügt werden.
// Variablen werden mit ${} übergeben, da sie als Elemente in einer For-Schleife mehrfach erstellt werden.
// Variablen werden in den Funktionen als simple Buchstaben übergeben, weil ???    

function addComment(j) {
    let input = document.getElementById(`commentsection${j}`);
    let newComment = input.value;

    // checkt ob die Textarea leer ist
        if (newComment.length > 0) {
            posts[j]['new-comment'].push(newComment);
            saveAsText(j);
            renderNewComments(j);
        } else {
            alert('Bitte gib etwas mehr Text ein.')
        }
    input.value = ''; // leert die Textarea nach der Texteingabe
}

function renderNewComments(j) {
    let content = document.getElementById(`new-comment-section${j}`);
    content.innerHTML = '';
    for (let l = 0; l < posts[j]['new-comment'].length; l++) {
       content.innerHTML += `
        <div class="new-comment">
                <p><b>${currentUser}:</b> ${posts[j]['new-comment'][l]}</p>
                <div class="trash" onclick="deleteComment(${j},${l})"><i class="fa-regular fa-trash-can"></i></div>
        </div>`; 
    }
}

function deleteComment(j, l) {
    posts[j]['new-comment'].splice(l, 1);
    saveAsText(j);
    renderNewComments(j);
}

function toggleBookmark(j) {
    let element = document.getElementById(`bookmark${j}`);
    element.classList.toggle("bookmark-green");
    element.classList.toggle("fa-solid");
}

function getLikeState(j) {
    if (posts[j]['isLiked'] === true) {
        return `fa-solid heart-red`;
    } else {
        return `fa-regular heart-black`;
    }
}

function toggleHeart(j) {
    if (posts[j]['isLiked'] === false) {
        posts[j]['amount-likes']++;
        document.getElementById(`likes${j}`).innerHTML = '';
        document.getElementById(`likes${j}`).innerHTML = `<span>Gef&auml;llt ${posts[j]['amount-likes']} Mal</span>`;
        posts[j]['isLiked'] = true;
    } else {
        posts[j]['amount-likes']--;
        document.getElementById(`likes${j}`).innerHTML = '';
        document.getElementById(`likes${j}`).innerHTML = `<span>Gef&auml;llt ${posts[j]['amount-likes']} Mal</span>`;
        posts[j]['isLiked'] = false;
    }
    showPosts(); // musste noch hinzugefügt werden, damit das Herz sich färbt (neu gerenderd)
}

function saveAsText(j) {
    let commentsAsText = JSON.stringify(posts[j]['new-comment']);
    localStorage.setItem(`Post[${j}]`, commentsAsText);
}

function loadAsText(j) {
    let commentsAsText = localStorage.getItem(`Post[${j}]`);

    if (commentsAsText) {
        posts[j]['new-comment'] = JSON.parse(commentsAsText);
    }
}

//templates

function generateStoriesHTML(story) {
    return `
    <div class="story-user">
    <img src="${story['story-pic']}" alt="">
    <span>${story['story-name']}</span>
    </div>
`
}

function generatePostHTML (post, j) {
    return  `
    <div class="post-div" id="post-div">
        <div class="post-top">
            <div class="post-top-left">
                    <img src="${post['user-pic']}" alt="">
                    <div class="post-location">
                        <h5>${post['user-name']}</h5>
                        <p>${post['user-location']}</p>
                    </div>
            </div>
                    <div class="post-top-right">
                        <i class="fa-solid fa-ellipsis fa-xl"></i>
                    </div>
        </div>
        <div class="post-pic">
                <img src="${post['posted-pic']}" alt="">
        </div>
        <div class="post-bottom">
            <div class="post-bottom-symbols">
                    <div class="post-bottom-symbols-left">
                        <i class="fa-heart fa-xl ${getLikeState(j)}" id="heart${j}" onclick="toggleHeart(${j})"></i>
                        <i class="fa-regular fa-comment fa-xl"></i>
                        <i class="fa-regular fa-envelope fa-xl"></i>
                    </div>
                    <div class="post-bottom-symbol-right">
                        <i class="fa-regular fa-bookmark fa-xl bookmark-black" id="bookmark${j}" onclick="toggleBookmark(${j})"></i>
                    </div>
            </div>
            <div class="likes-and-description">
                        <div class="likes" id="likes${j}">
                            <span>Gef&auml;llt ${post['amount-likes']} Mal</span>
                        </div>
                        <div>    
                            <p><b>${post['user-name']}</b> ${post['description']}</p>
                            <p class="hashtags">${post['hashtags']}</p>
                            <p>${post['amount-comments']} Kommentar(e) anzeigen</p>
                        </div>
                    </div>
                    <div class="posted-comments" id="posted-comments${j}"></div>
                    ${generateComments(j)}
                    <div class="new-comments" id="new-comment-section${j}"></div>
            </div>
            <div class="comment">
                <textarea class="commentsection" id="commentsection${j}" cols="30" rows="1" placeholder="Kommentieren..."></textarea>
                <button class="comment-button" onclick="addComment(${j})">Posten</button>
            </div>
        </div>
    </div>
    `
}

