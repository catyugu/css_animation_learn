import './AnimatedSubmitButton.css';

export default function AnimatedSubmitButton() {
    function loadSuccess(){
        document.querySelector('.submit-btn').classList.remove('is-loading');
        document.querySelector('.submit-btn').classList.add('is-success');
    }
    function handleClick(){
        document.querySelector('.submit-btn').classList.add('is-loading');
        setTimeout(loadSuccess, 2000);
    }

    return (
        <div className="animated-submit-button-root-container">
            <button className="submit-btn"
                onClick={
                    handleClick
                }
            >
                <span className="btn-text">Submit</span>

                <svg className="loader" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0" cy="0" r="50" />
                </svg>

                <svg className="checkmark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 50 L45 70 L75 30" />
                </svg>
            </button>
        </div>
    );
}