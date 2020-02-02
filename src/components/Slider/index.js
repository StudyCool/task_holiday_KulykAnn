import createSlide from "../Slider/components/Slide";


export default function (users) {
    const listContainer = document.createElement( 'div' );

    users.forEach( user => {
        listContainer.appendChild( createUserCard( user ) );
    } );
    return listContainer;
}