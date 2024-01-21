    import React from 'react';

    class Animals extends React.Component {
        render() {
            const {data, greenIndexes} = this.props;

            return (
                <tbody>
                    {data.map((animal, index) => (
                        <tr key={index} className={greenIndexes.includes(index) ? 'choose' : ''}>
                            <td>{animal.type}</td>
                            <td>{animal.icon}</td>
                        </tr>
                    ))}
                </tbody>
            );
        };
    }

    export default Animals;