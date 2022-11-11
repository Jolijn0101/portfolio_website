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
  document.querySelector('#contact'),
];

let screenSize = window.innerWidth;
let thresholdNum;

if (screenSize >= 2000) {
  thresholdNum = 0.8;
} else if (screenSize >= 960) {
  thresholdNum = 0.5;
} else {
  thresholdNum = 0.05;
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(`#${entry.target.id}_wrapper`).style.transform = 'translate(0)';
        document.querySelector(`#${entry.target.id}_wrapper`).style.opacity = '1';
        document.querySelector(`#${entry.target.id}_link`).style.color = 'rgb(255, 193, 0)';
        document.querySelector(`#${entry.target.id}_link_mobile`).style.color = 'rgb(255, 193, 0)';
      } else {
        document.querySelector(`#${entry.target.id}_link`).style.color = 'rgb(255, 255, 255)';
        document.querySelector(`#${entry.target.id}_link_mobile`).style.color = 'rgb(255, 255, 255)';
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
      console.log(entry.target.id);
      if (entry.isIntersecting) {
        document.querySelector(`#${entry.target.id}_wrapper`).style.transform = 'translate(0)';
        document.querySelector(`#${entry.target.id}_wrapper`).style.opacity = '1';

        /*document.querySelector(`#${entry.target.id}_link`).style.color = 'rgb(255, 193, 0)';
        document.querySelector(`#${entry.target.id}_link_mobile`).style.color = 'rgb(255, 193, 0)';*/
      } /*else {
        /*document.querySelector(`#${entry.target.id}_link`).style.color = 'rgb(255, 255, 255)';
        document.querySelector(`#${entry.target.id}_link_mobile`).style.color = 'rgb(255, 255, 255)';
      }*/
    });
  },
  {
    threshold: thresholdNum,
  }
);

projects.forEach((project) => {
  projectObserver.observe(project);
});
