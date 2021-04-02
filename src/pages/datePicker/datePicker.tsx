import React from 'react';
import DatePicker from 'react-mobile-datepicker';

export default class datePicker extends React.Component {
    state = {
        time: new Date(),
        isOpen: false,
    };

    handleClick = () => {
        this.setState({ isOpen: true });
    };

    handleCancel = () => {
        this.setState({ isOpen: false });
    };

    handleSelect = (time) => {
        this.setState({ time, isOpen: false });
    };

    render() {
        return (
            <div>
                <DatePicker
                    theme={'ios'}
                    value={this.state.time}
                    isOpen={true}
                    // onSelect={this.handleSelect}
                    // onCancel={this.handleCancel}
                />
            </div>
        );
    }
}
