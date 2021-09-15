import React from 'react';
import { CONSTANTS } from '../constants';

interface FilterImageProps {
    imageSource: string;
}
class FilterImage extends React.Component<FilterImageProps> {
    state = {
        filters: ['blur(4px)', 'brightness(250%)', 'contrast(180%)', 'grayscale(100%)', 'hue-rotate(180deg)', 'invert(100%)', 'opacity(50%)', 'saturate(7)', 'sepia(100%)',]
    }
    componentDidMount() {
        console.log(this.props.imageSource);

    }
    render() {
        return (
            <div className={`d-flex justify-content-around m-5 ${CONSTANTS.OPPANAI_FILTER_WRAPPER}`}>
                {this.state.filters.map((filter: string, index: number) => (
                    < img key={index} src={this.props.imageSource} alt={filter} className='btn rounded' width={70} height={70} style={{ filter: `${filter}`, width: 'fit-content' }} />
                ))}
            </div>
        )
    }
}

export default FilterImage;
