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
        'description': 'Eine heiße Quelle mitten in den Bergen.',
        'hashtags': '#iceland #wannamovehere #naturalheat',
        'amount-comments': '2',
        'followers': ['<b>Ronja_Ha</b>', '<b>Merel</b>'],
        'comments': ['Wow, das sieht so schön aus.', 'Wo ist das genau?'],
        'new-comment': [],
        'guest': '<i class="fa-regular fa-face-smile"></i>'
    },
    {
        'user-pic': 'img/user03_active.png',
        'user-name': 'Kevin_P',
        'user-location' : 'Venedig',
        'posted-pic': 'img/post02.jpg',
        'amount-likes' : '397',
        'description': 'Seid ihr schonmal in einer Gondola durch Venedig geschippert?',
        'hashtags': '#venice #travellife #europe',
        'amount-comments': '3',
        'followers': ['<b>Hasan</b> ', '<b>Olaf</b>', '<b>Annika</b>'],
        'comments': ['Was kostet denn so eine Fahrt?', 'Komm mal lieber wieder nach Hause.', 'Wow! Super schön!'],
        'new-comment': []
    },
    {
        'user-pic': 'img/user04_active.png',
        'user-name': 'Isabelle',
        'user-location' : 'Irgendwo im Nirgendwo',
        'posted-pic': 'img/post03.jpg',
        'amount-likes' : '7',
        'description': 'Wer errät wohin ich als nächstes reise?',
        'hashtags': '#lufthansa #a320neo #aviation',
        'amount-comments': '1',
        'followers': ['<b>Lunia</b>'],
        'comments': ['Vielleicht in die Schweiz?'],
        'new-comment': []
    },
    {
        'user-pic': 'img/user05_active.png',
        'user-name': 'Lisa_und_Stefan',
        'user-location' : 'Indonesien',
        'posted-pic': 'img/post04.jpg',
        'amount-likes' : '11.225',
        'description': 'Hier sieht es einfach aus wie auf den Malediven.',
        'hashtags': '#indonesia #travel #bluediamonds',
        'amount-comments': '2',
        'followers': ['<b>Marek</b>', '<b>Daniel</b>'],
        'comments': ['Ach ihr seid in Indonesien? Viel Spaß!', 'Würde gerne tauschen mit euch.'],
        'new-comment': []
    },
    {
        'user-pic': 'img/user06_active.png',
        'user-name': 'Ramon578',
        'user-location' : 'Chiemsee',
        'posted-pic': 'img/post05.jpg',
        'amount-likes' : '15',
        'description': 'Der Chiemsee hat auch seine schönen Seiten.',
        'hashtags': '#chiemsee',
        'amount-comments': '2',
        'followers': ['<b>Tamara</b>', '<b>Lukas</b>'],
        'comments': ['Was machst du denn am Chiemsee?', 'Wow!'],
        'new-comment': []
    },
    {
        'user-pic': 'img/user07_active.png',
        'user-name': 'Marie_Luise',
        'user-location' : 'Cinque Terre',
        'posted-pic': 'img/post06.jpg',
        'amount-likes' : '297',
        'description': 'Manarola ist einfach der schönste Ort der Cinque Terre.',
        'hashtags': '#italy #cinqueterre #amore',
        'amount-comments': '1',
        'followers': ['<b>Bibi1015</b> '],
        'comments': ['Hey @Marie: Da fahren wir nächstes Mal hin.'],
        'new-comment': []
    },
    {
        'user-pic': 'img/user08_active.png',
        'user-name': 'Developer_Akademie',
        'user-location': 'München',
        'posted-pic': 'img/post07.jpg',
        'amount-likes' : '111',
        'description': 'Du willst Programmieren lernen? Dann bist du bei der Developer Akademie genau richtig.',
        'hashtags': '#lerneprogrammieren #developer #dukannstdasauch',
        'amount-comments': '2',
        'followers': ['<b>Gloria</b>', '<b>Marcel</b>'],
        'comments': ['Bietet ihr nur Frontend-Kurse oder auch Backend?.', 'Du kannst dort beides machen. Also Fullstack...'],
        'new-comment': []
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

    for (let j = 0; j < posts.length; j++) {
        const post = posts[j];
        
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
                   <p id="heart${j}"><i class="fa-regular fa-heart fa-xl"></i></p>
                    <i class="fa-regular fa-comment fa-xl"></i>
                    <i class="fa-regular fa-envelope fa-xl"></i>
                </div>
                <div class="post-bottom-symbol-right">
                    <p><i class="fa-regular fa-bookmark fa-xl"></i></p>
                </div>
            </div>
            <div class="likes-and-description">
            <div class="amount-likes" id="amount-likes">
                <span>GefÃ¤llt ${post['amount-likes']} Mal</span>
            </div>
                <p><b>${post['user-name']}</b> ${post['description']}</p>
                <p class="hashtags">${post['hashtags']}</p>
                <p>${post['amount-comments']} Kommentar(e) anzeigen</p>
            </div>
            <div class="posted-comments" id="posted-comments${j}">
            </div>
            <div class="new-comments" id="new-comment-section${j}"></div>
        </div>
        <div class="comment">
            <textarea class="commentsection" id="commentsection${j}" cols="30" rows="1" placeholder="Kommentieren..."></textarea>
            <button class="comment-button" onclick="addComment(${j})">Posten</button>
        </div>
    `
    showComments(j);
    }
}

function addComment(j) {
    let content = document.getElementById(`new-comment-section${j}`);

    let input = document.getElementById(`commentsection${j}`);
    let newComment = input.value;
    let userName = 'Gast'
    posts[j]['new-comment'].push(newComment);
    posts[j]['new-comment'].push(userName);

    content.innerHTML += `<div><b>${userName}:</b> ${newComment}</div>`;
}

function showComments(j) {
    document.getElementById(`posted-comments${j}`).innerHTML = '';
    let content = document.getElementById(`posted-comments${j}`);
    content.innerHTML = '';

    for (let k = 0; k < posts[j]['followers'].length; k++) {
        let follower = posts[j]['followers'][k];
        let comment = posts[j]['comments'][k];
        content.innerHTML += `<p><b>${follower}:</b> ${comment}</p>`;
    }
}

function fillHeart(j) {
    document.getElementById(`heart${j}`).classList.add('d-none');
    document.getElementById(`blank-heart${j}`).classList.add('d-flex');

    increaseAmount(j);
}

function increaseAmount(j) {
    posts[j]['amount-likes']++;
    let amountArea = document.getElementById(`amount-likes-comm${j}`);
    amountArea.innerHTML = '';
    amountArea.innerHTML = `<span>Gefällt ${posts[j]['amount-likes']} Mal</span>`;
}

function decreasAmount(j) {
    posts[j]['amount-likes']--;
    let amountArea = document.getElementById(`amount-likes${j}`);
    amountArea.innerHTML = '';
    amountArea.innerHTML = `<span>Gefällt ${posts[j]['amount-likes']} Mal</span>`;
}

// function decreaseAmount(i) {
//     if (amount-likes[i] > 1) {
//         amount-likes[i]--;
//     } else {
//         basketDishes.splice(i, 1);
//         basketPrices.splice(i, 1);
//         basketAmounts.splice(i, 1);
//     }
// }

/* document.getElementById('new-stories').innerHTML = '';

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
showComments();
} */


/* function addComment(j) {
    let content = document.getElementById(`new-comment-section${j}`)
    content.innerHTML = '';

    let input = document.getElementById(`commentsection${j}`);
    posts[j]['new-comment'].push(input.value);

    let post = posts[j];

    if (post['new-comment'].length > 0) {
        for (let k = 0; k < post['new-comment'].length; k++) {
            let comment = post['new-comment'][k];
            content.innerHTML += `<div>${comment}</div>`;
        }
    }
    showPosts();
} */

/*  let guest = document.getElementById(`guest${j}`);
    let newComment = document.getElementById(`new-comment-section${j}`).value;
    let commentHTML = document.getElementById(`new-comment${j}`); */


    /* function createList(items) {
  let list = '';
  for (let i = 0; i < items.length; i++) {
    list += `<div>${items[i]}</div>`;
  }
  return list;
}

<div class="posted-comments" id="posted-comments">
  <p>Followers:</p>
  ${createList(post['followers'])}
  <p>Comments:</p>
  ${createList(post['comments'])}
</div>
*/

/*
for (let i = 0; i < posts.length; i++) {
  let post = posts[i];
  let content = document.getElementById(`new-comment-section${i}`);
  content.innerHTML = "";

  for (let j = 0; j < post['followers'].length; j++) {
    let follower = post['followers'][j];
    let comment = post['comments'][j];
    content.innerHTML += `<div><b>${follower}</b>: ${comment}</div>`;
  }
}
*/