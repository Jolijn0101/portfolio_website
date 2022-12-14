//Over mij menu
function menuTabs1(button) {
  if (button === 'infoTab') {
    document.querySelector('.opleidingenHobbies_tab').classList.remove('menu_title_active1');
    document.querySelector('.intro_tab').classList.add('menu_title_active1');

    document.querySelector('#mobile_menu_over_mij .opleidingenHobbies_tab').classList.remove('menu_title_active1');
    document.querySelector('#mobile_menu_over_mij .intro_tab').classList.add('menu_title_active1');

    document.querySelector('#intro_content').style.display = 'inline';
    document.querySelector('#opleidingen_hobbies_content').style.display = 'none';
  } else {
    document.querySelector('.opleidingenHobbies_tab').classList.add('menu_title_active1');
    document.querySelector('.intro_tab').classList.remove('menu_title_active1');

    document.querySelector('#mobile_menu_over_mij .opleidingenHobbies_tab').classList.add('menu_title_active1');
    document.querySelector('#mobile_menu_over_mij .intro_tab').classList.remove('menu_title_active1');

    document.querySelector('#opleidingen_hobbies_content').style.display = 'flex';
    document.querySelector('#intro_content').style.display = 'none';
  }
}

//Mijn ervaring menu
function menuTabs2(button) {
  if (button === 'grafisch_list') {
    document.querySelector('#grafisch').classList.add('menu_title_active2');
    document.querySelector('#front-end').classList.remove('menu_title_active2');
    document.querySelector('#code-talen').classList.remove('menu_title_active2');

    document.querySelector('#grafisch_list').style.display = 'flex';
    document.querySelector('#front-end_list').style.display = 'none';
    document.querySelector('#code_talen_list').style.display = 'none';
  } else if (button === 'front-end_list') {
    document.querySelector('#front-end').classList.add('menu_title_active2');
    document.querySelector('#grafisch').classList.remove('menu_title_active2');
    document.querySelector('#code-talen').classList.remove('menu_title_active2');

    document.querySelector('#front-end_list').style.display = 'flex';
    document.querySelector('#grafisch_list').style.display = 'none';
    document.querySelector('#code_talen_list').style.display = 'none';
  } else {
    document.querySelector('#code-talen').classList.add('menu_title_active2');
    document.querySelector('#grafisch').classList.remove('menu_title_active2');
    document.querySelector('#front-end').classList.remove('menu_title_active2');

    document.querySelector('#code_talen_list').style.display = 'flex';
    document.querySelector('#grafisch_list').style.display = 'none';
    document.querySelector('#front-end_list').style.display = 'none';
  }
}

// mobile menu
function openMobileMenu() {
  document.querySelector('#mobile_menu').style.display = 'block';
}

function closeMobileMenu() {
  document.querySelector('#mobile_menu').style.display = 'none';
}

// page animaties
const sections = [
  document.querySelector('#homepage'),
  document.querySelector('#over_mij'),
  document.querySelector('#mijn_ervaring'),
  document.querySelector('#projecten'),
  document.querySelector('#contact'),
];

let screenSize = window.innerWidth;
let thresholdNum;

if (screenSize >= 2000) {
  thresholdNum = 0.8;
} else if (screenSize >= 960) {
  thresholdNum = 0.3;
} else {
  thresholdNum = 0.05;
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(`#${entry.target.id}_link`).style.color = 'rgb(255, 193, 0)';
        document.querySelector(`#${entry.target.id}_link_mobile`).style.color = 'rgb(255, 193, 0)';
      } else {
        document.querySelector(`#${entry.target.id}_link`).style.color = 'rgb(255, 255, 255)';
        document.querySelector(`#${entry.target.id}_link_mobile`).style.color = 'rgb(255, 255, 255)';
      }
      if ((entry.isIntersecting && entry.target.id !== 'projecten') || (entry.isIntersecting && entry.target.id !== 'homepage')) {
        document.querySelector(`#${entry.target.id}_wrapper`).style.transform = 'translate(0)';
        document.querySelector(`#${entry.target.id}_wrapper`).style.opacity = '1';
      }
    });
  },
  {
    threshold: thresholdNum,
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

const projects = [
  document.querySelector('#projecten_intro'),
  document.querySelector('#calculator'),
  document.querySelector('#password_generator'),
  document.querySelector('#wanderlust'),
  document.querySelector('#jammming'),
];

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(`#${entry.target.id}_wrapper`).style.transform = 'translate(0)';
        document.querySelector(`#${entry.target.id}_wrapper`).style.opacity = '1';
      }
    });
  },
  {
    threshold: thresholdNum,
  }
);

projects.forEach((project) => {
  projectObserver.observe(project);
});

const homepageElements = [document.querySelector('#homepage')];
let toggleH1Animatie;

const homepageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // h3 animatie
        document.querySelector(`#${entry.target.id} h3`).style.transform = 'translate(0)';
        document.querySelector(`#${entry.target.id} h3`).style.opacity = '1';

        // h1 animatie
        setTimeout(h1Animatie, 2000);
        function h1Animatie() {
          if (toggleH1Animatie !== true) {
            toggleH1Animatie = true;
            const text = document.querySelector(`#${entry.target.id} h1`);
            const strText = text.textContent;
            const splitText = strText.split('');
            text.textContent = '';
            document.querySelector(`#blokje`).style.display = 'inline';
            document.querySelector(`#${entry.target.id} h1`).style.display = 'inline';

            for (let i = 0; i < splitText.length; i++) {
              text.innerHTML += '<span>' + splitText[i] + '</span>';
            }

            let char = 0;
            let timer = setInterval(onTick, 200);

            function onTick() {
              const span = text.querySelectorAll('span')[char];
              span.style.display = 'inline';
              span.style.opacity = '1';
              char++;
              if (char === splitText.length) {
                console.log('complete');
                complete();
                return;
              }
            }

            function complete() {
              clearInterval(timer);
              timer = null;
            }
          }
        }

        // h2 animatie
        setTimeout(h2Animatie, 5000);
        function h2Animatie() {
          document.querySelector(`#${entry.target.id} h2`).style.transform = 'translate(0)';
          document.querySelector(`#${entry.target.id} h2`).style.opacity = '1';
        }
      }
    });
  },
  {
    threshold: thresholdNum,
  }
);

homepageElements.forEach((homepageElement) => {
  homepageObserver.observe(homepageElement);
});
