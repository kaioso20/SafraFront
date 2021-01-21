import Button from 'react-bootstrap/Button';

import './BButton.css'

function BButton(props) {
    return (
        <div>
            <Button
                {...props}
            >
                {props.label}
            </Button>
        </div>
    )
}

BButton.defaultProps = {
    type: 'button',
    size: 'sm',
    disabled: false,
    className: 'buttonBoots',
    variant: 'primary',
    onClick: () => { }
}

export default BButton