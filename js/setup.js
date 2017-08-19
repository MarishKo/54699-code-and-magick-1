'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupBlock = document.querySelector('.setup');
var similarWizardsList = setupBlock.querySelector('.setup-similar-list');

var getRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

setupBlock.classList.remove('hidden');

for (var j = 0; j < 4; j++) {
  wizards.push({
    name: WIZARDS_NAMES[getRandomNumber(WIZARDS_NAMES.length)] + ' ' + WIZARDS_LASTNAMES[getRandomNumber(WIZARDS_LASTNAMES.length)],
    coatColor: COAT_COLORS[getRandomNumber(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomNumber(EYES_COLORS.length)]
  });
}

var createWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(createWizard(wizards[i]));
}

similarWizardsList.appendChild(fragment);

setupBlock.querySelector('.setup-similar').classList.remove('hidden');
