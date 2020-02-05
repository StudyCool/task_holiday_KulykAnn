import './styles.scss';
import createPicture from '../../../Picture';
import link from '../../../ContactLink/index';

export default function(user) {
  const cardContainer = document.createElement('div');
  const userPicture = createPicture(user.profilePicture,
      '/assets/images/user_icon.png', 'profile picture',
      ['userImg', 'img-responsive']);
  cardContainer.appendChild(userPicture);

  cardContainer.appendChild(createNameElem(user));

  cardContainer.appendChild(createRoleElem(user));

  cardContainer.appendChild(createDescriptionElem(user));

  //cardContainer.appendChild(createSocialNetworksLinks(user));

  return cardContainer;
}

function createNameElem(user) {
  const employeeNameHeading = document.createElement('h4');
  employeeNameHeading.classList.add('fullName');
  employeeNameHeading.innerText = user.name;
  return employeeNameHeading;
}

function createRoleElem(user) {
  const employeeRoleHeading = document.createElement('h5');
  employeeRoleHeading.classList.add('role');
  employeeRoleHeading.innerText = user.role;
  return employeeRoleHeading;
}

function createDescriptionElem(user) {
  const employeeDescriptionParagraph = document.createElement('p');
  employeeDescriptionParagraph.classList.add('description');
  employeeDescriptionParagraph.innerText = user.description;
  return employeeDescriptionParagraph;
}


/*
function createSocialNetworksLinks(user, link, arrayOfLinks = []) {
arrayOfLinks = user.contacts;

}*/
