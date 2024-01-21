    import React from "react";

    import './style.css'

    import Animals from "../Animals/Animals";

    class Table extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                greenIndexes: [],
                availableIndexes: [],
            };
        }

        componentDidMount() {
            if (Array.isArray(this.props.list) && this.props.list.length > 0) {
                const availableIndexes = Array.from({ length: this.props.list.length }, (_, index) => index);
                this.setState({ availableIndexes });

                this.intervalId = setInterval(() => {
                    this.setState(prevState => {
                        if (prevState.greenIndexes.length === this.props.list.length) {
                            clearInterval(this.intervalId);
                            return prevState;
                        }
                        const randomIndex = Math.floor(Math.random() * this.state.availableIndexes.length);
                        const chosenIndex = this.state.availableIndexes[randomIndex];
                        return {
                            greenIndexes: [...prevState.greenIndexes, chosenIndex],
                            availableIndexes: prevState.availableIndexes.filter(index => index !== chosenIndex),
                        };
                    });
                }, 2000);
            }
        }

        componentWillUnmount() {
            clearInterval(this.intervalId);
        }

        shouldAddBorder() {
            return (
                this.state.greenIndexes.length >= this.props.list.length / 2 &&
                this.state.greenIndexes.length < this.props.list.length
            );
        }

        shouldAddBorderWidth() {
            return this.state.greenIndexes.length === this.props.list.length;
        }

        render() {
            return Array.isArray(this.props.list) ? (
                <table className={`${this.shouldAddBorder() ? 'bordered-table' : ''} ${this.shouldAddBorderWidth() ? 'bordered-table-width' : ''}`}>
                   <thead>
                      <tr>
                         <th>Type</th>
                          <th>Icon</th>
                      </tr>
                   </thead>
                   <Animals data={this.props.list} greenIndexes={this.state.greenIndexes} />
                </table>
            ) : null
        }
    }

    export default Table;

