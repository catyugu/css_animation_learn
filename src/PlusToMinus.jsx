import './PlusToMinus.css';

export default function PlusToMinus() {

    function handleClick(){
        document.querySelector('.plus-to-minus-container').classList.toggle('is-active');
    }

    return (
        <div className="plus-to-minus-root-container">
            <div className="plus-to-minus-container"
                onClick={handleClick}
            >
                <div className="plus-to-minus-horizontal">
                </div>
                <div className="plus-to-minus-vertical">
                </div>
            </div>
        </div>
    )
}