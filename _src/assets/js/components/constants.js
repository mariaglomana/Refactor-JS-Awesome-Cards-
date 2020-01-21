'use strict';

const designContainer = document.querySelector('#designContainer');
const fillInContainer = document.querySelector('#fillInContainer');
const shareContainer = document.querySelector('#shareContainer');
const arrowDesign = document.querySelector('#arrowDesign');
const arrowFillIn = document.querySelector('#arrowFillIn');
const arrowShare = document.querySelector('#arrowShare');
const design = document.querySelector('#design');
const fillIn = document.querySelector('#fillIn');
const share = document.querySelector('#share');



let paletteChosen = '';


let fontChosen = '';

const inputElements = document.querySelectorAll('.input');

const createCardButton = document.querySelector('#createCardButton');
const errorMessage = document.querySelector('.error-message');
const twitterContainer = document.querySelector('#twitterContainer');
const twitterBtn = document.querySelector('#twitterBtn');
const twitterMessage = document.querySelector('#twitterMessage');
const linkedInBtn = document.querySelector('#linkedInBtn');


const phoneIcon = document.querySelector('#phone-icon');
const emailIcon = document.querySelector('#email-icon');
const linkedinIcon = document.querySelector('#linkedin-icon');
const githubIcon = document.querySelector('#github-icon');
const phoneItem = document.querySelector('.item_phone');
const emailItem = document.querySelector('.item_email');
const linkedinItem = document.querySelector('.item_linkedin');
const githubItem = document.querySelector('.item_github');

module.exports = {
    designContainer: '#designContainer',
    fillInContainer: '#fillInContainer',
    shareContainer: '#shareContainer',
    arrowDesign: '#arrowDesign',
    arrowFillIn: '#arrowFillIn',
    arrowShare: '#arrowShare',
    design: '#design',
    fillIn: '#fillIn',
    share: '#share',
    palette1: '#fieldset__design--palette-1',
    palette2: '#fieldset__design--palette-2',
    palette3: '#fieldset__design--palette-3',
    palette4: '#fieldset__design--palette-4',
    font1: '#fieldset__design--font-1',
    font2: '#fieldset__design--font-2',
    font3: '#fieldset__design--font-3',
    inputElements: '.input',
    userName: '#name',
    userJob: '#job-title',
    userEmail: '#email',
    userTel: '#tel',
    userLinkedin: '#linkedin',
    userGithub: '#github',
    createCardButton: '#createCardButton',
    errorMessage: '.error-message',
    twitterContainer: '#twitterContainer',
    twitterBtn: '#twitterBtn',
    twitterMessage: '#twitterMessage',
    linkedInBtn: '#linkedInBtn',
    previewCardHead: '.preview_card-head',
    previewCardName: '.preview_card-name',
    previewCardJob: '.preview_card-job',
    phoneIcon: '#phone-icon',
    emailIcon: '#email-icon',
    linkedinIcon: '#linkedin-icon',
    githubIcon: '#github-icon',
    phoneItem: '.item_phone',
    emailItem: '.item_email',
    linkedinItem: '.item_linkedin',
    githubItem: '.item_github',
    iconItems: '#preview_card-icons',
    iconButtons: '.item_btn',
};
