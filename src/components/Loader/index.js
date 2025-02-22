import { h, Component } from 'preact';

class Loader extends Component {
    render() {
        return (
            <img src={'/public/loaderxD.gif'} style={{ zIndex: 999 }} className="loader" alt="loader" />
        );
    }
}

export default Loader;
