import '../index.css';
// import './components.css';
import React from 'react';
class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="my-20 grid grid-cols-5">
                <div className="pr-5 text-right text-xl">
                    <span className="text-primary lato-regular text-right">{this.props.sectionTitle}</span>
                </div>
                <div className="col-span-4 pl-7">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Section;
