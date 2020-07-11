import React from 'react';

class CountDown extends React.Component<{}, { seconds: number }> {
    interval: NodeJS.Timeout | undefined;
    seconds: number | any;
    constructor(props: any) {
        super(props);
        this.state = { seconds: 20 };
    } // ctr
    tick() {
        this.setState(state => ({
           seconds: state.seconds - 1
        }));
    } // tick
    renderTimer() {
        let { seconds } = this.state;
        if (seconds > 0) {
            this.tick();
        } else {
            seconds = 0;
        }
    }

    componentDidMount() {
        this.interval = setInterval(() =>
           this.renderTimer(), 1000);
    }

    componentWillUnmount() {
        clearInterval();
    }

    render() {
        return (
            <div id="clock">
                <p>Time until new story: {this.state.seconds}</p>
            </div>
        );
    }
} // class

export default CountDown;
