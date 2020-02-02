import createPicture from '../../../Picture';


export default function (slide) {
    const slideControllerElem = document.createElement( 'div' );
    const userPicture = createPicture( slide.img_src, '/assets/user_icon.png', 'profile picture feedback', ['feedbackUserImg', ] )
};